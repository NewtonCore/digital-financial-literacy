"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Styles from "./AppNavBar.module.css";
import Image from "next/image";
import MobileNavBar from "./MobileNavBar";

function NavBar() {
  let links = [
    {
      name: "Services",
      link: "#services",
    },
    // {
    //   name: "Showcase",
    //   link: "#stack",
    // },
    {
      name: "Stack",
      link: "#stack",
    },
  ];
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.screenY)
      if (window.scrollY > 700) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`px-5 ${Styles.Nav} bg-opacity-50 backdrop-blur-xl z-30`}>
      <div className={`md:container md:mx-auto`}>
        <div className="grid md:grid-cols-5 grid-cols-3">
          <div className={`${Styles.leftSection}`}>
            {" "}
            {/* Here is the logo link ,righr*/}
            <div className="bg-white rounded-xl p-2 h-14  mb-5 text-black">
              <Link href="#" className="text-black text-sm">
                Empowering women and girls
              </Link>
            </div>
          </div>

          <div className={`col-span-3 ${Styles.linksSection} md:flex hidden`}>
            {/* nav links */}

            <ul className={Styles.ULlink}>
              {links.map((link) => {
                return (
                  <li>
                    <Link
                      className={` ${scrolled ? "text-black" : "text-white"}`}
                      href={link.link}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className={`${Styles.rightSection} md:col-span-1 col-span-2 gap-2`}
          >
            {/* right link */}
            <Link
              href="#contact"
              className="bg-gradient-to-r from-[#24906e] to-[#024340] text-white font-bold py-3 px-10 rounded-full hover:shadow-md hover:bg-teal-800
       
         transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 md:text-md text-xs
         "
            >
              Register Now
            </Link>
            <button
              onClick={toggleMenu}
              className={`${
                Styles.NavButton
              } focus:outline-none md:hidden block ${
                scrolled && "bg-[#2F004B] rounded-md"
              }`}
            >
              <Image height={50} width={50} src="/menu-alt-1.svg"></Image>
            </button>
            <div className="sm:hidden block">
              <MobileNavBar
                links={links}
                className="sm:hidden block"
                Styles={Styles}
                isOpen={isOpen}
                Close={toggleMenu}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
