import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

function ArrowUp() {
  return (
    <motion.div
      className=" fixed bottom-[5%] right-[3%] z-40 flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-black/[.65] transition-all duration-300 hover:scale-125"
      onClick={() => window.scroll(0, 0)}
      drag
      dragSnapToOrigin={true}
      dragTransition={{ bounceStiffness: 800, bounceDamping: 10 }}
    >
      <FaArrowUp className=" text-xl text-golden" />
    </motion.div>
  );
}

export default ArrowUp;
