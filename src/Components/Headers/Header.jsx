import React from "react";
import "./Header.css";
import phoneimg from "../../assets/images/headerImage.png";
import { easeIn, easeInOut, motion } from "framer-motion";
const Header = () => {
  return (
    <div className="mt-20 header" id="home">
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1, ease: "linear" }}
          className="container flex md:flex-row flex-col  justify-center "
        >
          <div className="mt-4  flex justify-center items-center flex-col md:w-1/2">
            <p
              className={
                "light" === "light"
                  ? "sm:text-lg w-4/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-dark text-2xl"
                  : "sm:text-lg w-4/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-white text-2xl"
              }
            >
              Giving your home a propper makeover never was this easy. Modern
              and stylish furniture for decent prices. Take a look what we offer
              with simple button click.
            </p>
            <div className="pb-20">
              <button className="pushable mt-4">
                <span className="front">Start now</span>
              </button>
            </div>
          </div>
          <div className="imgsCont md:w-1/2 flex flex-col justify-center items-center ">
            <h1 className="text-4xl font-mono">MORDERN</h1>
            <img src={phoneimg} alt="" className="w-[350px] animate_y" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
