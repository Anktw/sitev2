import Image from "next/image";
import Header from "./components/header";
import ProjectsComp from "./components/projectsmain";
import LoaderComp from "./components/loader";
export default function Home() {
  return ( 
    <div>
      <main className="p-0 md:p-2 lg:p-4">
        <ProjectsComp/>
      </main>
      <footer>
      </footer>
    </div>
  );
}