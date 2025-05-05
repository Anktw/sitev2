import Blogs from "../components/blog";
export const metadata = {
  title: "Blogs | Ankit Tiwari",
  description: "Blogs by Ankit Tiwari.",
};
export default function BlogPage() {
  return (
    <main className="px-0 md:px-3 lg:px-5 m-1 md:m-4 ">
        <Blogs/>
      </main>
  );
}