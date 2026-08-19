import React from "react";
import { Link } from "react-router-dom";

function Hero({ darkMode }) {
  return (
    <main
      className={
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-white text-zinc-900"
      }
    >

      {/* ================= HERO ================= */}
      <section
        className={`px-6 py-20 md:py-28 ${
          darkMode ? "bg-zinc-950" : "bg-zinc-100"
        }`}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          {/* LEFT */}
          <div>

            <p className="mb-8 text-sm tracking-[0.35em] text-slate-500">
              LUXEMEN • MEN'S FASHION
            </p>

            <h1 className="text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">
              Style That
              <br />

              <span className="font-light italic">
                Defines You.
              </span>
            </h1>

            <p className="mt-10 max-w-xl text-lg leading-8 text-slate-500">
              Discover clean, modern and premium men's
              clothing designed for every occasion.
            </p>


            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/shop"
                className="rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
              >
                Shop Now →
              </Link>

              <Link
                to="/new-arrivals"
                className={`rounded-full border px-8 py-4 font-semibold transition hover:scale-105 ${
                  darkMode
                    ? "border-zinc-700 hover:bg-zinc-800"
                    : "border-gray-300 hover:bg-white"
                }`}
              >
                New Arrivals
              </Link>

            </div>

          </div>


          {/* IMAGE */}
          <div className="group overflow-hidden rounded-[28px]">

            <img
              src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=85"
              alt="Men's fashion"
              className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[620px]"
            />

          </div>

        </div>
      </section>


      {/* ================= FEATURES ================= */}
      <section className="border-y border-gray-200 px-6 py-10 dark:border-zinc-800">

        <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-4">

          <div>
            <p className="text-3xl">🚚</p>
            <h3 className="mt-3 font-bold">
              Fast Delivery
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Across Pakistan
            </p>
          </div>


          <div>
            <p className="text-3xl">✨</p>
            <h3 className="mt-3 font-bold">
              Premium Quality
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Carefully selected
            </p>
          </div>


          <div>
            <p className="text-3xl">↩️</p>
            <h3 className="mt-3 font-bold">
              Easy Returns
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Simple return process
            </p>
          </div>


          <div>
            <p className="text-3xl">🔒</p>
            <h3 className="mt-3 font-bold">
              Secure Payment
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Safe checkout
            </p>
          </div>

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12">

            <p className="text-sm tracking-[0.3em] text-gray-500">
              SHOP BY STYLE
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Find Your Look
            </h2>

          </div>


          <div className="grid gap-6 md:grid-cols-3">

            {/* SHIRTS */}
            <Link
              to="/shop"
              className="group relative overflow-hidden rounded-2xl"
            >

              <img
                src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85"
                alt="Men's shirts"
                className="h-[450px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/40" />

              <div className="absolute bottom-7 left-7 text-white">

                <p className="text-sm tracking-[0.3em]">
                  COLLECTION
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Shirts
                </h3>

                <p className="mt-2">
                  Explore →
                </p>

              </div>

            </Link>


            {/* JACKETS */}
            <Link
              to="/shop"
              className="group relative overflow-hidden rounded-2xl"
            >

              <img
                src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85"
                alt="Men's jackets"
                className="h-[450px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/40" />

              <div className="absolute bottom-7 left-7 text-white">

                <p className="text-sm tracking-[0.3em]">
                  COLLECTION
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Jackets
                </h3>

                <p className="mt-2">
                  Explore →
                </p>

              </div>

            </Link>


            {/* FORMAL */}
            <Link
              to="/shop"
              className="group relative overflow-hidden rounded-2xl"
            >

              <img
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=85"
                alt="Men's formal clothing"
                className="h-[450px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/40" />

              <div className="absolute bottom-7 left-7 text-white">

                <p className="text-sm tracking-[0.3em]">
                  COLLECTION
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Formal
                </h3>

                <p className="mt-2">
                  Explore →
                </p>

              </div>

            </Link>

          </div>

        </div>

      </section>


      {/* ================= FEATURED COLLECTION ================= */}
      <section
        className={`px-6 py-20 ${
          darkMode
            ? "bg-zinc-900"
            : "bg-zinc-100"
        }`}
      >

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-[28px]">

            <img
              src="https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1000&q=85"
              alt="Premium men's collection"
              className="h-[550px] w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>


          {/* CONTENT */}
          <div>

            <p className="text-sm tracking-[0.3em] text-gray-500">
              THE LUXEMEN EDIT
            </p>

            <h2 className="mt-5 text-5xl font-bold md:text-6xl">
              Premium
              <br />

              <span className="font-light italic">
                Everyday Style.
              </span>
            </h2>

            <p className="mt-7 max-w-xl leading-8 text-gray-500">
              From everyday essentials to statement pieces,
              discover clothing designed to make your style
              effortless.
            </p>

            <Link
              to="/shop"
              className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Explore Collection →
            </Link>

          </div>

        </div>

      </section>


      {/* ================= SALE BANNER ================= */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-black px-8 py-20 text-center text-white md:px-20">

          <p className="text-sm tracking-[0.4em] text-zinc-400">
            LIMITED TIME OFFER
          </p>

          <h2 className="mt-5 text-5xl font-bold md:text-7xl">
            Up To
            <br />
            <span className="font-light italic">
              40% OFF
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-zinc-400">
            Upgrade your wardrobe with premium men's
            fashion at special prices.
          </p>

          <Link
            to="/sale"
            className="mt-9 inline-block rounded-full bg-white px-9 py-4 font-semibold text-black transition hover:scale-105"
          >
            Shop Sale →
          </Link>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="px-6 py-24 text-center">

        <p className="text-sm tracking-[0.3em] text-gray-500">
          LUXEMEN
        </p>

        <h2 className="mt-5 text-5xl font-bold md:text-7xl">
          Your Style.
          <br />

          <span className="font-light italic">
            Your Rules.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-gray-500">
          Discover your next favorite outfit from our
          premium men's collection.
        </p>

        <div className="mt-9 flex justify-center gap-4">

          <Link
            to="/shop"
            className="rounded-full bg-black px-9 py-4 font-semibold text-white transition hover:scale-105"
          >
            Shop Now
          </Link>

          <Link
            to="/contact"
            className={`rounded-full border px-9 py-4 font-semibold transition hover:scale-105 ${
              darkMode
                ? "border-zinc-700"
                : "border-gray-300"
            }`}
          >
            Contact Us
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Hero;