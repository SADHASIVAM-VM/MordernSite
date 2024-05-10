import React from "react";
import sub1 from "../../assets/images/MidComponentPhone.png";
import sub2 from "../../assets/images/midPhone2.png";
import { motion } from "framer-motion";

const CardsTab = () => {
  return (
    <div className="mt-20 CardTab" id="company">
      <div className="container px-20">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: "-100vw", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="cont1 flex flex-col md:flex-row  items-center content-center mb-10"
        >
          <div className="subCont1 justify-center md:w-1/2 flex md:order-1 cursor-pointer">
            <img
              src={sub1}
              alt=""
              className="w-52 hover:rotate-2 transition-all"
            />
          </div>

          <div className="subCont2 md:w-1/2 mt-5">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              Dive into the Future
            </h1>
            <h4>
              In a world where people constantly have phone in their hands, the
              need for online opportunities is growing. We have a solution -
              fully digital access to all information and services related to
              the interior and design itself. Everything for a carefree stay in
              the palm of a hand.
            </h4>
            <button className="pushable mt-4 ">
              {" "}
              <span className="front">Start</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: "-100vw", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="cont2 flex flex-col md:flex-row  items-center content-center mb-10"
        >
          <div className="subCont1 justify-center md:w-1/2 flex cursor-pointer">
            <img
              src={sub2}
              alt=""
              className="w-52 hover:-rotate-2 transition-all"
            />
          </div>

          <div className="subCont2 md:w-1/2 mt-5 ">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              Search by room
            </h1>
            <ul>
              <li>Bedroom ideas for you and your partner.</li>
              <li>No room is quite as warm as the living room.</li>
              <li>No room is quite as multifunctional as the kitchen.</li>
            </ul>

            <button className="pushable mt-4 ">
              {" "}
              <span className="front">Start</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardsTab;
