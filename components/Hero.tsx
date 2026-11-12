"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Instagram, Send, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section className="hero" ref={ref}>
      <div className="hero-copy">
        <motion.div
          className="eyebrow hero-eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span>Independent Work & Travel Journal</span>
          <span>Est. 2026</span>
        </motion.div>
        <h1 className="hero-title">
          <span className="title-mask"><motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, ease }}>A life beyond</motion.span></span>
          <span className="title-mask hero-title-second"><motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.1, ease }}>the <em>familiar.</em></motion.span></span>
        </h1>
        <motion.div
          className="hero-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8, ease }}
        >
          <p>I&apos;m Mansur. I share the real side of working abroad — the jobs, the jumps, the costs, and everything you learn between.</p>
          <div className="hero-actions">
            <Link href="#journal" className="button button-dark">Explore my content <ArrowDown size={17} /></Link>
            <Link href="#partnerships" className="text-link">Business inquiries <ArrowUpRight size={17} /></Link>
          </div>
        </motion.div>
        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <span>Follow the journey</span>
          <div>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} strokeWidth={1.5} /></a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok" className="tiktok-icon">tk</a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={20} strokeWidth={1.5} /></a>
            <a href="https://telegram.org/" target="_blank" rel="noreferrer" aria-label="Telegram"><Send size={18} strokeWidth={1.5} /></a>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="hero-visual"
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        animate={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 1.2, delay: 0.15, ease }}
      >
        <motion.div className="hero-image-wrap" style={{ y: imageY }}>
          <Image src="/images/hero.jpg" alt="A traveler looking over the city" fill priority sizes="(max-width: 800px) 100vw, 48vw" className="object-cover" />
        </motion.div>
        <div className="hero-photo-top"><span>ON THE ROAD</span><span>01 / 05</span></div>
        <div className="hero-photo-caption">
          <span className="caption-line" />
          <p>Not just seeing the world.<br />Learning how to live in it.</p>
          <span>NEW YORK, USA</span>
        </div>
        <div className="hero-stamp" aria-hidden="true"><span>WORK • WANDER • REPEAT • </span><b>M</b></div>
      </motion.div>
      <div className="hero-side-note">PERSONAL STORIES / PRACTICAL GUIDES</div>
    </section>
  );
}
