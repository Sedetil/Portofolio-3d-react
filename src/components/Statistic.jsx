import React from "react";
import {
  FaAward,
  FaBriefcase,
  FaCertificate,
  FaFolderOpen,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaFolderOpen className="text-3xl text-blue-500" />,
    label: "Project",
    value: "10+",
  },
  {
    icon: <FaBriefcase className="text-3xl text-green-500" />,
    label: "Tahun Pengalaman",
    value: "3",
  },
  {
    icon: <FaCertificate className="text-3xl text-yellow-500" />,
    label: "Sertifikat",
    value: "12",
  },
  {
    icon: <FaAward className="text-3xl text-purple-500" />,
    label: "Penghargaan",
    value: "2",
  },
];

const Statistic = () => (
  <div className="w-full flex flex-wrap justify-center gap-8 my-8">
    {stats.map((stat, idx) => (
      <div
        key={stat.label}
        className="flex flex-col items-center bg-white/80 rounded-xl shadow-lg px-6 py-4 min-w-[120px]"
      >
        {stat.icon}
        <span className="text-2xl font-bold mt-2">{stat.value}</span>
        <span className="text-sm text-slate-600 mt-1">{stat.label}</span>
      </div>
    ))}
  </div>
);

export default Statistic;
