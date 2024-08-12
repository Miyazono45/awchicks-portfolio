import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export const Sidebar = () => {
  return (
    <motion.div
      className="absolute z-50 h-screen w-[60vw] bg-[#4C29FF]"
      initial={{
        x: "-100%",
      }}
      animate={{
        x: "0%",
      }}
      exit={{
        x: "-100%",
      }}
      transition={{
        ease: [0.22, 1, 0.36, 1],
        duration: 0.5,
      }}
    >
      <div className="mt-[35%] w-[100%] pl-[15%] md:mt-[25%]">
        <h1 className="block w-fit text-center font-maxima text-sm font-extralight text-c_white md:text-2xl">
          Navigation
        </h1>
        <div className="mt-1 block h-[1px] w-[70%] rounded-full bg-[#F5F6FF]"></div>
      </div>

      <div className="mt-[15%] flex flex-col justify-center gap-y-10 px-[15%] font-maxima text-3xl font-semibold text-c_white md:text-5xl">
        <Link href={"/"} className="">
          Home
        </Link>
        <Link href={"/works"} className="">
          Works
        </Link>
        <Link href={"/commissions"} className="">
          Comms
        </Link>
        <Link href={"/about"} className="">
          About
        </Link>
      </div>
      {/* Sosmed */}
      <div className="mt-[100%] grid grid-cols-2 gap-y-3 pl-[15%] font-maxima font-thin text-c_white md:mt-[75%] md:text-2xl">
        <Link href={"https://x.com/awchicks45"} className="" target="_blank">
          Twitter
        </Link>
        <Link
          href={"https://github.com/miyazono45"}
          className=""
          target="_blank"
        >
          Github
        </Link>
        <Link
          href={"https://www.facebook.com/naufal.rifqi.771/"}
          className=""
          target="_blank"
        >
          Facebook
        </Link>
        <Link
          href={"https://www.instagram.com/n.rifqi45"}
          target="_blank"
          className=""
        >
          Instagram
        </Link>
      </div>
    </motion.div>
  );
};
