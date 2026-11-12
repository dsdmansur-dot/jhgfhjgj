"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";
import { EditableImage } from "./EditableImage";
import { Reveal } from "./Reveal";

export function Story() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-35, 35]);

  return (
    <section className="story section" id="story" ref={ref}>
      <div className="section-heading">
        <span className="section-number">01 — MY STORY</span>
        <span className="section-aside">A work in progress, across borders</span>
      </div>
      <div className="story-grid">
        <Reveal className="story-headline">
          <h2>Some people collect<br />souvenirs. <em>I collect<br />perspectives.</em></h2>
        </Reveal>
        <Reveal className="story-intro" delay={0.1}>
          <p className="story-lead">The first trip wasn&apos;t about escaping home. It was about discovering how much more of the world could feel like one.</p>
          <ArrowDownRight size={36} strokeWidth={1} />
        </Reveal>
        <Reveal className="story-main-photo">
          <div className="image-reveal">
            <motion.div style={{ y }} className="story-image-motion">
              <EditableImage src={null} alt="A story from Mansur's travels" label="Story photograph" sizes="(max-width: 800px) 100vw, 55vw" className="object-cover" />
            </motion.div>
          </div>
          <div className="photo-meta"><span>Somewhere between home & what&apos;s next</span><span>35.6762° N, 139.6503° E</span></div>
        </Reveal>
        <Reveal className="story-body" delay={0.12}>
          <p>What began as a Work & Travel experience became a different way of seeing work, independence and myself. New jobs, unfamiliar streets, missed trains and unexpected friendships — every chapter taught me something no classroom could.</p>
          <p>Now I document the experience as it is: exciting and uncertain, beautiful and occasionally difficult. No polished fantasy. Just practical knowledge and stories that help you take your own first step.</p>
          <div className="story-places"><span>USA</span><span>TÜRKİYE</span><span>UAE</span><span>WHEREVER&apos;S NEXT</span></div>
        </Reveal>
        <Reveal className="story-small-photo">
          <EditableImage src={null} alt="A quiet moment during a journey" label="Travel detail" sizes="(max-width: 800px) 70vw, 22vw" className="object-cover" />
          <span>THE JOURNEY IS THE POINT</span>
        </Reveal>
        <Reveal className="story-quote" delay={0.1}>
          <blockquote>“Go for the experience.<br />Stay open to who you<br />become along the way.”</blockquote>
        </Reveal>
      </div>
    </section>
  );
}
