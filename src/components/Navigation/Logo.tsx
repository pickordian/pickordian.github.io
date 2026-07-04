import logoSVG from "@/public/assets/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
function Logo() {
  const LogoMotion = motion.create(logoSVG);
  return (
    <Link
      href="/"
      className=""
      aria-label="Back to Home"
    >
      <LogoMotion className="w-[2.5rem]"></LogoMotion>
    </Link>
  );
}

export default Logo;
