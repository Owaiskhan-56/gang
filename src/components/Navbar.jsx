import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Search,
  Heart,
  ShoppingBag,
  Moon,
  Sun,
  Menu,
  X,
  UserRound,
} from "lucide-react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Sale", path: "/sale" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        darkMode
          ? "border-zinc-800 bg-zinc-950/95 text-white"
          : "border-gray-200 bg-white/95 text-zinc-900"
      }`}
    >
      {/* Top Announcement Bar */}
      <div
        className={`hidden text-center text-[11px] font-medium tracking-[0.2em] sm:block ${
          darkMode
            ? "bg-white text-black"
            : "bg-zinc-950 text-white"
        }`}
      >
        FREE SHIPPING ON ORDERS OVER RS. 10,000
      </div>

      {/* Main Navbar */}
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 md:px-8">

        {/* LOGO */}
        <NavLink
          to="/"
          className="group flex items-center"
        >
          <div className="leading-none">
            <h1 className="text-[24px] font-semibold tracking-[0.32em]">
              LUXE
              <span className="font-light">MEN</span>
            </h1>

            <p
              className={`mt-1 text-[8px] tracking-[0.42em] transition ${
                darkMode ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              MEN'S LUXURY WEAR
            </p>
          </div>
        </NavLink>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative py-7 text-[14px] font-medium transition-all duration-300 ${
                  isActive
                    ? darkMode
                      ? "text-white"
                      : "text-black"
                    : darkMode
                    ? "text-zinc-400 hover:text-white"
                    : "text-zinc-600 hover:text-black"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {/* Active underline */}
                  <span
                    className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 transition-all duration-300 ${
                      isActive
                        ? "w-full bg-red-500"
                        : "w-0 bg-red-500"
                    }`}
                  />

                  {/* Sale dot */}
                  {link.name === "Sale" && (
                    <span className="absolute -right-2 -top-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2">

          {/* SEARCH */}
          <div className="relative hidden sm:block">
            {searchOpen && (
              <input
                autoFocus
                type="text"
                placeholder="Search products..."
                className={`absolute right-12 top-1/2 w-52 -translate-y-1/2 rounded-full border px-4 py-2 text-sm outline-none transition-all ${
                  darkMode
                    ? "border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-500"
                    : "border-gray-200 bg-white text-black placeholder:text-gray-400"
                }`}
              />
            )}

            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "border-zinc-700 hover:bg-zinc-800"
                  : "border-gray-200 hover:bg-gray-100"
              }`}
              aria-label="Search"
            >
              <Search size={17} strokeWidth={1.8} />
            </button>
          </div>

          {/* USER */}
          <button
            className={`hidden h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:scale-105 sm:flex ${
              darkMode
                ? "border-zinc-700 hover:bg-zinc-800"
                : "border-gray-200 hover:bg-gray-100"
            }`}
            aria-label="Account"
          >
            <UserRound size={17} strokeWidth={1.8} />
          </button>

          {/* WISHLIST */}
          <button
            className={`relative hidden h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:scale-105 sm:flex ${
              darkMode
                ? "border-zinc-700 hover:bg-zinc-800"
                : "border-gray-200 hover:bg-gray-100"
            }`}
            aria-label="Wishlist"
          >
            <Heart size={17} strokeWidth={1.8} />

            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
              2
            </span>
          </button>

          {/* SHOPPING BAG */}
          <button
            className={`relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "border-zinc-700 hover:bg-zinc-800"
                : "border-gray-200 hover:bg-gray-100"
            }`}
            aria-label="Shopping bag"
          >
            <ShoppingBag size={17} strokeWidth={1.8} />

            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
              3
            </span>
          </button>

          {/* DARK MODE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "bg-white text-black"
                : "bg-black text-white"
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <Sun size={17} strokeWidth={1.8} />
            ) : (
              <Moon size={17} strokeWidth={1.8} />
            )}
          </button>

          {/* MOBILE MENU */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className={`ml-1 flex h-10 w-10 items-center justify-center rounded-full border lg:hidden ${
              darkMode
                ? "border-zinc-700"
                : "border-gray-200"
            }`}
            aria-label="Menu"
          >
            {mobileMenu ? (
              <X size={19} />
            ) : (
              <Menu size={19} />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE NAVIGATION */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileMenu ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`border-t px-6 py-5 ${
            darkMode
              ? "border-zinc-800 bg-zinc-950"
              : "border-gray-100 bg-white"
          }`}
        >
          {/* Mobile Search */}
          <div className="relative mb-5">
            <Search
              size={17}
              className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                darkMode ? "text-zinc-500" : "text-gray-400"
              }`}
            />

            <input
              type="text"
              placeholder="Search men's clothing..."
              className={`w-full rounded-full border py-3 pl-11 pr-4 text-sm outline-none ${
                darkMode
                  ? "border-zinc-700 bg-zinc-900 text-white"
                  : "border-gray-200 bg-gray-50 text-black"
              }`}
            />
          </div>

          {/* Mobile Links */}
          <div className="space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenu(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? darkMode
                        ? "bg-white text-black"
                        : "bg-black text-white"
                      : darkMode
                      ? "text-zinc-300 hover:bg-zinc-900"
                      : "text-zinc-700 hover:bg-gray-100"
                  }`
                }
              >
                {link.name}

                {link.name === "Sale" && (
                  <span className="rounded-full bg-red-500 px-2 py-0.5 text-[9px] font-bold text-white">
                    SALE
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Account */}
          <div className="mt-4 flex gap-2 border-t pt-4 dark:border-zinc-800">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border py-3 text-sm">
              <UserRound size={16} />
              Account
            </button>

            <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border py-3 text-sm">
              <Heart size={16} />
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;