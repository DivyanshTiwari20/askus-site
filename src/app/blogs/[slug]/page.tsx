import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src', 'data'));

  return files.map(filename => ({
    slug: filename.replace('.mdx', ''),
  }));
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'src', 'data', `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-500 mb-8">{data.date}</p>
      <div className="prose lg:prose-xl">
        <MDXRemote source={content} />
      </div>
    </div>
  );
};

export default BlogPostPage;
