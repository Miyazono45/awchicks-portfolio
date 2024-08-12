"use client";

import { motion } from "framer-motion";
import splitTextByWord from "../../utils/splitText";

export const TextAnimator1 = ({
  text,
  className,
  onClick,
  styleName,
}: {
  text: string;
  className?: string;
  onClick?: Function;
  styleName?: object;
}) => {
  return (
    <div className="w-[75vw]" style={styleName}>
      <motion.div
        initial="initial"
        animate="animate"
        className={`${className}`}
      >
        <div className="flex flex-row">
          {text.split("").map((char, index) => {
            return (
              <motion.div
                variants={{
                  initial: { opacity: 0, y: 65 },
                  animate: { opacity: 1, y: 0 },
                }}
                transition={{
                  delay: index * 0.1,
                }}
                key={index}
                className="w-fit"
              >
                {char}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export const TextAnimator2 = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  return (
    <section className="grid place-content-center">
      <motion.p
        initial="initial"
        animate="animate"
        className={`${className} relative block whitespace-nowrap`}
      >
        {splitTextByWord(text).map((word, index) => {
          return (
            <motion.span
              variants={{
                initial: { opacity: 0, y: 65 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{
                delay: index * 0.1,
              }}
              key={index}
              className="inline-block px-1"
            >
              {`${word}`}
            </motion.span>
          );
        })}
      </motion.p>
    </section>
  );
};
