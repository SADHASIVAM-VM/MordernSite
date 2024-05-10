import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { cardData } from "../../DataForPage/dummyData";
import { motion } from "framer-motion";

import google from "../../assets/images/google-play.svg";
import apple from "../../assets/images/apple-store.svg";

const CardsSection = () => {
  return (
    <div id="demo">
      <div className="container my-5 ">
        <div className="section1  mx-5 border border-gray-400 rounded-md py-5 my-10">
          <div className="cont flex  flex-col items-center tracking-wide">
            <h1 className="text-2xl font-bold my-2"> Try Our New Mobile App</h1>
            <h5 className="text-xl">Download On</h5>
          </div>
          <div className="img flex justify-center gap-10 my-2 px-20">
            <img
              src={google}
              alt=""
              className="w-36 hover:scale-[1.1] transition-all cursor-pointer"
            />
            <img
              src={apple}
              alt=""
              className="w-36 hover:scale-[1.1] transition-all cursor-pointer"
            />
          </div>
        </div>
        <div className="section2 grid grid-cols-1 md:grid-cols-3 gap-3 place-content-center place-items-center w-full justify-center">
          {cardData.map(({ id, title, text }) => (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className=""
            >
              <Card className="mt-6 w-72 bg-none" key={id}>
                <CardHeader style={{ background: "white" }}>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2 px-3"
                  >
                    {title}
                  </Typography>
                  <CardBody>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                      {text}
                    </Typography>
                  </CardBody>
                  <hr className="mx-5 " />
                  <CardFooter className="pt-0 flex justify-center mt-3">
                    <Button>Read More</Button>
                  </CardFooter>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
