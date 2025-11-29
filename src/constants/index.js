import { sd, smp, smk, polinela, barokahOptik, taskMaster, taskMaster2, ptfortisFortuna, eggMaster, eggMaster2, aniwanTV, wanzzstore } from "../assets/images";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  flutter,
  motion,
  laravel,
  figma,
  nodejs,
  react,
  java,
  wordpress,
  tailwindcss,
  python
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: flutter,
    name: "Flutter",
    type: "Mobile Development",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: laravel,
    name: "Laravel",
    type: "Backend",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "Design",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Mobile Development",
  },
  {
    imageUrl: wordpress,
    name: "Wordpress",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
];

export const experiences = [
  {
    title: "SDN 14 Padang Cermin",
    company_name: "Sekolah Dasar Negeri 14 Padang Cermin",
    icon: sd,
    iconBg: "#accbe1",
    date: "2013 - 2019",
    points: [
      "Belajar dasar Matematika, Bahasa Indonesia, IPA, dan IPS.",
      "Aktif mengikuti kegiatan ekstrakurikuler seperti Pramuka dan lomba kebersihan kelas.",
      "Mengembangkan kemampuan komunikasi dan kerja sama melalui kegiatan kelompok.",
      "Menyelesaikan pendidikan sekolah dasar dengan baik dan disiplin.",
    ],
  },
  {
    title: "SMP Muhammadiyah Ahmad Dahlan Metro",
    company_name: "SMP Mu Ahmad Dahlan Metro",
    icon: smp,
    iconBg: "#accbe1",
    date: "2019 - 2022",
    points: [
      "Belajar mata pelajaran inti seperti Matematika, Bahasa Inggris, IPA, dan Teknologi Informasi.",
      "Aktif mengikuti kegiatan organisasi seperti IPM (Ikatan Pelajar Muhammadiyah) dan ekstrakurikuler HW (Hizbul Wathan).",
      "Mengembangkan keterampilan dasar teknologi dan komputer.",
      "Menyelesaikan pendidikan tingkat menengah pertama dengan disiplin dan prestasi baik.",
    ],
  },
  {
    title: "SMK Telkom Lampung",
    company_name: "Telkom Schools",
    icon: smk,
    iconBg: "#b7e4c7",
    date: "2022 - 2025",
    points: [
      "Mempelajari dasar-dasar pemrograman, jaringan komputer, dan pengembangan perangkat lunak.",
      "Mengerjakan project berbasis website dan aplikasi sebagai bagian dari praktik kejuruan.",
      "Mengikuti kegiatan industri dan pelatihan IT untuk memperdalam keterampilan teknis.",
      "Aktif dalam organisasi dan lomba teknologi untuk meningkatkan soft skill dan kerja tim.",
    ],
  },
  {
    title: "Politeknik Negeri Lampung",
    company_name: "Polinela",
    icon: polinela,
    iconBg: "#a2d2ff",
    date: "2025 - Present",
    points: [
      "Mengikuti perkuliahan dan praktikum dasar mengenai pemrograman, jaringan, dan sistem informasi.",
      "Mempelajari konsep dasar logika informatika, algoritma, dan pengembangan aplikasi sederhana.",
      "Beradaptasi dengan lingkungan akademik dan belajar bekerja dalam tim melalui tugas proyek kelompok.",
      "Mengembangkan minat pada pengembangan web dan teknologi digital melalui organisasi dan pelatihan kampus.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Sedetil",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    imageUrl: barokahOptik,
    theme: "btn-back-red",
    name: "Barokah Optik",
    description:
      "Aplikasi desktop berbasis Flutter untuk mengelola inventori optik kacamata, termasuk stok dan laporan.",
    link: "/soon",
  },
  {
    imageUrl: taskMaster,
    images: [taskMaster, taskMaster2],
    theme: "btn-back-green",
    name: "Task Master",
    description:
      "Website To-Do List berbasis Laravel 11 untuk membantu pengguna mengelola tugas harian dengan mudah dan efisien.",
    link: "https://github.com/Sedetil/TaskMaster",
  },
  {
    imageUrl: ptfortisFortuna,
    theme: "btn-back-blue",
    name: "PT Fortis Fortuna Adiyat",
    description:
      "Website company profile berbasis WordPress untuk menampilkan profil perusahaan, layanan, dan informasi kontak secara responsif dan profesional.",
    link: "https://ptfortisfortunaadiyat.com",
  },
  {
    imageUrl: eggMaster,
    images: [ eggMaster, eggMaster2 ],
    theme: "btn-back-pink",
    name: "Egg Master",
    description:
      "Aplikasi mobile menggunakan Flutter dan Laravel backend untuk menyediakan layanan pembelian telur yang cepat, praktis, dan terjamin kualitasnya.",
    link: "/soon",
  },
  {
    imageUrl: aniwanTV,
    theme: "btn-back-black",
    name: "AniWanTV",
    description:
      "Website streaming anime dan baca komik dengan React dan TypeScript, mengusung UI modern, responsif, dan cepat menggunakan ShadCN UI dan Tailwind CSS.",
    link: "https://aniwan-tv.vercel.app",
  },
  {
    imageUrl: wanzzstore,
    theme: "btn-back-yellow",
    name: "Wanzzstore",
    description:
      "Website top-up game dan voucher digital yang dibangun menggunakan Laravel 8, dengan sistem transaksi otomatis dan antarmuka responsif.",
    link: "https://wanzzstore.com/id",
  },
];
