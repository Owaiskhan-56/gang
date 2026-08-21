import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ darkMode }) => {
  const [email, setEmail] = useState("");

  const products = [
    {
      id: 1,
      name: "Premium Black Shirt",
      price: "Rs. 4,999",
      rating: "4.9",
      reviews: "128",
      image:
        "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 2,
      name: "Classic Beige Outfit",
      price: "Rs. 5,499",
      rating: "4.8",
      reviews: "96",
      image:
        "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 3,
      name: "Modern Casual Wear",
      price: "Rs. 3,999",
      rating: "4.9",
      reviews: "84",
      image:
        "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 4,
      name: "Luxury Formal Suit",
      price: "Rs. 12,999",
      rating: "5.0",
      reviews: "73",
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 5,
      name: "Premium Denim Jacket",
      price: "Rs. 7,499",
      rating: "4.8",
      reviews: "112",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: 6,
      name: "Minimal White T-Shirt",
      price: "Rs. 2,999",
      rating: "4.9",
      reviews: "156",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85",
    },
  ];

  const categories = [
    {
      name: "Shirts",
      count: "24+ Products",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=85",
    },
    {
      name: "T-Shirts",
      count: "30+ Products",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85",
    },
    {
      name: "Jackets",
      count: "18+ Products",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85",
    },
    {
      name: "Formal Wear",
      count: "15+ Products",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85",
    },
  ];

  const reviews = [
    {
      name: "Ahmed Khan",
      role: "Verified Customer",
      review:
        "Amazing quality and perfect fitting. The fabric feels premium and delivery was very fast.",
      rating: 5,
    },
    {
      name: "Hamza Ali",
      role: "Verified Customer",
      review:
        "LUXEWEAR has become my favorite men's clothing store. The designs are clean and stylish.",
      rating: 5,
    },
    {
      name: "Usman Raza",
      role: "Verified Customer",
      review:
        "Excellent experience. Product looked exactly like the pictures and the quality was impressive.",
      rating: 5,
    },
  ];

  const stats = [
    {
      number: "10K+",
      label: "Happy Customers",
    },
    {
      number: "500+",
      label: "Premium Products",
    },
    {
      number: "4.9/5",
      label: "Customer Rating",
    },
    {
      number: "25+",
      label: "Cities Delivered",
    },
  ];

  const brands = ["LUXEWEAR", "FENDI", "YSL", "H&M", "GUCCI"];

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return;

    alert(`Thank you! ${email} has been subscribed.`);
    setEmail("");
  };

  return (
    <main
      className={
        darkMode
          ? "min-h-screen bg-zinc-950 text-white"
          : "min-h-screen bg-zinc-100 text-zinc-900"
      }
    >
      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-zinc-300 px-4 py-2 text-xs font-semibold tracking-[0.2em] dark:border-zinc-700">
            NEW SEASON 2026
          </div>

          <p
            className={`mb-6 text-sm tracking-[0.35em] ${
              darkMode ? "text-zinc-400" : "text-slate-500"
            }`}
          >
            MEN'S FASHION
          </p>

          <h1 className="text-6xl font-bold leading-[0.95] md:text-8xl">
            Style That
            <br />
            <span className="font-light italic">Defines You.</span>
          </h1>

          <p
            className={`mt-8 max-w-xl text-lg leading-8 ${
              darkMode ? "text-zinc-400" : "text-slate-500"
            }`}
          >
            Discover premium men's clothing designed for confidence,
            comfort and modern living. From everyday essentials to
            sophisticated formal wear.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="rounded-full bg-black px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-zinc-800"
            >
              Shop Collection →
            </Link>

            <Link
              to="/new-arrivals"
              className={`rounded-full border px-8 py-4 font-semibold transition duration-300 hover:scale-105 ${
                darkMode
                  ? "border-zinc-700 hover:bg-zinc-800"
                  : "border-zinc-300 hover:bg-white"
              }`}
            >
              New Arrivals
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <p className="text-2xl font-bold">10K+</p>
              <p className="text-sm text-slate-500">Customers</p>
            </div>

            <div>
              <p className="text-2xl font-bold">4.9★</p>
              <p className="text-sm text-slate-500">Rating</p>
            </div>

            <div>
              <p className="text-2xl font-bold">500+</p>
              <p className="text-sm text-slate-500">Products</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[30px]">
          <img
            src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=85"
            alt="Men's fashion"
            className="h-[550px] w-full object-cover transition duration-700 hover:scale-105 md:h-[680px]"
          />

          <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 p-5 text-black backdrop-blur-md">
            <p className="text-xs tracking-widest text-zinc-500">
              FEATURED
            </p>

            <p className="mt-1 font-bold">
              Premium Collection
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          BRAND STRIP
      ====================================================== */}

      <section
        className={`border-y px-6 py-8 ${
          darkMode
            ? "border-zinc-800 bg-zinc-900"
            : "border-zinc-200 bg-white"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-xl font-bold tracking-widest text-zinc-400 transition hover:text-zinc-900 dark:hover:text-white"
            >
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* =====================================================
          FEATURED PRODUCTS
      ====================================================== */}

      <section
        className={`px-6 py-24 ${
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

              <p className="mt-4 max-w-xl text-slate-500">
                Carefully selected pieces made for modern men who
                appreciate quality and timeless style.
              </p>
            </div>

            <Link
              to="/shop"
              className="font-semibold underline underline-offset-8"
            >
              View All Products →
            </Link>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className={`group overflow-hidden rounded-2xl ${
                  darkMode ? "bg-zinc-800" : "bg-zinc-100"
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[390px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-black">
                    NEW
                  </span>

                  <Link
                    to="/shop"
                    className="absolute bottom-4 left-1/2 w-[85%] -translate-x-1/2 translate-y-16 rounded-full bg-black py-3 text-center font-semibold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    View Product
                  </Link>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">
                      {product.name}
                    </h3>

                    <span className="text-lg">♡</span>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-yellow-500">
                      ★★★★★
                    </span>

                    <span className="text-sm text-slate-500">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <p className="mt-4 text-lg font-bold">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORIES
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm tracking-[0.3em] text-slate-500">
            SHOP BY CATEGORY
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Find Your Style
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Explore our carefully organized collections and find
            something perfect for your wardrobe.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {categories.map((category) => (
            <Link
              to="/shop"
              key={category.name}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6">
                <h3 className="text-xl font-bold text-white">
                  {category.name}
                </h3>

                <p className="mt-1 text-sm text-zinc-300">
                  {category.count}
                </p>

                <span className="mt-3 text-sm font-semibold text-white">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =====================================================
          SALE BANNER
      ====================================================== */}

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

              <p className="mt-6 max-w-md leading-7 text-zinc-400">
                Upgrade your wardrobe with our latest men's
                fashion collection at special prices.
              </p>

              <Link
                to="/sale"
                className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Shop Sale →
              </Link>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=85"
                alt="Sale collection"
                className="h-[350px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATISTICS
      ====================================================== */}

      <section
        className={`px-6 py-20 ${
          darkMode ? "bg-zinc-900" : "bg-white"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <h3 className="text-4xl font-bold md:text-5xl">
                {stat.number}
              </h3>

              <p className="mt-3 text-sm text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          LOOKBOOK
      ====================================================== */}

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-[30px]">
            <img
              src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=1200&q=85"
              alt="Men's casual style"
              className="h-[550px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm tracking-[0.3em] text-slate-500">
              THE LOOKBOOK
            </p>

            <h2 className="text-5xl font-bold leading-tight md:text-6xl">
              Everyday
              <br />
              <span className="font-light italic">
                Confidence.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-slate-500">
              Great style doesn't need to be complicated. Build
              your wardrobe with timeless pieces that work
              together effortlessly.
            </p>

            <Link
              to="/shop"
              className="mt-8 w-fit rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Discover The Look →
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}

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

          <div className="grid gap-7 md:grid-cols-3">
            <div
              className={`rounded-2xl border p-8 transition duration-300 hover:-translate-y-2 ${
                darkMode
                  ? "border-zinc-700"
                  : "border-zinc-200"
              }`}
            >
              <div className="mb-6 text-4xl">✦</div>

              <h3 className="text-xl font-bold">
                Premium Quality
              </h3>

              <p className="mt-4 leading-7 text-slate-500">
                Carefully selected fabrics and excellent
                craftsmanship for everyday comfort.
              </p>
            </div>

            <div
              className={`rounded-2xl border p-8 transition duration-300 hover:-translate-y-2 ${
                darkMode
                  ? "border-zinc-700"
                  : "border-zinc-200"
              }`}
            >
              <div className="mb-6 text-4xl">🚚</div>

              <h3 className="text-xl font-bold">
                Fast Delivery
              </h3>

              <p className="mt-4 leading-7 text-slate-500">
                Get your favorite men's clothing delivered
                quickly and safely.
              </p>
            </div>

            <div
              className={`rounded-2xl border p-8 transition duration-300 hover:-translate-y-2 ${
                darkMode
                  ? "border-zinc-700"
                  : "border-zinc-200"
              }`}
            >
              <div className="mb-6 text-4xl">♡</div>

              <h3 className="text-xl font-bold">
                Customer First
              </h3>

              <p className="mt-4 leading-7 text-slate-500">
                Your satisfaction matters. We are here to
                make your shopping experience better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CUSTOMER REVIEWS
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm tracking-[0.3em] text-slate-500">
            CUSTOMER LOVE
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className={`rounded-2xl p-8 ${
                darkMode
                  ? "bg-zinc-900"
                  : "bg-white shadow-sm"
              }`}
            >
              <div className="text-yellow-500">
                {"★".repeat(review.rating)}
              </div>

              <p className="mt-6 leading-7 text-slate-500">
                "{review.review}"
              </p>

              <div className="mt-7 border-t border-zinc-200 pt-5">
                <p className="font-bold">
                  {review.name}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          NEWSLETTER
      ====================================================== */}

      <section className="px-6 py-12">
        <div
          className={`mx-auto max-w-7xl rounded-[30px] px-8 py-16 text-center md:px-16 ${
            darkMode ? "bg-zinc-900" : "bg-zinc-200"
          }`}
        >
          <p className="mb-4 text-sm tracking-[0.3em] text-slate-500">
            STAY IN THE LOOP
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Get 10% Off Your First Order
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-slate-500">
            Subscribe to our newsletter and receive exclusive
            offers, new collection updates and fashion tips.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className={`flex-1 rounded-full border px-6 py-4 outline-none ${
                darkMode
                  ? "border-zinc-700 bg-zinc-800 text-white"
                  : "border-zinc-300 bg-white"
              }`}
            />

            <button
              type="submit"
              className="rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

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
            Explore Collection →
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;