import { AnimatePresence, delay, motion, scale } from "framer-motion";
import ThemeButtonDecor from "./ThemeButtonDecor";
import SunIcon from "@/public/assets/sunAssets/sunButton.svg";
import MoonIcon from "@/public/assets/moonAssets/moonButton.svg";
import { useTheme } from "@/src/providers/ThemeProvider";
const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  const MoonMotion = motion.create(MoonIcon);
  const SunMotion = motion.create(SunIcon);
  return (
    <motion.div className="fixed top-1/2 right-[calc(var(--screen-padding-x)/2)] -translate-y-1/2 translate-x-1/2 h-full py-[var(--screen-padding-y)] justify-between flex flex-col">
      <ThemeButtonDecor />
      <motion.button
        type="button"
        className={`relative w-[3rem] h-[3rem] cursor-pointer opacity-[0] m-auto`}
        aria-label={`Toggle ${theme === "dark" ? "light" : "dark"} theme`}
        onClick={() => toggleTheme()}
        animate={{ opacity: 1, scale: [0.5,1] }}
        transition={{ duration: 0.25, delay: 1 }}
      >
        <motion.span
          className={`absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.75rem] h-[0.75rem] rounded-full bg-[radial-gradient(circle,_var(--primary)_25%,_var(--primary-gradient-1))]`}
          animate={
            theme === "dark"
              ? {
                  scale: [1, 2.4],
                  "--primary": ["var(--sun-cta-gradient-2)","var(--moon)"],
                  "--primary-gradient-1": [
                    "var(--sun-cta-gradient-2)","var(--moon-gradient-1)"
                  ],
                }
              : {
                  scale: [2.4, 1],
                  "--primary": ["var(--moon)","var(--sun-cta-gradient-2)"],
                  "--primary-gradient-1": [
                    "var(--moon-gradient-1)","var(--sun-cta-gradient-1)"
                  ],
                }
          }
          transition={{
            duration: 0.25,
            delay: 0.125,
          }}
        ></motion.span>
        <AnimatePresence>
          {theme === "dark" ? (
            <MoonMotion
              key="moonThemeButton"
              className="absolute left-1/2 top-[60%] -translate-1/2 w-[2.25rem] h-[2.25rem]"
              animate={{ opacity: [0, 1] }}
              exit={{ opacity: 0, transition: { delay: 0 } }}
              transition={{
                duration: 0.125,
                delay: 0.375,
              }}
            ></MoonMotion>
          ) : (
            <>
              <SunMotion
                key="sunThemeButton"
                className="absolute left-1/2 top-1/2 -translate-1/2 w-[3rem] h-auto"
                animate={{ opacity: [0, 1], scale: [0.75, 1] }}
                exit={{
                  opacity: [1, 0],
                  scale: [1, 0.75],
                  transition: { duration: 0.25, delay: 0 },
                }}
                transition={{
                  duration: 0.125,
                  delay: 0.375,
                }}
              ></SunMotion>
            </>
          )}
        </AnimatePresence>
      </motion.button>
      <ThemeButtonDecor />
    </motion.div>
  );
};
export default ThemeButton;
