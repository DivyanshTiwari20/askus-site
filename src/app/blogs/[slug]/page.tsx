import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

// Generate static params for SSG
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "src", "data"));

  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  const filePath = path.join(process.cwd(), "src", "data", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    // Optional: trigger a 404 page
    // notFound(); // import { notFound } from "next/navigation";
    throw new Error(`Blog post not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-3 text-gray-900">{data.title}</h1>

      {/* Date */}
      <p className="text-gray-500 text-sm mb-10 border-b border-gray-200 pb-4">
        {data.date}
      </p>

      {/* Blog Content */}
      <article className="prose prose-lg lg:prose-xl max-w-none prose-img:rounded-xl prose-headings:scroll-mt-20 prose-a:text-blue-600 hover:prose-a:text-blue-800">
        <MDXRemote source={content} />
      </article>
    </div>
  );
}
