import { motion } from "motion/react";
import { div } from "motion/react-client";
import React from "react";
import { ImGift } from "react-icons/im";

function Marquee({ imagesurls, direction }) {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex shrink-0 gap-40 py-10 pr-40"
      >
        {imagesurls.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex shrink-0 gap-40 py-10 pr-40"
      >
        {imagesurls.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div>n
    </div>
  );
}
export default Marquee;
