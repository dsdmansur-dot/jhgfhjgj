"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { articles } from "@/lib/content";
import { Reveal } from "./Reveal";

const categories = ["All stories", ...new Set(articles.map((article) => article.category))];

export function Journal() {
  const [category, setCategory] = useState("All stories");
  const filtered = category === "All stories" ? articles : articles.filter((article) => article.category === category);

  return (
    <section className="journal section" id="journal">
      <div className="section-heading">
        <span className="section-number">03 — THE JOURNAL</span>
        <span className="section-aside">Notes worth packing</span>
      </div>
      <Reveal className="journal-heading-row">
        <h2>Stories from<br /><em>somewhere new.</em></h2>
        <p>Field notes and useful guides about work, money and finding your feet in a different country.</p>
      </Reveal>
      <Reveal className="journal-filters">
        <div role="group" aria-label="Filter articles by category">
          {categories.map((item) => (
            <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</button>
          ))}
        </div>
        <span>{String(filtered.length).padStart(2, "0")} STORIES</span>
      </Reveal>
      <motion.div layout className={`journal-grid ${filtered.length === 1 ? "single" : ""}`}>
        <AnimatePresence mode="popLayout">
          {filtered.map((article, index) => (
            <motion.article
              layout
              key={article.slug}
              className={`article-card article-card-${index + 1}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45 }}
            >
              <Link href={`/journal/${article.slug}`} className="article-image">
                <Image src={article.image} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" className="object-cover" />
                <span className="article-read">Read story <ArrowUpRight size={16} /></span>
              </Link>
              <div className="article-info">
                <div className="article-meta"><span>{article.category}</span><span>{article.readTime}</span></div>
                <h3><Link href={`/journal/${article.slug}`}>{article.title}</Link></h3>
                <p>{article.excerpt}</p>
                <div className="article-bottom"><time dateTime={article.dateISO}>{article.date}</time><Link href={`/journal/${article.slug}`} aria-label={`Read ${article.title}`}><ArrowRight /></Link></div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
