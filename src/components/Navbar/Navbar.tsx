import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import images from "../../constants/images";
import ArrowUp from "./ArrowUp";
import HamburgerNav from "./HamburgerNav";
import ScrollProgressBar from "./ScrollProgressBar";

function Navbar() {
  const [showHamburgerNav, setShowHamburgerNav] = useState<boolean>(false);
  const [userScroll, setUserScroll] = useState<boolean>(false);

  // window event to notice user scroll
  document.addEventListener("scroll", (e: any) => {
    // get the current window offset in Y coordinate
    const windowScroll = window.scrollY;
    if (windowScroll > 65) {
      return setUserScroll(true);
    }

    setUserScroll(false);
  });

  return (
    <>
      <section
        className={`fixed top-0 z-40 w-full border-b-[1px] border-slate-600 py-4 px-8 ${
          userScroll ? "bg-black/[.65] backdrop-blur-sm" : "bg-black"
        }`}
      >
        <div className="flex items-center justify-between">
          <img src={images.gericht} className="w-[110px] sm:w-[150px]" alt="" />
          {/* navbar menu link */}
          <ul className="hidden flex-1 items-center justify-center font-serif text-white lg:flex">
            <li className="mx-4 ">
              <a className=" hover:text-grey" href="#home">
                Home
              </a>
            </li>
            <li className="mx-4 ">
              <a className="hover:text-grey" href="#about">
                About
              </a>
            </li>
            <li className="mx-4 ">
              <a className="hover:text-grey" href="#menu">
                Menu
              </a>
            </li>
            <li className="mx-4 ">
              <a className="hover:text-grey" href="#awards">
                Awards
              </a>
            </li>
            <li className="mx-4 ">
              <a className="hover:text-grey" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          {/* Registration / Book Table */}
          <div className="hidden font-sans text-lg font-normal text-white sm:flex">
            <span className="mx-4 border-golden transition duration-500 hover:border-b-[1px]">
              <a href="#login">Log In / Registration</a>
            </span>
            <div className="h-[30px] w-[1px] bg-grey"></div>
            <span className="mx-4 cursor-pointer border-golden transition duration-500 hover:border-b-[1px]">
              Book Table
            </span>
          </div>
          <GiHamburgerMenu
            className="block cursor-pointer text-3xl text-white lg:hidden"
            onClick={() => setShowHamburgerNav(true)}
          />
        </div>
      </section>
      <HamburgerNav show={showHamburgerNav} closeNav={setShowHamburgerNav} />
      {/* Arrow Up Badge for going back to top page */}
      <ArrowUp />
      {/* Scroll Progress Bar based on user scroll of the total height in the page*/}
      <ScrollProgressBar />
    </>
  );
}

export default Navbar;
