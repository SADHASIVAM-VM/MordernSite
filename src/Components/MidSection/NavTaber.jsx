import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { tabsData } from "../../DataForPage/dummyData";
import { motion } from "framer-motion";
const NavTaber = () => {
  return (
    <div id="features">
      <Tabs
        value={"bedroom"}
        className="grid md:grid-cols-2 justify-items-center items-center content-between px-4 md:px-32 "
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="  "
        >
          <h1 className="text-2xl font-bold my-2">FEATURES</h1>
          <p>
            AxeL offers many great features. You can create your own room,
            request a service, buy modern lookiing furniture, sell a furniture
            and so much more. Take a snek peek at each of them.
          </p>

          <TabsHeader className="flex flex-col md:flex-row justify-center items-center content-center bg-blue-200 my-2">
            {tabsData.map(({ label, value }) => (
              <Tab className="" key={value} value={value}>
                <p className=" font-inter leading-normal no-underline align-middle tracking-wide normal-case ">
                  {label}
                </p>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {tabsData.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                <p>{desc}</p>
              </TabPanel>
            ))}
          </TabsBody>
        </motion.div>
        <div>
          <TabsBody>
            <motion.div
              className=""
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1.1 }}
            >
              {tabsData.map(({ value, img }) => (
                <TabPanel key={value} value={value}>
                  <img className="h-[450px]" src={img} alt="phone"></img>
                </TabPanel>
              ))}
            </motion.div>
          </TabsBody>
        </div>
      </Tabs>
    </div>
  );
};

export default NavTaber;
