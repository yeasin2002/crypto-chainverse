import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import FlowingGradient from "../../assets/loader/Flowing gradient.gif";

const Loading = ({ loadingImages = FlowingGradient }) => {
  return (
    <>
      <AnimatePresence>
        <div className=" flex justify-center items-center  content-center  w-full h-full">
          <img
            className="w-20 h-20 "
            src={loadingImages}
            alt="Loading.........</"
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default Loading;
