import React from "react";
import { Link } from "react-router-dom";

const Sale = ({ darkMode }) => {
  const saleProducts = [
    {
      id: 1,
      name: "Premium Black Jacket",
      oldPrice: 8999,
      price: 5999,
      discount: "33% OFF",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 2,
      name: "Classic Men's Shirt",
      oldPrice: 4999,
      price: 3299,
      discount: "34% OFF",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 3,
      name: "Luxury Formal Suit",
      oldPrice: 14999,
      price: 9999,
      discount: "33% OFF",
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=85",
    },
  ];

  return (
    <main
      className={`min-h-screen ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-white text-zinc-900"
      }`}
    >
      {/* SALE HERO */}
      <section
        className={`px-6 py-24 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-medium tracking-[0.4em] text-gray-500">
            LUXEMEN SPECIAL OFFER
          </p>

          <h1 className="mt-6 text-6xl font-bold md:text-8xl">
            SALE
          </h1>

          <p className="mt-5 text-2xl font-light">
            Up to <span className="font-bold">40% OFF</span>
          </p>

          <p className="mx-auto mt-5 max-w-xl text-gray-500">
            Upgrade your wardrobe with premium men's fashion
            at special prices.
          </p>

          <Link
            to="/shop"
            className="mt-9 inline-block rounded-full bg-black px-9 py-4 font-semibold text-white transition hover:scale-105"
          >
            Shop Sale
          </Link>
        </div>
      </section>

      {/* SALE PRODUCTS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12">
            <p className="text-sm tracking-[0.3em] text-gray-500">
              LIMITED DEALS
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Best Deals
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {saleProducts.map((product) => (
              <div
                key={product.id}
                className={`overflow-hidden rounded-2xl border ${
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
                    className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-black px-4 py-2 text-xs font-bold text-white">
                    {product.discount}
                  </span>
                </div>

                {/* DETAILS */}
                <div className="p-6">

                  <p className="text-xs tracking-[0.2em] text-gray-500">
                    LUXEMEN
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">
                    {product.name}
                  </h3>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-xl font-bold">
                      Rs. {product.price.toLocaleString()}
                    </span>

                    <span className="text-sm text-gray-500 line-through">
                      Rs. {product.oldPrice.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() =>
                      alert(`${product.name} added to bag!`)
                    }
                    className="mt-5 w-full rounded-full bg-black px-5 py-3 font-semibold text-white transition hover:scale-[1.02]"
                  >
                    Add to Bag
                  </button>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section
        className={`px-6 py-20 text-center ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        <h2 className="text-4xl font-bold">
          Don't Miss The Sale
        </h2>

        <p className="mt-4 text-gray-500">
          Find your next favorite outfit before it's gone.
        </p>

        <Link
          to="/shop"
          className="mt-7 inline-block rounded-full bg-black px-8 py-4 font-semibold text-white"
        >
          Explore Collection
        </Link>
      </section>
    </main>
  );
};

export default Sale;