import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const Sale = ({ darkMode, addToCart }) => {
  const [wishlist, setWishlist] = useState([]);
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [search, setSearch] = useState("");
  const [addedProduct, setAddedProduct] = useState(null);

  const saleProducts = [
    {
      id: 1,
      name: "Premium Black Jacket",
      oldPrice: 8999,
      price: 5999,
      discount: "33% OFF",
      rating: "4.9",
      reviews: 86,
      bought: "500+",
      category: "Jackets",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 2,
      name: "Classic Men's Shirt",
      oldPrice: 4999,
      price: 3299,
      discount: "34% OFF",
      rating: "4.8",
      reviews: 112,
      bought: "700+",
      category: "Shirts",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 3,
      name: "Luxury Formal Suit",
      oldPrice: 14999,
      price: 9999,
      discount: "33% OFF",
      rating: "5.0",
      reviews: 74,
      bought: "350+",
      category: "Formal",
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 4,
      name: "Modern White Shirt",
      oldPrice: 4499,
      price: 2999,
      discount: "33% OFF",
      rating: "4.7",
      reviews: 91,
      bought: "450+",
      category: "Shirts",
      image:
        "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 5,
      name: "Premium Brown Jacket",
      oldPrice: 8999,
      price: 6999,
      discount: "22% OFF",
      rating: "4.8",
      reviews: 65,
      bought: "200+",
      category: "Jackets",
      image:
        "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 6,
      name: "Elegant Black Outfit",
      oldPrice: 11999,
      price: 7999,
      discount: "33% OFF",
      rating: "4.9",
      reviews: 103,
      bought: "600+",
      category: "Formal",
      image:
        "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 7,
      name: "Classic Denim Jacket",
      oldPrice: 7999,
      price: 5499,
      discount: "31% OFF",
      rating: "4.8",
      reviews: 78,
      bought: "320+",
      category: "Jackets",
      image:
        "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 8,
      name: "Premium Beige Shirt",
      oldPrice: 5499,
      price: 3799,
      discount: "31% OFF",
      rating: "4.7",
      reviews: 69,
      bought: "280+",
      category: "Shirts",
      image:
        "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 9,
      name: "Modern Grey Suit",
      oldPrice: 15999,
      price: 10999,
      discount: "31% OFF",
      rating: "4.9",
      reviews: 95,
      bought: "420+",
      category: "Formal",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85",
    },
  ];

  /* ================= WISHLIST ================= */

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  /* ================= ADD TO CART ================= */

  const handleAddToCart = (product) => {
    if (addToCart) {
      addToCart(product);
    }

    setAddedProduct(product.id);

    setTimeout(() => {
      setAddedProduct(null);
    }, 2000);
  };

  /* ================= FILTER + SEARCH + SORT ================= */

  const filteredProducts = useMemo(() => {
    let result = [...saleProducts];

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

    if (sortBy === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "high") {
      result.sort((a, b) => b.price - a.price);
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

    if (sortBy === "rating") {
      result.sort(
        (a, b) => Number(b.rating) - Number(a.rating)
      );
    }

    return result;
  }, [category, search, sortBy]);

  /* ================= TOTAL SAVINGS ================= */

  const totalSavings = saleProducts.reduce(
    (total, product) =>
      total + (product.oldPrice - product.price),
    0
  );

  return (
    <main
      className={`min-h-screen ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-white text-zinc-900"
      }`}
    >

      {/* =====================================================
          SALE HERO
      ===================================================== */}

      <section
        className={`px-6 py-20 md:py-28 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 md:grid-cols-2">

            {/* TEXT */}

            <div>

              <p className="text-sm font-medium tracking-[0.4em] text-gray-500">
                LUXEMEN SPECIAL OFFER
              </p>

              <h1 className="mt-6 text-6xl font-bold leading-none md:text-8xl">
                SALE
              </h1>

              <p className="mt-6 text-3xl font-light">
                Up to{" "}
                <span className="font-bold">
                  40% OFF
                </span>
              </p>

              <p className="mt-6 max-w-xl leading-7 text-gray-500">
                Upgrade your wardrobe with premium men's
                fashion at special prices. Discover
                jackets, shirts and formal wear before
                the collection sells out.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href="#deals"
                  className="rounded-full bg-black px-9 py-4 font-semibold text-white transition hover:-translate-y-1"
                >
                  Shop Sale →
                </a>

                <Link
                  to="/shop"
                  className={`rounded-full border px-9 py-4 font-semibold transition hover:-translate-y-1 ${
                    darkMode
                      ? "border-zinc-700"
                      : "border-gray-300"
                  }`}
                >
                  View Collection
                </Link>

              </div>

              {/* MINI STATS */}

              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">

                <div>
                  <p className="text-2xl font-bold">
                    40%
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Max Discount
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold">
                    09+
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Sale Items
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold">
                    5K+
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Happy Buyers
                  </p>
                </div>

              </div>

            </div>

            {/* IMAGE */}

            <div className="relative overflow-hidden rounded-[30px]">

              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
                alt="Men's sale fashion"
                className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute bottom-6 left-6 rounded-2xl bg-black/80 px-6 py-4 text-white backdrop-blur-md">

                <p className="text-xs tracking-[0.2em] text-zinc-400">
                  LIMITED TIME
                </p>

                <p className="mt-1 text-xl font-bold">
                  Up To 40% OFF
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          OFFER BAR
      ===================================================== */}

      <section className="bg-black px-6 py-9 text-white">

        <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-4">

          <div>
            <p className="text-3xl font-bold">
              40%
            </p>

            <p className="mt-1 text-sm text-zinc-400">
              Maximum Discount
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold">
              24/7
            </p>

            <p className="mt-1 text-sm text-zinc-400">
              Online Shopping
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold">
              FREE
            </p>

            <p className="mt-1 text-sm text-zinc-400">
              Delivery Over Rs. 5,000
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold">
              {totalSavings.toLocaleString()}
            </p>

            <p className="mt-1 text-sm text-zinc-400">
              Total Savings Available
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          SALE PRODUCTS
      ===================================================== */}

      <section
        id="deals"
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">

          {/* HEADER */}

          <div className="mb-10">

            <p className="text-sm tracking-[0.3em] text-gray-500">
              LIMITED DEALS
            </p>

            <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">

              <div>

                <h2 className="text-4xl font-bold md:text-5xl">
                  Best Deals
                </h2>

                <p className="mt-4 max-w-xl text-gray-500">
                  Save more on premium men's clothing
                  while stocks last.
                </p>

              </div>

              <div className="text-sm text-gray-500">
                ❤️ {wishlist.length} Wishlist
              </div>

            </div>

          </div>


          {/* SEARCH */}

          <div className="mb-8">

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search sale products..."
              className={`w-full rounded-full border px-6 py-4 outline-none ${
                darkMode
                  ? "border-zinc-700 bg-zinc-900"
                  : "border-gray-300 bg-white"
              }`}
            />

          </div>


          {/* FILTERS */}

          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex flex-wrap gap-2">

              {[
                "All",
                "Shirts",
                "Jackets",
                "Formal",
              ].map((item) => (

                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                    category === item
                      ? "bg-black text-white"
                      : darkMode
                      ? "bg-zinc-900 text-gray-300 hover:bg-zinc-800"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {item}
                </button>

              ))}

            </div>


            {/* SORT */}

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
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

              <option value="discount">
                Biggest Discount
              </option>

              <option value="rating">
                Highest Rated
              </option>
            </select>

          </div>


          {/* PRODUCT COUNT */}

          <div className="mb-6 text-sm text-gray-500">
            Showing {filteredProducts.length} sale{" "}
            {filteredProducts.length === 1
              ? "product"
              : "products"}
          </div>


          {/* PRODUCTS */}

          {filteredProducts.length === 0 ? (

            <div className="rounded-3xl border border-gray-200 px-6 py-20 text-center">

              <div className="text-6xl">
                🔎
              </div>

              <h3 className="mt-5 text-2xl font-bold">
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

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

              {filteredProducts.map((product) => {

                const savings =
                  product.oldPrice - product.price;

                return (

                  <div
                    key={product.id}
                    className={`group overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
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
                        className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      {/* SALE BADGE */}

                      <span className="absolute left-4 top-4 rounded-full bg-black px-4 py-2 text-xs font-bold text-white">
                        {product.discount}
                      </span>

                      {/* WISHLIST */}

                      <button
                        onClick={() =>
                          toggleWishlist(product.id)
                        }
                        aria-label="Toggle wishlist"
                        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-md transition hover:scale-110"
                      >
                        {wishlist.includes(product.id)
                          ? "❤️"
                          : "♡"}
                      </button>

                      {/* QUICK LABEL */}

                      <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-black backdrop-blur">
                        Limited Stock
                      </div>

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

                      <div className="mt-3 flex flex-wrap gap-2 text-sm">

                        <span>
                          ⭐ {product.rating}
                        </span>

                        <span className="text-gray-500">
                          ({product.reviews} reviews)
                        </span>

                      </div>


                      {/* BOUGHT */}

                      <p className="mt-2 text-xs text-gray-500">
                        🔥 {product.bought} customers bought
                        this
                      </p>


                      {/* PRICE */}

                      <div className="mt-4 flex items-center gap-3">

                        <span className="text-xl font-bold">
                          Rs.{" "}
                          {product.price.toLocaleString()}
                        </span>

                        <span className="text-sm text-gray-500 line-through">
                          Rs.{" "}
                          {product.oldPrice.toLocaleString()}
                        </span>

                      </div>


                      {/* SAVING */}

                      <p className="mt-2 text-sm font-semibold text-green-600">
                        Save Rs.{" "}
                        {savings.toLocaleString()}
                      </p>


                      {/* BUTTONS */}

                      <div className="mt-5 grid grid-cols-2 gap-3">

                        <Link
                          to={`/product/${product.id}`}
                          className={`rounded-full border px-4 py-3 text-center text-sm font-semibold transition hover:-translate-y-0.5 ${
                            darkMode
                              ? "border-zinc-700 hover:bg-zinc-800"
                              : "border-gray-300 hover:bg-gray-100"
                          }`}
                        >
                          View Details
                        </Link>

                        <button
                          onClick={() =>
                            handleAddToCart(product)
                          }
                          className="rounded-full bg-black px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                        >
                          {addedProduct === product.id
                            ? "✓ Added"
                            : "Add to Bag"}
                        </button>

                      </div>

                    </div>

                  </div>

                );
              })}

            </div>

          )}

        </div>
      </section>


      {/* =====================================================
          SALE CATEGORIES
      ===================================================== */}

      <section
        className={`px-6 py-20 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm tracking-[0.3em] text-gray-500">
              SHOP THE SALE
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Deals For Every Style
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-500">
              Find premium pieces at prices made for
              your wardrobe.
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
              className="rounded-3xl bg-black p-10 text-center text-white transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="text-5xl">
                👔
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Shirts
              </h3>

              <p className="mt-2 text-zinc-400">
                Up to 35% OFF
              </p>

              <p className="mt-5 text-sm underline">
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
              className="rounded-3xl bg-black p-10 text-center text-white transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="text-5xl">
                🧥
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Jackets
              </h3>

              <p className="mt-2 text-zinc-400">
                Up to 40% OFF
              </p>

              <p className="mt-5 text-sm underline">
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
              className="rounded-3xl bg-black p-10 text-center text-white transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="text-5xl">
                🤵
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Formal Wear
              </h3>

              <p className="mt-2 text-zinc-400">
                Up to 33% OFF
              </p>

              <p className="mt-5 text-sm underline">
                Shop Formal →
              </p>

            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY SHOP SALE
      ===================================================== */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm tracking-[0.3em] text-gray-500">
              LUXEMEN PROMISE
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Shop With Confidence
            </h2>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-4">

            <div
              className={`rounded-2xl border p-7 text-center ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-gray-200"
              }`}
            >

              <div className="text-4xl">
                🔒
              </div>

              <h3 className="mt-4 font-bold">
                Secure Payment
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Safe checkout experience
              </p>

            </div>


            <div
              className={`rounded-2xl border p-7 text-center ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-gray-200"
              }`}
            >

              <div className="text-4xl">
                🚚
              </div>

              <h3 className="mt-4 font-bold">
                Fast Delivery
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Delivery across Pakistan
              </p>

            </div>


            <div
              className={`rounded-2xl border p-7 text-center ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-gray-200"
              }`}
            >

              <div className="text-4xl">
                ↩️
              </div>

              <h3 className="mt-4 font-bold">
                Easy Returns
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Simple return process
              </p>

            </div>


            <div
              className={`rounded-2xl border p-7 text-center ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-gray-200"
              }`}
            >

              <div className="text-4xl">
                ❤️
              </div>

              <h3 className="mt-4 font-bold">
                Customer Support
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                We're here to help
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className={`px-6 py-24 text-center ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >

        <p className="text-sm tracking-[0.3em] text-gray-500">
          LAST CHANCE
        </p>

        <h2 className="mt-5 text-5xl font-bold md:text-6xl">
          Don't Miss
          <br />
          <span className="font-light italic">
            The Sale.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-gray-500">
          Find your next favorite outfit before it's
          gone. Limited-time prices won't last forever.
        </p>

        <a
          href="#deals"
          className="mt-8 inline-block rounded-full bg-black px-10 py-4 font-semibold text-white transition hover:-translate-y-1"
        >
          Explore Deals →
        </a>

      </section>

    </main>
  );
};

export default Sale;