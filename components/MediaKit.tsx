import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  ["Total audience", "Across all platforms"],
  ["Monthly reach", "Verified analytics only"],
  ["Average views", "Short-form video"],
  ["Engagement", "Cross-platform average"],
];

export function MediaKit() {
  return (
    <section className="media-kit section" id="media-kit">
      <div className="section-heading">
        <span className="section-number">06 — MEDIA KIT</span>
        <span className="section-aside">A transparent view of the platform</span>
      </div>
      <div className="media-kit-grid">
        <Reveal className="media-kit-copy">
          <span className="eyebrow">THE DETAILS, WHEN YOU NEED THEM</span>
          <h2>Numbers with<br /><em>context.</em></h2>
          <p>A clear overview of the audience, content performance, geography and selected collaborations. No inflated numbers. No borrowed screenshots.</p>
          <div className="media-kit-actions"><a className="button button-dark" href="/api/media-kit" download>Download media kit <ArrowDownToLine size={17} /></a><span>PDF · UPDATED WITH VERIFIED DATA</span></div>
        </Reveal>
        <Reveal className="media-stats" delay={0.1}>
          {stats.map(([label, note], index) => <div className="media-stat" key={label}><span>0{index + 1}</span><strong title="Editable placeholder">—</strong><div><h3>{label}</h3><p>{note}</p></div></div>)}
          <div className="media-demographics"><div><span>TOP GEOGRAPHIES</span><strong>Available on request</strong></div><div><span>AUDIENCE AGE</span><strong>Available on request</strong></div><div><span>PRIMARY PLATFORMS</span><strong>Instagram · TikTok · YouTube · Telegram</strong></div></div>
        </Reveal>
      </div>
    </section>
  );
}
