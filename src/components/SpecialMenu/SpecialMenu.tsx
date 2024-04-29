import { motion } from "framer-motion";
import { MenuMotion, SpecialMenuMotion } from "../../constants/animation";
import data from "../../constants/data";
import images from "../../constants/images";

function SpecialMenu() {
  return (
    <section
      id="menu"
      className="flex flex-col items-center justify-center bg-black py-16 px-8 lg:px-24"
    >
      {/* Menu Title Header */}
      <motion.div
        className="mb-8 text-center"
        variants={SpecialMenuMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: "all" }}
      >
        <h3 className="font-base text-xl font-bold tracking-wider text-white sm:text-2xl ">
          Menu That Fits Your Palatte
        </h3>
        <img src={images.spoon} className="mx-auto mb-4 w-[45px]" alt="" />

        <h1 className="font-base text-[64px] font-bold tracking-wider text-golden">
          Today's Special
        </h1>
      </motion.div>

      <div className="my-8 flex w-full flex-col items-center min-[1150px]:flex-row">
        {/* Wine and Beer */}
        <motion.div
          className="w-full flex-1"
          variants={SpecialMenuMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="sm:tetx-[45px] text-center font-base text-4xl font-bold tracking-wider text-white">
            Wine & Beer
          </h2>
          <div className="my-8 flex flex-col">
            {data.wines.map((wine) => {
              return (
                <motion.div
                  className="my-4 "
                  key={wine.title}
                  variants={MenuMotion}
                  transition={{
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center">
                    <span className="flex-1 font-base text-xl font-bold tracking-wider text-gold sm:text-2xl">
                      {wine.title}
                    </span>
                    <div className="mx-4 h-[1px] w-[90px] bg-golden"></div>
                    <span className="font-base text-xl font-bold text-white sm:text-2xl ">
                      {wine.price}
                    </span>
                  </div>
                  <span className="mt-[0.2rem] font-alt text-[14px] tracking-wider text-custom-gray sm:text-[16px]">
                    {wine.tags}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        {/* Image */}
        <img
          src={images.menu}
          className="my-12 w-full sm:w-[410px] min-[1150px]:my-0 min-[1150px]:mx-8 "
          alt=""
        />
        {/* Cocktails */}
        <motion.div
          className="w-full flex-1"
          variants={SpecialMenuMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="sm:tetx-[45px] text-center font-base text-4xl font-bold tracking-wider text-white">
            Cocktails
          </h2>
          <div className="my-8 flex flex-col">
            {data.cocktails.map((cocktail) => {
              return (
                <motion.div
                  className="my-4 "
                  key={cocktail.title}
                  variants={MenuMotion}
                  transition={{
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center">
                    <span className="flex-1 font-base text-xl font-bold tracking-wider text-gold sm:text-2xl">
                      {cocktail.title}
                    </span>
                    <div className="mx-4 h-[1px] w-[90px] bg-golden"></div>
                    <span className="font-base text-xl font-bold text-white sm:text-2xl ">
                      {cocktail.price}
                    </span>
                  </div>
                  <span className="mt-[0.2rem] font-alt text-[14px] tracking-wider text-custom-gray sm:text-[16px]">
                    {cocktail.tags}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
      <button className="mt-[15px]  rounded-md bg-crimson py-2 px-6 font-base font-bold lg:text-xl">
        View More
      </button>
    </section>
  );
}

export default SpecialMenu;
