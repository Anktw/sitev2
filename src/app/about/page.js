import AboutMain from "../components/aboutmain";
import HeadingMain from "../components/headings/headingmain";

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
