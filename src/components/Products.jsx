import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

/* =========================================================
   LUXEMEN — VIP PRODUCT COLLECTION
========================================================= */

const products = [
  {
    id: 1,
    name: "Classic Black Suit",
    brand: "LUXEMEN",
    category: "Formal",
    price: 8999,
    oldPrice: 10999,
    rating: "4.9",
    reviews: 128,
    bought: "500+",
    badge: "NEW",
    stock: 8,
    colors: ["Black", "Grey"],
    description:
      "A timeless black suit tailored for a sharp, confident and sophisticated appearance.",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=90",
  },

  {
    id: 2,
    name: "Premium Casual Shirt",
    brand: "LUXEMEN",
    category: "Shirts",
    price: 3999,
    oldPrice: 4999,
    rating: "4.8",
    reviews: 94,
    bought: "300+",
    badge: "POPULAR",
    stock: 14,
    colors: ["White", "Blue", "Black"],
    description:
      "A refined everyday shirt combining effortless style with premium comfort.",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=90",
  },

  {
    id: 3,
    name: "Luxury Black Jacket",
    brand: "LUXEMEN",
    category: "Jackets",
    price: 7499,
    oldPrice: 8999,
    rating: "4.9",
    reviews: 76,
    bought: "250+",
    badge: "NEW",
    stock: 6,
    colors: ["Black"],
    description:
      "A bold luxury jacket designed to elevate your street and evening wardrobe.",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=90",
  },

  {
    id: 4,
    name: "Modern White Shirt",
    brand: "LUXEMEN",
    category: "Shirts",
    price: 3499,
    oldPrice: 4499,
    rating: "4.7",
    reviews: 113,
    bought: "400+",
    badge: "BEST SELLER",
    stock: 10,
    colors: ["White", "Grey"],
    description:
      "Minimal, clean and versatile. A modern essential for every premium wardrobe.",
    image:
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=1200&q=90",
  },

  {
    id: 5,
    name: "Premium Brown Jacket",
    brand: "LUXEMEN",
    category: "Jackets",
    price: 6999,
    oldPrice: 8999,
    rating: "4.8",
    reviews: 61,
    bought: "200+",
    badge: "NEW",
    stock: 5,
    colors: ["Brown", "Black"],
    description:
      "A rich brown outer layer built for a confident premium look.",
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=1200&q=90",
  },

  {
    id: 6,
    name: "Elegant Formal Look",
    brand: "LUXEMEN",
    category: "Formal",
    price: 9999,
    oldPrice: 11999,
    rating: "5.0",
    reviews: 82,
    bought: "350+",
    badge: "PREMIUM",
    stock: 4,
    colors: ["Black", "Grey"],
    description:
      "A premium formal silhouette created for important moments and unforgettable entrances.",
    image:
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=1200&q=90",
  },

  {
    id: 7,
    name: "Classic Denim Jacket",
    brand: "LUXEMEN",
    category: "Jackets",
    price: 5999,
    oldPrice: 7499,
    rating: "4.8",
    reviews: 72,
    bought: "180+",
    badge: "NEW",
    stock: 9,
    colors: ["Blue", "Black"],
    description:
      "Classic denim attitude with a modern LUXEMEN finish.",
    image:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=1200&q=90",
  },

  {
    id: 8,
    name: "Luxury Beige Shirt",
    brand: "LUXEMEN",
    category: "Shirts",
    price: 4299,
    oldPrice: 5299,
    rating: "4.7",
    reviews: 89,
    bought: "270+",
    badge: "POPULAR",
    stock: 12,
    colors: ["Beige", "White"],
    description:
      "A sophisticated beige shirt made for effortless premium styling.",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=90",
  },

  {
    id: 9,
    name: "Modern Grey Suit",
    brand: "LUXEMEN",
    category: "Formal",
    price: 11999,
    oldPrice: 13999,
    rating: "4.9",
    reviews: 105,
    bought: "450+",
    badge: "PREMIUM",
    stock: 3,
    colors: ["Grey", "Black"],
    description:
      "A modern grey suit with an elegant silhouette for the ultimate gentleman.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=90",
  },
];

/* =========================================================
   ICONS
========================================================= */

const HeartIcon = ({ filled = false }) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1.7"
    className="h-5 w-5"
  >
    <path d="M20.8 8.6c0 5.4-8.8 10.4-8.8 10.4S3.2 14 3.2 8.6A4.6 4.6 0 0 1 12 6.3a4.6 4.6 0 0 1 8.8 2.3Z" />
  </svg>
);

const EyeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    className="h-5 w-5"
  >
    <path d="M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12Z" />
    <circle cx="12" cy="12" r="2.7" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    className="h-4 w-4"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const BagIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    className="h-5 w-5"
  >
    <path d="M5 8h14l-1 12H6L5 8Z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
);

const SparkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="h-4 w-4"
  >
    <path d="m12 2 1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2Z" />
    <path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />
  </svg>
);

/* =========================================================
   PRODUCT COMPONENT
========================================================= */

function Products({ darkMode, addToCart }) {
  const [wishlist, setWishlist] = useState([]);
  const [selectedSize, setSelectedSize] = useState({});
  const [selectedColor, setSelectedColor] = useState({});
  const [addedProduct, setAddedProduct] = useState(null);
  const [quickView, setQuickView] = useState(null);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Featured");
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState(null);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  /* =========================================================
     BODY LOCK WHEN MODAL IS OPEN
  ========================================================= */

  useEffect(() => {
    document.body.style.overflow = quickView ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [quickView]);

  /* =========================================================
     WISHLIST
  ========================================================= */

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );

    const product = products.find((item) => item.id === id);

    if (product) {
      setToast(
        wishlist.includes(id)
          ? `${product.name} removed from wishlist`
          : `${product.name} added to wishlist`
      );

      setTimeout(() => setToast(null), 2200);
    }
  };

  /* =========================================================
     SIZE
  ========================================================= */

  const selectSize = (productId, size) => {
    setSelectedSize((current) => ({
      ...current,
      [productId]: size,
    }));
  };

  /* =========================================================
     COLOR
  ========================================================= */

  const selectColor = (productId, color) => {
    setSelectedColor((current) => ({
      ...current,
      [productId]: color,
    }));
  };

  /* =========================================================
     ADD TO BAG
  ========================================================= */

  const addToBag = (product) => {
    const productWithOptions = {
      ...product,
      size: selectedSize[product.id] || "M",
      color: selectedColor[product.id] || product.colors[0],
      quantity: 1,
    };

    if (addToCart) {
      addToCart(productWithOptions);
    }

    setAddedProduct(product.id);

    setToast(`${product.name} added to your bag`);

    setTimeout(() => {
      setAddedProduct(null);
      setToast(null);
    }, 2500);
  };

  /* =========================================================
     DISCOUNT
  ========================================================= */

  const getDiscount = (price, oldPrice) => {
    return Math.round(((oldPrice - price) / oldPrice) * 100);
  };

  /* =========================================================
     FILTERED PRODUCTS
  ========================================================= */

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filter !== "All") {
      result = result.filter(
        (product) => product.category === filter
      );
    }

    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query)
      );
    }

    if (sort === "Price: Low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "Price: High") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "Rating") {
      result.sort((a, b) => Number(b.rating) - Number(a.rating));
    }

    return result;
  }, [filter, sort, search]);

  /* =========================================================
     THEME CLASSES
  ========================================================= */

  const pageBg = darkMode
    ? "bg-[#090909] text-white"
    : "bg-[#fafafa] text-zinc-950";

  const cardBg = darkMode
    ? "bg-[#111111] border-white/[0.08]"
    : "bg-white border-black/[0.07]";

  const muted = darkMode
    ? "text-zinc-500"
    : "text-zinc-500";

  return (
    <section
      id="shop"
      className={`relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 ${pageBg}`}
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute left-[-180px] top-[350px] h-[400px] w-[400px] rounded-full bg-orange-500/[0.055] blur-[120px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[900px] h-[450px] w-[450px] rounded-full bg-orange-500/[0.045] blur-[130px]" />

      <div className="mx-auto max-w-[1450px]">

        {/* =====================================================
            VIP HEADER
        ====================================================== */}

        <div className="relative mb-14">

          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

            {/* LEFT */}

            <div className="max-w-3xl">

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-10 bg-orange-500" />

                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">
                  LUXEMEN / COLLECTION 01
                </span>

              </div>

              <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.07em] sm:text-6xl lg:text-8xl">
                New
                <span className="font-light text-orange-500">
                  {" "}
                  Arrivals.
                </span>
              </h2>

              <p
                className={`mt-7 max-w-2xl text-sm leading-7 sm:text-base ${muted}`}
              >
                Discover the latest LUXEMEN pieces —
                engineered for confidence, designed for
                modern gentlemen and finished with a
                signature luxury aesthetic.
              </p>

            </div>

            {/* RIGHT STATS */}

            <div className="grid grid-cols-3 gap-3 sm:gap-5">

              <div
                className={`rounded-2xl border px-5 py-4 text-center ${cardBg}`}
              >
                <p className="text-2xl font-black">
                  09
                </p>

                <p
                  className={`mt-1 text-[8px] font-bold uppercase tracking-[0.2em] ${muted}`}
                >
                  Pieces
                </p>
              </div>

              <div
                className={`rounded-2xl border px-5 py-4 text-center ${cardBg}`}
              >
                <p className="text-2xl font-black">
                  4.8
                </p>

                <p
                  className={`mt-1 text-[8px] font-bold uppercase tracking-[0.2em] ${muted}`}
                >
                  Rating
                </p>
              </div>

              <div
                className={`rounded-2xl border px-5 py-4 text-center ${cardBg}`}
              >
                <p className="text-2xl font-black">
                  2K+
                </p>

                <p
                  className={`mt-1 text-[8px] font-bold uppercase tracking-[0.2em] ${muted}`}
                >
                  Sold
                </p>
              </div>

            </div>

          </div>

          {/* =================================================
              DIVIDER
          ================================================== */}

          <div
            className={`mt-12 h-px ${
              darkMode
                ? "bg-white/[0.07]"
                : "bg-black/[0.07]"
            }`}
          />

        </div>

        {/* =====================================================
            FILTER TOOLBAR
        ====================================================== */}

        <div
          className={`mb-10 flex flex-col gap-5 rounded-[28px] border p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between ${cardBg}`}
        >

          {/* FILTERS */}

          <div className="flex flex-wrap items-center gap-2">

            {["All", "Formal", "Shirts", "Jackets"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] transition ${
                    filter === category
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                      : darkMode
                      ? "text-zinc-400 hover:bg-white/[0.06] hover:text-white"
                      : "text-zinc-500 hover:bg-black/[0.04] hover:text-black"
                  }`}
                >
                  {category}
                </button>
              )
            )}

          </div>

          {/* SEARCH + SORT */}

          <div className="flex flex-col gap-2 sm:flex-row">

            <div
              className={`flex items-center rounded-full border px-4 ${
                darkMode
                  ? "border-white/[0.07] bg-white/[0.03]"
                  : "border-black/[0.06] bg-black/[0.02]"
              }`}
            >

              <svg
                className="mr-2 h-4 w-4 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.7"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search collection..."
                className={`w-full bg-transparent py-3 text-xs outline-none sm:w-44 ${
                  darkMode
                    ? "placeholder:text-zinc-600"
                    : "placeholder:text-zinc-400"
                }`}
              />

            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className={`rounded-full border px-5 py-3 text-xs font-semibold outline-none ${
                darkMode
                  ? "border-white/[0.07] bg-[#151515] text-white"
                  : "border-black/[0.06] bg-white text-zinc-900"
              }`}
            >
              <option>Featured</option>
              <option>Price: Low</option>
              <option>Price: High</option>
              <option>Rating</option>
            </select>

          </div>

        </div>

        {/* =====================================================
            COLLECTION LABEL
        ====================================================== */}

        <div className="mb-8 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <SparkIcon />

            <span className="text-xs font-bold uppercase tracking-[0.25em]">
              Curated Selection
            </span>

          </div>

          <span className={`text-xs ${muted}`}>
            {filteredProducts.length} products
          </span>

        </div>

        {/* =====================================================
            PRODUCT GRID
        ====================================================== */}

        {filteredProducts.length === 0 ? (
          <div
            className={`rounded-[30px] border px-6 py-24 text-center ${cardBg}`}
          >
            <p className="text-5xl">⌕</p>

            <h3 className="mt-5 text-2xl font-black">
              Nothing found
            </h3>

            <p className={`mt-2 text-sm ${muted}`}>
              Try another search or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setFilter("All");
              }}
              className="mt-7 rounded-full bg-orange-500 px-7 py-3 text-sm font-bold text-white"
            >
              Reset Collection
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

            {filteredProducts.map((product) => {

              const discount = getDiscount(
                product.price,
                product.oldPrice
              );

              const isWishlisted =
                wishlist.includes(product.id);

              const currentSize =
                selectedSize[product.id] || "M";

              const currentColor =
                selectedColor[product.id] ||
                product.colors[0];

              return (
                <article
                  key={product.id}
                  className={`group relative overflow-hidden rounded-[30px] border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_90px_rgba(0,0,0,0.16)] ${cardBg}`}
                >

                  {/* =================================================
                      IMAGE
                  ================================================== */}

                  <div className="relative overflow-hidden">

                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-[470px] w-full object-cover transition duration-1000 group-hover:scale-[1.07]"
                    />

                    {/* IMAGE GRADIENT */}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5 opacity-70" />

                    {/* TOP BADGE */}

                    <div className="absolute left-5 top-5">

                      <span
                        className={`rounded-full px-4 py-2 text-[8px] font-black uppercase tracking-[0.15em] shadow-xl ${
                          product.badge === "PREMIUM"
                            ? "bg-orange-500 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        {product.badge}
                      </span>

                    </div>

                    {/* DISCOUNT */}

                    <span className="absolute left-5 top-[62px] rounded-full bg-black/80 px-3 py-2 text-[8px] font-black tracking-wider text-white backdrop-blur-md">
                      -{discount}%
                    </span>

                    {/* WISHLIST */}

                    <button
                      onClick={() =>
                        toggleWishlist(product.id)
                      }
                      className={`absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-md transition duration-300 hover:scale-110 ${
                        isWishlisted
                          ? "bg-orange-500 text-white"
                          : "bg-white/90 text-black"
                      }`}
                      aria-label="Wishlist"
                    >
                      <HeartIcon
                        filled={isWishlisted}
                      />
                    </button>

                    {/* QUICK VIEW */}

                    <button
                      onClick={() =>
                        setQuickView(product)
                      }
                      className="
                        absolute bottom-5 left-5 right-5
                        flex items-center justify-center gap-2
                        rounded-full bg-white/95 py-3.5
                        text-xs font-black text-black
                        shadow-2xl backdrop-blur
                        transition-all duration-500
                        translate-y-16 opacity-0
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      <EyeIcon />
                      QUICK VIEW
                    </button>

                    {/* IMAGE NUMBER */}

                    <span className="absolute bottom-5 right-5 hidden text-[9px] font-black tracking-[0.2em] text-white/70 sm:block">
                      0{product.id} / 09
                    </span>

                  </div>

                  {/* =================================================
                      DETAILS
                  ================================================== */}

                  <div className="p-6">

                    {/* BRAND + CATEGORY */}

                    <div className="flex items-center justify-between gap-3">

                      <p
                        className={`text-[9px] font-black uppercase tracking-[0.3em] ${muted}`}
                      >
                        {product.brand}
                      </p>

                      <span
                        className={`rounded-full px-3 py-1 text-[8px] font-bold uppercase tracking-wider ${
                          darkMode
                            ? "bg-white/[0.05] text-zinc-400"
                            : "bg-black/[0.04] text-zinc-500"
                        }`}
                      >
                        {product.category}
                      </span>

                    </div>

                    {/* NAME */}

                    <h3 className="mt-4 text-2xl font-black tracking-[-0.04em]">
                      {product.name}
                    </h3>

                    {/* RATING */}

                    <div className="mt-3 flex items-center gap-2">

                      <span className="text-sm">
                        ★
                      </span>

                      <span className="text-sm font-bold">
                        {product.rating}
                      </span>

                      <span className={`text-xs ${muted}`}>
                        {product.reviews} reviews
                      </span>

                    </div>

                    {/* BOUGHT */}

                    <p className={`mt-2 text-xs ${muted}`}>
                      🔥 {product.bought} customers bought
                    </p>

                    {/* DESCRIPTION */}

                    <p
                      className={`mt-4 line-clamp-2 text-xs leading-6 ${muted}`}
                    >
                      {product.description}
                    </p>

                    {/* PRICE */}

                    <div className="mt-5 flex items-center gap-3">

                      <span className="text-2xl font-black">
                        Rs.{" "}
                        {product.price.toLocaleString()}
                      </span>

                      <span
                        className={`text-sm line-through ${muted}`}
                      >
                        Rs.{" "}
                        {product.oldPrice.toLocaleString()}
                      </span>

                    </div>

                    {/* STOCK */}

                    <div className="mt-3 flex items-center gap-2">

                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          product.stock <= 5
                            ? "bg-red-500"
                            : "bg-green-500"
                        }`}
                      />

                      <span
                        className={`text-[10px] font-semibold ${
                          product.stock <= 5
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {product.stock <= 5
                          ? `Only ${product.stock} left`
                          : "In stock • Ready to ship"}
                      </span>

                    </div>

                    {/* =================================================
                        COLORS
                    ================================================== */}

                    <div className="mt-6">

                      <div className="mb-3 flex justify-between">

                        <span className="text-[10px] font-bold uppercase tracking-wider">
                          Color
                        </span>

                        <span
                          className={`text-[10px] ${muted}`}
                        >
                          {currentColor}
                        </span>

                      </div>

                      <div className="flex flex-wrap gap-2">

                        {product.colors.map((color) => (
                          <button
                            key={color}
                            onClick={() =>
                              selectColor(
                                product.id,
                                color
                              )
                            }
                            className={`rounded-full border px-3 py-1.5 text-[9px] font-semibold transition ${
                              currentColor === color
                                ? "border-orange-500 bg-orange-500 text-white"
                                : darkMode
                                ? "border-zinc-700 text-zinc-400 hover:border-zinc-500"
                                : "border-zinc-200 text-zinc-600 hover:border-zinc-400"
                            }`}
                          >
                            {color}
                          </button>
                        ))}

                      </div>

                    </div>

                    {/* =================================================
                        SIZE
                    ================================================== */}

                    <div className="mt-5">

                      <div className="mb-3 flex justify-between">

                        <span className="text-[10px] font-bold uppercase tracking-wider">
                          Size
                        </span>

                        <span
                          className={`text-[10px] ${muted}`}
                        >
                          {currentSize}
                        </span>

                      </div>

                      <div className="flex gap-2">

                        {sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() =>
                              selectSize(
                                product.id,
                                size
                              )
                            }
                            className={`flex h-9 min-w-9 items-center justify-center rounded-lg border px-2 text-[9px] font-bold transition ${
                              currentSize === size
                                ? "border-orange-500 bg-orange-500 text-white"
                                : darkMode
                                ? "border-zinc-700 text-zinc-400 hover:border-zinc-500"
                                : "border-zinc-200 text-zinc-600 hover:border-zinc-400"
                            }`}
                          >
                            {size}
                          </button>
                        ))}

                      </div>

                    </div>

                    {/* =================================================
                        ACTIONS
                    ================================================== */}

                    <div className="mt-7 grid grid-cols-[0.8fr_1.2fr] gap-3">

                      <Link
                        to={`/product/${product.id}`}
                        className={`flex items-center justify-center gap-2 rounded-full border px-4 py-3.5 text-xs font-bold transition hover:scale-[1.02] ${
                          darkMode
                            ? "border-zinc-700 hover:bg-white/[0.05]"
                            : "border-zinc-200 hover:bg-zinc-50"
                        }`}
                      >
                        Details
                        <ArrowIcon />
                      </Link>

                      <button
                        onClick={() =>
                          addToBag(product)
                        }
                        className={`group/bag flex items-center justify-center gap-2 rounded-full px-4 py-3.5 text-xs font-black transition hover:scale-[1.02] active:scale-95 ${
                          addedProduct === product.id
                            ? "bg-green-500 text-white"
                            : "bg-black text-white hover:bg-orange-500"
                        }`}
                      >
                        <BagIcon />

                        {addedProduct === product.id
                          ? "ADDED TO BAG"
                          : "ADD TO BAG"}
                      </button>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>
        )}

        {/* =====================================================
            VIP COLLECTION CTA
        ====================================================== */}

        <div
          className={`relative mt-24 overflow-hidden rounded-[40px] border ${
            darkMode
              ? "border-white/[0.08] bg-[#111111]"
              : "border-black/[0.06] bg-white"
          }`}
        >

          {/* GLOW */}

          <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full bg-orange-500/[0.12] blur-[100px]" />

          <div className="relative grid items-center gap-10 px-7 py-16 sm:px-12 lg:grid-cols-[1fr_auto] lg:px-20 lg:py-20">

            <div>

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-8 bg-orange-500" />

                <span className="text-[9px] font-black uppercase tracking-[0.35em] text-orange-500">
                  LUXEMEN PRIVATE COLLECTION
                </span>

              </div>

              <h3 className="max-w-3xl text-4xl font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                Your style.
                <br />
                <span className="font-light text-orange-500">
                  Your signature.
                </span>
              </h3>

              <p
                className={`mt-5 max-w-xl text-sm leading-7 ${muted}`}
              >
                Explore the complete LUXEMEN collection
                and build a wardrobe that speaks before
                you do.
              </p>

            </div>

            <Link
              to="/shop"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-8 py-4 text-xs font-black uppercase tracking-[0.12em] text-white shadow-2xl shadow-orange-500/20 transition hover:scale-105 hover:bg-orange-600"
            >
              Explore Collection

              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

        </div>

        {/* =====================================================
            TRUST STRIP
        ====================================================== */}

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

          {[
            ["01", "Premium Quality", "Crafted for confidence"],
            ["02", "Fast Delivery", "Across Pakistan"],
            ["03", "Secure Payment", "100% protected checkout"],
            ["04", "Easy Returns", "Shop without worry"],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className={`rounded-2xl border p-5 ${cardBg}`}
            >

              <div className="flex items-start justify-between">

                <span className="text-[9px] font-black text-orange-500">
                  {number}
                </span>

                <SparkIcon />

              </div>

              <h4 className="mt-6 text-sm font-black">
                {title}
              </h4>

              <p className={`mt-1 text-[10px] ${muted}`}>
                {text}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* =======================================================
          QUICK VIEW MODAL
      ======================================================== */}

      {quickView && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-xl sm:px-6"
          onClick={() => setQuickView(null)}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative max-h-[94vh] w-full max-w-6xl overflow-auto rounded-[32px] border shadow-[0_40px_120px_rgba(0,0,0,0.45)] ${
              darkMode
                ? "border-white/[0.08] bg-[#101010] text-white"
                : "border-black/[0.07] bg-white text-zinc-950"
            }`}
          >

            {/* CLOSE */}

            <button
              onClick={() => setQuickView(null)}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition hover:scale-110 hover:bg-orange-500"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2">

              {/* =================================================
                  MODAL IMAGE
              ================================================== */}

              <div className="relative min-h-[480px] overflow-hidden">

                <img
                  src={quickView.image}
                  alt={quickView.name}
                  className="h-[520px] w-full object-cover md:h-full md:min-h-[720px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7">

                  <span className="rounded-full bg-white px-4 py-2 text-[8px] font-black uppercase tracking-[0.2em] text-black">
                    {quickView.badge}
                  </span>

                </div>

              </div>

              {/* =================================================
                  MODAL CONTENT
              ================================================== */}

              <div className="p-7 sm:p-10 lg:p-14">

                <p className="text-[9px] font-black uppercase tracking-[0.35em] text-orange-500">
                  {quickView.brand} / {quickView.category}
                </p>

                <h2 className="mt-5 text-4xl font-black tracking-[-0.06em] sm:text-5xl">
                  {quickView.name}
                </h2>

                <div className="mt-5 flex items-center gap-3">

                  <span>
                    ⭐
                  </span>

                  <span className="font-bold">
                    {quickView.rating}
                  </span>

                  <span className={muted}>
                    {quickView.reviews} verified reviews
                  </span>

                </div>

                {/* PRICE */}

                <div className="mt-8 flex items-center gap-4">

                  <span className="text-3xl font-black">
                    Rs.{" "}
                    {quickView.price.toLocaleString()}
                  </span>

                  <span
                    className={`line-through ${muted}`}
                  >
                    Rs.{" "}
                    {quickView.oldPrice.toLocaleString()}
                  </span>

                  <span className="rounded-full bg-orange-500 px-3 py-1 text-[9px] font-black text-white">
                    -
                    {getDiscount(
                      quickView.price,
                      quickView.oldPrice
                    )}
                    %
                  </span>

                </div>

                <div
                  className={`my-8 h-px ${
                    darkMode
                      ? "bg-white/[0.08]"
                      : "bg-black/[0.07]"
                  }`}
                />

                {/* DESCRIPTION */}

                <p
                  className={`text-sm leading-7 ${muted}`}
                >
                  {quickView.description}
                </p>

                {/* SIZE */}

                <div className="mt-8">

                  <div className="mb-3 flex justify-between">

                    <span className="text-xs font-black uppercase tracking-wider">
                      Select Size
                    </span>

                    <span
                      className={`text-xs ${muted}`}
                    >
                      Selected:{" "}
                      {selectedSize[quickView.id] ||
                        "M"}
                    </span>

                  </div>

                  <div className="flex flex-wrap gap-2">

                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() =>
                          selectSize(
                            quickView.id,
                            size
                          )
                        }
                        className={`flex h-11 min-w-11 items-center justify-center rounded-xl border px-4 text-xs font-bold transition ${
                          selectedSize[
                            quickView.id
                          ] === size
                            ? "border-orange-500 bg-orange-500 text-white"
                            : darkMode
                            ? "border-zinc-700 hover:border-zinc-500"
                            : "border-zinc-200 hover:border-zinc-400"
                        }`}
                      >
                        {size}
                      </button>
                    ))}

                  </div>

                </div>

                {/* COLOR */}

                <div className="mt-7">

                  <div className="mb-3 flex justify-between">

                    <span className="text-xs font-black uppercase tracking-wider">
                      Select Color
                    </span>

                    <span
                      className={`text-xs ${muted}`}
                    >
                      {selectedColor[
                        quickView.id
                      ] || quickView.colors[0]}
                    </span>

                  </div>

                  <div className="flex flex-wrap gap-2">

                    {quickView.colors.map(
                      (color) => (
                        <button
                          key={color}
                          onClick={() =>
                            selectColor(
                              quickView.id,
                              color
                            )
                          }
                          className={`rounded-full border px-5 py-2.5 text-xs font-bold transition ${
                            (
                              selectedColor[
                                quickView.id
                              ] ||
                              quickView.colors[0]
                            ) === color
                              ? "border-orange-500 bg-orange-500 text-white"
                              : darkMode
                              ? "border-zinc-700"
                              : "border-zinc-200"
                          }`}
                        >
                          {color}
                        </button>
                      )
                    )}

                  </div>

                </div>

                {/* STOCK */}

                <div className="mt-7 flex items-center gap-2">

                  <span className="h-2 w-2 rounded-full bg-green-500" />

                  <span className="text-xs font-semibold text-green-500">
                    {quickView.stock <= 5
                      ? `Only ${quickView.stock} pieces remaining`
                      : "Available • Ready to ship"}
                  </span>

                </div>

                {/* ACTIONS */}

                <div className="mt-8 grid gap-3">

                  <button
                    onClick={() => {
                      addToBag(quickView);
                      setQuickView(null);
                    }}
                    className="flex items-center justify-center gap-3 rounded-full bg-orange-500 px-8 py-4 text-sm font-black text-white shadow-xl shadow-orange-500/20 transition hover:scale-[1.02] hover:bg-orange-600 active:scale-95"
                  >
                    <BagIcon />
                    ADD TO BAG
                  </button>

                  <Link
                    to={`/product/${quickView.id}`}
                    onClick={() =>
                      setQuickView(null)
                    }
                    className={`flex items-center justify-center gap-2 rounded-full border px-8 py-4 text-sm font-bold transition hover:scale-[1.02] ${
                      darkMode
                        ? "border-zinc-700 hover:bg-white/[0.05]"
                        : "border-zinc-200 hover:bg-zinc-50"
                    }`}
                  >
                    View Full Details
                    <ArrowIcon />
                  </Link>

                </div>

                {/* BENEFITS */}

                <div
                  className={`mt-8 grid grid-cols-3 gap-2 border-t pt-7 ${
                    darkMode
                      ? "border-white/[0.08]"
                      : "border-black/[0.07]"
                  }`}
                >

                  <div className="text-center">

                    <p className="text-sm">
                      ✓
                    </p>

                    <p
                      className={`mt-2 text-[8px] font-bold uppercase tracking-wider ${muted}`}
                    >
                      Premium
                    </p>

                  </div>

                  <div className="text-center">

                    <p className="text-sm">
                      ⚡
                    </p>

                    <p
                      className={`mt-2 text-[8px] font-bold uppercase tracking-wider ${muted}`}
                    >
                      Fast Ship
                    </p>

                  </div>

                  <div className="text-center">

                    <p className="text-sm">
                      ↩
                    </p>

                    <p
                      className={`mt-2 text-[8px] font-bold uppercase tracking-wider ${muted}`}
                    >
                      Easy Return
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      )}

      {/* =======================================================
          TOAST
      ======================================================== */}

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-[300] -translate-x-1/2 px-4">

          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-zinc-950 px-5 py-3 text-xs font-bold text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500">
              ✓
            </span>

            {toast}

          </div>

        </div>
      )}

    </section>
  );
}

export default Products;