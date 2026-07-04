'use client';
import { motion } from "framer-motion";
import PrimeHeader from "../components/Navigation/PrimeHeader";
import Landing from "@/src/components/Body/Landing";
import Origin from "@/src/components/Body/Origin";
import LandingFrame from "@/src/components/ui/LandingFrame";
import TextReveal from "../components/ui/TextReveal";
import TextClipReveal from "../components/ui/TextClipReveal";
export default function Home() {
  return (
    <>
      <LandingFrame />
      <PrimeHeader />
      {/* <div className="absolute top-1/2 left-1/2 -translate-1/2 text-[2rem]">What do I want to do with life; I don't know, how to life without hope, without purpose
      <TextReveal duration={5} angle={90}/>
      </div> */}
      <div className="absolute top-1/2 left-1/2 -translate-1/2">
      <TextClipReveal duration={50}>
              <div>What do I want to do with life; I don't know, how to life without hope, without purpose</div>
      </TextClipReveal>
      </div>
      {/* <Landing/>
      <Origin/> */}
      
    </>
  );
}
