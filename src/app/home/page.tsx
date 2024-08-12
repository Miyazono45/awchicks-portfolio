import { Navbar } from "@/components/Navbar";
import { TextAnimator2 } from "@/components/TextAnimation_1";

import { MidStar } from "./components/midStar";
import { StarDust } from "./components/starDust";
import { StarOnPath } from "./components/starOnPath";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#F5F6FF]">
      <Navbar />

      <main className="">
        {/* StarDust Text */}
        <StarDust />

        {/* Mid Star */}
        <MidStar />

        {/* Star On Path */}
        <StarOnPath />

        {/* Footer Text */}
        <div className="relative flex h-screen w-screen items-end justify-center bg-transparent pb-[5vh] md:pb-[2.5vh]">
          <TextAnimator2
            className="font-maxima text-sm font-normal not-italic text-c_purple md:text-lg"
            text="motion graphic, compositing, star-ish."
          />
        </div>
      </main>
    </div>
  );
}
