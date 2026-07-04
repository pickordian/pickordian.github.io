import { ReactNode } from "react";
import { motion } from "framer-motion";
const TextClipReveal = ({
  children,
  delay = 0,
  angle = 90,
  duration = 0.25,
}: {
  children: ReactNode;
  delay?: number;
  angle?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      className="[--firstStop:0%] [--secondStop:0%] [--thirdStop:0%] bg-[linear-gradient(90deg,_transparent_var(--firstStop),_var(--text-color)_var(--secondStop),_var(--background)_var(--thirdStop),_var(--background))] bg-clip-text text-transparent"
      animate={{
        "--firstStop": ["0%", "100%"],
        "--secondStop": ["0%", "100%"],
        "--thirdStop": ["0%", "100%"],
      }}
      transition={{
        "--firstStop": { duration: duration, ease: "easeIn", delay: delay },
        "--secondStop": {
          duration: Math.max(duration * 0.8, duration - 0.25),
          ease: "easeOut",
          delay: delay,
        },
        "--thirdStop": {
          duration: Math.max(duration * 0.6, duration - 0.5),
          ease: "easeOut",
          delay: delay,
        },
        "--angle": { duration: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default TextClipReveal;
