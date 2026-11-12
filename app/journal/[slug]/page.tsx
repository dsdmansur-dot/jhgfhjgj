import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { articles } from "@/lib/content";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return article ? { title: `${article.title} — Mansur`, description: article.excerpt } : {};
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const next = articles[(articles.indexOf(article) + 1) % articles.length];

  return (
    <main className="article-page">
      <div className="article-page-top"><Link href="/#journal"><ArrowLeft size={16} /> Back to the journal</Link><span>MANSUR / FIELD NOTES</span></div>
      <article>
        <header className="article-header">
          <Reveal><div className="article-header-meta"><span>{article.category}</span><time dateTime={article.dateISO}>{article.date}</time><span>{article.readTime}</span></div><h1>{article.title}</h1><p>{article.excerpt}</p></Reveal>
        </header>
        <Reveal className="article-hero-image"><Image src={article.image} alt="" fill priority sizes="100vw" className="object-cover" /><div><span>{article.location}</span><span>WORDS & FIELD NOTES / MANSUR</span></div></Reveal>
        <div className="article-content">
          <aside><span>SHARE THE STORY</span><Link href={`https://t.me/share/url?url=${encodeURIComponent(`/journal/${article.slug}`)}&text=${encodeURIComponent(article.title)}`}>Telegram <ArrowRight size={14} /></Link></aside>
          <div className="article-prose"><p className="article-intro">{article.intro}</p>{article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<div className="article-end">M<span>END OF FIELD NOTE</span></div></div>
        </div>
      </article>
      <Link href={`/journal/${next.slug}`} className="next-article"><span>NEXT STORY</span><h2>{next.title}</h2><ArrowRight /></Link>
    </main>
  );
}
