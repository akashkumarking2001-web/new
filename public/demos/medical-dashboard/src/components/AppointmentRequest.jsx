import React from "react";
import {
  AiOutlineArrowRight,
  AiOutlineCheck,
  AiOutlineClose,
} from "react-icons/ai";
import profilePicture from "../assets/doctor.jpg";
import { motion } from "framer-motion";

export default function AppointmentRequest() {
  const requests = [
    {
      first: "Jenny",
      last: "Wilson",
      picture: profilePicture,
      age: 35,
      gender: "female",
      date: new Date(),
      status: "declined",
    },
    {
      first: "Annette",
      last: "Black",
      picture: profilePicture,
      age: 41,
      gender: "female",
      date: new Date(),
      status: "confirmed",
    },
    {
      first: "Annette",
      last: "Black",
      picture: profilePicture,
      age: 41,
      gender: "female",
      date: new Date(),
      status: "confirmed",
    },
    {
      first: "Annette",
      last: "Black",
      picture: profilePicture,
      age: 41,
      gender: "female",
      date: new Date(),
      status: "confirmed",
    },
    {
      first: "Jenny",
      last: "Wilson",
      picture: profilePicture,
      age: 35,
      gender: "female",
      date: new Date(),
      status: "declined",
    },
    {
      first: "Robert",
      last: "Fox",
      picture: profilePicture,
      age: 23,
      gender: "male",
      date: new Date(),
      status: null,
    },
  ];

  const statusClass =
    "ml-auto px-4 py-1 first-letter:uppercase rounded text-sm ";
  const declinedClass = statusClass + "text-red-500 bg-red-100/75";
  const confirmedClass = statusClass + "text-indigo-500 bg-indigo-100/75";

  return (
    <div className="py-1">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl text-slate-800">
          Appointment Request
        </h2>
        <a href="#" className="flex gap-2 items-center text text-sky-400">
          <p>View All</p>
          <AiOutlineArrowRight />
        </a>
      </div>
      <div className="bg-white rounded-xl mt-4 py-2">
        <ul>
          {requests.map((request, index) => (
            <motion.li
              key={`request-${index}`}
              className="flex items-center gap-4 px-4 py-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4 + index * 0.05 },
              }}
            >
              <img
                src={request.picture}
                alt="Picture of requesting person"
                className="h-12 rounded-full"
              />
              <div>
                <p className="text-slate-800 text-lg">
                  {request.first} {request.last}
                </p>
                <p className="text-slate-500 text-sm first-letter:uppercase">
                  {request.gender}, {request.age},{" "}
                  {request.date.toLocaleString([], {
                    month: "numeric",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </p>
              </div>
              {request.status && (
                <p
                  className={
                    request.status === "confirmed"
                      ? confirmedClass
                      : declinedClass
                  }
                >
                  {request.status}
                </p>
              )}
              {!request.status && (
                <div className="ml-auto flex items-center gap-4">
                  <button className="p-1 text-red-500 border rounded-lg border-red-500 ">
                    <AiOutlineClose />
                  </button>
                  <button className="p-1 text-indigo-500 border rounded-lg border-indigo-500 ">
                    <AiOutlineCheck />
                  </button>
                </div>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
