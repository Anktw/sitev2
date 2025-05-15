import ProjectsMain from "../components/projects/projectmain";
import HeadingHome from "../components/ui/headings/headinghome";
import GoToBtnHome from "../components/gotobtnshome";
import BlogsMain from "../components/blogmain";
import TopBtnsHome from "../components/hometopbtn";
import AboutMain from "../components/about";
import CertificatesComp from "../components/certificates";
import CertificatesBtn from "../components/ui/buttons/Certificatebtn";
import fs from "fs";
import path from "path";

async function getRecentCertificates() {
  const filePath = path.join(process.cwd(), "public", "certificates.json");
  const data = fs.readFileSync(filePath, "utf-8");
  const certs = JSON.parse(data);
  return certs.sort((a, b) => b.id - a.id).slice(0, 3);
}

export default async function Home() {
  const recentCertificates = await getRecentCertificates();
  return (
    <div>
      <main className="px-2 md:px-3 lg:px-5 m-1 md:m-4 ">
        <TopBtnsHome />
        <HeadingHome text="Recent Projects" />
        <ProjectsMain />
        <GoToBtnHome />
        <HeadingHome text="Recent Blogs" />
        <BlogsMain />
        <HeadingHome text="About me" />
        <AboutMain />
        <HeadingHome text="Recent Certificates" />
        <CertificatesComp certificates={recentCertificates} />
        <div className="flex justify-center m-4">
          <CertificatesBtn />
        </div>
      </main>
    </div>
  );
}

export const metadata = {
  title: "Homepage | Ankit Tiwari",
  description: "Homepage of Ankit Tiwari.",
};