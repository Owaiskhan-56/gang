import React from "react";

function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className={`px-6 py-20 md:py-28 ${
        darkMode ? "bg-zinc-950" : "bg-zinc-100"
      }`}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* LEFT */}
        <div>

          <p className="mb-8 text-sm tracking-[0.35em] text-slate-500">
            MEN'S FASHION
          </p>

          <h1 className="text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">
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

          {/* IMPORTANT LINK */}
          <a
            href="#shop"
            className="mt-10 inline-block rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Shop Now
          </a>

        </div>

        {/* IMAGE */}
        <div className="overflow-hidden rounded-[28px]">

          <img
            src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=85"
            alt="Men's fashion"
            className="h-[500px] w-full object-cover transition duration-700 hover:scale-105 md:h-[620px]"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;