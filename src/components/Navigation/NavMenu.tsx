import BurgerMenuButton from "../ui/BurgerMenuButton";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import TextReveal from "../ui/TextReveal";
const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="w-full" aria-label="Primary Navigation">
      <BurgerMenuButton setMenuOpen={setIsMenuOpen} />
      <motion.ul
        className="opacity-1 sm:opacity-100 w-full flex flex-col justify-center items-center gap-[5%]
            [--mobile-menu-scale:0.8] 
            sm:[--mobile-menu-scale:1] 
            [--mobile-menu-opacity:0] 
            sm:[--mobile-menu-opacity:1]
        "
        animate={
          isMenuOpen
            ? {
                scale: ["var(--mobile-menu-scale)", 1],
                opacity: ["var(--mobile-menu-opacity)", 1],
                top: 0,
              }
            : {
                scale: [1, "var(--mobile-menu-scale)"],
                opacity: [1, "var(--mobile-menu-opacity)"],
                top: "100%",
              }
        }
        transition={{ duration: 0.25 }}
      >
        <motion.li
          className={`relative w-full text-left text-[1.25rem] text-transparent bg-clip-text bg-[var(--text-color)] `}
        >
          <Link href="#Origin">Origin</Link>
          <TextReveal />
        </motion.li>
        <motion.li
          className={`relative w-full text-left text-[1.25rem] text-transparent bg-clip-text bg-[var(--text-color)]`}
        >
          <Link href="#Disciplines">Disciplines</Link>
          <TextReveal />
        </motion.li>
        <motion.li
          className={`relative w-full text-left text-[1.25rem] text-transparent bg-clip-text bg-[var(--text-color)]`}
        >
          <Link href="#Crafts">Crafts</Link>
          <TextReveal />
        </motion.li>
        <motion.li
          className={`relative w-full text-left text-[1.25rem] text-transparent bg-clip-text bg-[var(--text-color)]`}
        >
          <Link href="#Summon">Summon</Link>
          <TextReveal />
        </motion.li>
      </motion.ul>
    </nav>
  );
};
export default NavMenu;
