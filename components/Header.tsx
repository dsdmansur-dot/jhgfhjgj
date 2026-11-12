"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  ["Story", "/#story"],
  ["Journal", "/#journal"],
  ["Consultations", "/#consultation"],
  ["Partnerships", "/#partnerships"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Mansur home">
          <span className="brand-mark">M</span>
          <span className="brand-copy">WORK & TRAVEL<br />JOURNAL</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([label, href]) => (
            <Link key={label} href={href}>{label}</Link>
          ))}
        </nav>
        <Link href="/#contact" className="header-contact">
          Let&apos;s talk <ArrowUpRight size={16} strokeWidth={1.7} />
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav aria-label="Mobile navigation">
              {nav.map(([label, href], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16 + index * 0.06 }}
                >
                  <Link href={href} onClick={() => setOpen(false)}>
                    <span>0{index + 1}</span>{label}<ArrowUpRight />
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mobile-menu-foot">
              <p>Real experience. Useful stories.<br />A bigger view of the world.</p>
              <Link href="/#partnerships" onClick={() => setOpen(false)}>Business inquiries</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
