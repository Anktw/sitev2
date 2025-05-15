import CertificatesComp from "@/components/certificates"
import fs from "fs"
import path from "path"
import HeadingMain from "@/components/ui/headings/headingmain"

export const metadata = {
  title: "Certificates | Ankit Tiwari",
  description: "All certificates of Ankit Tiwari.",
}
async function getAllCertificates() {
  const filePath = path.join(process.cwd(), "public", "certificates.json")
  const data = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(data)
}
export default async function CertificatesPage() {
  const certificates = await getAllCertificates()
  return (
    <main>
      <HeadingMain text="All Certificates"/>
      <CertificatesComp certificates={certificates} />
    </main>
  )
}