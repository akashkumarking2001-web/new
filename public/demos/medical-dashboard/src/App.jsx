import "./App.css";
import Menu from "./components/Menu";
import TopBar from "./components/TopBar";
import MainStatistics from "./components/MainStatistics";
import AppointmentRequest from "./components/AppointmentRequest";
import PatientStatistics from "./components/PatientStatistics";
import GenderStatistics from "./components/GenderStatistics";
import TodayAppointments from "./components/TodayAppointments";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      className="flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
    >
      <div className="hidden lg:block bg-white min-w-[250px] px-4 py-6">
        <Menu />
      </div>
      <div className="bg-slate-100 w-full min-h-screen px-8 py-4">
        <TopBar />
        <p className="text-slate-800 text-2xl font-bold mt-10">
          Welcome, Dr. Stephen
        </p>
        <p className="text-slate-500">Have a nice day at great work</p>
        <MainStatistics />
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] xl:grid-cols-[4fr_3fr_3fr] mt-8 gap-8">
          <AppointmentRequest />
          <div>
            <PatientStatistics />
            <GenderStatistics />
          </div>
          <TodayAppointments />
        </div>
      </div>
    </motion.div>
  );
}

export default App;
