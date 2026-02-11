import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all ${
        sticky ? "shadow-lg bg-teal-700" : "bg-teal-600"
      }`}
    >
      <div className="flex justify-between items-center px-8 py-4 text-white">

        <h1 className="text-2xl font-bold">Rohit.</h1>

        {/* Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>

        {/* Navbar */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-teal-600 md:bg-transparent flex flex-col md:flex-row gap-6 p-6 md:p-0 transition-all ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

      </div>
    </header>
  );
}
