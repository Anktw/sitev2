"use client"

import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css"
import LoadingBar from "./loader"

// Set the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default function ResumeViewer() {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setIsLoading(false)
    setError(false)
  }

  function onDocumentLoadError() {
    setIsLoading(false)
    setError(true)
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset)
  }

  function previousPage() {
    if (pageNumber > 1) {
      changePage(-1)
    }
  }

  function nextPage() {
    if (numPages && pageNumber < numPages) {
      changePage(1)
    }
  }

  return (
    <div className="flex flex-col items-center p-4">
      {isLoading && (
        <div className="flex items-center justify-center min-h-[500px]">
          <LoadingBar/>
        </div>
      )}

      {error ? (
        <div className="flex flex-col items-center justify-center min-h-[500px] max-w-md mx-auto text-center">
          
          <h3 className="text-xl font-bold mb-2">Failed to load PDF</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            The resume PDF could not be loaded due to browser&apos;s incompatibility. Please try downloading it directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground dark:bg-foreground dark:text-background dark:hover:bg-background"
            >
              Download PDF
            </a>
          </div>
        </div>
      ) : (
        <Document
          file="/resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={<LoadingBar/>}
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

      {numPages && numPages > 1 && !error && (
        <div className="mt-4 flex items-center gap-4">
          <button
            onClick={previousPage}
            disabled={pageNumber <= 1}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white text-sm font-medium shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-900 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-100"
          >
            
            <span className="sr-only">Previous page</span>
          </button>

          <p className="text-sm text-slate-600 dark:text-slate-400">
            Page {pageNumber} of {numPages}
          </p>

          <button
            onClick={nextPage}
            disabled={numPages !== null && pageNumber >= numPages}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white text-sm font-medium shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-900 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-100"
          >
            
            <span className="sr-only">Next page</span>
          </button>
        </div>
      )}
    </div>
  )
}
