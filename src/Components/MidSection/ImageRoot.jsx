import React from "react";
import flow from "../../assets/images/flow-light.png";
import { motion } from "framer-motion";
const ImageRoot = () => {
  return (
    <div className="mt-20 md:10 md:mx-20">
      <div className="px-10 bg-gray-10 backdrop-filter backdrop-blur-sm bg-opacity-50 md:px-32 flex justify-center items-center">
        <motion.img
          src={flow}
          alt=""
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: "backIn" }}
        />
      </div>
    </div>
  );
};

export default ImageRoot;
