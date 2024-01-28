"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
export const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <AnimatePresence>
        {showMenu && (
          <>
            <motion.nav
              animate={{ x: 0 }}
              initial={{ x: -500 }}
              exit={{ x: -500 }}
              transition={{ duration: 0.2 }}
              className="w-7/12 h-screen fixed top-0 shadow  z-50 flex flex-col bg-white p-2"
            >
              <button
                className="sm:hidden self-end mr-2 mt-2"
                onClick={toggleShowMenu}
              >
                <IconX size={30} />
              </button>

              <ul className="flex flex-col gap-4 text-lg items-baseline px-2 mt-10 divide-y-2 divide-[#731963]">
                <li className="w-full pt-4">Home</li>
                <li className="w-full pt-4">Services</li>
                <li className="w-full pt-4">Policies</li>
                <li className="w-full pt-4">Book Now</li>
              </ul>
            </motion.nav>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              exit={{ opacity: 0 }}
              onClick={toggleShowMenu}
              className="fixed top-0 w-screen h-screen bg-black/30 z-40"
            ></motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.nav
        exit={{ y: -500 }}
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2 }}
        className=" flex fixed top-0 h-12 w-full z-30 "
      >
        <motion.button
          animate={{ x: 0 }}
          initial={{ x: -200 }}
          exit={{ x: -200 }}
          transition={{ duration: 0.2, type: "spring", delay: 0.2 }}
          className="sm:hidden ml-1"
          onClick={toggleShowMenu}
        >
          <IconMenu2 size={30} className="text-white" />
        </motion.button>
      </motion.nav>
    </>
  );
};
