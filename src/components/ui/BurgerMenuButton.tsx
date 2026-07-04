import { button, pre } from "framer-motion/client";

interface BurgerMenuButtonProps {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const BurderMenuButton = ({setMenuOpen}:BurgerMenuButtonProps ) => {
  return(
  <button className="absolute top-[1.25rem] left-[2rem] sm:hidden w-[3rem] h-[3rem] flex flex-col justify-center items-center gap-[0.25rem]" type='button' aria-label='Toggle Primary Navigation' onClick={() => setMenuOpen(prev => !prev)}>
    <span className="w-[1.5rem] h-[0.25rem] bg-white"></span>
    <span className="w-[1.5rem] h-[0.25rem] bg-white"></span>
    <span className="w-[1.5rem] h-[0.25rem] bg-white"></span>
  </button>
  )
};
export default BurderMenuButton;
