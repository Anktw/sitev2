import HeadingBiggest from "../components/ui/headings/headingbiggest";
import Button1 from "../components/ui/buttons/button1";


export const metadata = {
  title: "Resume of Ankit Tiwari",
  description: "Resume of Ankit Tiwari.",
};

export default function Resume() {
  return (
    <main className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <HeadingBiggest text="Resume" />

      </div>
      <div className="rounded-lg p-10 flex items-center justify-center bg-background shadow-sm">
        <Button1
          href="/resume.pdf"
          download
          text={"Download PDF"}
        >
        </Button1>
      </div>
    </main>
  );
}
