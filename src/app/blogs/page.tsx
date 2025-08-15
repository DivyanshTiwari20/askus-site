import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import Image from 'next/image';

const BlogsPage = () => {
  const postsDirectory = path.join(process.cwd(), 'src', 'data');
  const filenames = fs.readdirSync(postsDirectory);

  const blogs = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: filename.replace(/\.mdx$/, ''),
      title: data.title,
      image: data.image || '/blog-img.jpg', // fallback image
    };
  });

  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl my-14">
      {/* <h1 className="text-4xl font-bold mb-10 text-gray-900">Blogs</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-9">
        {blogs.map(blog => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="group bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48 w-full">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm">
                A short description or excerpt could go here to attract readers.
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
