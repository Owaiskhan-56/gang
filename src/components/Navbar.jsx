import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav
      className={`sticky top-0 z-50 border-b backdrop-blur-md ${
        darkMode
          ? "border-zinc-800 bg-zinc-950/95 text-white"
          : "border-gray-200 bg-white/95 text-zinc-900"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-[0.25em]"
        >
          LUXE<span className="font-light">WOMEN</span>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden items-center gap-9 md:flex">

          <Link
            to="/"
            className="transition hover:text-gray-500"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="transition hover:text-gray-500"
          >
            Shop
          </Link>

          <Link
            to="/new-arrivals"
            className="transition hover:text-gray-500"
          >
            New Arrivals
          </Link>

          <Link
            to="/sale"
            className="transition hover:text-gray-500"
          >
            Sale
          </Link>

          <Link
            to="/contact"
            className="transition hover:text-gray-500"
          >
            Contact
          </Link>

        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-3">

          {/* SEARCH */}
          <Link
            to="/shop"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300"
          >
            ⌕
          </Link>

          {/* CART */}
          <button
            onClick={() => alert("Your shopping bag is empty.")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300"
          >
            🛍
          </button>

          {/* DARK MODE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white"
          >
            {darkMode ? "☀" : "☾"}
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;