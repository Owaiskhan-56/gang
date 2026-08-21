import React from "react";
import { Link } from "react-router-dom";

function Hero({ darkMode }) {
  const trendingProducts = [
    {
      id: 1,
      name: "Classic Black Suit",
      category: "Formal Wear",
      price: 8999,
      rating: "4.9",
      reviews: 128,
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 2,
      name: "Premium Casual Shirt",
      category: "Shirts",
      price: 3999,
      rating: "4.8",
      reviews: 94,
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 3,
      name: "Luxury Black Jacket",
      category: "Jackets",
      price: 7499,
      rating: "4.9",
      reviews: 76,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const reviews = [
    {
      name: "Ahmed Khan",
      text: "Amazing quality and perfect fitting. LUXEMEN has completely upgraded my wardrobe.",
      rating: "5.0",
    },
    {
      name: "Hamza Ali",
      text: "The jacket looks even better in person. Delivery was fast and packaging was excellent.",
      rating: "4.9",
    },
    {
      name: "Usman Malik",
      text: "Premium designs, reasonable prices and excellent customer service. Highly recommended.",
      rating: "5.0",
    },
  ];

  return (
    <main
      className={
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-white text-zinc-900"
      }
    >
      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section
        className={`px-6 py-20 md:py-28 ${
          darkMode ? "bg-zinc-950" : "bg-zinc-100"
        }`}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          {/* LEFT CONTENT */}

          <div>
            <p className="mb-8 text-sm tracking-[0.35em] text-gray-500">
              LUXEMEN • MEN'S FASHION
            </p>

            <h1 className="text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">
              Style That
              <br />
              <span className="font-light italic">
                Defines You.
              </span>
            </h1>

            <p className="mt-10 max-w-xl text-lg leading-8 text-gray-500">
              Discover clean, modern and premium men's
              clothing designed for every occasion.
              From everyday essentials to statement pieces,
              find your perfect look at LUXEMEN.
            </p>

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

            {/* SMALL TRUST TEXT */}

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-500">
              <span>✓ Premium Quality</span>
              <span>✓ Secure Payment</span>
              <span>✓ Easy Returns</span>
            </div>
          </div>

          {/* HERO IMAGE */}

          <div className="group relative overflow-hidden rounded-[28px]">
            <img
              src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=85"
              alt="Men's fashion"
              className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[620px]"
            />

            {/* IMAGE LABEL */}

            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-6 py-4 text-black backdrop-blur-md">
              <p className="text-xs tracking-widest text-gray-500">
                LUXEMEN
              </p>

              <p className="mt-1 font-bold">
                Premium Collection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ====================================================== */}

      <section className="border-y border-gray-200 px-6 py-10 dark:border-zinc-800">
        <div className="mx-auto grid max-w-7xl gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
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

      {/* =====================================================
          SHOP BY CATEGORY
      ====================================================== */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm tracking-[0.3em] text-gray-500">
              SHOP BY STYLE
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Find Your Look
            </h2>

            <p className="mt-4 max-w-xl text-gray-500">
              Explore carefully selected collections created
              for the modern man.
            </p>
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

              <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/50" />

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

              <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/50" />

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

              <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/50" />

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

      {/* =====================================================
          TRENDING PRODUCTS
      ====================================================== */}

      <section
        className={`px-6 py-24 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm tracking-[0.3em] text-gray-500">
                MOST WANTED
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Trending Now
              </h2>

              <p className="mt-4 text-gray-500">
                Discover the pieces everyone is talking about.
              </p>
            </div>

            <Link
              to="/shop"
              className="font-semibold underline underline-offset-8"
            >
              View All Products →
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {trendingProducts.map((product) => (
              <div
                key={product.id}
                className={`group overflow-hidden rounded-2xl border ${
                  darkMode
                    ? "border-zinc-800 bg-zinc-950"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-black px-4 py-2 text-xs font-bold text-white">
                    TRENDING
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-xs tracking-widest text-gray-500">
                    LUXEMEN • {product.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    {product.name}
                  </h3>

                  <div className="mt-3 text-sm">
                    ⭐ {product.rating}
                    <span className="text-gray-500">
                      {" "}
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  <p className="mt-4 text-xl font-bold">
                    Rs. {product.price.toLocaleString()}
                  </p>

                  <Link
                    to={`/product/${product.id}`}
                    className="mt-5 block rounded-full bg-black px-5 py-3 text-center font-semibold text-white transition hover:scale-[1.02]"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED COLLECTION
      ====================================================== */}

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div className="group overflow-hidden rounded-[28px]">
            <img
              src="https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1000&q=85"
              alt="Premium men's collection"
              className="h-[550px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

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
              effortless, confident and timeless.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-bold">100+</p>
                <p className="mt-1 text-sm text-gray-500">
                  Premium Styles
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">4.9/5</p>
                <p className="mt-1 text-sm text-gray-500">
                  Customer Rating
                </p>
              </div>
            </div>

            <Link
              to="/shop"
              className="mt-9 inline-block rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Explore Collection →
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          SALE BANNER
      ====================================================== */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-black px-8 py-20 text-center text-white md:px-20">
          <p className="text-sm tracking-[0.4em] text-zinc-400">
            LIMITED TIME OFFER
          </p>

          <h2 className="mt-5 text-5xl font-bold md:text-7xl">
            Upgrade Your
            <br />
            <span className="font-light italic">
              Wardrobe.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-zinc-400">
            Get premium men's fashion at special prices.
            Don't miss our limited-time collection.
          </p>

          <div className="mt-8 text-4xl font-bold">
            UP TO 40% OFF
          </div>

          <Link
            to="/sale"
            className="mt-9 inline-block rounded-full bg-white px-9 py-4 font-semibold text-black transition hover:scale-105"
          >
            Shop Sale →
          </Link>
        </div>
      </section>

      {/* =====================================================
          WHY LUXEMEN
      ====================================================== */}

      <section
        className={`px-6 py-24 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm tracking-[0.3em] text-gray-500">
              WHY LUXEMEN
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Made For Modern Men
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div
              className={`rounded-2xl p-8 ${
                darkMode ? "bg-zinc-950" : "bg-white"
              }`}
            >
              <div className="text-4xl">👔</div>

              <h3 className="mt-6 text-xl font-bold">
                Timeless Design
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                Clean silhouettes and modern designs that
                never go out of style.
              </p>
            </div>

            <div
              className={`rounded-2xl p-8 ${
                darkMode ? "bg-zinc-950" : "bg-white"
              }`}
            >
              <div className="text-4xl">💎</div>

              <h3 className="mt-6 text-xl font-bold">
                Premium Materials
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                Carefully selected fabrics created for
                comfort, quality and durability.
              </p>
            </div>

            <div
              className={`rounded-2xl p-8 ${
                darkMode ? "bg-zinc-950" : "bg-white"
              }`}
            >
              <div className="text-4xl">🔥</div>

              <h3 className="mt-6 text-xl font-bold">
                Modern Confidence
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                Fashion that helps you feel confident in
                every room and every occasion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATISTICS
      ====================================================== */}

      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 text-center sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="text-4xl font-bold">10K+</p>
            <p className="mt-2 text-sm text-zinc-400">
              Happy Customers
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold">100+</p>
            <p className="mt-2 text-sm text-zinc-400">
              Fashion Products
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold">4.9★</p>
            <p className="mt-2 text-sm text-zinc-400">
              Average Rating
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold">24/7</p>
            <p className="mt-2 text-sm text-zinc-400">
              Customer Support
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CUSTOMER REVIEWS
      ====================================================== */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm tracking-[0.3em] text-gray-500">
              CUSTOMER STORIES
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              What Our Customers Say
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`rounded-2xl border p-8 ${
                  darkMode
                    ? "border-zinc-800 bg-zinc-900"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="text-lg">
                  ⭐⭐⭐⭐⭐
                </div>

                <p className="mt-5 leading-7 text-gray-500">
                  "{review.text}"
                </p>

                <div className="mt-7 border-t pt-5">
                  <p className="font-bold">
                    {review.name}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Verified Customer • {review.rating}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NEWSLETTER
      ====================================================== */}

      <section className="px-6 py-20">
        <div
          className={`mx-auto max-w-5xl rounded-[30px] px-8 py-16 text-center md:px-16 ${
            darkMode ? "bg-zinc-900" : "bg-zinc-100"
          }`}
        >
          <p className="text-sm tracking-[0.3em] text-gray-500">
            JOIN THE LUXEMEN CLUB
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Stay In Style.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-500">
            Get updates about new arrivals, exclusive
            offers and the latest men's fashion.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full rounded-full border px-6 py-4 outline-none ${
                darkMode
                  ? "border-zinc-700 bg-zinc-950 text-white"
                  : "border-gray-300 bg-white"
              }`}
            />

            <button className="rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

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

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            to="/shop"
            className="rounded-full bg-black px-9 py-4 font-semibold text-white transition hover:scale-105"
          >
            Shop Now →
          </Link>

          <Link
            to="/contact"
            className={`rounded-full border px-9 py-4 font-semibold transition hover:scale-105 ${
              darkMode
                ? "border-zinc-700 hover:bg-zinc-800"
                : "border-gray-300 hover:bg-gray-100"
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