import React, { useRef } from "react";
import styles from "./styles.module.css";
import { useInView, motion } from "framer-motion";

interface Props {
  phrases: Array<string>;
}

export default function MaskText({ phrases }: Props) {
  const body = useRef(null);

  const isInView = useInView(body, { once: true, margin: "-25%" });

  const animation = {
    initial: { y: "100%" },

    enter: (i: any) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };
  return (
    <div ref={body} className="text-5xl">
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className={"overflow-hidden "}>
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={isInView ? "enter" : ""}
              className="m-0 leading-[65px]"
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
