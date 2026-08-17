import React from "react";
import { Link } from "react-router-dom";

const Home = ({ darkMode }) => {
  return (
    <main
      className={
        darkMode
          ? "min-h-screen bg-zinc-950 text-white"
          : "min-h-screen bg-zinc-100 text-zinc-900"
      }
    >
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">

        {/* LEFT */}
        <div>
          <p className="mb-8 text-sm tracking-[0.35em] text-slate-500">
            MEN'S FASHION
          </p>

          <h1 className="text-6xl font-bold leading-[0.95] md:text-8xl">
            Style That
            <br />

            <span className="font-light italic">
              Defines You.
            </span>
          </h1>

          <p className="mt-10 max-w-xl text-lg text-slate-500">
            Clean, modern and stylish men's clothing
            for every occasion.
          </p>

          {/* SHOP NOW GOES TO SEPARATE SHOP PAGE */}
          <Link
            to="/shop"
            className="mt-10 inline-block rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Shop Now
          </Link>
        </div>

        {/* IMAGE */}
        <div className="overflow-hidden rounded-[28px]">
          <img
            src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=85"
            alt="Men's fashion"
            className="h-[500px] w-full object-cover md:h-[620px]"
          />
        </div>

      </section>
    </main>
  );
};

export default Home;