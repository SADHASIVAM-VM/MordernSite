import React, { useState } from "react";
import { sliderData } from "../../DataForPage/dummyData";
import line from "../../assets/images/line.png";
import { motion } from "framer-motion";
const MidSection = () => {
  const btns = [
    { name: "Room 1", id: 1 },
    { name: "Room 2", id: 2 },
    { name: "Room 3", id: 3 },
  ];

  const [showItm, setShowItm] = useState(1);
  return (
    <div id="room">
      <div className="container my-20 px-5 md:px-20 md:flex">
        <div className="cont md:w-1/2">
          <h1 className="text-4xl ">En-Power The Futurist Products</h1>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="btns mt-20 flex gap-3  justify-center md:justify-start md:px-32"
          >
            {btns.map((itm) => (
              <button
                key={itm.id}
                className="pushable"
                onClick={() => setShowItm(itm.id)}
              >
                <span className="front">{itm.name}</span>
              </button>
            ))}
          </motion.div>
        </div>
        <div className="showCont md:w-1/2 relative mt-10">
          {sliderData
            .filter((itm) => itm.id == showItm)
            .map((itm) => (
              <div className="" key={itm.id}>
                <div className="relative">
                  <h1 className="text-2xl inline px-4 rounded ">
                    {itm.title}{" "}
                  </h1>
                  <motion.img
                    src={line}
                    alt=""
                    className="absolute -top-8 w-36"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                  />
                </div>

                <motion.h2
                  className="mt-5"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {itm.text}
                </motion.h2>

                <motion.img
                  src={itm.img}
                  alt=""
                  className="absolute w-40 top-0 right-40 -z-20"
                  initial={{ opacity: 0, scale: 0, x: 100 }}
                  animate={{ opacity: 1, scale: 1.2, x: 0 }}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MidSection;
