import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { promises as fs } from "fs";
import path from "path";
import grayMatter from "gray-matter";

const dateOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog | Spotlight Media</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      {/* Full Screen Header */}
      <div className="relative z-0 w-full pt-24 text-white bg-cover bg-home-header">
        {/* Hero Text Wrapper */}
        <div className="z-20 flex flex-col items-start justify-center py-12">
          <div className="container z-20 mx-auto motion-safe:animate-fadeSlideUp">
            <h6 className="z-20 font-normal tracking-wider text-left text-gray-500 uppercase">
              What We're up to
            </h6>

            <h1 className="z-20 w-4/5 leading-tight text-left text-white">
              Blog
            </h1>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="relative w-full bg-gray-100">
        <div className="container py-16 mx-auto text-left">
          <div className="flex flex-wrap items-stretch justify-between xs:mx-4">
            {posts.map((post) => {
              return (
                <div
                  className="flex flex-col w-full mb-8 bg-white shadow-sm sm:w-48pc lg:w-32pc"
                  key={post.path}
                >
                  <Link href={post.path}>
                    <a>
                      <Image src={post.img} width={1080} height={680} />
                    </a>
                  </Link>

                  <div className="flex flex-col flex-grow px-6 py-4">
                    <Link href={post.path}>
                      <a>
                        <h5>{post.title}</h5>
                      </a>
                    </Link>

                    <p className="mt-2 mb-2">
                      Posted by <strong>{post.author}</strong> on{" "}
                      <strong>
                        {new Date(
                          `${post.date}`.replace(/-/g, "/")
                        ).toLocaleDateString("en-US", dateOptions)}
                      </strong>
                    </p>

                    <hr className="w-1/3 h-1 my-3 border-0 bg-yellow" />

                    <p className="mt-3 mb-auto">
                      {post.excerpt.substring(0, 200)}
                    </p>

                    <Link href={post.path}>
                      <a className="self-start mt-6 btn-yellow-2-sm">
                        Read more
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "pages/posts");
  const filenames = await fs.readdir(postsDirectory);

  const files = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const content = await fs.readFile(filePath, "utf8");
      const matter = grayMatter(content);
      return {
        filename,
        matter,
        content,
      };
    })
  );

  const posts = files.map((file) => {
    return {
      path: `/posts/${file.filename.replace(".mdx", "")}`,
      title: file.matter.data.title,
      date: file.matter.data.date,
      img: file.matter.data.img,
      excerpt: file.matter.data.excerpt,
      author: file.matter.data.author,
      profilePicture: file.matter.data.profilePicture,
      // content: file.matter.content
    };
  });
  return {
    props: {
      posts,
    },
  };
}
