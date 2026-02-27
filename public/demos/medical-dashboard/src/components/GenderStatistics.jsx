import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function GenderStatistics() {
  const data = {
    labels: ["Male", "Female", "Child"],
    datasets: [
      {
        label: "Patients",
        data: [45, 30, 25],
        backgroundColor: ["#f97316", "#6366f1", "#0ea5e9"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
  };

  const chartRef = React.useRef();

  function handleChange() {
    const chart = chartRef.current;
    chart.data.datasets[0].data = [
      Math.floor(Math.random() * 100) + 1,
      Math.floor(Math.random() * 100) + 1,
      Math.floor(Math.random() * 100) + 1,
    ];
    chart.update();
  }

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl text-slate-800">Gender</h2>
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
      <div className="bg-white rounded-xl mt-4 py-4">
        <motion.div
          className="max-w-[250px] m-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5 },
          }}
        >
          <Doughnut data={data} options={options} ref={chartRef} />
        </motion.div>
      </div>
    </div>
  );
}
