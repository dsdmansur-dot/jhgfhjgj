"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { Reveal } from "./Reveal";

export function Consultation() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("loading");
    setError("");
    try {
      const response = await fetch("/api/consultations", { method: "POST", body: new FormData(form) });
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
    <section className="consultation section" id="consultation">
      <div className="section-heading section-heading-light">
        <span className="section-number">04 — ONE-TO-ONE</span>
        <span className="section-aside">Your next chapter, with a clearer plan</span>
      </div>
      <div className="consultation-grid">
        <Reveal className="consultation-copy">
          <span className="consultation-kicker">PERSONAL CONSULTATION</span>
          <h2>Planning to<br />work <em>abroad?</em></h2>
          <p>Skip the generic advice. Bring your questions, your situation and your destination ideas. We&apos;ll turn them into practical next steps.</p>
          <ul>
            <li><span>01</span>Understand your options</li>
            <li><span>02</span>Build a realistic budget</li>
            <li><span>03</span>Prepare with confidence</li>
          </ul>
          <small>Your request goes directly to my private Telegram. I&apos;ll reply using the contact you provide.</small>
        </Reveal>
        <Reveal className="consultation-form-wrap" delay={0.12}>
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div className="form-success" key="success" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
                <span><Check size={34} /></span>
                <p className="eyebrow">REQUEST DELIVERED</p>
                <h3>Your next chapter<br />just got closer.</h3>
                <p>Thank you. Your request is now in my Telegram, and I&apos;ll get back to you personally.</p>
                <button className="text-link" onClick={() => setStatus("idle")}>Send another request <ArrowRight size={16} /></button>
              </motion.div>
            ) : (
              <motion.form key="form" className="consultation-form" onSubmit={submit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="form-top"><span>REQUEST A CONSULTATION</span><span>ALL FIELDS MARKED * ARE REQUIRED</span></div>
                <div className="form-row two">
                  <label>Full name *<input name="name" type="text" placeholder="Your name" minLength={2} maxLength={80} required autoComplete="name" /></label>
                  <label>Age *<input name="age" type="number" placeholder="18" min={16} max={80} required /></label>
                </div>
                <div className="form-row two">
                  <label>Country of residence *<input name="residence" type="text" placeholder="Where you live now" maxLength={100} required autoComplete="country-name" /></label>
                  <label>Preferred destination *<input name="destination" type="text" placeholder="Country or region" maxLength={100} required /></label>
                </div>
                <label>Interested program *
                  <select name="program" required defaultValue="">
                    <option value="" disabled>Select a program</option>
                    <option>Work & Travel USA</option>
                    <option>Seasonal work abroad</option>
                    <option>Internship abroad</option>
                    <option>Not sure — need guidance</option>
                  </select>
                </label>
                <label>Phone / WhatsApp *<input name="phone" type="tel" placeholder="+1 555 000 0000" pattern="[+0-9][0-9\s()\-]{6,24}" title="Use a valid phone number, including country code" required autoComplete="tel" /></label>
                <label>Anything you&apos;d like me to know?<textarea name="message" placeholder="Your experience, questions, timing, or anything else" rows={3} maxLength={1200} /></label>
                <input className="honeypot" name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                {status === "error" && <p className="form-error" role="alert">{error}</p>}
                <div className="form-submit">
                  <p>By sending, you agree to be contacted about this request.</p>
                  <button className="button button-accent" type="submit" disabled={status === "loading"}>
                    {status === "loading" ? <>Sending <LoaderCircle className="spin" size={18} /></> : <>Request a consultation <ArrowRight size={18} /></>}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
