"use client";
import { motion } from "framer-motion";

function TextReveal({
  delay = 0,
  angle = 90,
  duration = 0.25,
}: {
  delay?: number;
  angle?: number;
  duration?: number;
}) {
  return (
    <div className="absolute top-0 left-0 w-full h-full [--firstStop:0%] [--secondStop:0%] [--thirdStop:0%] [--anglel:90]" aria-hidden="true">
      <motion.div
        className={`h-full bg-[linear-gradient(var(--angle)deg,_transparent_var(--firstStop),_var(--shade)_var(--secondStop),_var(--background)_var(--thirdStop),_var(--background))]`}
        animate={{
          "--firstStop": ["0%", "100%"],
          "--secondStop": ["0%", "100%"],
          "--thirdStop": ["0%", "100%"],
          "--angle:": angle
        }}
        transition={{
          "--firstStop": { duration: duration, ease: "easeIn", delay: delay },
          "--secondStop": { duration: Math.max(duration*0.8, duration-0.25) , ease: "easeOut", delay: delay },
          "--thirdStop": { duration: Math.max(duration*0.6, duration-0.5), ease: "easeOut", delay: delay },
          "--angle": {duration: 0}
        }}
      ></motion.div>
    </div>
  );
}

export default TextReveal;
