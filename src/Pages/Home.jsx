import React from "react";
import { Link } from "react-router-dom";

const Home = ({ darkMode }) => {
  const products = [
    {
      name: "Premium Black Shirt",
      price: "Rs. 4,999",
      image:
        "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=800&q=85",
    },
    {
      name: "Classic Beige Outfit",
      price: "Rs. 5,499",
      image:
        "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=800&q=85",
    },
    {
      name: "Modern Casual Wear",
      price: "Rs. 3,999",
      image:
        "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=800&q=85",
    },
  ];

  const categories = [
    {
      name: "Shirts",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=85",
    },
    {
      name: "T-Shirts",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85",
    },
    {
      name: "Jackets",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85",
    },
    {
      name: "Formal Wear",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85",
    },
  ];

  return (
    <main
      className={
        darkMode
          ? "min-h-screen bg-zinc-950 text-white"
          : "min-h-screen bg-zinc-100 text-zinc-900"
      }
    >

      {/* ================= HERO SECTION ================= */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">

        {/* LEFT */}
        <div>
          <p
            className={`mb-8 text-sm tracking-[0.35em] ${
              darkMode ? "text-zinc-400" : "text-slate-500"
            }`}
          >
            MEN'S FASHION
          </p>

          <h1 className="text-6xl font-bold leading-[0.95] md:text-8xl">
            Style That
            <br />

            <span className="font-light italic">
              Defines You.
            </span>
          </h1>

          <p
            className={`mt-10 max-w-xl text-lg ${
              darkMode ? "text-zinc-400" : "text-slate-500"
            }`}
          >
            Clean, modern and stylish men's clothing
            for every occasion.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/shop"
              className="rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Shop Now
            </Link>

            <Link
              to="/new-arrivals"
              className={`rounded-full border px-8 py-4 font-semibold transition hover:scale-105 ${
                darkMode
                  ? "border-zinc-700 hover:bg-zinc-800"
                  : "border-zinc-300 hover:bg-white"
              }`}
            >
              New Arrivals
            </Link>

          </div>
        </div>

        {/* IMAGE */}
        <div className="overflow-hidden rounded-[28px]">
          <img
            src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=85"
            alt="Men's fashion"
            className="h-[500px] w-full object-cover transition duration-700 hover:scale-105 md:h-[620px]"
          />
        </div>

      </section>


      {/* ================= FEATURED COLLECTION ================= */}
      <section
        className={`px-6 py-20 ${
          darkMode ? "bg-zinc-900" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="mb-3 text-sm tracking-[0.3em] text-slate-500">
                OUR COLLECTION
              </p>

              <h2 className="text-4xl font-bold md:text-5xl">
                Featured Pieces
              </h2>
            </div>

            <Link
              to="/shop"
              className="font-semibold underline underline-offset-8"
            >
              View All Products →
            </Link>

          </div>


          <div className="grid gap-8 md:grid-cols-3">

            {products.map((product, index) => (
              <div
                key={index}
                className={`group overflow-hidden rounded-2xl ${
                  darkMode ? "bg-zinc-800" : "bg-zinc-100"
                }`}
              >

                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">

                  <h3 className="text-xl font-semibold">
                    {product.name}
                  </h3>

                  <p className="mt-3 font-semibold">
                    {product.price}
                  </p>

                  <Link
                    to="/shop"
                    className="mt-5 inline-block text-sm font-semibold underline"
                  >
                    Shop Product →
                  </Link>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= CATEGORIES ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-12 text-center">

          <p className="mb-3 text-sm tracking-[0.3em] text-slate-500">
            SHOP BY CATEGORY
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Find Your Style
          </h2>

        </div>


        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

          {categories.map((category, index) => (
            <Link
              to="/shop"
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >

              <img
                src={category.image}
                alt={category.name}
                className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6">

                <h3 className="text-xl font-bold text-white">
                  {category.name}
                </h3>

              </div>

            </Link>
          ))}

        </div>

      </section>


      {/* ================= SALE BANNER ================= */}
      <section className="px-6 py-10">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-black px-8 py-16 text-white md:px-16">

          <div className="grid items-center gap-10 md:grid-cols-2">

            <div>

              <p className="mb-4 text-sm tracking-[0.3em] text-zinc-400">
                LIMITED TIME OFFER
              </p>

              <h2 className="text-5xl font-bold md:text-7xl">
                Up To
                <br />
                <span className="font-light italic">
                  50% OFF
                </span>
              </h2>

              <p className="mt-6 max-w-md text-zinc-400">
                Upgrade your wardrobe with our latest men's
                fashion collection at special prices.
              </p>

              <Link
                to="/sale"
                className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Shop Sale
              </Link>

            </div>

            <div className="overflow-hidden rounded-2xl">

              <img
                src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=85"
                alt="Sale collection"
                className="h-[350px] w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section
        className={`px-6 py-24 ${
          darkMode ? "bg-zinc-900" : "bg-white"
        }`}
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="mb-3 text-sm tracking-[0.3em] text-slate-500">
              WHY LUXEWEAR
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Made For Your Lifestyle
            </h2>

          </div>


          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl border border-zinc-200 p-8">

              <div className="mb-6 text-4xl">
                ✦
              </div>

              <h3 className="text-xl font-bold">
                Premium Quality
              </h3>

              <p className="mt-4 text-slate-500">
                Carefully selected fabrics and excellent
                craftsmanship for everyday comfort.
              </p>

            </div>


            <div className="rounded-2xl border border-zinc-200 p-8">

              <div className="mb-6 text-4xl">
                🚚
              </div>

              <h3 className="text-xl font-bold">
                Fast Delivery
              </h3>

              <p className="mt-4 text-slate-500">
                Get your favorite men's clothing delivered
                quickly and safely.
              </p>

            </div>


            <div className="rounded-2xl border border-zinc-200 p-8">

              <div className="mb-6 text-4xl">
                ♡
              </div>

              <h3 className="text-xl font-bold">
                Customer First
              </h3>

              <p className="mt-4 text-slate-500">
                Your satisfaction matters. We are here to
                make your shopping experience better.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-5 text-sm tracking-[0.3em] text-slate-500">
            READY TO UPGRADE?
          </p>

          <h2 className="text-5xl font-bold md:text-7xl">
            Your Style.
            <br />
            <span className="font-light italic">
              Your Rules.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg text-slate-500">
            Discover our latest collection and find pieces
            that match your personality.
          </p>

          <Link
            to="/shop"
            className="mt-10 inline-block rounded-full bg-black px-10 py-4 font-semibold text-white transition hover:scale-105"
          >
            Explore Collection
          </Link>

        </div>

      </section>

    </main>
  );
};

export default Home;