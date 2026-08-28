import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "New Arrivals", path: "/new-arrivals", hot: true },
    { name: "Sale", path: "/sale" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenu]);

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="fixed left-0 right-0 top-0 z-[100] px-3 pt-3 sm:px-5 lg:px-8">
        <div
          className={`
            mx-auto max-w-[1450px]
            overflow-hidden rounded-[22px]
            border
            transition-all duration-500
            ${
              darkMode
                ? "border-white/[0.08] bg-zinc-950/80 text-white"
                : "border-black/[0.07] bg-white/80 text-zinc-950"
            }
            ${
              scrolled
                ? "shadow-2xl backdrop-blur-2xl"
                : "shadow-xl backdrop-blur-xl"
            }
          `}
        >
          {/* =================================================
              TOP PREMIUM BAR
          ================================================== */}

          <div
            className={`
              flex items-center justify-center gap-2
              border-b px-4 py-2
              text-[9px] font-bold uppercase tracking-[0.25em]
              sm:text-[10px]
              ${
                darkMode
                  ? "border-white/[0.06] bg-white/[0.02] text-zinc-400"
                  : "border-black/[0.05] bg-black/[0.015] text-zinc-500"
              }
            `}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />

            <span>Pakistan's Premium Men's Fashion</span>

            <span className="hidden text-orange-500 sm:inline">
              •
            </span>

            <span className="hidden sm:inline">
              Free Shipping Over Rs. 10,000
            </span>
          </div>

          {/* =================================================
              MAIN NAV
          ================================================== */}

          <div className="relative flex h-[76px] items-center justify-between px-4 sm:px-6 lg:px-8">

            {/* GLOW */}
            <div className="pointer-events-none absolute left-[15%] top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />

            {/* =================================================
                LOGO
            ================================================== */}

            <Link
              to="/"
              onClick={closeMenu}
              className="group relative z-10 shrink-0"
            >
              <div className="flex items-center gap-3">

                {/* LOGO MARK */}

                <div
                  className={`
                    relative flex h-11 w-11 items-center justify-center
                    overflow-hidden rounded-xl
                    border
                    transition-all duration-500
                    group-hover:rotate-3 group-hover:scale-105
                    ${
                      darkMode
                        ? "border-white/10 bg-white/[0.04]"
                        : "border-black/10 bg-black/[0.03]"
                    }
                  `}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <span className="relative text-lg font-black tracking-tighter">
                    L<span className="text-orange-500">M</span>
                  </span>
                </div>

                {/* BRAND */}

                <div className="leading-none">
                  <h1 className="text-[22px] font-black tracking-[-0.08em] sm:text-[25px]">
                    LUXE
                    <span className="font-light text-orange-500">
                      MEN
                    </span>
                  </h1>

                  <div className="mt-1 flex items-center gap-2">
                    <span
                      className={`h-px w-5 ${
                        darkMode
                          ? "bg-zinc-700"
                          : "bg-zinc-300"
                      }`}
                    />

                    <span
                      className={`text-[7px] font-bold tracking-[0.35em] ${
                        darkMode
                          ? "text-zinc-500"
                          : "text-zinc-400"
                      }`}
                    >
                      EST. 2026
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* =================================================
                DESKTOP NAV
            ================================================== */}

            <nav
              className={`
                absolute left-1/2 hidden -translate-x-1/2
                items-center gap-1 rounded-full p-1
                lg:flex
                ${
                  darkMode
                    ? "bg-white/[0.04]"
                    : "bg-black/[0.035]"
                }
              `}
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `
                    group relative rounded-full px-4 py-2.5
                    text-[12px] font-semibold tracking-wide
                    transition-all duration-300
                    ${
                      isActive
                        ? darkMode
                          ? "bg-white text-black shadow-lg"
                          : "bg-zinc-950 text-white shadow-lg"
                        : darkMode
                        ? "text-zinc-400 hover:bg-white/[0.07] hover:text-white"
                        : "text-zinc-600 hover:bg-white hover:text-black"
                    }
                    `
                  }
                >
                  {({ isActive }) => (
                    <span className="relative flex items-center gap-1.5">
                      {link.name}

                      {link.hot && (
                        <span
                          className={`
                            absolute -right-1 -top-2
                            rounded-full px-1.5 py-0.5
                            text-[6px] font-black
                            ${
                              isActive
                                ? "bg-orange-500 text-white"
                                : "bg-orange-500 text-white"
                            }
                          `}
                        >
                          NEW
                        </span>
                      )}
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* =================================================
                RIGHT SIDE
            ================================================== */}

            <div className="relative z-10 flex items-center gap-1.5">

              {/* LOCATION */}

              <div
                className={`
                  hidden items-center gap-2 rounded-full
                  px-3 py-2.5
                  xl:flex
                  ${
                    darkMode
                      ? "bg-white/[0.04]"
                      : "bg-black/[0.035]"
                  }
                `}
              >
                <svg
                  className="h-3.5 w-3.5 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                >
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>

                <span className="text-[10px] font-semibold">
                  Pakistan
                </span>
              </div>

              {/* SEARCH */}

              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`
                  flex h-10 w-10 items-center justify-center
                  rounded-full transition-all duration-300
                  ${
                    darkMode
                      ? "hover:bg-white/[0.08]"
                      : "hover:bg-black/[0.06]"
                  }
                `}
                aria-label="Search"
              >
                {searchOpen ? (
                  <svg
                    className="h-[18px] w-[18px]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                  >
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                ) : (
                  <svg
                    className="h-[18px] w-[18px]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-4-4" />
                  </svg>
                )}
              </button>

              {/* WISHLIST */}

              <Link
                to="/wishlist"
                className={`
                  hidden h-10 w-10 items-center justify-center
                  rounded-full transition-all duration-300 sm:flex
                  ${
                    darkMode
                      ? "hover:bg-white/[0.08]"
                      : "hover:bg-black/[0.06]"
                  }
                `}
                aria-label="Wishlist"
              >
                <svg
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                >
                  <path d="M20.8 8.6c0 5.4-8.8 10.4-8.8 10.4S3.2 14 3.2 8.6A4.6 4.6 0 0 1 12 6.3a4.6 4.6 0 0 1 8.8 2.3Z" />
                </svg>
              </Link>

              {/* CART */}

              <Link
                to="/cart"
                className="
                  group relative flex h-10 w-10
                  items-center justify-center
                  rounded-full bg-orange-500
                  text-white shadow-lg shadow-orange-500/20
                  transition-all duration-300
                  hover:scale-105 hover:bg-orange-600
                "
                aria-label="Shopping cart"
              >
                <svg
                  className="h-[18px] w-[18px] transition-transform duration-300 group-hover:-rotate-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                >
                  <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.5L21 8H6" />
                  <circle cx="10" cy="20" r="1" />
                  <circle cx="18" cy="20" r="1" />
                </svg>

                <span
                  className="
                    absolute -right-1 -top-1 flex h-4 min-w-4
                    items-center justify-center rounded-full
                    border-2 border-orange-500 bg-zinc-950
                    px-1 text-[8px] font-black text-white
                  "
                >
                  0
                </span>
              </Link>

              {/* DARK MODE */}

              <button
                onClick={() => setDarkMode?.(!darkMode)}
                className={`
                  hidden h-10 w-10 items-center justify-center
                  rounded-full transition-all duration-300 sm:flex
                  ${
                    darkMode
                      ? "hover:bg-white/[0.08]"
                      : "hover:bg-black/[0.06]"
                  }
                `}
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <svg
                    className="h-[18px] w-[18px]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                  </svg>
                ) : (
                  <svg
                    className="h-[18px] w-[18px]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                  >
                    <path d="M21 15.8A9 9 0 1 1 8.2 3 7 7 0 0 0 21 15.8Z" />
                  </svg>
                )}
              </button>

              {/* MOBILE */}

              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className={`
                  flex h-10 w-10 items-center justify-center
                  rounded-full transition-all duration-300 lg:hidden
                  ${
                    darkMode
                      ? "hover:bg-white/[0.08]"
                      : "hover:bg-black/[0.06]"
                  }
                `}
                aria-label="Menu"
              >
                {mobileMenu ? (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* =================================================
              SEARCH
          ================================================== */}

          <div
            className={`
              overflow-hidden transition-all duration-500
              ${
                searchOpen
                  ? "max-h-28 opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <div className="px-4 pb-4 sm:px-6 lg:px-8">
              <div
                className={`
                  flex items-center gap-3 rounded-2xl
                  border px-4 py-3
                  ${
                    darkMode
                      ? "border-white/[0.08] bg-white/[0.03]"
                      : "border-black/[0.06] bg-black/[0.025]"
                  }
                `}
              >
                <svg
                  className="h-5 w-5 shrink-0 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-4-4" />
                </svg>

                <input
                  autoFocus={searchOpen}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search premium men's fashion..."
                  className={`
                    w-full bg-transparent text-sm outline-none
                    ${
                      darkMode
                        ? "text-white placeholder:text-zinc-600"
                        : "text-zinc-900 placeholder:text-zinc-400"
                    }
                  `}
                />

                <span className="hidden text-[9px] font-bold uppercase tracking-widest text-zinc-500 sm:block">
                  Search
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE FULLSCREEN MENU
      ====================================================== */}

      <div
        className={`
          fixed inset-0 z-[90] lg:hidden
          transition-all duration-500
          ${
            mobileMenu
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      >
        {/* BACKDROP */}

        <div
          onClick={closeMenu}
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* MENU */}

        <div
          className={`
            absolute bottom-3 left-3 right-3 top-[96px]
            overflow-y-auto rounded-[28px]
            border p-6
            transition-all duration-500
            ${
              mobileMenu
                ? "translate-y-0 scale-100"
                : "translate-y-8 scale-95"
            }
            ${
              darkMode
                ? "border-white/[0.08] bg-zinc-950"
                : "border-black/[0.08] bg-white"
            }
          `}
        >
          {/* MENU HEADER */}

          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.3em] text-orange-500">
                Explore
              </p>

              <h2 className="text-3xl font-black tracking-tight">
                The Collection
              </h2>
            </div>

            <span className="text-xs text-zinc-500">
              01 — 05
            </span>
          </div>

          {/* LINKS */}

          <div className="space-y-2">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `
                  group flex items-center justify-between
                  rounded-2xl px-4 py-4
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : darkMode
                      ? "hover:bg-white/[0.05]"
                      : "hover:bg-black/[0.04]"
                  }
                  `
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-[9px] font-bold ${
                          isActive
                            ? "text-white/60"
                            : "text-zinc-500"
                        }`}
                      >
                        0{index + 1}
                      </span>

                      <span className="text-lg font-bold">
                        {link.name}
                      </span>
                    </div>

                    <svg
                      className={`
                        h-5 w-5 transition-transform duration-300
                        ${
                          isActive
                            ? "translate-x-0"
                            : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }
                      `}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.8"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* BOTTOM */}

          <div
            className={`
              mt-8 grid grid-cols-2 gap-3 border-t pt-6
              ${
                darkMode
                  ? "border-white/[0.08]"
                  : "border-black/[0.08]"
              }
            `}
          >
            <Link
              to="/wishlist"
              onClick={closeMenu}
              className={`
                rounded-2xl p-4 text-center text-sm font-bold
                ${
                  darkMode
                    ? "bg-white/[0.05]"
                    : "bg-black/[0.04]"
                }
              `}
            >
              ♡ Wishlist
            </Link>

            <button
              onClick={() => setDarkMode?.(!darkMode)}
              className={`
                rounded-2xl p-4 text-sm font-bold
                ${
                  darkMode
                    ? "bg-white/[0.05]"
                    : "bg-black/[0.04]"
                }
              `}
            >
              {darkMode ? "☀ Light" : "◐ Dark"}
            </button>
          </div>

          {/* BRAND FOOTER */}

          <div className="mt-10 text-center">
            <p className="text-2xl font-black tracking-[-0.08em]">
              LUXE
              <span className="font-light text-orange-500">
                MEN
              </span>
            </p>

            <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.4em] text-zinc-500">
              Wear Your Confidence
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          SPACER
      ====================================================== */}

      <div className="h-[112px] sm:h-[115px]" />
    </>
  );
};

export default Navbar;