import React from "react";
import {
  AiOutlineSearch,
  AiOutlineQuestionCircle,
  AiOutlineBell,
} from "react-icons/ai";
import doctorPicture from "../assets/doctor.jpg";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between text-slate-500 flex-wrap">
      <div className="flex items-center gap-2">
        <AiOutlineSearch className="text-slate-500 sm:text-slate-400 text-2xl" />
        <input
          type="text"
          placeholder="Search for appointments, patients, etc..."
          className="hidden sm:block bg-transparent placeholder:text-slate-400 focus:outline-none placeholder:overflow-ellipsis sm:min-w-[30ch] md:min-w-[35ch]"
        />
      </div>
      <div className="flex items-center gap-6">
        <AiOutlineQuestionCircle className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
        <div className="flex items-center gap-4">
          <img
            src={doctorPicture}
            alt="doctor profile picture"
            className="h-8 rounded-full"
          />
          <div>
            <p className="text-slate-800 font-bold leading-none">
              Stephen Conley
            </p>
            <p className="text-sm">Cardiologist</p>
          </div>
        </div>
      </div>
    </div>
  );
}
