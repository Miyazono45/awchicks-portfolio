"use client";

import Button from "@/components/ui/Button";
import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles.module.css";

const listButton = [
  {
    id: 1,
    name: "All",
    sizeText: "90%",
  },
  {
    id: 2,
    name: "Music Video",
    sizeText: "80%",
  },
  {
    id: 3,
    name: "Motion Graphic",
    sizeText: "75%",
  },
  {
    id: 4,
    name: "Etc",
    sizeText: "90%",
  },
];

export default function MenuButton() {
  const [isID, setIsID] = useState(1);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="absolute top-[25vh] box-border grid h-[10vh] w-[80vw] grid-cols-[1fr_2fr_2fr_1fr] place-content-center gap-x-2"
    >
      {listButton.map((btn, index) => {
        return (
          <motion.button
            variants={{
              initial: { opacity: 0, y: 65 },
              animate: { opacity: 1, y: 0 },
            }}
            transition={{
              delay: index * 0.15,
            }}
            key={index}
            onClick={() => setIsID(btn.id)}
            className={`h-6 w-full rounded-full ${btn.id == isID ? "bg-[#4C29FF] font-extrabold text-[#F5F6FF]" : "bg-[#F5F6FF] text-[#010715]"} text-center font-maxima text-[${btn.sizeText}] font-light outline outline-[1px] outline-[#010715]`}
          >
            {btn.name}
          </motion.button>
        );
      })}
    </motion.div>
  );
}
