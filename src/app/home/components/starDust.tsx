import { H1Motion } from "@/components/H1Motion";
import { SVGMotion } from "@/components/SVGMotion";

import styles from "../mask.module.css";

import {
  starText,
  dustText,
  stardustTextW,
} from "../../../../public/svg/svgArray";
import { MotionValue } from "framer-motion";

export const StarDust = () => {
  return (
    <div>
      <div className="absolute flex h-full w-full lg:hidden">
        {/* Star Text */}
        <div className="absolute top-1/2 z-10 -translate-x-[10%] -translate-y-[65%] md:-translate-x-0 md:-translate-y-[60%]">
          <H1Motion
            initialParam={{
              opacity: 0,
            }}
            animateParam={{
              opacity: [0, 0, 1],
            }}
            transitionParam={{
              duration: 0.5,
              delay: 0.5,
              ease: "linear",
              times: [0, 0.5, 1],
            }}
            text="Star"
            className="relative h-full w-full font-luxuryScript text-[60vw] text-c_yellow md:text-[50vw]"
          />
          <div className="absolute top-1/2 z-10 w-full -translate-y-[52.5%] md:-translate-x-[1vw] md:-translate-y-[52.5%]">
            <SVGMotion
              useDiv={true}
              multiplePath={false}
              width={starText.width}
              height={starText.height}
              viewBox={starText.viewBox}
              classNameDiv="relative"
              classNameSVG="w-[100vw] h-auto md:w-[85vw] md:h-auto"
              initial={starText.initial}
              animate={starText.animate}
              transition={starText.transition}
              fillRule={starText.fillRule as unknown as MotionValue<String>}
              id={starText.id}
              d={starText.d}
              stroke={starText.stroke}
              strokeWidth={starText.strokeWidth}
            />
          </div>
        </div>

        {/* Dust Text */}
        <div className="absolute right-0 top-1/2 z-10 -translate-y-[25%] translate-x-[10%] md:-translate-y-[25%] md:translate-x-0">
          <H1Motion
            initialParam={{
              opacity: 0,
            }}
            animateParam={{
              opacity: [0, 0, 1],
            }}
            transitionParam={{
              duration: 0.5,
              delay: 0.5,
              ease: "linear",
              times: [0, 0.5, 1],
            }}
            text="Dust"
            className="relative h-fit w-full font-luxuryScript text-[60vw] text-c_yellow md:text-[50vw]"
          />
          {/* <div className="absolute left-[-2%] top-[21%] w-full"> */}
          <div className="absolute right-1 top-1/2 w-full -translate-y-[65%] md:-translate-x-[0vw]">
            <SVGMotion
              useDiv={true}
              multiplePath={false}
              width={dustText.width}
              height={dustText.height}
              viewBox={dustText.viewBox}
              classNameDiv="relative"
              classNameSVG="w-[95vw] h-auto md:w-[77.5vw] md:h-auto"
              initial={dustText.initial}
              animate={dustText.animate}
              transition={dustText.transition}
              fillRule={dustText.fillRule as unknown as MotionValue<String>}
              id={dustText.id}
              d={dustText.d}
              stroke={dustText.stroke}
              strokeWidth={dustText.strokeWidth}
            />
          </div>
        </div>
      </div>
      <div className="absolute hidden lg:block">
        <div className="z-0">
          <SVGMotion
            useDiv={true}
            multiplePath={false}
            width={stardustTextW.width}
            height={stardustTextW.height}
            viewBox={stardustTextW.viewBox}
            classNameDiv="absolute flex justify-center items-center h-screen"
            classNameSVG="h-auto w-[100vw]"
            initial={stardustTextW.initial}
            animate={stardustTextW.animate}
            transition={stardustTextW.transition}
            id={stardustTextW.id}
            d={stardustTextW.d}
            // fill={stardustTextW.fill}
            fillRule={stardustTextW.fillRule as unknown as MotionValue<String>}
            stroke="#4C29FF"
            strokeWidth={0.5}
            // stroke={stardustTextH.stroke}
            // strokeWidth={stardustTextH.strokeWidth}
          />
          <SVGMotion
            useDiv={true}
            multiplePath={false}
            width={stardustTextW.width}
            height={stardustTextW.height}
            viewBox={stardustTextW.viewBox}
            classNameDiv="absolute flex justify-center items-center h-screen"
            classNameSVG="h-auto w-[100vw]"
            initial={stardustTextW.initial}
            animate={stardustTextW.animate_text}
            transition={stardustTextW.transition_text}
            id={stardustTextW.id}
            d={stardustTextW.d}
            fill={stardustTextW.fill}
            fillRule={stardustTextW.fillRule as unknown as MotionValue<String>}
            // stroke="#000000"
            // strokeWidth={1}
            // stroke={stardustTextH.stroke}
            // strokeWidth={stardustTextH.strokeWidth}
          />
        </div>
      </div>
    </div>
  );
};
