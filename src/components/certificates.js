import Image from "next/image"
import Link from "next/link"

export default function CertificatesComp({ certificates = [] }) {
  if (!certificates.length) {
    return (
      <div className="text-lg">No certificates found.</div>
    )
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6 md:my-8 lg:my-10 animate-fadeInUp p-2 md:px-5 lg:px-8">
        {certificates.map(cert => (
          <div key={cert.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <Link href={cert.img} target="_blank">
              <Image
                src={cert.img}
                alt={cert.desc}
                className="w-full h-48 object-contain mb-3 rounded-md cursor-pointer"
                loading="lazy"
                width={800}
                height={450}
              />
              <div className="text-base font-medium mt-2">{cert.desc}</div>
            </Link>
          </div>
        ))}
    </div>
  )
}