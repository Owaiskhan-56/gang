import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode, cartCount = 0 }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const location = useLocation();

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Shop",
      path: "/shop",
    },
    {
      name: "New Arrivals",
      path: "/new-arrivals",
    },
    {
      name: "Sale",
      path: "/sale",
      sale: true,
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`sticky top-0 z-50 border-b backdrop-blur-md ${
        darkMode
          ? "border-zinc-800 bg-zinc-950/95 text-white"
          : "border-gray-200 bg-white/95 text-zinc-900"
      }`}
    >
      {/* ================= NAVBAR ================= */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          onClick={() => setMobileMenu(false)}
          className="text-2xl font-bold tracking-[0.25em]"
        >
          LUXE
          <span className="font-light">MEN</span>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative py-2 text-sm font-medium transition ${
                isActive(link.path)
                  ? "font-bold"
                  : "hover:text-gray-500"
              }`}
            >
              {link.name}

              {/* ACTIVE LINE */}
              {isActive(link.path) && (
                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-full ${
                    darkMode ? "bg-white" : "bg-black"
                  }`}
                />
              )}

              {/* SALE DOT */}
              {link.sale && (
                <span className="absolute -right-3 -top-1 h-2 w-2 rounded-full bg-red-500" />
              )}
            </Link>
          ))}
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-2">

          {/* SEARCH */}
          <Link
            to="/shop"
            title="Search"
            className={`flex h-10 w-10 items-center justify-center rounded-full border text-lg transition hover:scale-105 ${
              darkMode
                ? "border-zinc-700 hover:bg-zinc-800"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            ⌕
          </Link>

          {/* CART */}
          <Link
            to="/cart"
            title="Shopping Bag"
            className={`relative flex h-10 w-10 items-center justify-center rounded-full border text-lg transition hover:scale-105 ${
              darkMode
                ? "border-zinc-700 hover:bg-zinc-800"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            🛍

            {/* CART COUNT */}
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-bold text-white">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>

          {/* DARK MODE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            title={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            className={`flex h-10 w-10 items-center justify-center rounded-full text-lg transition hover:scale-105 ${
              darkMode
                ? "bg-white text-black"
                : "bg-black text-white"
            }`}
          >
            {darkMode ? "☀" : "☾"}
          </button>

          {/* MOBILE MENU */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle menu"
            className={`ml-1 flex h-10 w-10 items-center justify-center rounded-full border text-lg md:hidden ${
              darkMode
                ? "border-zinc-700 hover:bg-zinc-800"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            {mobileMenu ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div
          className={`border-t px-6 py-6 md:hidden ${
            darkMode
              ? "border-zinc-800 bg-zinc-950"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="flex flex-col gap-2">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenu(false)}
                className={`rounded-xl px-4 py-3 font-medium transition ${
                  isActive(link.path)
                    ? darkMode
                      ? "bg-zinc-800 text-white"
                      : "bg-gray-100 text-black"
                    : darkMode
                      ? "hover:bg-zinc-800"
                      : "hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center justify-between">

                  <span>{link.name}</span>

                  {link.sale && (
                    <span className="rounded-full bg-red-500 px-2 py-1 text-[10px] font-bold text-white">
                      SALE
                    </span>
                  )}

                </div>
              </Link>
            ))}

            {/* MOBILE CART */}
            <Link
              to="/cart"
              onClick={() => setMobileMenu(false)}
              className={`mt-2 flex items-center justify-between rounded-xl px-4 py-3 font-medium ${
                darkMode
                  ? "bg-zinc-800"
                  : "bg-gray-100"
              }`}
            >
              <span>🛍 Shopping Bag</span>

              <span
                className={
                  darkMode
                    ? "text-gray-400"
                    : "text-gray-500"
                }
              >
                ({cartCount})
              </span>
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;