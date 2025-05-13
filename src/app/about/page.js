import AboutMain from "../components/aboutmain";
import HeadingMain from "../components/ui/headings/headingmain";
export const metadata = {
  title: "About | Ankit Tiwari",
  description: "About Ankit Tiwari.",
}
export default function About() {
  return (
    <main>
      <HeadingMain text="About me"/>
      <AboutMain/>
    </main>
  )
}