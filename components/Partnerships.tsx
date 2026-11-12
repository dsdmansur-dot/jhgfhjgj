"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, LoaderCircle, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { partnershipFormats } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Partnerships() {
  const [active, setActive] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("loading");
    setError("");
    try {
      const response = await fetch("/api/inquiries", { method: "POST", body: new FormData(form) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Request failed");
      setStatus("success");
      form.reset();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section className="partnerships" id="partnerships">
      <div className="partnership-intro section">
        <div className="section-heading">
          <span className="section-number">05 — WORK WITH ME</span>
          <span className="section-aside">For brands, employers & creative teams</span>
        </div>
        <Reveal className="partnership-title">
          <h2>Let&apos;s build something<br /><em>worth sharing.</em></h2>
          <div><p>Stories people trust. Content people remember.<br />Partnerships built around real experiences.</p><a className="circle-link" href="#inquiry" aria-label="Go to business inquiry form"><ArrowRight /></a></div>
        </Reveal>
        <div className="partnership-work-grid">
          <Reveal className="partnership-photo">
            <Image src="/images/partnership.jpg" alt="Creator filming a travel story outdoors" fill sizes="(max-width: 800px) 100vw, 45vw" className="object-cover" />
            <div className="partnership-photo-label"><span>BEHIND THE SCENES</span><span>REAL PLACES / REAL STORIES</span></div>
          </Reveal>
          <Reveal className="partnership-formats" delay={0.12}>
            <p className="eyebrow">WAYS TO COLLABORATE</p>
            {partnershipFormats.map((format, index) => (
              <div className={`format-item ${active === index ? "open" : ""}`} key={format.title}>
                <button onClick={() => setActive(active === index ? -1 : index)} aria-expanded={active === index}>
                  <span>{format.number}</span><strong>{format.title}</strong>{active === index ? <Minus /> : <Plus />}
                </button>
                <AnimatePresence initial={false}>
                  {active === index && (
                    <motion.div className="format-description" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }}>
                      <p>{format.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </Reveal>
        </div>
        <Reveal className="audience-strip">
          <div><span className="eyebrow">WHO THE CONTENT SPEAKS TO</span><h3>Curious minds.<br />Independent spirits.</h3></div>
          <p>People considering their first job abroad, experienced travelers looking for their next chapter, and anyone who values practical advice over polished promises.</p>
          <ul><li>Work & travel</li><li>International employers</li><li>Travel & hospitality</li><li>Education & experiences</li><li>Equipment & lifestyle</li></ul>
        </Reveal>
      </div>
      <div className="inquiry-section" id="inquiry">
        <Reveal className="inquiry-heading"><span className="eyebrow">START A CONVERSATION</span><h3>Have a story in mind?</h3><p>Tell me about your brand, your audience and what you want to create.</p></Reveal>
        <Reveal className="inquiry-form-wrap" delay={0.1}>
          {status === "success" ? (
            <div className="inquiry-success" role="status"><Check size={32} /><h4>Good things start here.</h4><p>Your inquiry has been delivered. I&apos;ll be in touch to discuss the details.</p><button className="text-link" onClick={() => setStatus("idle")}>New inquiry <ArrowUpRight size={16} /></button></div>
          ) : (
            <form className="inquiry-form" onSubmit={submit}>
              <div className="form-row two"><label>Your name *<input name="name" required minLength={2} maxLength={80} placeholder="Name" autoComplete="name" /></label><label>Company *<input name="company" required maxLength={100} placeholder="Brand or organization" autoComplete="organization" /></label></div>
              <div className="form-row two"><label>Work email *<input name="email" required type="email" maxLength={120} placeholder="you@company.com" autoComplete="email" /></label><label>Collaboration type *<select name="type" required defaultValue=""><option value="" disabled>Select a format</option>{partnershipFormats.map((format) => <option key={format.title}>{format.title}</option>)}</select></label></div>
              <label>Tell me about the project *<textarea name="message" required minLength={10} maxLength={1500} rows={3} placeholder="Goals, timing, deliverables and anything else that matters" /></label>
              <input className="honeypot" name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              {status === "error" && <p className="form-error" role="alert">{error}</p>}
              <button className="button button-light" disabled={status === "loading"}>{status === "loading" ? <>Sending <LoaderCircle className="spin" size={18} /></> : <>Send business inquiry <ArrowUpRight size={18} /></>}</button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
