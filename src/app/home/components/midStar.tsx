import { TextAnimator1 } from "@/components/TextAnimation_1";
import Link from "next/link";
import styles from "../mask.module.css";

import { SVGMotion } from "@/components/SVGMotion";
import { stardustTextW, midStar } from "../../../../public/svg/svgArray";
import { MotionValue } from "framer-motion";

import { StarFill } from "@/components/maskComponents";

export const MidStar = () => {
  return (
    <div>
      <Link
        href={"/works"}
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 lg:hidden"
      >
        <TextAnimator1
          text="Awchicks"
          className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center font-yipes text-[calc(5vw+5vh)] text-c_purple md:text-[calc(6.5vw+6.5vh)]"
        />
        <TextAnimator1
          text="Awchicks"
          className={
            `left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 font-yipes text-[calc(5vw+5vh)] md:text-[calc(6.5vw+6.5vh)] ` +
            styles.mask1
          }
        />
      </Link>
      <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
        {/* <StarFill
          className={
            `absolute left-1/2 top-1/2 z-20 h-auto w-[65vw] origin-[0%_0%] -translate-x-1/2 -translate-y-1/2 stroke-[#010715] stroke-[.2px] text-c_white ` +
            styles.maskStar
          }
        /> */}
        <SVGMotion
          useDiv={false}
          multiplePath={false}
          width={midStar.width}
          height={midStar.height}
          viewBox={midStar.viewBox}
          d={midStar.d}
          stroke={midStar.stroke}
          initial={midStar.initial}
          animate={midStar.animate}
          transition={midStar.transition}
          strokeWidth={midStar.strokeWidth}
          classNameSVG={
            `absolute left-1/2 top-1/2 z-20 h-auto w-[60vw] origin-[0%_0%] -translate-x-1/2 -translate-y-1/2 stroke-[#010715] stroke-[.2px] text-c_white ` +
            styles.maskStar
          }
        />

        {/* Text Mid */}
        <Link //SUDAH ROTATE +++++++++++++++++++++++++++++++++++++
          href={"/works"}
          className={
            `absolute left-1/2 top-1/2 z-30 h-[auto] w-[100%] origin-[0%_0%] -translate-x-1/2 -translate-y-1/2 text-center font-yipes text-c_purple mask-[url("../../public/svg/star_1_Fill.svg")] mask-no-repeat mask-size-[65vw] mask-position-center ` +
            styles.maskStar
          }
        >
          <TextAnimator1 // SUDAH ROTAETE
            text="Awchicks"
            className={
              `relative z-10 flex items-center justify-center text-center font-yipes text-[calc(10vw+10vh)] text-c_white ` +
              styles.maskStar2
            }
          />
        </Link>

        {/* Stardust Mid */}
        <div //SUDAH ROTATE++++++++++++++++++++++++++++++++++++++
          className={
            `left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mask-[url('../../public/svg/star_1_Fill.svg')] mask-no-repeat mask-size-[65vw] mask-position-center ` +
            styles.mask2
          }
        >
          <div
            className={
              `absolute left-1/2 top-1/2 h-screen w-screen origin-[0%_0%] -translate-x-1/2 -translate-y-1/2 ` +
              styles.stardustSVG
            }
          >
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
              fillRule={
                stardustTextW.fillRule as unknown as MotionValue<String>
              }
              stroke="#FFE81A"
              strokeWidth={0.5}
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
              fill={"#4C29FF"}
              fillRule={
                stardustTextW.fillRule as unknown as MotionValue<String>
              }
            />
          </div>
        </div>

        {/* Text Back (Awchicks) */}

        <TextAnimator1
          text="Awchicks"
          className={
            `absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center font-yipes text-[calc(10vw+10vh)] text-c_purple ` +
            styles.ta_1
          }
        />
      </div>
    </div>
  );
};
