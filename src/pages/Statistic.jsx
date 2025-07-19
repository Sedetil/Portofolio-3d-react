import React, { useEffect, useState } from "react";
import Statistic from "../components/Statistic";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
} from "recharts";

const projectData = [
  { tahun: "2021", project: 2 },
  { tahun: "2022", project: 4 },
  { tahun: "2023", project: 3 },
  { tahun: "2024", project: 1 },
];

// Data pengalaman
const experienceData = [
  { bidang: "Frontend", tahun: 2 },
  { bidang: "Backend", tahun: 1 },
  { bidang: "UI/UX", tahun: 1 },
];

// Data sertifikat (dari user)
const certificateData = [
  { jenis: "Belajar Dasar Pemrograman Web", jumlah: 1 },
  { jenis: "Belajar Fundamental Front-End Web Development", jumlah: 1 },
  {
    jenis: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    jumlah: 1,
  },
  { jenis: "Belajar Dasar Pemrograman JavaScript", jumlah: 1 },
  { jenis: "Belajar Back-End Pemula dengan JavaScript", jumlah: 1 },
  {
    jenis: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    jumlah: 1,
  },
  { jenis: "Belajar Membuat Front-End Web untuk Pemula", jumlah: 1 },
  { jenis: "Belajar Dasar Git dengan GitHub", jumlah: 1 },
  { jenis: "Dasar-dasar Laravel dan Pengembangan View", jumlah: 1 },
  {
    jenis: "Pengenalan Dasar Backend Developer, Git dan Version Control",
    jumlah: 1,
  },
  { jenis: "Persiapan Pengembangan Laravel", jumlah: 1 },
  { jenis: "Dasar dan Penggunaan Generatif AI", jumlah: 1 },
];

// Data penghargaan
const awardData = [
  { jenis: "Lomba Coding", jumlah: 1 },
  { jenis: "Hackathon", jumlah: 1 },
];

const StatisticPage = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Statistik pengunjung dengan localStorage
    const key = "statistic_visitor_count";
    let count = parseInt(localStorage.getItem(key) || "0", 10);
    count += 1;
    localStorage.setItem(key, count);
    setVisitorCount(count);
  }, []);

  return (
    <section className="max-container flex flex-col items-center justify-center min-h-[60vh] px-2 sm:px-4 md:px-8">
      <h1 className="head-text mb-4 text-center">Statistik & Achievement</h1>
      <p className="text-slate-600 mb-2 text-center max-w-xl">
        Berikut adalah ringkasan pencapaian, pengalaman, dan statistik singkat
        saya di dunia pengembangan perangkat lunak dan teknologi.
      </p>
      <div className="text-xs text-slate-500 mb-6">
        Jumlah Pengunjung Halaman Ini:{" "}
        <span className="font-bold text-blue-700">{visitorCount}</span>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-2xl">
          <Statistic />
        </div>

        {/* Grafik Project */}
        <div className="w-full max-w-2xl mt-8 bg-white/80 rounded-xl shadow p-4 sm:p-6 mb-4">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-center">
            Jumlah Project per Tahun
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={projectData}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="tahun" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="project"
                fill="#3b82f6"
                name="Project"
                barSize={30}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pengalaman Pie Chart */}
        <div className="w-full max-w-2xl mt-4 bg-white/80 rounded-xl shadow p-4 sm:p-6 mb-4">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-center">
            Pengalaman per Bidang
          </h2>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={experienceData}
                dataKey="tahun"
                nameKey="bidang"
                cx="50%"
                cy="50%"
                outerRadius={70}
                fill="#6366f1"
                label
              />
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Sertifikat Google Drive */}
        <div className="w-full max-w-5xl mt-4 bg-white/80 rounded-xl shadow p-4 sm:p-6 mb-12">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">
            Sertifikat Saya
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://drive.google.com/file/d/18XFLGmNTHfHjHzRUK-Lq-mj2RaZUGM67/preview",
              "https://drive.google.com/file/d/1wk6QG6gMdyRFr3innEQFR5JQrD3dbnJQ/preview",
              "https://drive.google.com/file/d/1BHxP70j_uFT9683GTKGf5Te0n7GpaK4w/preview",
              "https://drive.google.com/file/d/1RWX6S1kMvluYTu3yzQik-ulitAwIyqmN/preview",
              "https://drive.google.com/file/d/1p6iHJ9HTnup1_uJNGRmwZ12KEuK2sq0d/preview",
              "https://drive.google.com/file/d/1_gXxa3_MTJKf9rKe4EMzBszQoawejMNU/preview",
              "https://drive.google.com/file/d/1pU2G6ARxE8d-Gq31KrPyJKx8i0cZeza1/preview",
              "https://drive.google.com/file/d/1hdhNe0vjAQUBUb7doWXktU3fzMIrBCvk/preview",
              "https://drive.google.com/file/d/12Utvqh477w6ZTm7xj84Wpft49BaskM37/preview",
              "https://drive.google.com/file/d/1BNyZpYFmhCYt49eQ4HQ5A1JsOL2DCacL/preview",
              "https://drive.google.com/file/d/11cM8WW68tzk0Xu8Akf-w4HJxdDtIL06y/preview",
              "https://drive.google.com/file/d/1M40j6-vf80fSxiDNBH7RrzsRsOwsEALI/preview",
              "https://drive.google.com/file/d/17Kae4kkLSZ_z9Q_IAVM9Y3Kdt_l-WL4o/preview",
            ].map((src, idx) => (
              <div key={src} className="flex flex-col items-center w-full">
                <div className="w-full max-w-[320px] aspect-[16/11] rounded-lg overflow-hidden shadow border border-slate-200 bg-white">
                  <iframe
                    src={src}
                    width="100%"
                    height="100%"
                    allow="autoplay"
                    title={`Sertifikat ${idx + 1}`}
                    style={{ width: "100%", height: "100%", border: "none" }}
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Penghargaan Pie Chart */}
        <div className="w-full max-w-2xl mt-4 bg-white/80 rounded-xl shadow p-4 sm:p-6 mb-12">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-center">
            Penghargaan per Jenis
          </h2>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={awardData}
                dataKey="jumlah"
                nameKey="jenis"
                cx="50%"
                cy="50%"
                outerRadius={70}
                fill="#f59e42"
                label
              />
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default StatisticPage;
