import HeadingBiggest from "../components/ui/headings/headingbiggest";
import HeadingMain from "../components/ui/headings/headingmain";
import ResumeComp from "../components/resume";

export default function Resume() {
  return (
    <main className="px-0 md:px-5 lg:px-8">
      <HeadingMain text="Resume"/>
      <div className="bg-background min-h-screen">
        <HeadingBiggest text="Under construction"/>
      </div>
    </main>
  );
}
