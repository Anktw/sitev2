import AboutMain from "../components/aboutmain";
import HeadingMain from "../components/ui/headings/headingmain";

export const metadata = {
  title: "About | Ankit Tiwari",
  description: "About Ankit Tiwari.",
}

export default function About() {
  return (
    <main className="px-0 md:px-5 lg:px-8">
      <HeadingMain text="About me"/>
      <AboutMain/>
      <div>
      </div>
    </main>
  )
}
