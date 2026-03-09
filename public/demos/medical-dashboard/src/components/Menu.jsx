import React from "react";
import { BiPlusMedical } from "react-icons/bi";
import {
  AiOutlineAppstore,
  AiOutlineCalendar,
  AiOutlineUser,
  AiOutlineClockCircle,
  AiOutlineCreditCard,
  AiOutlineMessage,
  AiOutlineFileText,
  AiOutlineSetting,
} from "react-icons/ai";
import { motion } from "framer-motion";

const itemVariants = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const listVariants = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export default function Menu() {
  return (
    <>
      <div>
        <p className="flex items-center px-3">
          <BiPlusMedical className="text-purple-700 text-xl" />
          <span className="font-black tracking-tight text-lg">Doct.</span>
        </p>
      </div>
      <motion.nav
        className="mt-12"
        variants={listVariants}
        initial="initial"
        animate="animate"
      >
        <motion.a
          variants={itemVariants}
          href="#"
          className="p-3 bg-black text-white w-full rounded-md flex items-center gap-2"
        >
          <AiOutlineAppstore />
          Overview
        </motion.a>
        <motion.a
          variants={itemVariants}
          href="#"
          className="p-3 text-slate-500 w-full flex items-center gap-2"
        >
          <AiOutlineCalendar />
          Appointment
        </motion.a>
        <motion.a
          variants={itemVariants}
          href="#"
          className="p-3 text-slate-500 w-full flex items-center gap-2"
        >
          <AiOutlineUser />
          My patients
        </motion.a>
        <motion.a
          variants={itemVariants}
          href="#"
          className="p-3 text-slate-500 w-full flex items-center gap-2"
        >
          <AiOutlineClockCircle />
          Schedule Timings
        </motion.a>
        <motion.a
          variants={itemVariants}
          href="#"
          className="p-3 text-slate-500 w-full flex items-center gap-2"
        >
          <AiOutlineCreditCard />
          Payments
        </motion.a>
        <motion.a
          variants={itemVariants}
          href="#"
          className="p-3 text-slate-500 w-full flex items-center gap-2"
        >
          <AiOutlineMessage />
          Message
        </motion.a>
        <motion.a
          variants={itemVariants}
          href="#"
          className="p-3 text-slate-500 w-full flex items-center gap-2"
        >
          <AiOutlineFileText />
          Blog
        </motion.a>
        <motion.a
          variants={itemVariants}
          href="#"
          className="p-3 text-slate-500 w-full flex items-center gap-2"
        >
          <AiOutlineSetting />
          Settings
        </motion.a>
        <p className="text-sm text-slate-500 fixed bottom-4 max-w-[200px]">
          Based on a{" "}
          <a
            href="https://www.figma.com/community/file/1042396052506493532"
            className="text-slate-800 underline"
          >
            UI project
          </a>{" "}
          made by{" "}
          <a
            href="https://www.figma.com/@gphmoinul"
            className="text-slate-800 underline"
          >
            Moinul Hasan
          </a>
        </p>
      </motion.nav>
    </>
  );
}
