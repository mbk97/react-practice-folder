import React from "react";
import { motion } from "framer-motion";

const FramerMotion = () => {
  return (
    <div>
      <motion.div className="h-[200px] mt-11 w-[400px] rounded-2xl bg-[#ffffff] text-[#000000] grid place-items-center">
        <motion.div>{/* <FaStreetView /> */}</motion.div>
      </motion.div>
    </div>
  );
};

export default FramerMotion;
