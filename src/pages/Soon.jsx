import { Link } from "react-router-dom";
import CTA from "../components/CTA";

const Soon = () => {
  return (
    <section className="max-container flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="head-text">
        <span className="blue-gradient_text font-semibold drop-shadow">
          Coming Soon
        </span>
      </h1>

      <p className="mt-4 text-slate-600 max-w-xl">
        Halaman ini sedang dalam proses pengembangan. Live demo akan segera tersedia.
      </p>

      <div className="mt-8 w-full max-w-xl glassmorphism p-6">
        <div className="text-slate-700">
          Sementara menunggu, kamu bisa jelajahi halaman lain.
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link to="/projects" className="btn">
            Lihat Projects
          </Link>
          <Link to="/about" className="btn">
            Tentang Saya
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Soon;
