import React from "react";
import { Link } from "react-router-dom";

function Hero({ darkMode = false }) {
  const trendingProducts = [
    {
      id: 1,
      name: "Classic Black Suit",
      category: "Formal Wear",
      price: 8999,
      oldPrice: 10999,
      rating: "4.9",
      reviews: 128,
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 2,
      name: "Premium Casual Shirt",
      category: "Shirts",
      price: 3999,
      oldPrice: 4999,
      rating: "4.8",
      reviews: 94,
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 3,
      name: "Luxury Black Jacket",
      category: "Jackets",
      price: 7499,
      oldPrice: 8999,
      rating: "4.9",
      reviews: 76,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=90",
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

  const categories = [
    {
      title: "Shirts",
      subtitle: "Everyday Essentials",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=90",
    },
    {
      title: "Jackets",
      subtitle: "Modern Outerwear",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=90",
    },
    {
      title: "Formal",
      subtitle: "Premium Collection",
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=90",
    },
  ];

  const benefits = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      text: "Quick delivery across Pakistan",
    },
    {
      icon: "✨",
      title: "Premium Quality",
      text: "Carefully selected materials",
    },
    {
      icon: "↩️",
      title: "Easy Returns",
      text: "Simple return process",
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      text: "Safe and trusted checkout",
    },
  ];

  return (
    <main
      className={
        darkMode
          ? "min-h-screen bg-zinc-950 text-white"
          : "min-h-screen bg-white text-zinc-900"
      }
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className={`relative overflow-hidden px-6 py-20 sm:py-24 lg:py-32 ${
          darkMode ? "bg-zinc-950" : "bg-zinc-50"
        }`}
      >
        {/* Background Decoration */}

        <div
          className={`pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full blur-3xl ${
            darkMode ? "bg-white/5" : "bg-black/5"
          }`}
        />

        <div
          className={`pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full blur-3xl ${
            darkMode ? "bg-white/5" : "bg-black/5"
          }`}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}

          <div>
            <div className="mb-7 flex items-center gap-3">
              <span
                className={`h-px w-12 ${
                  darkMode ? "bg-white" : "bg-black"
                }`}
              />

              <p className="text-xs font-bold tracking-[0.35em] text-gray-500">
                LUXEMEN • MEN'S FASHION
              </p>
            </div>

            <h1 className="text-6xl font-black leading-[0.9] tracking-tight sm:text-7xl lg:text-[88px]">
              Style That
              <span className="block font-light italic">
                Defines You.
              </span>
            </h1>

            <p
              className={`mt-9 max-w-xl text-base leading-8 sm:text-lg ${
                darkMode ? "text-zinc-400" : "text-gray-500"
              }`}
            >
              Discover clean, modern and premium men's
              clothing designed for every occasion. From
              everyday essentials to statement pieces, find
              your perfect look at LUXEMEN.
            </p>

            {/* BUTTONS */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className={`rounded-full px-8 py-4 font-bold transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  darkMode
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "bg-black text-white hover:bg-zinc-800"
                }`}
              >
                Shop Collection →
              </Link>

              <Link
                to="/new-arrivals"
                className={`rounded-full border px-8 py-4 font-bold transition duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? "border-zinc-700 hover:bg-zinc-900"
                    : "border-gray-300 hover:bg-white"
                }`}
              >
                New Arrivals
              </Link>
            </div>

            {/* TRUST */}

            <div
              className={`mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm ${
                darkMode ? "text-zinc-400" : "text-gray-500"
              }`}
            >
              <span>✓ Premium Quality</span>
              <span>✓ Secure Payment</span>
              <span>✓ Easy Returns</span>
            </div>

            {/* HERO STATS */}

            <div
              className={`mt-12 grid max-w-lg grid-cols-3 gap-5 border-t pt-8 ${
                darkMode
                  ? "border-zinc-800"
                  : "border-gray-200"
              }`}
            >
              <div>
                <p className="text-2xl font-black sm:text-3xl">
                  10K+
                </p>
                <p
                  className={`mt-1 text-xs ${darkMode ? "text-zinc-500" : "text-gray-500"}`}
                >
                  Customers
                </p>
              </div>

              <div>
                <p className="text-2xl font-black sm:text-3xl">
                  100+
                </p>
                <p
                  className={`mt-1 text-xs ${darkMode ? "text-zinc-500" : "text-gray-500"}`}
                >
                  Styles
                </p>
              </div>

              <div>
                <p className="text-2xl font-black sm:text-3xl">
                  4.9★
                </p>
                <p
                  className={`mt-1 text-xs ${darkMode ? "text-zinc-500" : "text-gray-500"}`}
                >
                  Rating
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}

          <div className="relative">
            <div className="group relative overflow-hidden rounded-[32px]">
              <img
                src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1400&q=90"
                alt="Premium men's fashion"
                className="h-[520px] w-full object-cover transition duration-1000 group-hover:scale-105 sm:h-[620px] lg:h-[720px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Image Label */}

              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                <div className="rounded-2xl bg-white/90 px-6 py-5 text-black shadow-2xl backdrop-blur-md">
                  <p className="text-[10px] font-bold tracking-[0.3em] text-gray-500">
                    LUXEMEN
                  </p>

                  <p className="mt-1 text-lg font-black">
                    Premium Collection
                  </p>
                </div>

                <div className="hidden rounded-full bg-black/80 px-5 py-3 text-xs font-bold text-white backdrop-blur-md sm:block">
                  NEW SEASON
                </div>
              </div>
            </div>

            {/* Floating Card */}

            <div
              className={`absolute -bottom-6 -left-5 hidden rounded-2xl border p-5 shadow-2xl sm:block ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              <p className="text-2xl">★★★★★</p>

              <p className="mt-1 text-sm font-bold">
                4.9 / 5
              </p>

              <p
                className={`text-xs ${
                  darkMode ? "text-zinc-500" : "text-gray-500"
                }`}
              >
                Customer Rating
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}

      <section
        className={`border-y px-6 py-12 ${
          darkMode
            ? "border-zinc-800 bg-zinc-950"
            : "border-gray-200 bg-white"
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="group flex items-center gap-4"
            >
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl transition duration-300 group-hover:-translate-y-1 ${
                  darkMode
                    ? "bg-zinc-900"
                    : "bg-gray-100"
                }`}
              >
                {item.icon}
              </div>

              <div>
                <h3 className="font-bold">
                  {item.title}
                </h3>

                <p
                  className={`mt-1 text-sm ${
                    darkMode
                      ? "text-zinc-500"
                      : "text-gray-500"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          SHOP BY CATEGORY
      ====================================================== */}

      <section className="px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.35em] text-gray-500">
                SHOP BY STYLE
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Find Your Look
              </h2>

              <p
                className={`mt-4 max-w-xl leading-7 ${
                  darkMode
                    ? "text-zinc-400"
                    : "text-gray-500"
                }`}
              >
                Explore carefully selected collections
                created for the modern man.
              </p>
            </div>

            <Link
              to="/shop"
              className="font-bold underline underline-offset-8"
            >
              View Collection →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.title}
                to="/shop"
                className="group relative overflow-hidden rounded-[28px]"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-[480px] w-full object-cover transition duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-xs font-bold tracking-[0.3em] text-white/70">
                    {category.subtitle}
                  </p>

                  <h3 className="mt-2 text-4xl font-black">
                    {category.title}
                  </h3>

                  <p className="mt-3 font-semibold">
                    Explore Collection →
                  </p>
                </div>
              </Link>
            ))}
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
              <p className="text-xs font-bold tracking-[0.35em] text-gray-500">
                MOST WANTED
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Trending Now
              </h2>

              <p
                className={`mt-4 ${
                  darkMode
                    ? "text-zinc-400"
                    : "text-gray-500"
                }`}
              >
                Discover the pieces everyone is talking
                about.
              </p>
            </div>

            <Link
              to="/shop"
              className="font-bold underline underline-offset-8"
            >
              View All Products →
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {trendingProducts.map((product) => (
              <article
                key={product.id}
                className={`group overflow-hidden rounded-[24px] border shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  darkMode
                    ? "border-zinc-800 bg-zinc-950"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[440px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-5 top-5 rounded-full bg-black px-4 py-2 text-[10px] font-black tracking-widest text-white">
                    TRENDING
                  </span>

                  <span className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold text-black shadow-lg">
                    ★ {product.rating}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold tracking-widest text-gray-500">
                    LUXEMEN • {product.category}
                  </p>

                  <h3 className="mt-2 text-xl font-black">
                    {product.name}
                  </h3>

                  <div className="mt-3 text-sm">
                    <span>★★★★★</span>

                    <span className="ml-2 text-gray-500">
                      {product.reviews} reviews
                    </span>
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <p className="text-xl font-black">
                      Rs. {product.price.toLocaleString()}
                    </p>

                    <p className="text-sm text-gray-500 line-through">
                      Rs. {product.oldPrice.toLocaleString()}
                    </p>
                  </div>

                  <Link
                    to={`/product/${product.id}`}
                    className={`mt-6 block rounded-full px-5 py-3 text-center text-sm font-bold transition duration-300 hover:-translate-y-1 ${
                      darkMode
                        ? "bg-white text-black hover:bg-zinc-200"
                        : "bg-black text-white hover:bg-zinc-800"
                    }`}
                  >
                    View Product →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED COLLECTION
      ====================================================== */}

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-[32px]">
            <img
              src="https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1400&q=90"
              alt="Premium men's collection"
              className="h-[550px] w-full object-cover transition duration-1000 group-hover:scale-105 sm:h-[650px]"
            />

            <div className="absolute bottom-7 left-7 rounded-2xl bg-black/80 px-6 py-4 text-white backdrop-blur-md">
              <p className="text-xs tracking-[0.25em] text-zinc-400">
                THE LUXEMEN EDIT
              </p>

              <p className="mt-1 font-bold">
                Everyday Luxury
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.35em] text-gray-500">
              THE LUXEMEN EDIT
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight sm:text-6xl">
              Premium
              <span className="block font-light italic">
                Everyday Style.
              </span>
            </h2>

            <p
              className={`mt-7 max-w-xl leading-8 ${
                darkMode
                  ? "text-zinc-400"
                  : "text-gray-500"
              }`}
            >
              From everyday essentials to statement pieces,
              discover clothing designed to make your style
              effortless, confident and timeless.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <p className="text-4xl font-black">
                  100+
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Premium Styles
                </p>
              </div>

              <div>
                <p className="text-4xl font-black">
                  4.9/5
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Customer Rating
                </p>
              </div>
            </div>

            <Link
              to="/shop"
              className={`mt-10 inline-block rounded-full px-8 py-4 font-bold transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                darkMode
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
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
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-black px-8 py-20 text-center text-white sm:px-16">
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full border border-white/10" />

          <div className="relative">
            <p className="text-xs font-bold tracking-[0.4em] text-zinc-500">
              LIMITED TIME OFFER
            </p>

            <h2 className="mt-5 text-5xl font-black sm:text-6xl md:text-7xl">
              Upgrade Your
              <span className="block font-light italic">
                Wardrobe.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-7 text-zinc-400">
              Get premium men's fashion at special prices.
              Don't miss our limited-time collection.
            </p>

            <div className="mt-8 text-4xl font-black sm:text-5xl">
              UP TO 40% OFF
            </div>

            <Link
              to="/sale"
              className="mt-9 inline-block rounded-full bg-white px-9 py-4 font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-zinc-200 hover:shadow-2xl"
            >
              Shop Sale →
            </Link>
          </div>
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
            <p className="text-xs font-bold tracking-[0.35em] text-gray-500">
              WHY LUXEMEN
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Made For Modern Men
            </h2>

            <p
              className={`mx-auto mt-5 max-w-2xl leading-7 ${
                darkMode
                  ? "text-zinc-400"
                  : "text-gray-500"
              }`}
            >
              We combine timeless design, premium materials
              and modern confidence to create fashion that
              works everywhere.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div
              className={`rounded-[24px] p-9 transition duration-300 hover:-translate-y-2 ${
                darkMode ? "bg-zinc-950" : "bg-white"
              }`}
            >
              <div className="text-5xl">👔</div>

              <h3 className="mt-7 text-xl font-black">
                Timeless Design
              </h3>

              <p
                className={`mt-4 leading-7 ${
                  darkMode
                    ? "text-zinc-400"
                    : "text-gray-500"
                }`}
              >
                Clean silhouettes and modern designs that
                never go out of style.
              </p>
            </div>

            <div
              className={`rounded-[24px] p-9 transition duration-300 hover:-translate-y-2 ${
                darkMode ? "bg-zinc-950" : "bg-white"
              }`}
            >
              <div className="text-5xl">💎</div>

              <h3 className="mt-7 text-xl font-black">
                Premium Materials
              </h3>

              <p
                className={`mt-4 leading-7 ${
                  darkMode
                    ? "text-zinc-400"
                    : "text-gray-500"
                }`}
              >
                Carefully selected fabrics created for
                comfort, quality and durability.
              </p>
            </div>

            <div
              className={`rounded-[24px] p-9 transition duration-300 hover:-translate-y-2 ${
                darkMode ? "bg-zinc-950" : "bg-white"
              }`}
            >
              <div className="text-5xl">🔥</div>

              <h3 className="mt-7 text-xl font-black">
                Modern Confidence
              </h3>

              <p
                className={`mt-4 leading-7 ${
                  darkMode
                    ? "text-zinc-400"
                    : "text-gray-500"
                }`}
              >
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

      <section className="bg-black px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-5xl font-black">
              10K+
            </p>

            <p className="mt-3 text-sm text-zinc-500">
              Happy Customers
            </p>
          </div>

          <div>
            <p className="text-5xl font-black">
              100+
            </p>

            <p className="mt-3 text-sm text-zinc-500">
              Fashion Products
            </p>
          </div>

          <div>
            <p className="text-5xl font-black">
              4.9★
            </p>

            <p className="mt-3 text-sm text-zinc-500">
              Average Rating
            </p>
          </div>

          <div>
            <p className="text-5xl font-black">
              24/7
            </p>

            <p className="mt-3 text-sm text-zinc-500">
              Customer Support
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CUSTOMER REVIEWS
      ====================================================== */}

      <section className="px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.35em] text-gray-500">
              CUSTOMER STORIES
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              What Our Customers Say
            </h2>

            <p
              className={`mx-auto mt-5 max-w-2xl ${
                darkMode
                  ? "text-zinc-400"
                  : "text-gray-500"
              }`}
            >
              Real experiences from customers who chose
              LUXEMEN for their style.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className={`rounded-[24px] border p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  darkMode
                    ? "border-zinc-800 bg-zinc-900"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="text-lg">
                  ⭐⭐⭐⭐⭐
                </div>

                <p
                  className={`mt-6 leading-8 ${
                    darkMode
                      ? "text-zinc-400"
                      : "text-gray-500"
                  }`}
                >
                  "{review.text}"
                </p>

                <div
                  className={`mt-7 border-t pt-5 ${
                    darkMode
                      ? "border-zinc-800"
                      : "border-gray-200"
                  }`}
                >
                  <p className="font-black">
                    {review.name}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Verified Customer • {review.rating}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          VIP NEWSLETTER
      ====================================================== */}

      <section className="px-6 py-20">
        <div
          className={`mx-auto max-w-5xl rounded-[32px] p-10 text-center sm:p-16 ${
            darkMode
              ? "bg-zinc-900"
              : "bg-zinc-100"
          }`}
        >
          <div className="text-4xl">♛</div>

          <p className="mt-5 text-xs font-bold tracking-[0.35em] text-gray-500">
            JOIN THE LUXEMEN CLUB
          </p>

          <h2 className="mt-5 text-4xl font-black sm:text-5xl">
            Stay In Style.
          </h2>

          <p
            className={`mx-auto mt-5 max-w-xl leading-7 ${
              darkMode
                ? "text-zinc-400"
                : "text-gray-500"
            }`}
          >
            Get updates about new arrivals, exclusive
            offers and the latest men's fashion.
          </p>

          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full rounded-full border px-6 py-4 outline-none ${
                darkMode
                  ? "border-zinc-700 bg-zinc-950 text-white placeholder:text-zinc-600"
                  : "border-gray-300 bg-white text-black"
              }`}
            />

            <button
              type="submit"
              className={`rounded-full px-8 py-4 font-bold transition duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-6 py-28 text-center">
        <p className="text-xs font-bold tracking-[0.4em] text-gray-500">
          LUXEMEN
        </p>

        <h2 className="mt-6 text-5xl font-black sm:text-6xl md:text-8xl">
          Your Style.
          <span className="block font-light italic">
            Your Rules.
          </span>
        </h2>

        <p
          className={`mx-auto mt-7 max-w-xl leading-7 ${
            darkMode
              ? "text-zinc-400"
              : "text-gray-500"
          }`}
        >
          Discover your next favorite outfit from our
          premium men's collection.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/shop"
            className={`rounded-full px-9 py-4 font-bold transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
              darkMode
                ? "bg-white text-black"
                : "bg-black text-white"
            }`}
          >
            Shop Now →
          </Link>

          <Link
            to="/contact"
            className={`rounded-full border px-9 py-4 font-bold transition duration-300 hover:-translate-y-1 ${
              darkMode
                ? "border-zinc-700 hover:bg-zinc-900"
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