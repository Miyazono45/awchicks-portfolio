"use client";
import React, { useId } from "react";
import { AnimatePresence, motion, MotionValue } from "framer-motion";
import { parse } from "node-html-parser";

type svgmType = {
  useDiv: boolean;
  multiplePath: boolean;
  classNameDiv?: string;
  classNameSVG?: string;
  width?: number;
  height?: number;
  viewBox: string;
  fillSVG?: string;
  xmlns?: string;
  initial?: object;
  animate?: object;
  transition?: object;
  id?: string;
  d?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  strokeLinecap?: string;
  fillRule?: MotionValue<String>;
  multiplePathData?: Array<string>;
};

export const SVGMotion = ({
  useDiv,
  multiplePath,
  classNameDiv,
  classNameSVG,
  width,
  height,
  viewBox,
  fillSVG,
  xmlns,
  initial,
  animate,
  transition,
  id,
  d,
  fill,
  stroke,
  strokeWidth,
  strokeLinecap,
  fillRule,
  multiplePathData,
}: svgmType) => {
  if (useDiv == true && multiplePath == false) {
    return (
      <div className={classNameDiv}>
        <AnimatePresence>
          <motion.svg
            className={classNameSVG}
            width={width}
            height={height}
            viewBox={`${viewBox}`}
            fill={fillSVG || "none"}
            xmlns={xmlns || "http://www.w3.org/2000/svg"}
          >
            <motion.path
              initial={initial}
              animate={animate}
              transition={transition}
              id={id}
              d={d}
              fill={fill}
              stroke={stroke}
              fillRule={fillRule}
              strokeWidth={strokeWidth}
              strokeLinecap={"round"}
            />
          </motion.svg>
        </AnimatePresence>
      </div>
    );
  } else if (useDiv == false && multiplePath == false) {
    return (
      <AnimatePresence>
        <motion.svg
          className={classNameSVG}
          width={width}
          height={height}
          viewBox={`${viewBox}`}
          fill={fillSVG || "none"}
          xmlns={xmlns || "http://www.w3.org/2000/svg"}
        >
          <motion.path
            initial={initial}
            animate={animate}
            transition={transition}
            id={id}
            d={d}
            fill={fill}
            stroke={stroke}
            fillRule={fillRule}
            strokeWidth={strokeWidth}
            strokeLinecap={"round"}
          />
        </motion.svg>
      </AnimatePresence>
    );
  } else if (useDiv == true && multiplePath == true) {
    const innerComponent = [];
    const pathPropPush: Array<object> = [];

    // get innerComponent
    for (let i = 0; multiplePathData && i < multiplePathData.length; i++) {
      const parser = parse(multiplePathData[i]);
      const parsed = parser.getElementsByTagName("path")[0];
      pathPropPush.push(parsed.attributes);
      innerComponent.push(parsed.innerHTML);
    }

    return (
      <div className={classNameDiv}>
        <AnimatePresence>
          <motion.svg
            initial={initial}
            animate={animate}
            transition={transition}
            className={classNameSVG}
            width={width}
            height={height}
            viewBox={`${viewBox}`}
            fillRule={fillRule}
            fill={fillSVG || "none"}
            xmlns={xmlns || "http://www.w3.org/2000/svg"}
          >
            {multiplePathData?.map((func, index) =>
              React.createElement("path", {
                ...pathPropPush[index],
                key: index,
              }),
            )}
          </motion.svg>
        </AnimatePresence>
      </div>
    );
  } else if (useDiv == false && multiplePath == true) {
    const innerComponent = [];
    const pathPropPush: Array<object> = [];

    // get innerComponent
    for (let i = 0; multiplePathData && i < multiplePathData.length; i++) {
      const parser = parse(multiplePathData[i]);
      const parsed = parser.getElementsByTagName("path")[0];
      pathPropPush.push(parsed.attributes);
      innerComponent.push(parsed.innerHTML);
    }

    return (
      <AnimatePresence>
        <motion.svg
          initial={initial}
          animate={animate}
          transition={transition}
          className={classNameSVG}
          width={width}
          height={height}
          viewBox={`${viewBox}`}
          fillRule={fillRule}
          fill={fillSVG || "none"}
          xmlns={xmlns || "http://www.w3.org/2000/svg"}
        >
          {multiplePathData?.map((func, index) =>
            React.createElement("path", { ...pathPropPush[index], key: index }),
          )}
        </motion.svg>
      </AnimatePresence>
    );
  } else {
    <h1>Something Went Wrong</h1>;
    {
      console.log("object");
    }
  }
};
