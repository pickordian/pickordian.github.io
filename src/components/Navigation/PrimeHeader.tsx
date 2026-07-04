'use client'
import ThemeButton from "@/src/components/ui/ThemeButton";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
const PrimeNav = () => {
  return (
    <header className="fixed top-1/2 left-[calc(var(--frame-padding)/2)] w-full flex flex-col">
      <Logo/>
      <NavMenu/>
      <ThemeButton />
    </header>
  );
};

export default PrimeNav;
