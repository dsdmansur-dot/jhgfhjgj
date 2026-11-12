import { ArrowUpRight, MessageCircle, Send } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="section-heading section-heading-light">
        <span className="section-number">07 — GET IN TOUCH</span>
        <span className="section-aside">The right conversation starts here</span>
      </div>
      <Reveal className="contact-title"><h2>Wherever you&apos;re headed,<br /><em>say hello.</em></h2></Reveal>
      <div className="contact-grid">
        <Reveal className="contact-path">
          <div className="contact-path-top"><span>01 / PERSONAL</span><MessageCircle strokeWidth={1.2} /></div>
          <h3>Questions about<br />your own journey?</h3>
          <p>For consultation requests, audience questions and personal travel conversations.</p>
          <Link href="#consultation" className="contact-link">Request a consultation <ArrowUpRight /></Link>
          <a href="https://t.me/user?id=1027733168" className="contact-link">Telegram <Send /></a>
          <span className="contact-note">WhatsApp details are shared when your consultation is confirmed.</span>
        </Reveal>
        <Reveal className="contact-path" delay={0.1}>
          <div className="contact-path-top"><span>02 / BUSINESS</span><ArrowUpRight strokeWidth={1.2} /></div>
          <h3>Have a brand story<br />to tell?</h3>
          <p>For advertising, sponsored content, employer promotion and creative collaborations.</p>
          <Link href="#inquiry" className="contact-link">Business inquiry <ArrowUpRight /></Link>
          <a href="/api/media-kit" download className="contact-link">Download media kit <ArrowUpRight /></a>
          <span className="contact-note">Replies include the relevant business email and next steps.</span>
        </Reveal>
      </div>
    </section>
  );
}
