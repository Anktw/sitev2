import Image from "next/image";
import Header from "./components/header";
import Projects from "./components/projects";
export default function Home() {
  return ( 
    <div>
      <Header />
      <main className="p-0 md:p-2 lg:p-4">
        <Projects/>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}