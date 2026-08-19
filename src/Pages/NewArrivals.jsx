import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewArrivals = ({ darkMode }) => {
  const [wishlist, setWishlist] = useState([]);

  const products = [
    {
      id: 1,
      name: "Premium Black Shirt",
      price: 4499,
      rating: "4.9",
      reviews: 54,
      category: "Shirts",
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 2,
      name: "Luxury Casual Jacket",
      price: 7999,
      rating: "4.8",
      reviews: 42,
      category: "Jackets",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 3,
      name: "Classic White Outfit",
      price: 5999,
      rating: "4.9",
      reviews: 67,
      category: "Casual",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 4,
      name: "Modern Beige Shirt",
      price: 3999,
      rating: "4.7",
      reviews: 38,
      category: "Shirts",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 5,
      name: "Urban Denim Jacket",
      price: 6999,
      rating: "4.8",
      reviews: 45,
      category: "Jackets",
      image:
        "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 6,
      name: "Modern Formal Look",
      price: 8999,
      rating: "5.0",
      reviews: 29,
      category: "Formal",
      image:
        "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=800&q=85",
    },
  ];

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <main
      className={`min-h-screen ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-white text-zinc-900"
      }`}
    >

      {/* ================= HERO ================= */}
      <section
        className={`px-6 py-24 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 md:grid-cols-2">

            {/* TEXT */}
            <div>

              <p className="text-sm tracking-[0.4em] text-gray-500">
                LUXEMEN • JUST DROPPED
              </p>

              <h1 className="mt-5 text-6xl font-bold leading-none md:text-8xl">
                New
                <br />
                <span className="font-light italic">
                  Arrivals.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg text-gray-500">
                Discover the latest styles designed for
                the modern man's wardrobe.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <a
                  href="#new-products"
                  className="rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
                >
                  Explore New
                </a>

                <Link
                  to="/shop"
                  className={`rounded-full border px-8 py-4 font-semibold transition hover:scale-105 ${
                    darkMode
                      ? "border-zinc-700"
                      : "border-gray-300"
                  }`}
                >
                  Shop All
                </Link>

              </div>

            </div>


            {/* HERO IMAGE */}
            <div className="overflow-hidden rounded-[30px]">

              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85"
                alt="New men's fashion"
                className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

          </div>

        </div>
      </section>


      {/* ================= INTRO BAR ================= */}
      <section className="bg-black px-6 py-8 text-white">

        <div className="mx-auto grid max-w-7xl gap-6 text-center md:grid-cols-3">

          <div>
            <p className="text-3xl font-bold">06+</p>
            <p className="mt-1 text-sm text-zinc-400">
              New Styles
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold">2026</p>
            <p className="mt-1 text-sm text-zinc-400">
              Latest Collection
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold">100%</p>
            <p className="mt-1 text-sm text-zinc-400">
              Premium Quality
            </p>
          </div>

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}
      <section
        id="new-products"
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="text-sm tracking-[0.3em] text-gray-500">
                FRESH FROM LUXEMEN
              </p>

              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Latest Pieces
              </h2>

              <p className="mt-4 text-gray-500">
                Be the first to wear the newest styles.
              </p>
            </div>

            <p className="text-sm text-gray-500">
              ❤️ {wishlist.length} Wishlist
            </p>

          </div>


          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {products.map((product) => (

              <div
                key={product.id}
                className={`group overflow-hidden rounded-2xl border ${
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
                    className="h-[430px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* NEW BADGE */}
                  <span className="absolute left-4 top-4 rounded-full bg-black px-4 py-2 text-xs font-bold text-white">
                    NEW
                  </span>

                  {/* WISHLIST */}
                  <button
                    onClick={() =>
                      toggleWishlist(product.id)
                    }
                    className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-md transition hover:scale-110"
                  >
                    {wishlist.includes(product.id)
                      ? "❤️"
                      : "♡"}
                  </button>

                </div>


                {/* DETAILS */}
                <div className="p-6">

                  <p className="text-xs tracking-[0.2em] text-gray-500">
                    LUXEMEN • {product.category}
                  </p>

                  <h2 className="mt-2 text-xl font-semibold">
                    {product.name}
                  </h2>


                  {/* RATING */}
                  <div className="mt-3 text-sm">
                    ⭐ {product.rating}

                    <span className="text-gray-500">
                      {" "}
                      ({product.reviews} reviews)
                    </span>
                  </div>


                  {/* PRICE */}
                  <p className="mt-4 text-xl font-bold">
                    Rs. {product.price.toLocaleString()}
                  </p>


                  {/* BUTTONS */}
                  <div className="mt-5 grid grid-cols-2 gap-3">

                    <Link
                      to={`/product/${product.id}`}
                      className={`rounded-full border px-4 py-3 text-center text-sm font-semibold transition hover:scale-[1.02] ${
                        darkMode
                          ? "border-zinc-700 hover:bg-zinc-800"
                          : "border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      View Details
                    </Link>

                    <button
                      onClick={() =>
                        alert(
                          `${product.name} added to bag!`
                        )
                      }
                      className="rounded-full bg-black px-4 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
                    >
                      Add to Bag
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* ================= STYLE SECTION ================= */}
      <section
        className={`px-6 py-20 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-10 md:grid-cols-2">

            <div className="overflow-hidden rounded-[30px]">

              <img
                src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1000&q=85"
                alt="Men's style"
                className="h-[500px] w-full object-cover"
              />

            </div>


            <div>

              <p className="text-sm tracking-[0.3em] text-gray-500">
                THE NEW STANDARD
              </p>

              <h2 className="mt-5 text-5xl font-bold">
                Dress Different.
              </h2>

              <p className="mt-6 leading-8 text-gray-500">
                Our new collection combines timeless
                silhouettes with modern details. Every piece
                is designed to make your everyday style
                stand out.
              </p>

              <Link
                to="/shop"
                className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
              >
                Discover More
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 py-24 text-center">

        <p className="text-sm tracking-[0.3em] text-gray-500">
          YOUR NEXT LOOK
        </p>

        <h2 className="mt-5 text-5xl font-bold md:text-6xl">
          Fresh Style.
          <br />
          <span className="font-light italic">
            Fresh Start.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-gray-500">
          Explore our latest arrivals and find something
          made for you.
        </p>

        <Link
          to="/shop"
          className="mt-9 inline-block rounded-full bg-black px-10 py-4 font-semibold text-white transition hover:scale-105"
        >
          Shop Collection
        </Link>

      </section>

    </main>
  );
};

export default NewArrivals;