import { motion, useScroll } from "framer-motion";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className=" fixed bottom-0 left-0 right-0 z-40 h-[10px] origin-[0%] bg-golden"
      style={{ scaleX: scrollYProgress }}
    ></motion.div>
  );
}

export default ScrollProgressBar;
