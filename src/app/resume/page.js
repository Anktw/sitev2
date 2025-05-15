import HeadingBiggest from "@/components/ui/headings/headingbiggest"
import Button1 from "@/components/ui/buttons/button1"


export const metadata = {
  title: "Resume of Ankit Tiwari",
  description: "Resume of Ankit Tiwari.",
}

export default function Resume() {
  return (
    <main>
        <HeadingBiggest text="Resume" />
      <div className="rounded-lg p-10 flex items-center justify-center bg-background shadow-sm">
        <Button1
          href="/resume.pdf"
          download
          text={"Download PDF"}
        />
      </div>
    </main>
  );
}
