import { motion } from "framer-motion";
import { HeaderLeftMotion, HeaderRightMotion } from "../../constants/animation";
import images from "../../constants/images";

function Header() {
  return (
    <section id="home" className="flex flex-wrap bg-black py-16 px-8 lg:px-24">
      <div className="flex w-full items-center justify-center lg:w-1/2 ">
        <motion.div
          variants={HeaderLeftMotion}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 1,
            type: "spring",
            bounce: 0.5,
            delay: 1,
          }}
        >
          <div className="mb-4">
            <h3 className="font-base text-xl font-bold tracking-wider text-white sm:text-2xl ">
              Chase The New Flavour
            </h3>
            <img src={images.spoon} alt="" className="w-[45px]" />
          </div>
          <h1 className="font-base text-7xl font-bold tracking-wider text-golden sm:text-[90px]">
            The Key To Fine Dining
          </h1>
          <p className="my-8 font-alt tracking-wider text-white">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus{" "}
          </p>
          <button className="rounded-md bg-crimson py-2 px-6 font-base font-bold lg:text-xl">
            Explore Menu
          </button>
        </motion.div>
      </div>
      {/* Image */}
      <motion.div
        className="flex w-full lg:w-1/2 lg:items-center lg:justify-center"
        variants={HeaderRightMotion}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 1,
          type: "spring",
          bounce: 0.5,
          delay: 1,
        }}
      >
        <img
          src={images.welcome}
          alt=""
          className="mt-20 w-full lg:mt-0 lg:w-[80%] "
        />
      </motion.div>
    </section>
  );
}

export default Header;
