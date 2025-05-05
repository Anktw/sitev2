import HeadingBiggest from "../components/ui/headings/headingbiggest";
import ResumeComp from "../components/resume"
export const metadata = {
  title: "Resume of Ankit Tiwari",
  description: "Resume of Ankit Tiwari.",
};

export default function Resume() {
  return (
    <main className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <HeadingBiggest text="Resume"/>
        <a
          href="/Ankit_Tiwari_Resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
        >
          Download PDF
        </a>
      </div>

      <div className="rounded-lg border bg-background shadow-sm">
        <ResumeComp/>
      </div>
    </main>
  );
}
