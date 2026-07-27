import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetail from "./BlogDetail";
import { blogs, getBlogBySlug } from "@/data/blogs";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};

  return {
    title: blog.metaTitle + " | Dwell Rich Designz",
    description: blog.metaDescription,
    keywords: [
      blog.primaryKeyword,
      "design and build company",
      "residential design and build",
      "interior design London",
      "home renovation South London",
    ],
    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      type: "article",
      publishedTime: blog.publishedAt,
      authors: [blog.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  const faqItems = blog.content
    .filter((b) => b.type === "faq-question")
    .map((b) => ({
      "@type": "Question",
      name: b.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: b.answer,
      },
    }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.metaDescription,
    author: {
      "@type": "Organization",
      name: blog.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Dwell Rich Designz",
    },
    datePublished: blog.publishedAt,
    image: blog.imageAlt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://designz.dwell-rich.com/blog/${blog.slug}/`,
    },
    ...(faqItems.length > 0 && {
      FAQPage: {
        "@type": "FAQPage",
        mainEntity: faqItems,
      },
    }),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://designz.dwell-rich.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://designz.dwell-rich.com/blog/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: `https://designz.dwell-rich.com/blog/${blog.slug}/`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Breadcrumbs */}
      <div className="max-w-[1100px] mx-auto px-4 pt-32 md:pt-48 pb-4">
        <nav className="flex items-center gap-2.5 text-sm text-gray-500">
          <a href="/" className="hover:text-black transition-colors">
            Home
          </a>
          <span className="text-gray-300">/</span>
          <a href="/blog/" className="hover:text-black transition-colors">
            Blog
          </a>
          <span className="text-gray-300">/</span>
          <span className="text-black font-medium">
            <span className="hidden md:inline">{blog.title}</span>
            <span className="md:hidden">
              {blog.title.split(" ").slice(0, 5).join(" ")}
              {blog.title.split(" ").length > 5 ? "..." : ""}
            </span>
          </span>
        </nav>
      </div>

      <BlogDetail blog={blog} />
    </>
  );
}
