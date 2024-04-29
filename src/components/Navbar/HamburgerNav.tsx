import { motion } from "framer-motion";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { hamburgerMotion } from "../../constants/animation";

interface HamburgerNavProps {
  show: boolean;
  closeNav: (state: boolean) => void;
}

function HamburgerNav({ show, closeNav }: HamburgerNavProps) {
  return (
    <motion.div
      variants={hamburgerMotion}
      initial="hidden"
      animate={show ? "open" : "closed"}
      className="fixed top-0 z-50 flex h-screen w-full flex-col items-center justify-center bg-black"
    >
      <ul>
        <li className="m-8 text-center font-base text-[2rem] text-golden hover:text-white">
          <a onClick={() => closeNav(false)} href="#home">
            Home
          </a>
        </li>
        <li className="m-8 text-center font-base text-[2rem] text-golden hover:text-white">
          <a onClick={() => closeNav(false)} href="#about">
            About
          </a>
        </li>
        <li className="m-8 text-center font-base text-[2rem] text-golden hover:text-white">
          <a onClick={() => closeNav(false)} href="#menu">
            Menu
          </a>
        </li>
        <li className="m-8 text-center font-base text-[2rem] text-golden hover:text-white">
          <a onClick={() => closeNav(false)} href="#awards">
            Awards
          </a>
        </li>
        <li className="m-8 text-center font-base text-[2rem] text-golden hover:text-white">
          <a onClick={() => closeNav(false)} href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <MdOutlineRestaurantMenu
        className="absolute top-5 right-5 cursor-pointer text-3xl text-golden"
        onClick={() => closeNav(false)}
      />
    </motion.div>
  );
}

export default HamburgerNav;
