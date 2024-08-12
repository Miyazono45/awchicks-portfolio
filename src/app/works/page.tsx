import { Navbar } from "@/components/Navbar";
import { TextAnimator1 } from "@/components/TextAnimation_1";
import { SVGMotion } from "@/components/SVGMotion";

import { workText } from "../../../public/svg/svgArray";
import { MotionValue } from "framer-motion";
import MenuButton from "./components/MenuButton";

const page = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#F5F6FF]">
      <Navbar />
      <main>
        {/* Awchicks Works Text */}
        <header className="absolute top-[7.5vh] h-[20vh] w-screen">
          <TextAnimator1
            text="Works"
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 font-yipes text-7xl text-[#4C29FF]"
          ></TextAnimator1>

          {/* Stroke First */}
          <SVGMotion
            classNameDiv="absolute h-auto w-[100vw] top-1/2 z-10 -translate-y-1/2"
            useDiv={true}
            multiplePath={false}
            initial={workText.initial_stroke}
            animate={workText.animate_stroke}
            transition={workText.transition_stroke}
            viewBox={workText.viewBox}
            fillRule={workText.fillRule as unknown as MotionValue<String>}
            stroke={workText.stroke}
            strokeWidth={workText.strokeWidth}
            d={workText.d}
          />
          {/* Fill later */}
          <SVGMotion
            classNameDiv="absolute h-auto w-[100vw] top-1/2 z-10 -translate-y-1/2"
            useDiv={true}
            multiplePath={false}
            initial={workText.initial_fill}
            animate={workText.animate_fill}
            transition={workText.transition_fill}
            viewBox={workText.viewBox}
            fillRule={workText.fillRule as unknown as MotionValue<String>}
            // stroke={workText.stroke}
            // strokeWidth={workText.strokeWidth}
            d={workText.d}
            fill={workText.fill}
          />

          {/* smoll text ^^ */}
          <TextAnimator1
            text="star-ish >//<"
            className="absolute bottom-[25%] left-1/2 z-30 -translate-x-1/2 font-maxima text-sm font-normal text-[#4C29FF]"
          ></TextAnimator1>
        </header>

        {/* Start from Button */}
        <section className="relative z-10 h-screen w-screen px-[10vw]">
          <MenuButton />
        </section>
      </main>
    </div>
  );
};

export default page;
