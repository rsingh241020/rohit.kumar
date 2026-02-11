import { useEffect, useRef } from "react";
import Typed from "typed.js";
import profile from "../assets/img/Rohit_pic.png";

import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Home() {

  const textRef = useRef(null);

  /* ===== TYPED EFFECT ===== */
  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [
        "I build business websites",
        "I develop full-stack web apps",
        "I create analytics dashboards",
        "Available for freelance projects",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-8 py-20"
    >

      {/* ===== IMAGE ===== */}
      <div>
        <img
          src={profile}
          alt="Rohit Kumar"
          className="w-64 md:w-80 rounded-2xl shadow-xl hover:scale-105 transition"
        />
      </div>


      {/* ===== CONTENT ===== */}
      <div className="text-center md:text-left max-w-2xl">

        {/* Greeting */}
        <h3 className="text-xl md:text-2xl mb-2">
          Hello & Welcome!
        </h3>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold mb-3">
          I'm Rohit Kumar
        </h1>

        {/* Headline */}
        <h3 className="text-xl md:text-2xl mb-2 text-gray-700">
          Freelance Full-Stack Developer & Data Analyst
        </h3>

        {/* Typed Text */}
        <h3 className="text-2xl md:text-3xl mb-4">
          <span
            ref={textRef}
            className="text-teal-600 font-semibold"
          ></span>
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          I’m a Freelance Full-Stack Developer & Data Analyst
          helping startups and businesses build scalable web
          applications and analytics dashboards using modern
          technologies.
        </p>


        {/* ===== SOCIAL MEDIA ===== */}
        <div className="flex gap-5 mt-6 justify-center md:justify-start text-2xl">

          <a
            href="https://www.linkedin.com/in/itsrohitsingh24/"
            target="_blank"
            className="text-teal-600 hover:scale-125 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/rsingh241020"
            target="_blank"
            className="text-teal-600 hover:scale-125 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://x.com/rsingh241020"
            target="_blank"
            className="text-teal-600 hover:scale-125 transition"
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.instagram.com/its_rsingh24"
            target="_blank"
            className="text-teal-600 hover:scale-125 transition"
          >
            <FaInstagram />
          </a>

        </div>


        {/* ===== CTA BUTTONS ===== */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">

          {/* Hire Me → Contact */}
          <a
            href="#contact"
            className="bg-teal-600 text-white px-6 py-2 rounded-full shadow hover:bg-teal-700 transition text-center"
          >
            Hire Me
          </a>


          {/* Get Quote → WhatsApp */}
          <a
            href="https://wa.me/919876543210?text=Hi%20Rohit,%20I%20want%20a%20project%20quote"
            target="_blank"
            className="border border-teal-600 text-teal-600 px-6 py-2 rounded-full hover:bg-teal-600 hover:text-white transition text-center"
          >
            Get Quote
          </a>


          {/* View Projects */}
          <a
            href="#projects"
            className="bg-gray-900 text-white px-6 py-2 rounded-full shadow hover:bg-black transition text-center"
          >
            View Projects
          </a>

        </div>

      </div>

    </section>
  );
}
