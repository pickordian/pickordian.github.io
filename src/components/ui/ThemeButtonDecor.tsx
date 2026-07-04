import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/src/providers/ThemeProvider";
import Chain from "@/public/assets/themeButtonChain.svg";
import moonMedal from "@/public/assets/moonAssets/moonButtonMedal.svg";
import sunMedal from "@/public/assets/sunAssets/sunButtonMedal.svg";
const ThemeButtonDecor = () => {
  const { theme } = useTheme();
  const ChainMotion = motion.create(Chain);
  const MoonMedalMotion = motion.create(moonMedal);
  const SunMedalMotion = motion.create(sunMedal);
  return (
    <motion.div className="relative h-[calc((100%-5rem)/2)] flex flex-col justify-between gap-[0.5rem] opacity-[0.25]">
      <ChainMotion className="h-[30%]"/>
      <AnimatePresence>
        {theme === "dark" ? (
          <MoonMedalMotion
            key="moonMedal"
            className="absolute top-1/2 left-1/2 -translate-1/2 h-[30%]"
          />
        ) : (
          <SunMedalMotion
            className="absolute top-1/2 left-1/2 -translate-1/2 h-[30%]"
            key="sunMedal"
          />
        )}
      </AnimatePresence>
      <ChainMotion className="h-[30%] rotate-180" />
    </motion.div>
  );
};
export default ThemeButtonDecor;
