import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-teal-600 text-white px-8 py-10">

      <div className="max-w-6xl mx-auto text-center">

        {/* ===== NAME + ROLE ===== */}
        <h3 className="text-2xl font-bold">
          Rohit Kumar
        </h3>

        <p className="text-sm opacity-90 mt-1">
          Freelance Full-Stack Developer & Data Analyst
        </p>


        {/* ===== QUICK LINKS ===== */}
        <div className="flex justify-center gap-6 mt-6 text-sm">

          <a href="#home" className="hover:underline">
            Home
          </a>

          <a href="#services" className="hover:underline">
            Services
          </a>

          <a href="#projects" className="hover:underline">
            Projects
          </a>

          <a href="#contact" className="hover:underline">
            Contact
          </a>

        </div>


        {/* ===== SOCIAL ICONS ===== */}
        <div className="flex justify-center gap-6 mt-6 text-xl">

          <a
            href="https://www.linkedin.com/in/itsrohitsingh24/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/rsingh241020"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/its_rsingh24"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://x.com/rsingh241020"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition"
          >
            <FaTwitter />
          </a>

        </div>


        {/* ===== AVAILABILITY LINE ===== */}
        <p className="mt-6 text-sm opacity-90">
          Available for Freelance Projects • Let’s Work Together
        </p>


        {/* ===== COPYRIGHT ===== */}
        <p className="mt-4 text-xs opacity-80">
          © {new Date().getFullYear()} Rohit Kumar. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}
