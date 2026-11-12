import { Consultation } from "@/components/Consultation";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Journal } from "@/components/Journal";
import { MediaKit } from "@/components/MediaKit";
import { Partnerships } from "@/components/Partnerships";
import { Social } from "@/components/Social";
import { Story } from "@/components/Story";

export default function Home() {
  return <main><Hero /><Story /><Social /><Journal /><Consultation /><Partnerships /><MediaKit /><Contact /></main>;
}
