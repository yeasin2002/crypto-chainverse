import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// import FlowingGradient from "../../assets/loader/Flowing gradient.gif";
import loaderSvg from "../../assets/loader/Ripple-1s-200px.svg";

const Loading = ({ loadingImages = loaderSvg }) => {
  return (
    <>
      <AnimatePresence>
        <div className=" flex items-center content-center justify-center w-full h-full">
          <img
            className=" w-20 h-20"
            src={loadingImages}
            alt="Loading.........</"
          />
        </div>
      </AnimatePresence>
    </>
  );
};
export default Loading;
