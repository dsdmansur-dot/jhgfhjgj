import { ArrowUpRight, Instagram, Send, Youtube } from "lucide-react";
import { socials } from "@/lib/content";
import { EditableImage } from "./EditableImage";
import { Reveal } from "./Reveal";

const icons = [Instagram, null, Youtube, Send];

export function Social() {
  return (
    <section className="social-section section">
      <div className="section-heading section-heading-light">
        <span className="section-number">02 — THE SOCIAL WORLD</span>
        <span className="section-aside">Different formats. One ongoing story.</span>
      </div>
      <Reveal className="social-title-row">
        <h2>Follow the <em>in-between.</em></h2>
        <p>The useful details, unfiltered moments and longer stories that don&apos;t always make it onto the website.</p>
      </Reveal>
      <div className="social-list">
        {socials.map((social, index) => {
          const Icon = icons[index];
          return (
            <Reveal key={social.name} delay={index * 0.04}>
              <a className={`social-row ${social.className}`} href={social.url} target="_blank" rel="noreferrer">
                <span className="social-index">0{index + 1}</span>
                <span className="social-icon">{Icon ? <Icon strokeWidth={1.4} /> : <b>tk</b>}</span>
                <span className="social-name">{social.name}<small>{social.handle}</small></span>
                <span className="social-preview"><EditableImage src={social.image} alt={`${social.name} content preview`} label="Content preview" sizes="180px" className="object-cover" /></span>
                <span className="social-metric"><small>{social.metric} · data on request</small><strong title="Editable placeholder">{social.value}</strong></span>
                <span className="social-arrow"><ArrowUpRight strokeWidth={1.3} /></span>
              </a>
            </Reveal>
          );
        })}
      </div>
      <p className="data-note">Audience figures are intentionally shown as placeholders until verified analytics are connected.</p>
    </section>
  );
}
