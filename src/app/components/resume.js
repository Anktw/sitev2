"use client"

import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css"
import LoadingBar from "./loader"
import Button1 from "./ui/buttons/button1"

// Set the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default function ResumeViewer({ file = "/resume.pdf", initialPage = 1 }) {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(initialPage)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setIsLoading(false)
    setError(false)
    setPageNumber(initialPage > numPages ? numPages : initialPage)
  }

  function onDocumentLoadError() {
    setIsLoading(false)
    setError(true)
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => {
      const nextPage = prevPageNumber + offset
      if (nextPage < 1) return 1
      if (numPages && nextPage > numPages) return numPages
      return nextPage
    })
  }

  function previousPage() {
    changePage(-1)
  }

  function nextPage() {
    changePage(1)
  }

  return (
    <div className="flex flex-col items-center p-4">
      {isLoading && (
        <div className="flex items-center justify-center min-h-[500px]">
          <LoadingBar />
        </div>
      )}

      {error ? (
        <div className="flex flex-col items-center justify-center min-h-[500px] max-w-md mx-auto text-center">
          <h3 className="text-xl font-bold mb-2">Failed to load PDF</h3>
          <p className="mb-6">
            The resume PDF could not be loaded due to browser&apos;s incompatibility. Please try downloading it directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button1 href={file} download text={"Download PDF"}/>
          </div>
        </div>
      ) : (
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={<LoadingBar />}
          className="max-w-full"
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            className="shadow-md"
            width={Math.min(typeof window !== "undefined" ? window.innerWidth - 32 : 800, 800)}
          />
        </Document>
      )}
    </div>
  )
}
