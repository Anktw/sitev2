import ProjectsMain from "./components/projectmain";
import HeadingHome from "./components/headings/headinghome";
import GoToBtnHome from "./components/gotobtnshome";
import BlogsMain from "./components/blogmain";
import TopBtnsHome from "./components/hometopbtn";
export default function Home() {
  return (
    <div>
      <main className="px-0 md:px-3 lg:px-5 m-1 md:m-4 ">
        <TopBtnsHome/>
        <HeadingHome text="Recent Projects"/>
        <ProjectsMain />
        <GoToBtnHome />
        <HeadingHome text="Recent Blogs" />
        <BlogsMain />
      </main>
      <footer></footer>
    </div>
  );
}
