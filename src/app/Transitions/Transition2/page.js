"use client"
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./tr.css";


const Transition2 = ({children}) => {

  const ref = useRef(null);
  const view = useInView(ref, {once: true});
  const controllerA = useAnimation();

  useEffect(() => {
    if (view) {
      //fire the animation
      controllerA.start("animate");
    }
  }, [view])

  const transitionVariants = {
    initial: {
      opacity: 0,
     y: 70,
    },

    animate: {
      opacity: 1,
      y: 0,
    },
  }

  return (
        <div 
        ref={ref}
        className="trans">
          <motion.div
          variants={transitionVariants}
          initial="initial"
          animate={controllerA}
          transition={{delay: 0.25,duration: 0.75}}>
            {children}
          </motion.div>
        </div>
    );
};
export default Transition2;

