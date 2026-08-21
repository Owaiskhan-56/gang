import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const NewArrivals = ({
  darkMode,
  addToCart,
  cart = [],
}) => {
  const [wishlist, setWishlist] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [quickView, setQuickView] = useState(null);
  const [addedProduct, setAddedProduct] = useState("");

  const products = [
    {
      id: 1,
      name: "Premium Black Shirt",
      price: 4499,
      oldPrice: 5499,
      rating: 4.9,
      reviews: 54,
      category: "Shirts",
      badge: "BESTSELLER",
      sizes: ["S", "M", "L", "XL"],
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 2,
      name: "Luxury Casual Jacket",
      price: 7999,
      oldPrice: 9999,
      rating: 4.8,
      reviews: 42,
      category: "Jackets",
      badge: "TRENDING",
      sizes: ["M", "L", "XL"],
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 3,
      name: "Classic White Outfit",
      price: 5999,
      oldPrice: 6999,
      rating: 4.9,
      reviews: 67,
      category: "Casual",
      badge: "NEW",
      sizes: ["S", "M", "L", "XL"],
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 4,
      name: "Modern Beige Shirt",
      price: 3999,
      oldPrice: 4999,
      rating: 4.7,
      reviews: 38,
      category: "Shirts",
      badge: "NEW",
      sizes: ["S", "M", "L"],
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 5,
      name: "Urban Denim Jacket",
      price: 6999,
      oldPrice: 8499,
      rating: 4.8,
      reviews: 45,
      category: "Jackets",
      badge: "HOT",
      sizes: ["M", "L", "XL"],
      image:
        "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 6,
      name: "Modern Formal Look",
      price: 8999,
      oldPrice: 10999,
      rating: 5.0,
      reviews: 29,
      category: "Formal",
      badge: "PREMIUM",
      sizes: ["S", "M", "L", "XL"],
      image:
        "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 7,
      name: "Premium Navy Polo",
      price: 3499,
      oldPrice: 4299,
      rating: 4.8,
      reviews: 73,
      category: "Casual",
      badge: "NEW",
      sizes: ["S", "M", "L", "XL"],
      image:
        "https://images.unsplash.com/photo-1625910513413-5fc45c5d8fce?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 8,
      name: "Classic Black Blazer",
      price: 9999,
      oldPrice: 11999,
      rating: 4.9,
      reviews: 36,
      category: "Formal",
      badge: "PREMIUM",
      sizes: ["M", "L", "XL"],
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 9,
      name: "Oversized Street Hoodie",
      price: 4999,
      oldPrice: 5999,
      rating: 4.7,
      reviews: 81,
      category: "Casual",
      badge: "TRENDING",
      sizes: ["S", "M", "L", "XL"],
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=85",
    },
  ];

  const categories = [
    "All",
    "Shirts",
    "Jackets",
    "Casual",
    "Formal",
  ];

  /* ================= WISHLIST ================= */

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  /* ================= FILTER + SEARCH + SORT ================= */

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== "All") {
      result = result.filter(
        (product) => product.category === category
      );
    }

    if (search.trim()) {
      result = result.filter((product) =>
        product.name
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [category, search, sort]);

  /* ================= ADD TO CART ================= */

  const handleAddToCart = (product) => {
    if (addToCart) {
      addToCart({
        ...product,
        quantity: 1,
      });
    }

    setAddedProduct(product.name);

    setTimeout(() => {
      setAddedProduct("");
    }, 2500);
  };

  return (
    <main
      className={`min-h-screen ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-white text-zinc-900"
      }`}
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className={`relative overflow-hidden px-6 py-24 md:py-32 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 md:grid-cols-2">

            <div>

              <p className="text-sm tracking-[0.4em] text-gray-500">
                LUXEMEN • NEW SEASON 2026
              </p>

              <h1 className="mt-6 text-6xl font-bold leading-none md:text-8xl">
                New
                <br />
                <span className="font-light italic">
                  Arrivals.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-500">
                Discover the newest collection of premium
                men's fashion. Modern designs, timeless
                silhouettes and effortless style.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <a
                  href="#new-products"
                  className="rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
                >
                  Explore Collection →
                </a>

                <Link
                  to="/shop"
                  className={`rounded-full border px-8 py-4 font-semibold transition hover:scale-105 ${
                    darkMode
                      ? "border-zinc-700 hover:bg-zinc-800"
                      : "border-gray-300 hover:bg-white"
                  }`}
                >
                  Shop All
                </Link>

              </div>

            </div>

            <div className="relative">

              <div className="overflow-hidden rounded-[35px]">
                <img
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85"
                  alt="New men's fashion"
                  className="h-[550px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div
                className={`absolute -bottom-6 -left-6 rounded-2xl p-5 shadow-xl ${
                  darkMode
                    ? "bg-zinc-800"
                    : "bg-white"
                }`}
              >
                <p className="text-xs tracking-widest text-gray-500">
                  JUST DROPPED
                </p>

                <p className="mt-2 text-xl font-bold">
                  09 New Styles
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          BLACK INFO BAR
      ===================================================== */}

      <section className="bg-black px-6 py-10 text-white">

        <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-4">

          <div>
            <p className="text-3xl font-bold">09+</p>
            <p className="mt-2 text-sm text-zinc-400">
              New Products
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold">2026</p>
            <p className="mt-2 text-sm text-zinc-400">
              Latest Collection
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold">4.8★</p>
            <p className="mt-2 text-sm text-zinc-400">
              Average Rating
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold">100%</p>
            <p className="mt-2 text-sm text-zinc-400">
              Premium Quality
            </p>
          </div>

        </div>

      </section>

      {/* =====================================================
          SEARCH + FILTER
      ===================================================== */}

      <section
        id="new-products"
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm tracking-[0.3em] text-gray-500">
              FRESH FROM LUXEMEN
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-6xl">
              Latest Pieces
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-500">
              Explore our newest arrivals and find your
              next signature look.
            </p>

          </div>

          {/* SEARCH */}

          <div className="mx-auto mt-12 max-w-2xl">

            <div
              className={`flex items-center rounded-full border px-5 py-3 ${
                darkMode
                  ? "border-zinc-700 bg-zinc-900"
                  : "border-gray-300 bg-white"
              }`}
            >

              <span className="mr-3 text-xl">
                🔎
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search new arrivals..."
                className={`w-full bg-transparent outline-none ${
                  darkMode
                    ? "placeholder:text-zinc-500"
                    : "placeholder:text-gray-400"
                }`}
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="text-gray-500"
                >
                  ✕
                </button>
              )}

            </div>

          </div>

          {/* FILTERS */}

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">

            {categories.map((item) => (

              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                  category === item
                    ? "bg-black text-white"
                    : darkMode
                    ? "border border-zinc-700 hover:bg-zinc-800"
                    : "border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {item}
              </button>

            ))}

          </div>

          {/* SORT */}

          <div className="mt-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-semibold text-current">
                {filteredProducts.length}
              </span>{" "}
              products
            </p>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className={`rounded-full border px-5 py-3 text-sm outline-none ${
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

              <option value="rating">
                Highest Rated
              </option>
            </select>

          </div>

          {/* =================================================
              PRODUCT GRID
          ================================================= */}

          {filteredProducts.length === 0 ? (

            <div className="py-24 text-center">

              <div className="text-6xl">
                🔍
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                No products found
              </h3>

              <p className="mt-3 text-gray-500">
                Try another search or category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="mt-6 rounded-full bg-black px-7 py-3 font-semibold text-white"
              >
                Clear Filters
              </button>

            </div>

          ) : (

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

              {filteredProducts.map((product) => {

                const isWishlisted =
                  wishlist.includes(product.id);

                const cartItem = cart.find(
                  (item) => item.id === product.id
                );

                return (

                  <article
                    key={product.id}
                    className={`group overflow-hidden rounded-3xl border transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                      darkMode
                        ? "border-zinc-800 bg-zinc-900"
                        : "border-gray-200 bg-white"
                    }`}
                  >

                    {/* IMAGE */}

                    <div className="relative overflow-hidden">

                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-110"
                      />

                      {/* BADGE */}

                      <span className="absolute left-4 top-4 rounded-full bg-black px-4 py-2 text-xs font-bold text-white">
                        {product.badge}
                      </span>

                      {/* WISHLIST */}

                      <button
                        onClick={() =>
                          toggleWishlist(product.id)
                        }
                        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-lg transition hover:scale-110"
                      >
                        {isWishlisted ? "❤️" : "♡"}
                      </button>

                      {/* QUICK VIEW */}

                      <button
                        onClick={() =>
                          setQuickView(product)
                        }
                        className="absolute bottom-4 left-4 right-4 rounded-full bg-white/95 py-3 text-sm font-bold opacity-0 shadow-lg transition duration-300 group-hover:opacity-100"
                      >
                        Quick View
                      </button>

                    </div>

                    {/* DETAILS */}

                    <div className="p-6">

                      <p className="text-xs tracking-[0.2em] text-gray-500">
                        LUXEMEN • {product.category}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold">
                        {product.name}
                      </h3>

                      {/* RATING */}

                      <div className="mt-3 flex items-center gap-2 text-sm">

                        <span>
                          ⭐ {product.rating}
                        </span>

                        <span className="text-gray-500">
                          ({product.reviews} reviews)
                        </span>

                      </div>

                      {/* PRICE */}

                      <div className="mt-4 flex items-center gap-3">

                        <span className="text-xl font-bold">
                          Rs. {product.price.toLocaleString()}
                        </span>

                        <span className="text-sm text-gray-400 line-through">
                          Rs. {product.oldPrice.toLocaleString()}
                        </span>

                      </div>

                      {/* SIZES */}

                      <div className="mt-5">

                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                          Available Sizes
                        </p>

                        <div className="mt-2 flex gap-2">

                          {product.sizes.map((size) => (

                            <span
                              key={size}
                              className={`rounded-lg border px-3 py-1 text-xs ${
                                darkMode
                                  ? "border-zinc-700"
                                  : "border-gray-300"
                              }`}
                            >
                              {size}
                            </span>

                          ))}

                        </div>

                      </div>

                      {/* BUTTONS */}

                      <div className="mt-6 grid grid-cols-2 gap-3">

                        <button
                          onClick={() =>
                            setQuickView(product)
                          }
                          className={`rounded-full border px-4 py-3 text-sm font-semibold transition hover:scale-[1.02] ${
                            darkMode
                              ? "border-zinc-700 hover:bg-zinc-800"
                              : "border-gray-300 hover:bg-gray-100"
                          }`}
                        >
                          Details
                        </button>

                        <button
                          onClick={() =>
                            handleAddToCart(product)
                          }
                          className="rounded-full bg-black px-4 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
                        >
                          {cartItem
                            ? `In Bag (${cartItem.quantity})`
                            : "Add to Bag"}
                        </button>

                      </div>

                    </div>

                  </article>

                );
              })}

            </div>

          )}

        </div>
      </section>

      {/* =====================================================
          WISHLIST BANNER
      ===================================================== */}

      <section
        className={`px-6 py-20 ${
          darkMode
            ? "bg-zinc-900"
            : "bg-zinc-100"
        }`}
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-10 md:grid-cols-2">

            <div>

              <p className="text-sm tracking-[0.3em] text-gray-500">
                YOUR FAVORITES
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Build Your Wishlist.
              </h2>

              <p className="mt-5 max-w-lg leading-8 text-gray-500">
                Save your favorite pieces and come back
                whenever you're ready to complete your look.
              </p>

              <div className="mt-7 inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white">
                ❤️ {wishlist.length} Saved Items
              </div>

            </div>

            <div className="grid grid-cols-2 gap-4">

              {products
                .filter((product) =>
                  wishlist.includes(product.id)
                )
                .slice(0, 4)
                .map((product) => (

                  <img
                    key={product.id}
                    src={product.image}
                    alt={product.name}
                    className="h-52 w-full rounded-2xl object-cover"
                  />

                ))}

              {wishlist.length === 0 && (
                <div className="col-span-2 rounded-3xl border border-dashed border-gray-400 p-12 text-center">
                  <p className="text-4xl">
                    ♡
                  </p>

                  <p className="mt-4 font-semibold">
                    Your wishlist is waiting.
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Tap the heart on any product to save it.
                  </p>
                </div>
              )}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          STYLE SECTION
      ===================================================== */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 md:grid-cols-2">

            <div className="overflow-hidden rounded-[35px]">

              <img
                src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1000&q=85"
                alt="Men's premium fashion"
                className="h-[550px] w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

            <div>

              <p className="text-sm tracking-[0.3em] text-gray-500">
                THE NEW STANDARD
              </p>

              <h2 className="mt-5 text-5xl font-bold md:text-6xl">
                Dress
                <br />
                <span className="font-light italic">
                  Different.
                </span>
              </h2>

              <p className="mt-7 leading-8 text-gray-500">
                Our newest collection brings together
                contemporary design and timeless men's
                fashion. Every piece is carefully selected
                for quality, comfort and confidence.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-5">

                <div>
                  <p className="text-3xl font-bold">
                    100%
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Premium Quality
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-bold">
                    4.8★
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Customer Rating
                  </p>
                </div>

              </div>

              <Link
                to="/shop"
                className="mt-9 inline-block rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
              >
                Discover More →
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section
        className={`px-6 py-20 ${
          darkMode
            ? "bg-zinc-900"
            : "bg-zinc-100"
        }`}
      >

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm tracking-[0.3em] text-gray-500">
              WHY LUXEMEN
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Made For Your Lifestyle.
            </h2>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["🚚", "Fast Delivery", "3–5 business days"],
              ["🔒", "Secure Payment", "Safe checkout"],
              ["↩️", "Easy Returns", "Simple return process"],
              ["💬", "Customer Support", "We're here to help"],
            ].map(([icon, title, text]) => (

              <div
                key={title}
                className={`rounded-3xl p-8 text-center ${
                  darkMode
                    ? "bg-zinc-950"
                    : "bg-white"
                }`}
              >

                <div className="text-4xl">
                  {icon}
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          NEWSLETTER
      ===================================================== */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-5xl rounded-[35px] bg-black px-7 py-16 text-center text-white md:px-20">

          <p className="text-sm tracking-[0.3em] text-zinc-400">
            JOIN THE LUXEMEN COMMUNITY
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            Never Miss
            <br />
            <span className="font-light italic">
              A Drop.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-zinc-400">
            Get early access to new collections, exclusive
            offers and fashion inspiration.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for joining LUXEMEN!");
            }}
            className="mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row"
          >

            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 rounded-full px-6 py-4 text-black outline-none"
            />

            <button
              type="submit"
              className="rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:scale-105"
            >
              Subscribe →
            </button>

          </form>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-6 pb-24 text-center">

        <p className="text-sm tracking-[0.3em] text-gray-500">
          YOUR NEXT LOOK
        </p>

        <h2 className="mt-5 text-5xl font-bold md:text-7xl">
          Fresh Style.
          <br />
          <span className="font-light italic">
            Fresh Start.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-gray-500">
          Explore the complete LUXEMEN collection and
          find your signature style.
        </p>

        <Link
          to="/shop"
          className="mt-9 inline-block rounded-full bg-black px-10 py-4 font-semibold text-white transition hover:scale-105"
        >
          Shop Collection →
        </Link>

      </section>

      {/* =====================================================
          QUICK VIEW MODAL
      ===================================================== */}

      {quickView && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
          onClick={() => setQuickView(null)}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className={`max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl ${
              darkMode
                ? "bg-zinc-900 text-white"
                : "bg-white text-zinc-900"
            }`}
          >

            <div className="grid md:grid-cols-2">

              <img
                src={quickView.image}
                alt={quickView.name}
                className="h-[450px] w-full object-cover md:h-full"
              />

              <div className="p-8 md:p-10">

                <button
                  onClick={() => setQuickView(null)}
                  className="float-right flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-black"
                >
                  ✕
                </button>

                <p className="pt-2 text-xs tracking-[0.2em] text-gray-500">
                  LUXEMEN • {quickView.category}
                </p>

                <h2 className="mt-5 text-3xl font-bold">
                  {quickView.name}
                </h2>

                <div className="mt-4">
                  ⭐ {quickView.rating}
                  <span className="ml-2 text-gray-500">
                    ({quickView.reviews} reviews)
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-3">

                  <span className="text-2xl font-bold">
                    Rs. {quickView.price.toLocaleString()}
                  </span>

                  <span className="text-gray-400 line-through">
                    Rs. {quickView.oldPrice.toLocaleString()}
                  </span>

                </div>

                <p className="mt-6 leading-7 text-gray-500">
                  Premium men's fashion designed with
                  comfort, quality and modern style in mind.
                  Perfect for everyday wear and special
                  occasions.
                </p>

                <div className="mt-7">

                  <p className="text-sm font-semibold">
                    Select Size
                  </p>

                  <div className="mt-3 flex gap-2">

                    {quickView.sizes.map((size) => (

                      <button
                        key={size}
                        className={`rounded-lg border px-4 py-2 text-sm ${
                          darkMode
                            ? "border-zinc-700 hover:bg-zinc-800"
                            : "border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        {size}
                      </button>

                    ))}

                  </div>

                </div>

                <button
                  onClick={() => {
                    handleAddToCart(quickView);
                    setQuickView(null);
                  }}
                  className="mt-8 w-full rounded-full bg-black px-6 py-4 font-semibold text-white transition hover:scale-[1.02]"
                >
                  Add To Bag →
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

      {/* =====================================================
          ADDED TO BAG NOTIFICATION
      ===================================================== */}

      {addedProduct && (

        <div className="fixed bottom-6 left-1/2 z-[110] -translate-x-1/2 rounded-full bg-black px-6 py-4 text-sm font-semibold text-white shadow-2xl">
          ✓ {addedProduct} added to your bag
        </div>

      )}

    </main>
  );
};

export default NewArrivals;