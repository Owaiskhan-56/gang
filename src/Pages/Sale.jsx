import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sale = ({ darkMode }) => {
  const [wishlist, setWishlist] = useState([]);

  const saleProducts = [
    {
      id: 1,
      name: "Premium Black Jacket",
      oldPrice: 8999,
      price: 5999,
      discount: "33% OFF",
      rating: "4.9",
      reviews: 86,
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
      category: "Formal",
      image:
        "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=900&q=85",
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

      {/* ================= SALE HERO ================= */}
      <section
        className={`px-6 py-24 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 md:grid-cols-2">

            {/* LEFT */}
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

              <p className="mt-6 max-w-xl text-gray-500">
                Upgrade your wardrobe with premium men's
                fashion at special prices. Limited stock
                available.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <Link
                  to="/shop"
                  className="rounded-full bg-black px-9 py-4 font-semibold text-white transition hover:scale-105"
                >
                  Shop Sale
                </Link>

                <a
                  href="#deals"
                  className={`rounded-full border px-9 py-4 font-semibold transition hover:scale-105 ${
                    darkMode
                      ? "border-zinc-700"
                      : "border-zinc-300"
                  }`}
                >
                  View Deals
                </a>

              </div>

            </div>


            {/* RIGHT IMAGE */}
            <div className="overflow-hidden rounded-[30px]">

              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
                alt="Men's sale fashion"
                className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

          </div>

        </div>
      </section>


      {/* ================= OFFER BAR ================= */}
      <section className="bg-black px-6 py-8 text-white">

        <div className="mx-auto grid max-w-7xl gap-6 text-center md:grid-cols-3">

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

        </div>

      </section>


      {/* ================= SALE PRODUCTS ================= */}
      <section
        id="deals"
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="text-sm tracking-[0.3em] text-gray-500">
                LIMITED DEALS
              </p>

              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Best Deals
              </h2>

              <p className="mt-4 max-w-xl text-gray-500">
                Save more on premium men's clothing while
                stocks last.
              </p>
            </div>

            <p className="text-sm text-gray-500">
              ❤️ {wishlist.length} Wishlist
            </p>

          </div>


          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {saleProducts.map((product) => (

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
                    className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* DISCOUNT */}
                  <span className="absolute left-4 top-4 rounded-full bg-black px-4 py-2 text-xs font-bold text-white">
                    {product.discount}
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

                  <h3 className="mt-2 text-xl font-semibold">
                    {product.name}
                  </h3>


                  {/* RATING */}
                  <div className="mt-3 text-sm">
                    ⭐ {product.rating}

                    <span className="text-gray-500">
                      {" "}
                      ({product.reviews} reviews)
                    </span>
                  </div>


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
                  <p className="mt-2 text-sm font-medium text-green-600">
                    Save Rs.{" "}
                    {(
                      product.oldPrice -
                      product.price
                    ).toLocaleString()}
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


      {/* ================= SALE CATEGORIES ================= */}
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

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <Link
              to="/shop"
              className="rounded-2xl bg-black p-10 text-center text-white transition hover:-translate-y-2"
            >
              <div className="text-4xl">👔</div>

              <h3 className="mt-5 text-2xl font-bold">
                Shirts
              </h3>

              <p className="mt-2 text-zinc-400">
                Up to 35% OFF
              </p>
            </Link>


            <Link
              to="/shop"
              className="rounded-2xl bg-black p-10 text-center text-white transition hover:-translate-y-2"
            >
              <div className="text-4xl">🧥</div>

              <h3 className="mt-5 text-2xl font-bold">
                Jackets
              </h3>

              <p className="mt-2 text-zinc-400">
                Up to 40% OFF
              </p>
            </Link>


            <Link
              to="/shop"
              className="rounded-2xl bg-black p-10 text-center text-white transition hover:-translate-y-2"
            >
              <div className="text-4xl">🤵</div>

              <h3 className="mt-5 text-2xl font-bold">
                Formal Wear
              </h3>

              <p className="mt-2 text-zinc-400">
                Up to 30% OFF
              </p>
            </Link>

          </div>

        </div>

      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="px-6 py-24 text-center">

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
          Find your next favorite outfit before it's gone.
          Limited-time prices won't last forever.
        </p>

        <Link
          to="/shop"
          className="mt-8 inline-block rounded-full bg-black px-10 py-4 font-semibold text-white transition hover:scale-105"
        >
          Explore Collection
        </Link>

      </section>

    </main>
  );
};

export default Sale;