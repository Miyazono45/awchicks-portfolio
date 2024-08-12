import { SVGMotion } from "@/components/SVGMotion";
import { starPath, starOnPathLargeW } from "../../../../public/svg/svgArray";
import styles from "../mask.module.css";

export const StarOnPath = () => {
  return (
    <>
      <div className="absolute flex h-screen w-screen items-center justify-center lg:hidden">
        <SVGMotion
          initial={{
            opacity: 0,
            rotate: "45deg",
          }}
          animate={{
            opacity: 1,
            // rotate: ["-15deg", "8deg", "-3deg", "1deg", "-0.3deg", "0deg"],
            rotate: "0deg",
          }}
          transition={{
            duration: 1,
            ease: [0, 1, 0.2, 1],
            // time: [0, 0.16, 0.28, 0.44, 0.59, 0.73, 0.1],
          }}
          useDiv={true}
          multiplePath={true}
          width={starPath.width}
          height={starPath.height}
          viewBox={starPath.viewBox}
          multiplePathData={starPath.multiplePathData}
          classNameDiv={`w-fit ` + styles.inviniteSpin}
          // classNameSVG="w-[145vw] h-auto"
          classNameSVG="w-[calc(120vw+20vh)] h-auto md:w-[calc(105vw+5vh)]"
        />
      </div>
      <div className="absolute hidden h-[100vh] w-[100vw] origin-center place-items-center lg:grid">
        <div className="mt-[7.5vh] h-[92.5vh] w-screen scroll-pb-6 overflow-hidden">
          <SVGMotion
            initial={{
              opacity: 0,
              rotate: "45deg",
            }}
            animate={{
              opacity: 1,
              // rotate: ["-15deg", "8deg", "-3deg", "1deg", "-0.3deg", "0deg"],
              rotate: "0deg",
            }}
            transition={{
              duration: 1,
              // ease: [0, 1.25, 0.06, 1.22],
              ease: [0.01, 1.01, 0.18, 1],
              delay: 0.25,
              // time: [0, 0.16, 0.28, 0.44, 0.59, 0.73, 0.1],
            }}
            useDiv={true}
            multiplePath={true}
            width={starOnPathLargeW.width}
            height={starOnPathLargeW.height}
            viewBox={starOnPathLargeW.viewBox}
            multiplePathData={starOnPathLargeW.multiplePathData}
            classNameDiv={
              ` flex justify-center items-center w-[100vw] h-[100vh] ` +
              styles.inviniteSpin
            }
            classNameSVG="h-[150vh] w-[150vw] 2xl:w-[175vw] 2xl:h-[175vh]"
          />
        </div>
      </div>
    </>
  );
};
