export async function generateStaticParams() {
    const res = await fetch(``);
    const blogs = await res.json();
  
    return blogs.map((blog) => ({
      title: blog.title.replace(/\s+/g, '-').toLowerCase(),
    }));
  }
  
  export default async function BlogPage({ params }) {
    const res = await fetch(`https://unkit.vercel.app/blogs.json`);
    const blogs = await res.json();
  
    const blog = blogs.find(
      (b) => b.title.replace(/\s+/g, '-').toLowerCase() === params.title
    );
  
    if (!blog) {
      return <div>Blog not found</div>;
    }
  
    return (
      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-500 mb-6">{blog.date}</p>
        <div className="prose">
          <p>{blog.description}</p>
          <p>{blog.content}</p>
          <div className="mt-4">
            {blog.categoryStack.map((category, index) => (
              <span
                key={index}
                className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 mr-2 rounded"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
  