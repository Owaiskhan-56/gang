import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const saleProducts = [
  {
    id: 1,
    name: "Premium Black Jacket",
    oldPrice: 8999,
    price: 5999,
    discount: "33% OFF",
    rating: 4.9,
    reviews: 86,
    bought: "500+",
    category: "Jackets",
    tag: "BEST SELLER",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    name: "Classic Men's Shirt",
    oldPrice: 4999,
    price: 3299,
    discount: "34% OFF",
    rating: 4.8,
    reviews: 112,
    bought: "700+",
    category: "Shirts",
    tag: "POPULAR",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    name: "Luxury Formal Suit",
    oldPrice: 14999,
    price: 9999,
    discount: "33% OFF",
    rating: 5.0,
    reviews: 74,
    bought: "350+",
    category: "Formal",
    tag: "PREMIUM",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    name: "Modern White Shirt",
    oldPrice: 4499,
    price: 2999,
    discount: "33% OFF",
    rating: 4.7,
    reviews: 91,
    bought: "450+",
    category: "Shirts",
    tag: "TRENDING",
    image:
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 5,
    name: "Premium Brown Jacket",
    oldPrice: 8999,
    price: 6999,
    discount: "22% OFF",
    rating: 4.8,
    reviews: 65,
    bought: "200+",
    category: "Jackets",
    tag: "NEW",
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    name: "Elegant Black Outfit",
    oldPrice: 11999,
    price: 7999,
    discount: "33% OFF",
    rating: 4.9,
    reviews: 103,
    bought: "600+",
    category: "Formal",
    tag: "HOT DEAL",
    image:
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 7,
    name: "Classic Denim Jacket",
    oldPrice: 7999,
    price: 5499,
    discount: "31% OFF",
    rating: 4.8,
    reviews: 78,
    bought: "320+",
    category: "Jackets",
    tag: "LIMITED",
    image:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 8,
    name: "Premium Beige Shirt",
    oldPrice: 5499,
    price: 3799,
    discount: "31% OFF",
    rating: 4.7,
    reviews: 69,
    bought: "280+",
    category: "Shirts",
    tag: "SALE",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 9,
    name: "Modern Grey Suit",
    oldPrice: 15999,
    price: 10999,
    discount: "31% OFF",
    rating: 4.9,
    reviews: 95,
    bought: "420+",
    category: "Formal",
    tag: "EDITOR'S PICK",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
  },
];

const categories = ["All", "Shirts", "Jackets", "Formal"];

const Sale = ({ darkMode = false, addToCart }) => {
  const [wishlist, setWishlist] = useState([]);
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [search, setSearch] = useState("");
  const [addedProduct, setAddedProduct] = useState(null);
  const [notification, setNotification] = useState("");
  const [showAll, setShowAll] = useState(false);

  const toggleWishlist = (id) => {
    setWishlist((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }

      return [...current, id];
    });
  };

  const handleAddToCart = (product) => {
    if (addToCart) {
      addToCart({
        ...product,
        quantity: 1,
      });
    }

    setAddedProduct(product.id);
    setNotification(`${product.name} added to your bag`);

    setTimeout(() => {
      setAddedProduct(null);
    }, 1800);

    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setSortBy("featured");
  };

  const filteredProducts = useMemo(() => {
    let result = [...saleProducts];

    if (category !== "All") {
      result = result.filter(
        (product) => product.category === category
      );
    }

    if (search.trim()) {
      const searchValue = search.toLowerCase().trim();

      result = result.filter((product) => {
        return (
          product.name.toLowerCase().includes(searchValue) ||
          product.category.toLowerCase().includes(searchValue) ||
          product.tag.toLowerCase().includes(searchValue)
        );
      });
    }

    if (sortBy === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "discount") {
      result.sort((a, b) => {
        const discountA =
          ((a.oldPrice - a.price) / a.oldPrice) * 100;

        const discountB =
          ((b.oldPrice - b.price) / b.oldPrice) * 100;

        return discountB - discountA;
      });
    }

    return result;
  }, [category, search, sortBy]);

  const visibleProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 6);

  const totalSavings = saleProducts.reduce(
    (total, product) =>
      total + (product.oldPrice - product.price),
    0
  );

  const totalReviews = saleProducts.reduce(
    (total, product) => total + product.reviews,
    0
  );

  return (
    <main
      className={`min-h-screen overflow-hidden ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-white text-zinc-900"
      }`}
    >
      {/* =====================================================
          SUCCESS NOTIFICATION
      ===================================================== */}

      {notification && (
        <div className="fixed right-5 top-24 z-50">
          <div className="flex items-center gap-3 rounded-2xl bg-black px-6 py-4 text-sm font-semibold text-white shadow-2xl">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">
              ✓
            </span>

            {notification}
          </div>
        </div>
      )}

      {/* =====================================================
          TOP SALE STRIP
      ===================================================== */}

      <div className="bg-black px-4 py-3 text-center text-xs font-semibold tracking-[0.2em] text-white sm:text-sm">
        🔥 LUXEMEN MEGA SALE — UP TO 40% OFF
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className={`relative px-6 py-16 md:py-24 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* HERO CONTENT */}

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-xs font-bold tracking-[0.2em] dark:border-zinc-700">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                LIMITED TIME SALE
              </div>

              <p className="mt-7 text-sm font-semibold tracking-[0.4em] text-gray-500">
                LUXEMEN SPECIAL OFFER
              </p>

              <h1 className="mt-5 text-7xl font-black leading-[0.85] tracking-tight sm:text-8xl md:text-9xl">
                SALE
              </h1>

              <div className="mt-7">
                <p className="text-3xl font-light sm:text-4xl">
                  Premium style.
                </p>

                <p className="mt-1 text-3xl font-bold sm:text-4xl">
                  Exceptional prices.
                </p>
              </div>

              <p className="mt-7 max-w-xl text-base leading-8 text-gray-500 sm:text-lg">
                Discover carefully selected LUXEMEN pieces
                with exclusive sale prices. Upgrade your
                wardrobe with premium jackets, shirts and
                formal wear.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#deals"
                  className="rounded-full bg-black px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Shop Sale →
                </a>

                <Link
                  to="/shop"
                  className={`rounded-full border px-8 py-4 font-semibold transition duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? "border-zinc-700 hover:bg-zinc-800"
                      : "border-gray-300 hover:bg-white"
                  }`}
                >
                  View Collection
                </Link>
              </div>

              {/* HERO STATS */}

              <div className="mt-12 grid max-w-xl grid-cols-3 border-y py-6">
                <div>
                  <p className="text-2xl font-black sm:text-3xl">
                    40%
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    MAX DISCOUNT
                  </p>
                </div>

                <div className="border-x px-4">
                  <p className="text-2xl font-black sm:text-3xl">
                    09+
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    SALE ITEMS
                  </p>
                </div>

                <div className="pl-4">
                  <p className="text-2xl font-black sm:text-3xl">
                    5K+
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    HAPPY BUYERS
                  </p>
                </div>
              </div>
            </div>

            {/* HERO IMAGE */}

            <div className="relative">
              <div className="absolute -inset-3 rounded-[40px] border border-zinc-300/50 dark:border-zinc-700/50" />

              <div className="relative overflow-hidden rounded-[35px]">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=90"
                  alt="LUXEMEN men's fashion sale"
                  className="h-[550px] w-full object-cover transition duration-1000 hover:scale-105 md:h-[680px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 right-7">
                  <div className="flex items-end justify-between gap-4 text-white">
                    <div>
                      <p className="text-xs tracking-[0.3em] text-zinc-300">
                        LUXEMEN
                      </p>

                      <p className="mt-2 text-3xl font-bold">
                        Up To 40% OFF
                      </p>

                      <p className="mt-1 text-sm text-zinc-300">
                        Limited collection
                      </p>
                    </div>

                    <div className="rounded-full bg-white px-5 py-3 text-sm font-bold text-black">
                      SALE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROMISE BAR
      ===================================================== */}

      <section className="bg-black px-6 py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="text-3xl">🚚</div>

            <h3 className="mt-3 font-bold">
              Fast Delivery
            </h3>

            <p className="mt-1 text-sm text-zinc-400">
              Across Pakistan
            </p>
          </div>

          <div className="text-center">
            <div className="text-3xl">🔒</div>

            <h3 className="mt-3 font-bold">
              Secure Checkout
            </h3>

            <p className="mt-1 text-sm text-zinc-400">
              Safe & reliable
            </p>
          </div>

          <div className="text-center">
            <div className="text-3xl">↩️</div>

            <h3 className="mt-3 font-bold">
              Easy Returns
            </h3>

            <p className="mt-1 text-sm text-zinc-400">
              Simple process
            </p>
          </div>

          <div className="text-center">
            <div className="text-3xl">♡</div>

            <h3 className="mt-3 font-bold">
              Premium Quality
            </h3>

            <p className="mt-1 text-sm text-zinc-400">
              Made for you
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SALE SUMMARY
      ===================================================== */}

      <section
        className={`border-b px-6 py-12 ${
          darkMode
            ? "border-zinc-800 bg-zinc-950"
            : "border-gray-200 bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-4">
            <div
              className={`rounded-3xl border p-7 ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-gray-200 bg-zinc-50"
              }`}
            >
              <p className="text-sm text-gray-500">
                SALE PRODUCTS
              </p>

              <p className="mt-3 text-4xl font-black">
                {saleProducts.length}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Premium pieces
              </p>
            </div>

            <div
              className={`rounded-3xl border p-7 ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-gray-200 bg-zinc-50"
              }`}
            >
              <p className="text-sm text-gray-500">
                MAXIMUM DISCOUNT
              </p>

              <p className="mt-3 text-4xl font-black">
                40%
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Save more today
              </p>
            </div>

            <div
              className={`rounded-3xl border p-7 ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-gray-200 bg-zinc-50"
              }`}
            >
              <p className="text-sm text-gray-500">
                CUSTOMER REVIEWS
              </p>

              <p className="mt-3 text-4xl font-black">
                {totalReviews}+
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Verified reviews
              </p>
            </div>

            <div
              className={`rounded-3xl border p-7 ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-gray-200 bg-zinc-50"
              }`}
            >
              <p className="text-sm text-gray-500">
                TOTAL SAVINGS
              </p>

              <p className="mt-3 text-4xl font-black">
                Rs. {totalSavings.toLocaleString()}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Available across sale
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <section
        id="deals"
        className="scroll-mt-20 px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          {/* SECTION HEADER */}

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold tracking-[0.35em] text-gray-500">
                LIMITED DEALS
              </p>

              <h2 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
                Best Deals
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-gray-500">
                Premium men's fashion at prices that
                won't stay for long.
              </p>
            </div>

            <div
              className={`rounded-full border px-5 py-3 text-sm font-semibold ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-gray-200"
              }`}
            >
              ❤️ {wishlist.length} Saved
            </div>
          </div>

          {/* SEARCH */}

          <div className="mt-10">
            <div className="relative">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xl">
                🔍
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search jackets, shirts, suits..."
                className={`w-full rounded-full border py-5 pl-14 pr-6 outline-none transition ${
                  darkMode
                    ? "border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-500 focus:border-white"
                    : "border-gray-300 bg-white focus:border-black"
                }`}
              />
            </div>
          </div>

          {/* FILTERS */}

          <div className="mt-7 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${
                    category === item
                      ? "bg-black text-white shadow-lg"
                      : darkMode
                      ? "bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`rounded-full border px-6 py-3 text-sm font-semibold outline-none ${
                darkMode
                  ? "border-zinc-700 bg-zinc-900"
                  : "border-gray-300 bg-white"
              }`}
            >
              <option value="featured">
                Sort: Featured
              </option>

              <option value="low">
                Price: Low to High
              </option>

              <option value="high">
                Price: High to Low
              </option>

              <option value="discount">
                Biggest Discount
              </option>

              <option value="rating">
                Highest Rated
              </option>
            </select>
          </div>

          {/* RESULTS INFO */}

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-bold text-current">
                {visibleProducts.length}
              </span>{" "}
              of {filteredProducts.length} products
            </p>

            {(search || category !== "All") && (
              <button
                onClick={clearFilters}
                className="text-sm font-semibold underline underline-offset-4"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* NO RESULTS */}

          {filteredProducts.length === 0 ? (
            <div
              className={`mt-10 rounded-[30px] border px-6 py-24 text-center ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <div className="text-6xl">🔎</div>

              <h3 className="mt-6 text-3xl font-black">
                No products found
              </h3>

              <p className="mx-auto mt-3 max-w-md text-gray-500">
                We couldn't find anything matching your
                search. Try another product or category.
              </p>

              <button
                onClick={clearFilters}
                className="mt-7 rounded-full bg-black px-8 py-4 font-semibold text-white"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <>
              {/* PRODUCT GRID */}

              <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {visibleProducts.map((product) => {
                  const savings =
                    product.oldPrice - product.price;

                  const discountPercent = Math.round(
                    (savings / product.oldPrice) * 100
                  );

                  return (
                    <article
                      key={product.id}
                      className={`group overflow-hidden rounded-[28px] border transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                        darkMode
                          ? "border-zinc-800 bg-zinc-900"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      {/* PRODUCT IMAGE */}

                      <div className="relative overflow-hidden">
                        <Link
                          to={`/product/${product.id}`}
                          className="block"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-[460px] w-full object-cover transition duration-700 group-hover:scale-110"
                          />
                        </Link>

                        {/* IMAGE GRADIENT */}

                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                        {/* DISCOUNT */}

                        <div className="absolute left-4 top-4 rounded-full bg-black px-4 py-2 text-xs font-black tracking-wide text-white">
                          {product.discount}
                        </div>

                        {/* TAG */}

                        <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-black shadow-lg backdrop-blur">
                          {product.tag}
                        </div>

                        {/* WISHLIST */}

                        <button
                          onClick={() =>
                            toggleWishlist(product.id)
                          }
                          aria-label="Toggle wishlist"
                          className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-black shadow-xl transition duration-300 hover:scale-110"
                        >
                          {wishlist.includes(product.id)
                            ? "♥"
                            : "♡"}
                        </button>

                        {/* QUICK VIEW */}

                        <Link
                          to={`/product/${product.id}`}
                          className="absolute bottom-4 right-4 translate-y-4 rounded-full bg-black px-5 py-3 text-xs font-bold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                        >
                          Quick View
                        </Link>
                      </div>

                      {/* PRODUCT INFO */}

                      <div className="p-6">
                        <p className="text-xs font-semibold tracking-[0.2em] text-gray-500">
                          LUXEMEN • {product.category}
                        </p>

                        <Link
                          to={`/product/${product.id}`}
                        >
                          <h3 className="mt-3 text-xl font-bold transition hover:opacity-60">
                            {product.name}
                          </h3>
                        </Link>

                        {/* RATING */}

                        <div className="mt-3 flex items-center gap-2">
                          <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-bold text-yellow-800">
                            ⭐ {product.rating}
                          </span>

                          <span className="text-xs text-gray-500">
                            {product.reviews} reviews
                          </span>
                        </div>

                        {/* BOUGHT */}

                        <p className="mt-3 text-xs text-gray-500">
                          🔥 {product.bought} customers
                          bought this
                        </p>

                        {/* PRICE */}

                        <div className="mt-5 flex items-end gap-3">
                          <span className="text-2xl font-black">
                            Rs.{" "}
                            {product.price.toLocaleString()}
                          </span>

                          <span className="pb-1 text-sm text-gray-500 line-through">
                            Rs.{" "}
                            {product.oldPrice.toLocaleString()}
                          </span>
                        </div>

                        {/* SAVINGS */}

                        <div className="mt-2 flex items-center justify-between">
                          <p className="text-sm font-bold text-green-600">
                            Save Rs.{" "}
                            {savings.toLocaleString()}
                          </p>

                          <p className="text-xs font-semibold text-gray-500">
                            {discountPercent}% saved
                          </p>
                        </div>

                        {/* BUTTONS */}

                        <div className="mt-6 grid grid-cols-2 gap-3">
                          <Link
                            to={`/product/${product.id}`}
                            className={`rounded-full border px-4 py-3 text-center text-sm font-bold transition hover:-translate-y-1 ${
                              darkMode
                                ? "border-zinc-700 hover:bg-zinc-800"
                                : "border-gray-300 hover:bg-gray-100"
                            }`}
                          >
                            Details
                          </Link>

                          <button
                            onClick={() =>
                              handleAddToCart(product)
                            }
                            className="rounded-full bg-black px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-zinc-800"
                          >
                            {addedProduct === product.id
                              ? "✓ Added"
                              : "Add To Bag"}
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* LOAD MORE */}

              {filteredProducts.length > 6 && (
                <div className="mt-12 text-center">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className={`rounded-full border px-9 py-4 font-semibold transition hover:-translate-y-1 ${
                      darkMode
                        ? "border-zinc-700 hover:bg-zinc-900"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {showAll
                      ? "Show Less ↑"
                      : "Show All Products ↓"}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* =====================================================
          CATEGORY SECTION
      ===================================================== */}

      <section
        className={`px-6 py-20 md:py-28 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-[0.35em] text-gray-500">
              SHOP THE SALE
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Deals For Every Style
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-500">
              Choose your favorite category and discover
              exclusive LUXEMEN prices.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* SHIRTS */}

            <button
              onClick={() => {
                setCategory("Shirts");

                document
                  .getElementById("deals")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              className="group relative overflow-hidden rounded-[30px] bg-black p-10 text-left text-white transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10 transition duration-500 group-hover:scale-150" />

              <div className="text-5xl">👔</div>

              <h3 className="mt-7 text-3xl font-black">
                Shirts
              </h3>

              <p className="mt-2 text-zinc-400">
                Premium everyday style
              </p>

              <p className="mt-7 font-semibold underline underline-offset-4">
                Shop Shirts →
              </p>
            </button>

            {/* JACKETS */}

            <button
              onClick={() => {
                setCategory("Jackets");

                document
                  .getElementById("deals")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              className="group relative overflow-hidden rounded-[30px] bg-black p-10 text-left text-white transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10 transition duration-500 group-hover:scale-150" />

              <div className="text-5xl">🧥</div>

              <h3 className="mt-7 text-3xl font-black">
                Jackets
              </h3>

              <p className="mt-2 text-zinc-400">
                Statement outerwear
              </p>

              <p className="mt-7 font-semibold underline underline-offset-4">
                Shop Jackets →
              </p>
            </button>

            {/* FORMAL */}

            <button
              onClick={() => {
                setCategory("Formal");

                document
                  .getElementById("deals")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              className="group relative overflow-hidden rounded-[30px] bg-black p-10 text-left text-white transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10 transition duration-500 group-hover:scale-150" />

              <div className="text-5xl">🤵</div>

              <h3 className="mt-7 text-3xl font-black">
                Formal
              </h3>

              <p className="mt-2 text-zinc-400">
                Elegant occasion wear
              </p>

              <p className="mt-7 font-semibold underline underline-offset-4">
                Shop Formal →
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY SHOP SALE
      ===================================================== */}

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-[0.35em] text-gray-500">
              LUXEMEN PROMISE
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Shop With Confidence
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-gray-500">
              Every LUXEMEN order is designed around
              quality, convenience and trust.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className={`rounded-[28px] border p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-3xl">
                🚚
              </div>

              <h3 className="mt-6 text-lg font-bold">
                Fast Delivery
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Fast and reliable delivery across Pakistan.
              </p>
            </div>

            <div
              className={`rounded-[28px] border p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-3xl">
                🔒
              </div>

              <h3 className="mt-6 text-lg font-bold">
                Secure Payment
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Safe checkout with a secure shopping
                experience.
              </p>
            </div>

            <div
              className={`rounded-[28px] border p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-3xl">
                ↩️
              </div>

              <h3 className="mt-6 text-lg font-bold">
                Easy Returns
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Simple return process for eligible products.
              </p>
            </div>

            <div
              className={`rounded-[28px] border p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-3xl">
                ❤️
              </div>

              <h3 className="mt-6 text-lg font-bold">
                Customer Support
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Our team is ready to help whenever you
                need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SALE INFORMATION
      ===================================================== */}

      <section
        className={`px-6 py-20 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.3em] text-gray-500">
                BEFORE YOU BUY
              </p>

              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                Premium style,
                <br />
                better prices.
              </h2>

              <p className="mt-6 leading-8 text-gray-500">
                Our sale collection gives you access to
                selected LUXEMEN products at reduced prices.
                From everyday shirts to statement jackets and
                formal suits, find your next favorite piece
                before the sale ends.
              </p>
            </div>

            <div className="space-y-4">
              <details
                className={`rounded-2xl p-6 ${
                  darkMode
                    ? "bg-zinc-950"
                    : "bg-white"
                }`}
              >
                <summary className="cursor-pointer font-bold">
                  How long will the sale last?
                </summary>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  Sale prices are available for a limited
                  time and may change while stock lasts.
                </p>
              </details>

              <details
                className={`rounded-2xl p-6 ${
                  darkMode
                    ? "bg-zinc-950"
                    : "bg-white"
                }`}
              >
                <summary className="cursor-pointer font-bold">
                  Are sale products returnable?
                </summary>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  Eligible items can be returned according
                  to the applicable LUXEMEN return policy.
                </p>
              </details>

              <details
                className={`rounded-2xl p-6 ${
                  darkMode
                    ? "bg-zinc-950"
                    : "bg-white"
                }`}
              >
                <summary className="cursor-pointer font-bold">
                  Do you offer Cash on Delivery?
                </summary>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  Cash on Delivery may be available
                  depending on the delivery location.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-black px-6 py-24 text-center text-white md:py-32">
        <p className="text-sm font-semibold tracking-[0.4em] text-zinc-500">
          LAST CHANCE
        </p>

        <h2 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">
          Don't Miss
          <br />
          <span className="font-light italic">
            The Sale.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-7 text-zinc-400">
          Your next premium outfit could be waiting here.
          Explore the collection and save before your
          favorite pieces are gone.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="#deals"
            className="rounded-full bg-white px-9 py-4 font-bold text-black transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Explore Deals →
          </a>

          <Link
            to="/shop"
            className="rounded-full border border-zinc-700 px-9 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-zinc-900"
          >
            View Collection
          </Link>
        </div>

        <div className="mx-auto mt-12 flex max-w-md items-center justify-center gap-6 text-xs tracking-[0.2em] text-zinc-500">
          <span>PREMIUM</span>
          <span>•</span>
          <span>MODERN</span>
          <span>•</span>
          <span>LUXEMEN</span>
        </div>
      </section>
    </main>
  );
};

export default Sale;