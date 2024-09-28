import Image from "next/image";
import Header from "./components/header";
import BurgerMenu from "./components/BurgerMenu";
export default function Home() {
  return ( 
    <div>
      <Header />
      <main>
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}