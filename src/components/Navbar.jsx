import React, { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

/* =========================================================
   LUXEMEN VIP NAVBAR
   Premium Men's Fashion — 2026
========================================================= */

const Navbar = ({ darkMode, setDarkMode }) => {
  /* =========================================================
     STATE
  ========================================================= */

  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [accountOpen, setAccountOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [searchFocused, setSearchFocused] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const searchRef = useRef(null);
  const accountRef = useRef(null);
  const shopRef = useRef(null);
  const notificationRef = useRef(null);

  /* =========================================================
     NAVIGATION LINKS
  ========================================================= */

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Shop",
      path: "/shop",
      mega: true,
    },
    {
      name: "New Arrivals",
      path: "/new-arrivals",
      hot: true,
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

  /* =========================================================
     SHOP CATEGORIES
  ========================================================= */

  const categories = [
    {
      title: "Clothing",
      items: [
        "T-Shirts",
        "Shirts",
        "Polo Shirts",
        "Hoodies",
        "Jackets",
        "Sweaters",
      ],
    },
    {
      title: "Bottoms",
      items: [
        "Jeans",
        "Trousers",
        "Chinos",
        "Cargo Pants",
        "Shorts",
      ],
    },
    {
      title: "Collections",
      items: [
        "Premium",
        "New Season",
        "Best Sellers",
        "Streetwear",
        "Formal",
      ],
    },
  ];

  /* =========================================================
     SEARCH DATA
  ========================================================= */

  const searchableProducts = [
    "Premium Black Shirt",
    "Classic White Shirt",
    "Luxury Polo",
    "Oversized T-Shirt",
    "Premium Denim Jeans",
    "Classic Black Trousers",
    "Designer Jacket",
    "Winter Hoodie",
    "Casual Polo Shirt",
    "Premium Streetwear",
  ];

  /* =========================================================
     SCROLL EFFECT
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     MOBILE BODY LOCK
  ========================================================= */

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenu]);

  /* =========================================================
     CLOSE MENUS ON ROUTE CHANGE
  ========================================================= */

  useEffect(() => {
    setMobileMenu(false);
    setSearchOpen(false);
    setAccountOpen(false);
    setShopOpen(false);
    setNotificationOpen(false);
  }, [location.pathname]);

  /* =========================================================
     CLOSE OUTSIDE MENUS
  ========================================================= */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target)
      ) {
        setAccountOpen(false);
      }

      if (
        shopRef.current &&
        !shopRef.current.contains(event.target)
      ) {
        setShopOpen(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  /* =========================================================
     KEYBOARD SHORTCUT
  ========================================================= */

  useEffect(() => {
    const handleKeyboard = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();

        setSearchOpen(true);
        setMobileMenu(false);

        setTimeout(() => {
          searchRef.current?.focus();
        }, 100);
      }

      if (event.key === "Escape") {
        setSearchOpen(false);
        setMobileMenu(false);
        setAccountOpen(false);
        setShopOpen(false);
        setNotificationOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, []);

  /* =========================================================
     SEARCH FILTER
  ========================================================= */

  useEffect(() => {
    if (!search.trim()) {
      setSearchResults([]);
      return;
    }

    const filtered = searchableProducts.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filtered.slice(0, 5));
  }, [search]);

  /* =========================================================
     FUNCTIONS
  ========================================================= */

  const closeEverything = () => {
    setMobileMenu(false);
    setSearchOpen(false);
    setAccountOpen(false);
    setShopOpen(false);
    setNotificationOpen(false);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
    setMobileMenu(false);
    setAccountOpen(false);
    setShopOpen(false);
  };

  const toggleDarkMode = () => {
    if (setDarkMode) {
      setDarkMode(!darkMode);
    }
  };

  const performSearch = (value = search) => {
    const query = value.trim();

    if (!query) return;

    setSearch(query);
    setSearchOpen(false);

    navigate(`/shop?search=${encodeURIComponent(query)}`);
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter") {
      performSearch();
    }
  };

  const selectSearchResult = (item) => {
    setSearch(item);
    performSearch(item);
  };

  /* =========================================================
     ICONS
  ========================================================= */

  const SearchIcon = ({ className = "h-5 w-5" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="1.7"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );

  const HeartIcon = ({ className = "h-5 w-5" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="1.7"
    >
      <path d="M20.8 8.6c0 5.4-8.8 10.4-8.8 10.4S3.2 14 3.2 8.6A4.6 4.6 0 0 1 12 6.3a4.6 4.6 0 0 1 8.8 2.3Z" />
    </svg>
  );

  const CartIcon = ({ className = "h-5 w-5" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="1.7"
    >
      <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.5L21 8H6" />
      <circle cx="10" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </svg>
  );

  const UserIcon = ({ className = "h-5 w-5" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="1.7"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  );

  const BellIcon = ({ className = "h-5 w-5" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="1.7"
    >
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </svg>
  );

  const ChevronIcon = ({
    className = "h-4 w-4",
  }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="1.8"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );

  const ArrowIcon = ({
    className = "h-4 w-4",
  }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="1.8"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );

  const LocationIcon = ({
    className = "h-4 w-4",
  }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="1.7"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );

  const SunIcon = ({
    className = "h-5 w-5",
  }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="1.7"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );

  const MoonIcon = ({
    className = "h-5 w-5",
  }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="1.7"
    >
      <path d="M21 15.8A9 9 0 1 1 8.2 3 7 7 0 0 0 21 15.8Z" />
    </svg>
  );

  /* =========================================================
     THEME CLASSES
  ========================================================= */

  const navbarBackground = darkMode
    ? "border-white/[0.08] bg-zinc-950/80 text-white"
    : "border-black/[0.07] bg-white/85 text-zinc-950";

  const softBackground = darkMode
    ? "bg-white/[0.035]"
    : "bg-black/[0.025]";

  const hoverBackground = darkMode
    ? "hover:bg-white/[0.07]"
    : "hover:bg-black/[0.05]";

  const mutedText = darkMode
    ? "text-zinc-400"
    : "text-zinc-600";

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <>
      {/* =====================================================
          DESKTOP / MAIN NAVBAR
      ====================================================== */}

      <header className="fixed left-0 right-0 top-0 z-[100] px-3 pt-3 sm:px-5 lg:px-7 xl:px-10">
        <div
          className={`
            group/nav relative mx-auto max-w-[1550px]
            overflow-visible rounded-[28px]
            border
            ${navbarBackground}
            transition-all duration-700
            ${
              scrolled
                ? "shadow-[0_25px_90px_rgba(0,0,0,0.22)] backdrop-blur-3xl"
                : "shadow-[0_15px_55px_rgba(0,0,0,0.10)] backdrop-blur-2xl"
            }
          `}
        >
          {/* =================================================
              PREMIUM LIGHT
          ================================================== */}

          <div
            className="
              pointer-events-none absolute
              left-[8%] right-[8%] top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-orange-500
              to-transparent
              opacity-80
            "
          />

          {/* =================================================
              ANNOUNCEMENT BAR
          ================================================== */}

          <div
            className={`
              relative flex min-h-[32px]
              items-center justify-center
              gap-2 overflow-hidden
              rounded-t-[28px]
              border-b px-4 py-2
              text-[8px] font-black
              uppercase tracking-[0.28em]
              sm:text-[9px]
              ${
                darkMode
                  ? "border-white/[0.06] bg-white/[0.025] text-zinc-400"
                  : "border-black/[0.05] bg-black/[0.015] text-zinc-500"
              }
            `}
          >
            <span className="relative flex h-2 w-2 items-center justify-center">
              <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-orange-500 opacity-40" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-orange-500" />
            </span>

            <span>Pakistan's Premium Men's Fashion</span>

            <span className="hidden text-orange-500 sm:inline">
              ◆
            </span>

            <span className="hidden sm:inline">
              Free Shipping Over Rs. 10,000
            </span>

            <span className="hidden text-orange-500 md:inline">
              ◆
            </span>

            <span className="hidden md:inline">
              Secure Checkout
            </span>
          </div>

          {/* =================================================
              MAIN NAVIGATION
          ================================================== */}

          <div className="relative flex h-[78px] items-center justify-between px-4 sm:px-6 lg:px-7 xl:px-9">

            {/* =================================================
                AMBIENT GLOW
            ================================================== */}

            <div
              className="
                pointer-events-none absolute
                -left-16 top-1/2
                h-40 w-40
                -translate-y-1/2
                rounded-full
                bg-orange-500/[0.08]
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none absolute
                right-[20%] top-0
                h-24 w-40
                rounded-full
                bg-orange-500/[0.035]
                blur-3xl
              "
            />

            {/* =================================================
                LOGO
            ================================================== */}

            <Link
              to="/"
              onClick={closeEverything}
              className="group relative z-20 shrink-0"
            >
              <div className="flex items-center gap-3">

                {/* LOGO MARK */}

                <div
                  className={`
                    relative flex h-11 w-11
                    items-center justify-center
                    overflow-hidden rounded-[15px]
                    border
                    transition-all duration-500
                    group-hover:scale-110
                    group-hover:rotate-3
                    ${
                      darkMode
                        ? "border-white/[0.12] bg-white/[0.04]"
                        : "border-black/[0.09] bg-black/[0.025]"
                    }
                  `}
                >
                  <div
                    className="
                      absolute inset-[-60%]
                      animate-[spin_7s_linear_infinite]
                      bg-[conic-gradient(transparent,rgba(249,115,22,.9),transparent_35%)]
                    "
                  />

                  <div
                    className={`
                      absolute inset-[1px]
                      rounded-[14px]
                      ${
                        darkMode
                          ? "bg-zinc-950"
                          : "bg-white"
                      }
                    `}
                  />

                  <span className="relative text-[17px] font-black tracking-[-0.18em]">
                    L
                    <span className="text-orange-500">
                      M
                    </span>
                  </span>
                </div>

                {/* BRAND */}

                <div className="hidden leading-none sm:block">
                  <h1 className="text-[23px] font-black tracking-[-0.09em] lg:text-[26px]">
                    LUXE
                    <span className="font-light text-orange-500">
                      MEN
                    </span>
                  </h1>

                  <div className="mt-1.5 flex items-center gap-2">
                    <span
                      className={`h-px w-7 ${
                        darkMode
                          ? "bg-zinc-700"
                          : "bg-zinc-300"
                      }`}
                    />

                    <span
                      className={`
                        text-[6px] font-black
                        uppercase tracking-[0.4em]
                        ${
                          darkMode
                            ? "text-zinc-500"
                            : "text-zinc-400"
                        }
                      `}
                    >
                      EST. 2026
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <nav
              className={`
                absolute left-1/2
                hidden -translate-x-1/2
                items-center gap-1
                rounded-full border p-1
                lg:flex
                ${
                  darkMode
                    ? "border-white/[0.06] bg-white/[0.035]"
                    : "border-black/[0.05] bg-black/[0.025]"
                }
              `}
            >
              {navLinks.map((link) => {
                const isShop =
                  link.name === "Shop";

                return (
                  <div
                    key={link.path}
                    ref={isShop ? shopRef : null}
                    className="relative"
                  >
                    <NavLink
                      to={link.path}
                      onClick={(event) => {
                        if (isShop) {
                          event.preventDefault();
                          setShopOpen((prev) => !prev);
                          setAccountOpen(false);
                          setNotificationOpen(false);
                        }
                      }}
                      className={({ isActive }) =>
                        `
                        group relative flex
                        items-center gap-1.5
                        rounded-full
                        px-4 py-2.5
                        text-[11px]
                        font-bold
                        tracking-wide
                        transition-all duration-300
                        ${
                          isActive && !isShop
                            ? darkMode
                              ? "bg-white text-black shadow-xl"
                              : "bg-zinc-950 text-white shadow-xl"
                            : shopOpen && isShop
                            ? "bg-orange-500 text-white shadow-xl shadow-orange-500/20"
                            : darkMode
                            ? "text-zinc-400 hover:bg-white/[0.07] hover:text-white"
                            : "text-zinc-600 hover:bg-white hover:text-black"
                        }
                        `
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{link.name}</span>

                          {isShop && (
                            <ChevronIcon
                              className={`
                                h-3 w-3
                                transition-transform duration-300
                                ${
                                  shopOpen
                                    ? "rotate-180"
                                    : ""
                                }
                              `}
                            />
                          )}

                          {link.hot && (
                            <span
                              className="
                                absolute -right-2.5 -top-3
                                rounded-full
                                bg-orange-500
                                px-1.5 py-[3px]
                                text-[5px]
                                font-black
                                leading-none
                                text-white
                                shadow-lg
                                shadow-orange-500/30
                              "
                            >
                              NEW
                            </span>
                          )}

                          {link.sale && (
                            <span
                              className="
                                absolute -right-2.5 -top-3
                                rounded-full
                                bg-red-500
                                px-1.5 py-[3px]
                                text-[5px]
                                font-black
                                leading-none
                                text-white
                              "
                            >
                              %
                            </span>
                          )}

                          {isActive && !isShop && (
                            <span
                              className="
                                absolute
                                bottom-1
                                left-1/2
                                h-0.5 w-1
                                -translate-x-1/2
                                rounded-full
                                bg-orange-500
                              "
                            />
                          )}
                        </>
                      )}
                    </NavLink>

                    {/* =================================================
                        SHOP MEGA MENU
                    ================================================== */}

                    {isShop && (
                      <div
                        className={`
                          absolute left-1/2 top-[calc(100%+18px)]
                          w-[650px]
                          -translate-x-1/2
                          transition-all duration-300
                          ${
                            shopOpen
                              ? "pointer-events-auto translate-y-0 opacity-100"
                              : "pointer-events-none -translate-y-2 opacity-0"
                          }
                        `}
                      >
                        <div
                          className={`
                            relative overflow-hidden
                            rounded-[26px]
                            border
                            p-5
                            shadow-[0_30px_100px_rgba(0,0,0,0.25)]
                            backdrop-blur-3xl
                            ${
                              darkMode
                                ? "border-white/[0.09] bg-zinc-950/95"
                                : "border-black/[0.08] bg-white/95"
                            }
                          `}
                        >
                          <div
                            className="
                              pointer-events-none
                              absolute -right-20 -top-20
                              h-52 w-52
                              rounded-full
                              bg-orange-500/[0.08]
                              blur-3xl
                            "
                          />

                          <div className="relative mb-5 flex items-end justify-between">
                            <div>
                              <p className="mb-1 text-[8px] font-black uppercase tracking-[0.35em] text-orange-500">
                                LUXEMEN
                              </p>

                              <h3 className="text-xl font-black tracking-tight">
                                Explore Collection
                              </h3>
                            </div>

                            <Link
                              to="/shop"
                              onClick={() =>
                                setShopOpen(false)
                              }
                              className="group flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-orange-500"
                            >
                              View All
                              <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>

                          <div className="grid grid-cols-3 gap-3">
                            {categories.map(
                              (category) => (
                                <div
                                  key={category.title}
                                  className={`
                                    rounded-2xl
                                    border p-4
                                    ${
                                      darkMode
                                        ? "border-white/[0.06] bg-white/[0.025]"
                                        : "border-black/[0.05] bg-black/[0.02]"
                                    }
                                  `}
                                >
                                  <p className="mb-3 text-[9px] font-black uppercase tracking-[0.2em] text-orange-500">
                                    {category.title}
                                  </p>

                                  <div className="space-y-2">
                                    {category.items.map(
                                      (item) => (
                                        <Link
                                          key={item}
                                          to="/shop"
                                          onClick={() =>
                                            setShopOpen(
                                              false
                                            )
                                          }
                                          className={`
                                            group flex items-center justify-between
                                            text-[10px] font-semibold
                                            ${mutedText}
                                            transition
                                            hover:text-orange-500
                                          `}
                                        >
                                          {item}

                                          <span className="translate-x-[-4px] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                                            →
                                          </span>
                                        </Link>
                                      )
                                    )}
                                  </div>
                                </div>
                              )
                            )}
                          </div>

                          <div
                            className={`
                              mt-4 flex items-center
                              justify-between rounded-2xl
                              border px-4 py-3
                              ${
                                darkMode
                                  ? "border-orange-500/10 bg-orange-500/[0.06]"
                                  : "border-orange-500/10 bg-orange-500/[0.05]"
                              }
                            `}
                          >
                            <div>
                              <p className="text-[9px] font-black uppercase tracking-widest text-orange-500">
                                Limited Drop
                              </p>

                              <p
                                className={`mt-1 text-[10px] ${mutedText}`}
                              >
                                Discover our latest premium pieces.
                              </p>
                            </div>

                            <Link
                              to="/new-arrivals"
                              onClick={() =>
                                setShopOpen(false)
                              }
                              className="
                                rounded-full
                                bg-orange-500
                                px-4 py-2
                                text-[9px]
                                font-black
                                uppercase
                                tracking-widest
                                text-white
                                transition
                                hover:bg-orange-600
                              "
                            >
                              Explore
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* =================================================
                RIGHT CONTROLS
            ================================================== */}

            <div className="relative z-20 flex items-center gap-1">

              {/* LOCATION */}

              <div
                className={`
                  hidden items-center gap-2
                  rounded-full border
                  px-3 py-2.5
                  xl:flex
                  ${softBackground}
                  ${
                    darkMode
                      ? "border-white/[0.06]"
                      : "border-black/[0.05]"
                  }
                `}
              >
                <LocationIcon className="h-3.5 w-3.5 text-orange-500" />

                <span className="text-[9px] font-bold">
                  Pakistan
                </span>

                <span className="h-1 w-1 rounded-full bg-green-500" />
              </div>

              {/* SEARCH */}

              <button
                onClick={toggleSearch}
                className={`
                  group flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  transition-all duration-300
                  hover:scale-105
                  ${hoverBackground}
                `}
                aria-label="Search"
              >
                {searchOpen ? (
                  <svg
                    className="h-[18px] w-[18px] transition-transform duration-300 group-hover:rotate-90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                  >
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                ) : (
                  <SearchIcon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110" />
                )}
              </button>

              {/* WISHLIST */}

              <Link
                to="/wishlist"
                className={`
                  group relative hidden h-10 w-10
                  items-center justify-center
                  rounded-full
                  transition-all duration-300
                  hover:scale-105
                  sm:flex
                  ${hoverBackground}
                `}
                aria-label="Wishlist"
              >
                <HeartIcon className="h-[18px] w-[18px] transition-all duration-300 group-hover:scale-110 group-hover:text-red-500" />

                {wishlistCount > 0 && (
                  <span
                    className="
                      absolute -right-0.5 -top-0.5
                      flex h-4 min-w-4
                      items-center justify-center
                      rounded-full
                      bg-red-500
                      px-1
                      text-[7px]
                      font-black
                      text-white
                    "
                  >
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* NOTIFICATION */}

              <div
                ref={notificationRef}
                className="relative hidden sm:block"
              >
                <button
                  onClick={() => {
                    setNotificationOpen(
                      (prev) => !prev
                    );
                    setAccountOpen(false);
                    setShopOpen(false);
                  }}
                  className={`
                    group relative flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    transition-all duration-300
                    hover:scale-105
                    ${hoverBackground}
                  `}
                  aria-label="Notifications"
                >
                  <BellIcon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:-rotate-6" />

                  <span className="absolute right-2.5 top-2 h-1.5 w-1.5 rounded-full bg-orange-500 ring-2 ring-orange-500/10" />
                </button>

                {/* NOTIFICATION PANEL */}

                <div
                  className={`
                    absolute right-0 top-[calc(100%+15px)]
                    w-[310px]
                    transition-all duration-300
                    ${
                      notificationOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    }
                  `}
                >
                  <div
                    className={`
                      overflow-hidden
                      rounded-[24px]
                      border
                      shadow-[0_25px_80px_rgba(0,0,0,0.22)]
                      ${
                        darkMode
                          ? "border-white/[0.08] bg-zinc-950"
                          : "border-black/[0.08] bg-white"
                      }
                    `}
                  >
                    <div className="border-b border-current/5 px-5 py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-black">
                            Notifications
                          </p>

                          <p className="mt-1 text-[9px] text-zinc-500">
                            Stay updated with LUXEMEN
                          </p>
                        </div>

                        <span className="rounded-full bg-orange-500 px-2 py-1 text-[7px] font-black text-white">
                          1 NEW
                        </span>
                      </div>
                    </div>

                    <div className="p-3">
                      <div
                        className={`
                          rounded-2xl p-4
                          ${
                            darkMode
                              ? "bg-white/[0.035]"
                              : "bg-black/[0.025]"
                          }
                        `}
                      >
                        <div className="mb-2 flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-orange-500" />

                          <p className="text-[9px] font-black uppercase tracking-widest text-orange-500">
                            New Drop
                          </p>
                        </div>

                        <p className="text-xs font-bold">
                          New premium collection is live.
                        </p>

                        <Link
                          to="/new-arrivals"
                          onClick={() =>
                            setNotificationOpen(
                              false
                            )
                          }
                          className="mt-3 inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-orange-500"
                        >
                          Shop Now
                          <ArrowIcon className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ACCOUNT */}

              <div
                ref={accountRef}
                className="relative hidden sm:block"
              >
                <button
                  onClick={() => {
                    setAccountOpen((prev) => !prev);
                    setShopOpen(false);
                    setNotificationOpen(false);
                  }}
                  className={`
                    group flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    border
                    transition-all duration-300
                    hover:scale-105
                    ${
                      darkMode
                        ? "border-white/[0.07] bg-white/[0.035]"
                        : "border-black/[0.06] bg-black/[0.025]"
                    }
                  `}
                  aria-label="Account"
                >
                  <UserIcon className="h-[17px] w-[17px] transition-transform duration-300 group-hover:scale-110" />
                </button>

                {/* ACCOUNT DROPDOWN */}

                <div
                  className={`
                    absolute right-0 top-[calc(100%+15px)]
                    w-[250px]
                    transition-all duration-300
                    ${
                      accountOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    }
                  `}
                >
                  <div
                    className={`
                      overflow-hidden
                      rounded-[24px]
                      border
                      p-2
                      shadow-[0_25px_80px_rgba(0,0,0,0.22)]
                      ${
                        darkMode
                          ? "border-white/[0.08] bg-zinc-950"
                          : "border-black/[0.08] bg-white"
                      }
                    `}
                  >
                    <div
                      className={`
                        rounded-2xl p-4
                        ${
                          darkMode
                            ? "bg-white/[0.035]"
                            : "bg-black/[0.025]"
                        }
                      `}
                    >
                      <p className="text-[8px] font-black uppercase tracking-[0.3em] text-orange-500">
                        Welcome
                      </p>

                      <p className="mt-1 text-sm font-black">
                        Your LUXEMEN Account
                      </p>
                    </div>

                    <Link
                      to="/login"
                      onClick={() =>
                        setAccountOpen(false)
                      }
                      className={`
                        mt-2 flex items-center
                        justify-between rounded-xl
                        px-4 py-3
                        text-[10px] font-bold
                        transition
                        ${hoverBackground}
                      `}
                    >
                      Login
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </Link>

                    <Link
                      to="/register"
                      onClick={() =>
                        setAccountOpen(false)
                      }
                      className={`
                        flex items-center
                        justify-between rounded-xl
                        px-4 py-3
                        text-[10px] font-bold
                        transition
                        ${hoverBackground}
                      `}
                    >
                      Create Account
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </Link>

                    <div
                      className={`
                        my-1 h-px
                        ${
                          darkMode
                            ? "bg-white/[0.06]"
                            : "bg-black/[0.06]"
                        }
                      `}
                    />

                    <Link
                      to="/orders"
                      onClick={() =>
                        setAccountOpen(false)
                      }
                      className={`
                        flex items-center
                        justify-between rounded-xl
                        px-4 py-3
                        text-[10px] font-bold
                        transition
                        ${hoverBackground}
                      `}
                    >
                      My Orders
                      <span className="text-zinc-500">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* CART */}

              <Link
                to="/cart"
                className="
                  group relative flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  bg-orange-500
                  text-white
                  shadow-[0_8px_30px_rgba(249,115,22,.28)]
                  transition-all duration-300
                  hover:scale-110
                  hover:bg-orange-600
                  hover:shadow-[0_12px_40px_rgba(249,115,22,.42)]
                "
                aria-label="Shopping cart"
              >
                <CartIcon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:-rotate-6" />

                <span
                  className="
                    absolute -right-1 -top-1
                    flex h-4 min-w-4
                    items-center justify-center
                    rounded-full
                    border-2
                    border-orange-500
                    bg-zinc-950
                    px-1
                    text-[7px]
                    font-black
                    text-white
                  "
                >
                  {cartCount}
                </span>
              </Link>

              {/* THEME */}

              <button
                onClick={toggleDarkMode}
                className={`
                  group hidden h-10 w-10
                  items-center justify-center
                  rounded-full
                  transition-all duration-300
                  hover:scale-105
                  sm:flex
                  ${hoverBackground}
                `}
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <SunIcon className="h-[18px] w-[18px] transition-transform duration-500 group-hover:rotate-45" />
                ) : (
                  <MoonIcon className="h-[18px] w-[18px] transition-transform duration-500 group-hover:-rotate-12" />
                )}
              </button>

              {/* MOBILE MENU BUTTON */}

              <button
                onClick={() =>
                  setMobileMenu((prev) => !prev)
                }
                className={`
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  transition-all duration-300
                  lg:hidden
                  ${hoverBackground}
                `}
                aria-label="Open menu"
              >
                {mobileMenu ? (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                  >
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                  >
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* =================================================
              VIP SEARCH PANEL
          ================================================== */}

          <div
            className={`
              overflow-visible
              transition-all duration-500
              ${
                searchOpen
                  ? "max-h-[420px] opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <div className="relative px-4 pb-5 sm:px-6 lg:px-8">
              <div
                className={`
                  group relative flex items-center
                  gap-3 rounded-2xl
                  border px-4 py-3.5
                  transition-all duration-300
                  focus-within:border-orange-500/50
                  focus-within:ring-4
                  focus-within:ring-orange-500/10
                  ${
                    darkMode
                      ? "border-white/[0.08] bg-white/[0.035]"
                      : "border-black/[0.06] bg-black/[0.025]"
                  }
                `}
              >
                <SearchIcon className="h-5 w-5 shrink-0 text-orange-500" />

                <input
                  ref={searchRef}
                  autoFocus={searchOpen}
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  onFocus={() =>
                    setSearchFocused(true)
                  }
                  onBlur={() =>
                    setTimeout(
                      () => setSearchFocused(false),
                      150
                    )
                  }
                  onKeyDown={handleSearchKeyDown}
                  placeholder="Search premium men's fashion..."
                  className={`
                    w-full bg-transparent
                    text-sm outline-none
                    ${
                      darkMode
                        ? "text-white placeholder:text-zinc-600"
                        : "text-zinc-900 placeholder:text-zinc-400"
                    }
                  `}
                />

                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="text-xl leading-none text-zinc-500 transition hover:text-orange-500"
                  >
                    ×
                  </button>
                )}

                <kbd
                  className="
                    hidden rounded-lg
                    border border-current/10
                    px-2 py-1
                    text-[8px] font-black
                    uppercase tracking-widest
                    text-zinc-500
                    sm:block
                  "
                >
                  Ctrl K
                </kbd>

                <button
                  onClick={() => performSearch()}
                  className="
                    hidden rounded-xl
                    bg-orange-500
                    px-4 py-2
                    text-[9px]
                    font-black
                    uppercase
                    tracking-widest
                    text-white
                    transition
                    hover:bg-orange-600
                    sm:block
                  "
                >
                  Search
                </button>
              </div>

              {/* SEARCH RESULTS */}

              {searchFocused &&
                search &&
                searchResults.length > 0 && (
                  <div
                    className={`
                      absolute left-4 right-4 top-[calc(100%-8px)]
                      z-50 overflow-hidden
                      rounded-2xl border
                      p-2
                      shadow-[0_25px_70px_rgba(0,0,0,0.2)]
                      ${
                        darkMode
                          ? "border-white/[0.08] bg-zinc-950"
                          : "border-black/[0.08] bg-white"
                      }
                    `}
                  >
                    {searchResults.map(
                      (result, index) => (
                        <button
                          key={result}
                          onMouseDown={() =>
                            selectSearchResult(
                              result
                            )
                          }
                          className={`
                            flex w-full
                            items-center gap-3
                            rounded-xl px-3 py-3
                            text-left
                            transition
                            ${
                              darkMode
                                ? "hover:bg-white/[0.05]"
                                : "hover:bg-black/[0.035]"
                            }
                          `}
                        >
                          <span className="text-[8px] font-black text-zinc-500">
                            0{index + 1}
                          </span>

                          <SearchIcon className="h-3.5 w-3.5 text-orange-500" />

                          <span className="text-xs font-semibold">
                            {result}
                          </span>

                          <ArrowIcon className="ml-auto h-3.5 w-3.5 text-zinc-500" />
                        </button>
                      )
                    )}
                  </div>
                )}

              {search &&
                searchFocused &&
                searchResults.length === 0 && (
                  <div
                    className={`
                      absolute left-4 right-4 top-[calc(100%-8px)]
                      z-50 rounded-2xl border p-5
                      text-center
                      ${
                        darkMode
                          ? "border-white/[0.08] bg-zinc-950"
                          : "border-black/[0.08] bg-white"
                      }
                    `}
                  >
                    <p className="text-xs font-bold">
                      No products found
                    </p>

                    <p className="mt-1 text-[9px] text-zinc-500">
                      Try another search term.
                    </p>
                  </div>
                )}
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE VIP MENU
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
          className="
            absolute inset-0
            bg-black/75
            backdrop-blur-xl
          "
        />

        {/* MOBILE PANEL */}

        <div
          className={`
            absolute bottom-3 left-3 right-3
            top-[96px]
            overflow-y-auto
            rounded-[30px]
            border
            p-5
            transition-all duration-500
            sm:p-7
            ${
              mobileMenu
                ? "translate-y-0 scale-100"
                : "translate-y-10 scale-95"
            }
            ${
              darkMode
                ? "border-white/[0.09] bg-zinc-950"
                : "border-black/[0.08] bg-white"
            }
          `}
        >
          {/* GLOW */}

          <div
            className="
              pointer-events-none
              absolute -right-20 -top-20
              h-60 w-60
              rounded-full
              bg-orange-500/[0.08]
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute -bottom-20 -left-20
              h-52 w-52
              rounded-full
              bg-orange-500/[0.05]
              blur-3xl
            "
          />

          {/* MOBILE HEADER */}

          <div className="relative mb-8 flex items-end justify-between">
            <div>
              <p className="mb-2 text-[9px] font-black uppercase tracking-[0.35em] text-orange-500">
                LUXEMEN
              </p>

              <h2 className="text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                The Collection
              </h2>

              <p className="mt-2 max-w-[280px] text-[10px] leading-relaxed text-zinc-500">
                Premium menswear designed for confidence,
                comfort and timeless style.
              </p>
            </div>

            <span className="text-[9px] font-black tracking-widest text-zinc-500">
              2026
            </span>
          </div>

          {/* MOBILE SEARCH */}

          <button
            onClick={() => {
              setSearchOpen(true);
              setMobileMenu(false);

              setTimeout(() => {
                searchRef.current?.focus();
              }, 200);
            }}
            className={`
              relative mb-5 flex w-full
              items-center gap-3
              rounded-2xl border
              px-4 py-4
              text-left
              transition
              ${
                darkMode
                  ? "border-white/[0.06] bg-white/[0.035]"
                  : "border-black/[0.05] bg-black/[0.025]"
              }
            `}
          >
            <SearchIcon className="h-4 w-4 text-orange-500" />

            <span className="text-xs font-semibold text-zinc-500">
              Search the collection...
            </span>

            <span className="ml-auto text-[8px] font-black uppercase tracking-widest text-zinc-600">
              Search
            </span>
          </button>

          {/* MOBILE LINKS */}

          <div className="relative space-y-2">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `
                  group relative flex
                  items-center justify-between
                  overflow-hidden rounded-2xl
                  border px-4 py-4
                  transition-all duration-300
                  ${
                    isActive
                      ? "border-orange-500 bg-orange-500 text-white shadow-xl shadow-orange-500/20"
                      : darkMode
                      ? "border-white/[0.05] hover:border-white/[0.10] hover:bg-white/[0.045]"
                      : "border-black/[0.05] hover:border-black/[0.08] hover:bg-black/[0.025]"
                  }
                  `
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-4">
                      <span
                        className={`
                          text-[9px]
                          font-black
                          ${
                            isActive
                              ? "text-white/60"
                              : "text-zinc-500"
                          }
                        `}
                      >
                        0{index + 1}
                      </span>

                      <span className="text-lg font-bold">
                        {link.name}
                      </span>

                      {link.hot && (
                        <span className="rounded-full bg-orange-500 px-2 py-1 text-[6px] font-black text-white">
                          NEW
                        </span>
                      )}

                      {link.sale && (
                        <span className="rounded-full bg-red-500 px-2 py-1 text-[6px] font-black text-white">
                          SALE
                        </span>
                      )}
                    </div>

                    <ArrowIcon
                      className={`
                        h-5 w-5
                        transition-all duration-300
                        ${
                          isActive
                            ? "translate-x-0"
                            : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }
                      `}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* =================================================
              MOBILE QUICK ACTIONS
          ================================================== */}

          <div
            className={`
              relative mt-8
              grid grid-cols-2
              gap-3
              border-t pt-6
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
                group rounded-2xl
                p-4 text-center
                transition-all
                hover:-translate-y-1
                ${
                  darkMode
                    ? "bg-white/[0.05] hover:bg-white/[0.08]"
                    : "bg-black/[0.035] hover:bg-black/[0.06]"
                }
              `}
            >
              <div className="mb-2 flex justify-center">
                <HeartIcon className="h-5 w-5 text-red-500" />
              </div>

              <span className="text-[10px] font-black uppercase tracking-wider">
                Wishlist
              </span>

              <span className="mt-1 block text-[8px] text-zinc-500">
                {wishlistCount} saved
              </span>
            </Link>

            <Link
              to="/cart"
              onClick={closeMenu}
              className={`
                group rounded-2xl
                p-4 text-center
                transition-all
                hover:-translate-y-1
                ${
                  darkMode
                    ? "bg-white/[0.05] hover:bg-white/[0.08]"
                    : "bg-black/[0.035] hover:bg-black/[0.06]"
                }
              `}
            >
              <div className="mb-2 flex justify-center">
                <CartIcon className="h-5 w-5 text-orange-500" />
              </div>

              <span className="text-[10px] font-black uppercase tracking-wider">
                Cart
              </span>

              <span className="mt-1 block text-[8px] text-zinc-500">
                {cartCount} items
              </span>
            </Link>
          </div>

          {/* =================================================
              MOBILE ACCOUNT
          ================================================== */}

          <div className="relative mt-4 grid grid-cols-2 gap-3">
            <Link
              to="/login"
              onClick={closeMenu}
              className={`
                rounded-2xl
                border p-4
                text-center
                transition
                hover:-translate-y-1
                ${
                  darkMode
                    ? "border-white/[0.06] hover:bg-white/[0.04]"
                    : "border-black/[0.06] hover:bg-black/[0.025]"
                }
              `}
            >
              <UserIcon className="mx-auto mb-2 h-5 w-5 text-orange-500" />

              <span className="text-[10px] font-black uppercase tracking-wider">
                Login
              </span>
            </Link>

            <button
              onClick={toggleDarkMode}
              className={`
                rounded-2xl
                border p-4
                text-center
                transition
                hover:-translate-y-1
                ${
                  darkMode
                    ? "border-white/[0.06] hover:bg-white/[0.04]"
                    : "border-black/[0.06] hover:bg-black/[0.025]"
                }
              `}
            >
              {darkMode ? (
                <SunIcon className="mx-auto mb-2 h-5 w-5 text-orange-500" />
              ) : (
                <MoonIcon className="mx-auto mb-2 h-5 w-5 text-orange-500" />
              )}

              <span className="text-[10px] font-black uppercase tracking-wider">
                {darkMode ? "Light" : "Dark"}
              </span>
            </button>
          </div>

          {/* =================================================
              MOBILE PROMO
          ================================================== */}

          <div
            className="
              relative mt-6
              overflow-hidden
              rounded-2xl
              bg-orange-500
              p-5
              text-white
            "
          >
            <div
              className="
                pointer-events-none
                absolute -right-10 -top-10
                h-32 w-32
                rounded-full
                bg-white/10
                blur-2xl
              "
            />

            <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white/70">
              Limited Offer
            </p>

            <h3 className="mt-1 text-xl font-black tracking-tight">
              Free Shipping
            </h3>

            <p className="mt-1 text-[9px] leading-relaxed text-white/70">
              Enjoy free delivery on orders above
              Rs. 10,000.
            </p>

            <Link
              to="/shop"
              onClick={closeMenu}
              className="
                mt-4 inline-flex
                items-center gap-2
                rounded-full
                bg-white
                px-4 py-2
                text-[8px]
                font-black
                uppercase
                tracking-widest
                text-zinc-950
              "
            >
              Shop Now
              <ArrowIcon className="h-3 w-3" />
            </Link>
          </div>

          {/* =================================================
              MOBILE BRAND
          ================================================== */}

          <div className="relative mt-10 pb-3 text-center">
            <p className="text-3xl font-black tracking-[-0.09em]">
              LUXE
              <span className="font-light text-orange-500">
                MEN
              </span>
            </p>

            <div className="mx-auto mt-3 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-zinc-500/30" />

              <span className="text-[7px] font-black uppercase tracking-[0.4em] text-zinc-500">
                Wear Your Confidence
              </span>

              <span className="h-px w-8 bg-zinc-500/30" />
            </div>

            <p className="mt-3 text-[7px] font-bold uppercase tracking-[0.3em] text-zinc-500">
              EST. 2026 • PAKISTAN
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          NAVBAR SPACER
      ====================================================== */}

      <div className="h-[112px] sm:h-[115px]" />
    </>
  );
};

export default Navbar;