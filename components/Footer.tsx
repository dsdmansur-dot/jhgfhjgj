import { ArrowUp } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top"><Link href="/" className="footer-logo">MANSUR<span>®</span></Link><a href="#top" className="back-to-top">Back to top <ArrowUp size={18} /></a></div>
      <div className="footer-bottom"><span>WORK & TRAVEL JOURNAL</span><span>REAL EXPERIENCE. BIGGER PERSPECTIVE.</span><span>© {new Date().getFullYear()} MANSUR</span></div>
    </footer>
  );
}
