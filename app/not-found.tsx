import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><span>404 / OFF THE MAP</span><h1>This road doesn&apos;t<br /><em>lead anywhere.</em></h1><p>The page may have moved, but the journey continues.</p><Link className="button button-dark" href="/"><ArrowLeft size={17} /> Back to the journal</Link></main>;
}
