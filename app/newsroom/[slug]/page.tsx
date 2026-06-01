import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="prose prose-neutral text-left mx-auto">
      <div className="flex items-baseline justify-between">
        <h1 className="font-bold text-xl">{post.title}</h1>
        <p className="text-sm text-gray-500">{post.date}</p>
      </div>

      <ReactMarkdown
        components={{
          h1: ({ children }) => <h1 className="font-normal text-xl mb-2">{children}</h1>,
          h2: ({ children }) => <h2 className="font-normal text-xl mb-2">{children}</h2>,
          p: ({ children }) => <p className="text-gray-900 mb-4 text-justify">{children}</p>,
          a: ({ href, children }) => <a href={href} className="text-blue-500 hover:underline">{children}</a>,
          ul: ({ children }) => <ul className="list-disc list-inside mb-4">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal list-inside mb-4">{children}</ol>,
          li: ({ children }) => <li className="mb-1">{children}</li>,
          code: ({ className, children, ...props }) => {
            const isBlock = /language-(\w+)/.test(className || "");
            if (!isBlock) {
              return (
                <code
                  className="bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded text-[0.85em] font-mono"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <code className={`${className ?? ""} font-mono text-sm leading-relaxed`} {...props}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-zinc-900 text-zinc-100 rounded-lg p-4 my-6 overflow-x-auto text-left text-sm ring-1 ring-zinc-800 shadow-sm">
              {children}
            </pre>
          ),
          blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic">{children}</blockquote>,
        }}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
}