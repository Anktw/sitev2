import Image from "next/image";
import Header from "./components/header";
import Projects from "./components/projects";
export default function Home() {
  return ( 
    <div>
      <Header />
      <main className="md:p-5 p-0">
        <Projects/>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}