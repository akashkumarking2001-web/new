import React, { useState } from "react";
import {
  AiOutlineUser,
  AiOutlineRise,
  AiOutlineFall,
  AiOutlineCaretDown,
} from "react-icons/ai";
import { motion } from "framer-motion";

export default function PatientStatistics() {
  const allStats = [
    {
      year: 2023,
      data: [
        {
          value: "24.4k",
          description: "New Patient",
          change: 15,
          color: "text-sky-500",
          bgColor: "bg-sky-500/10",
        },
        {
          value: "166.3k",
          description: "Old Patient",
          change: -3,
          color: "text-orange-500",
          bgColor: "bg-orange-500/10",
        },
      ],
    },
    {
      year: 2022,
      data: [
        {
          value: "22.7k",
          description: "New Patient",
          change: 7,
          color: "text-sky-500",
          bgColor: "bg-sky-500/10",
        },
        {
          value: "168.7k",
          description: "Old Patient",
          change: 1,
          color: "text-orange-500",
          bgColor: "bg-orange-500/10",
        },
      ],
    },
    {
      year: 2021,
      data: [
        {
          value: "20.3k",
          description: "New Patient",
          change: 4,
          color: "text-sky-500",
          bgColor: "bg-sky-500/10",
        },
        {
          value: "152.4k",
          description: "Old Patient",
          change: 5,
          color: "text-orange-500",
          bgColor: "bg-orange-500/10",
        },
      ],
    },
    {
      year: 2020,
      data: [
        {
          value: "18.0k",
          description: "New Patient",
          change: 10,
          color: "text-sky-500",
          bgColor: "bg-sky-500/10",
        },
        {
          value: "147.5k",
          description: "Old Patient",
          change: 6,
          color: "text-orange-500",
          bgColor: "bg-orange-500/10",
        },
      ],
    },
  ];

  const [stats, setStats] = useState(allStats[0].data);

  function handleChange(e) {
    const newStat = allStats.find((stat) => stat.year == e.target.value);
    setStats(newStat.data);
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl text-slate-800">Patients</h2>
        <div className="bg-white px-3 py-1 rounded-xl flex items-center text-slate-400 gap-1">
          <select
            name="patient-stats-year"
            className="appearance-none bg-transparent focus:outline-none"
            onChange={handleChange}
          >
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
          <AiOutlineCaretDown />
        </div>
      </div>
      <div className="bg-white rounded-xl mt-4 py-2">
        <ul>
          {stats.map((stat, index) => (
            <motion.div
              key={`patient-stats-${index}`}
              className="flex items-center gap-4 px-4 py-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4 + index * 0.05 },
              }}
            >
              <div
                className={`${stat.color} ${stat.bgColor} text-3xl p-4 rounded-full text-`}
              >
                <AiOutlineUser />
              </div>
              <div>
                <p className="text-slate-800 font-bold text-2xl">
                  {stat.value}
                </p>
                <p className="text-slate-500">{stat.description}</p>
              </div>
              <div
                className={`${
                  stat.change >= 0 ? "text-indigo-500" : "text-red-500"
                } self-start ml-auto flex items-center gap-1 font-medium mt-1`}
              >
                {stat.change >= 0 ? <AiOutlineRise /> : <AiOutlineFall />}
                <p>{stat.change}%</p>
              </div>
            </motion.div>
          ))}
        </ul>
      </div>
    </div>
  );
}
