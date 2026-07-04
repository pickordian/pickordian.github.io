"use client";
import {useTheme} from "next-themes";
import { motion } from "framer-motion";
import BannerFrame from "@/public/assets/bannerFrame.svg";
import SunEmblemI from "@/public/assets/sunAssets/sunEmblem.svg";
import MoonEmblemI from "@/public/assets/moonAssets/moonEmblem.svg";
interface TitleBannerProps {
  className?: string;
  title: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const TitleBannner = ({ className, title, level = 1 }: TitleBannerProps) => {
  const HeadingTag = `h${level}` as keyof React.JSX.IntrinsicElements;
  const Frame = motion.create(BannerFrame);
  const MoonEmblem = motion.create(MoonEmblemI);
  const SunEmblem = motion.create(SunEmblemI);
  const { theme, setTheme } = useTheme();
  return (
    <HeadingTag
      className={`relative w-full inline-block py-[1.5em] sm:py-[3em] px-[2em] sm:px-[4em] ${className}`}
    >
      {title}
      {theme === "dark" ? (
        <MoonEmblem
          className="absolute w-[2em] top-[19%] left-1/2 -translate-x-1/2"
          animate={{ opacity: [0.5, 1]}}
          transition={{ duration: 0.5 }}
        />
      ) : (
        <SunEmblem
          className="absolute w-[2em] top-[19%] left-1/2 -translate-x-1/2"
          animate={{ opacity: [0.5, 1]}}
          transition={{ duration: 0.5 }}
        />
      )}
      <Frame className="absolute top-0 left-0 -z-1 w-full h-full" />
    </HeadingTag>
  );
};
export default TitleBannner;
