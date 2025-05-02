import Link from "next/link";
import React from "react";
import {  Slide } from "react-awesome-reveal";
import { FaTimes } from "react-icons/fa";
function MobileNavBar({ isOpen, Styles, Close, className, links }) {
  return (
    <div>
      <div
        className={`transform ${Styles.MobileNav} ${className} ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 fixed inset-y-0 left-0  h-[100%] lg:static lg:bg-transparent lg:w-auto lg:flex lg:items-center`}
      >
        <div className="conatiner mx-auto">
          <div className="p-2">
            {/* //   onClick={() => SetModalOpen(false)} */}

            <div className="py-2 flex justify-end">
              <button
                onClick={() => Close()}
                className="w-7 h-7 flex justify-center font-extralight items-center hover:bg-white hover:text-black hover:cursor-pointer rounded-md  text-white opacity-80 hover:opacity-100 "
              >
                <FaTimes className="p-0 text-xl" />
              </button>
            </div>
          </div>
          <div>
            <ul className="text-white lg:flex lg:space-x-4">
              {links.map((link,index) => {
                return (
                  <li className="px-4 py-2 hover:bg-gray-700 lg:hover:bg-transparent">
                    <Slide damping={index+1/2} direction="left">
                    <Link onClick={Close} href={link.link}> {link.name}</Link>
                    </Slide>
                  </li>
                );
              })}

              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNavBar;
