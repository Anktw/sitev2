import Image from "next/image";
import Header from "./components/header";
import Projects from "./components/projects";
export default function Home() {
  return ( 
    <div>
      <Header />
      <main className="p-5">
        <Projects/>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}