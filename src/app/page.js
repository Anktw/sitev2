import ProjectsMain from "./components/projectmain";
import HeadingHome from "./components/headings/headinghome";
import GoToBtnHome from "./components/gotobtnshome";
import BlogsMain from "./components/blogmain";
import TopBtnsHome from "./components/hometopbtn";
import AboutMain from "./components/aboutmain";
import { DiscontinuationNotice } from "./components/discontinue-notice";
export default function Home() {
  return (
    <div>
      <main className="px-2 md:px-3 lg:px-5 m-1 md:m-4 ">
        <DiscontinuationNotice/>
        <TopBtnsHome/>
        <HeadingHome text="Recent Projects"/>
        <ProjectsMain />
        <GoToBtnHome />
        <HeadingHome text="Recent Blogs" />
        <BlogsMain />
        <HeadingHome text="About me"/>
        <AboutMain/>
      </main>
      <footer></footer>
    </div>
  );
}
export const metadata = {
  title: "Homepage | Ankit Tiwari",
  description: "Homepage of Ankit Tiwari.",
};