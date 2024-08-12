"use client";
import { Sidebar } from "./Sidebar";
import { SVGMotion } from "./SVGMotion";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { motion } from "framer-motion";

import { Moon, Star2Fill } from "../../public/svg/svgArray";
import { AnimatePresence } from "framer-motion";

export const Navbar = () => {
  // MOBILE DEVICE
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const navRef: any = useClickOutside(() => setIsNavOpen(false));
  const navRef: any = useRef(null);

  useEffect(() => {
    const handler: any = (event: any) => {
      if (!navRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [navRef]);

  // DESKTOP DEVICE
  type navType = {
    id: number;
    name: string;
  };

  const listNav: navType[] = [
    {
      id: 1,
      name: "home",
    },
    {
      id: 2,
      name: "works",
    },
    {
      id: 3,
      name: "commissions",
    },
    {
      id: 4,
      name: "about",
    },
  ];
  const [isNavHover, setIsNavNover] = useState(0);
  const setIdNavHover = (id: number) => {
    setIsNavNover(id);
  };
  const resetIdNavHover = () => {
    setIsNavNover(0);
  };

  const getLink = usePathname();
  // console.log(getLink);

  return (
    <div>
      <div className="absolute z-[100] lg:hidden">
        <nav className="" ref={navRef}>
          {/* Hamburger Menu */}
          <div
            className="fixed z-40 m-3"
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          >
            <SVGMotion
              useDiv={false}
              multiplePath={false}
              viewBox="0 0 36 36"
              classNameSVG="absolute z-30 md:w-[72px] md:h-auto"
              width={36}
              height={36}
              fill="#4C29FF"
              stroke="#F5F6FF"
              strokeWidth={0.5}
              d={Star2Fill.d}
              initial={{ opacity: 0, rotate: "45deg" }}
              animate={Star2Fill.animate}
              transition={Star2Fill.transition}
            />
            <SVGMotion
              useDiv={true}
              multiplePath={false}
              viewBox="0 0 36 36"
              width={18}
              height={18}
              classNameSVG="absolute z-20 mt-1 md:w-[36px] md:h-auto"
              stroke="#4C29FF"
              fill="#F5F6FF"
              strokeWidth={0.5}
              d={Star2Fill.d}
              initial={{ opacity: 0, rotate: "-45deg" }}
              animate={Star2Fill.animate}
              transition={Star2Fill.transition}
            />
            <SVGMotion
              useDiv={true}
              multiplePath={false}
              viewBox="0 0 36 36"
              width={18}
              height={18}
              classNameSVG="absolute z-20 mt-4 ml-5 md:w-[36px] md:h-auto md:mt-8 md:ml-9"
              stroke="#4C29FF"
              fill="#F5F6FF"
              strokeWidth={0.5}
              d={Star2Fill.d}
              initial={{ opacity: 0, rotate: "-45deg" }}
              animate={Star2Fill.animate}
              transition={Star2Fill.transition}
            />
          </div>

          {/* Side Bar */}
          <div>
            <AnimatePresence mode="wait">
              {isNavOpen ? <Sidebar /> : null}
            </AnimatePresence>
          </div>

          {/* Moon Mode */}
          {/* <div
          className="absolute right-0 z-20 m-3 bg-red-400"
          onClick={() => {
            alert("Hehe :)");
          }}
        >
          <SVGMotion
            useDiv={true}
            multiplePath={true}
            width={Moon.width}
            height={Moon.height}
            viewBox={Moon.viewBox}
            multiplePathData={Moon.multiplePathData}
            initial={{ opacity: 0, rotate: "45deg" }}
            animate={Moon.animate}
            transition={Moon.transition}
          />
        </div> */}
        </nav>
        {isNavOpen ? (
          <div className="absolute z-40 h-screen w-screen opacity-100 backdrop-blur-[2px] transition-opacity ease-in-out"></div>
        ) : null}
      </div>
      <div className="fixed z-50 ml-[5vw] mt-[3vh] box-border hidden h-[5vh] gap-x-[5vw] text-center font-maxima text-xl font-normal text-c_black lg:flex">
        {listNav.map((nav, index) => {
          return (
            <div key={nav.id} className="relative">
              <div
                // className={`${getLink.includes(nav.name) ? "z-20 after:absolute after:bottom-1/2 after:right-1/2 after:h-10 after:w-[125%] after:translate-x-1/2 after:translate-y-[40%] after:bg-[#4C29FF]" : ""}`}
                onMouseEnter={() => setIdNavHover(nav.id)}
                onMouseLeave={resetIdNavHover}
              >
                <Link
                  href={nav.name}
                  datatype={nav.name}
                  className={`group relative z-10 capitalize after:invisible after:block after:h-0 after:origin-[100%_100%] after:overflow-hidden after:font-bold after:content-[attr(datatype)] ${getLink.includes(nav.name) ? "text-c_purple hover:font-extrabold" : "hover:font-bold hover:text-c_purple"}`}
                >
                  <div
                    className={`z-50 after:absolute after:-bottom-3 after:right-full after:h-1 after:w-0 after:origin-[100%_100%] after:translate-x-1/2 after:overflow-hidden after:rounded-xl after:bg-[#4C29FF] after:transition-all after:duration-150 after:ease-in-out after:content-[''] ${getLink.includes(nav.name) ? "after:w-[250%] after:bg-[#FFE81A] group-hover:after:w-[300%] group-hover:after:bg-[#4C29FF]" : "group-hover:after:w-[200%]"}`}
                  >
                    <motion.h1
                      initial={{
                        y: 65,
                        opacity: 0,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      transition={{
                        delay: index * 0.15,
                      }}
                    >
                      {nav.name}
                    </motion.h1>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
