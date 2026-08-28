import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ darkMode }) => {
  const [email, setEmail] = useState("");
  const [liked, setLiked] = useState([]);

  const products = [
    {
      id: 1,
      name: "Premium Black Shirt",
      category: "ESSENTIALS",
      price: "Rs. 4,999",
      rating: "4.9",
      reviews: 128,
      image:
        "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=90",
    },
    {
      id: 2,
      name: "Classic Beige Outfit",
      category: "NEW ARRIVAL",
      price: "Rs. 5,499",
      rating: "4.8",
      reviews: 96,
      image:
        "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=900&q=90",
    },
    {
      id: 3,
      name: "Modern Casual Wear",
      category: "CASUAL",
      price: "Rs. 3,999",
      rating: "4.9",
      reviews: 84,
      image:
        "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=900&q=90",
    },
    {
      id: 4,
      name: "Luxury Formal Suit",
      category: "FORMAL",
      price: "Rs. 12,999",
      rating: "5.0",
      reviews: 73,
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=90",
    },
    {
      id: 5,
      name: "Premium Denim Jacket",
      category: "JACKETS",
      price: "Rs. 7,499",
      rating: "4.8",
      reviews: 112,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=90",
    },
    {
      id: 6,
      name: "Minimal White T-Shirt",
      category: "BASICS",
      price: "Rs. 2,999",
      rating: "4.9",
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=90",
    },
  ];

  const categories = [
    {
      name: "Shirts",
      count: "24+ Products",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "T-Shirts",
      count: "30+ Products",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Jackets",
      count: "18+ Products",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Formal Wear",
      count: "15+ Products",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=90",
    },
  ];

  const reviews = [
    {
      name: "Ahmed Khan",
      review:
        "Amazing quality and perfect fitting. The fabric feels premium and delivery was very fast.",
      rating: 5,
    },
    {
      name: "Hamza Ali",
      review:
        "LUXEWEAR has become my favorite men's clothing store. The designs are clean and stylish.",
      rating: 5,
    },
    {
      name: "Usman Raza",
      review:
        "Excellent experience. The product looked exactly like the pictures and the quality was impressive.",
      rating: 5,
    },
  ];

  const toggleLike = (id) => {
    setLiked((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return;

    alert(`Thank you! ${email} has been subscribed.`);
    setEmail("");
  };

  return (
    <main
      className={`min-h-screen overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-[#f7f7f5] text-zinc-950"
      }`}
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative px-6 pb-24 pt-10 md:pt-16">
        <div className="pointer-events-none absolute left-[-150px] top-20 h-[400px] w-[400px] rounded-full bg-zinc-300/20 blur-3xl dark:bg-white/5" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10">
            <div
              className={`mb-7 inline-flex items-center gap-3 rounded-full border px-4 py-2 text-xs font-bold tracking-[0.25em] ${
                darkMode
                  ? "border-zinc-700 bg-zinc-900"
                  : "border-zinc-300 bg-white"
              }`}
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              NEW SEASON 2026
            </div>

            <p className="mb-5 text-xs font-bold tracking-[0.4em] text-zinc-500">
              LUXEWEAR / MEN'S COLLECTION
            </p>

            <h1 className="max-w-3xl text-6xl font-black leading-[0.88] tracking-[-0.06em] sm:text-7xl lg:text-[92px]">
              WEAR
              <br />
              <span className="font-light italic">YOUR</span>
              <br />
              STATEMENT.
            </h1>

            <p
              className={`mt-8 max-w-xl text-lg leading-8 ${
                darkMode ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              Premium men's fashion built for confidence, comfort and
              unforgettable first impressions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="group rounded-full bg-black px-8 py-4 font-bold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-white dark:text-black"
              >
                Explore Collection
                <span className="ml-3 inline-block transition group-hover:translate-x-2">
                  →
                </span>
              </Link>

              <Link
                to="/new-arrivals"
                className={`rounded-full border px-8 py-4 font-bold transition duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? "border-zinc-700 hover:bg-zinc-900"
                    : "border-zinc-300 bg-white hover:bg-zinc-100"
                }`}
              >
                New Arrivals
              </Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 border-y border-zinc-300/70 py-6 dark:border-zinc-800">
              <div>
                <p className="text-2xl font-black">10K+</p>
                <p className="mt-1 text-xs text-zinc-500">CUSTOMERS</p>
              </div>

              <div className="border-x border-zinc-300/70 pl-5 dark:border-zinc-800">
                <p className="text-2xl font-black">4.9</p>
                <p className="mt-1 text-xs text-zinc-500">RATING</p>
              </div>

              <div className="pl-5">
                <p className="text-2xl font-black">500+</p>
                <p className="mt-1 text-xs text-zinc-500">PRODUCTS</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-5 -top-5 z-20 hidden rounded-full border border-zinc-300 bg-white px-5 py-3 text-xs font-bold shadow-xl sm:block dark:border-zinc-700 dark:bg-zinc-900">
              PREMIUM QUALITY
            </div>

            <div className="group relative overflow-hidden rounded-[35px]">
              <img
                src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1400&q=90"
                alt="Premium men's fashion"
                className="h-[620px] w-full object-cover transition duration-[1200ms] group-hover:scale-105 md:h-[720px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between text-white">
                <div>
                  <p className="text-xs tracking-[0.3em] text-zinc-300">
                    FEATURED
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">
                    The Premium Edit
                  </h3>
                </div>

                <div className="rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur-md">
                  01 / 06
                </div>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-7 hidden h-28 w-28 rounded-full border border-zinc-300 bg-white p-2 shadow-xl md:block dark:border-zinc-700 dark:bg-zinc-900">
              <div className="flex h-full items-center justify-center rounded-full border border-dashed border-zinc-400 text-center text-[9px] font-bold tracking-widest">
                LUXEWEAR
                <br />
                PREMIUM
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BRAND MARQUEE
      ====================================================== */}

      <section
        className={`border-y py-7 ${
          darkMode
            ? "border-zinc-800 bg-zinc-900"
            : "border-zinc-200 bg-white"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-5 px-6">
          {["LUXEWEAR", "FENDI", "YSL", "H&M", "GUCCI", "PRADA"].map(
            (brand) => (
              <span
                key={brand}
                className="text-lg font-black tracking-[0.2em] text-zinc-400 transition hover:text-zinc-950 dark:hover:text-white"
              >
                {brand}
              </span>
            )
          )}
        </div>
      </section>

      {/* =====================================================
          FEATURED PRODUCTS
      ====================================================== */}

      <section
        className={`px-6 py-28 ${
          darkMode ? "bg-zinc-900" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-bold tracking-[0.4em] text-zinc-500">
                CURATED FOR YOU
              </p>

              <h2 className="text-5xl font-black tracking-tight md:text-6xl">
                Featured Pieces
              </h2>

              <p className="mt-5 max-w-xl text-zinc-500">
                Statement pieces, everyday essentials and timeless
                silhouettes selected for the modern wardrobe.
              </p>
            </div>

            <Link
              to="/shop"
              className="group font-bold underline underline-offset-8"
            >
              View All
              <span className="ml-2 inline-block transition group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <article
                key={product.id}
                className={`group overflow-hidden rounded-[25px] ${
                  darkMode ? "bg-zinc-800" : "bg-[#f5f5f3]"
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[440px] w-full object-cover transition duration-1000 group-hover:scale-110"
                  />

                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                    <span className="rounded-full bg-white px-4 py-2 text-[10px] font-black tracking-widest text-black shadow-lg">
                      {index < 3 ? "NEW" : "POPULAR"}
                    </span>

                    <button
                      onClick={() => toggleLike(product.id)}
                      aria-label={`Wishlist ${product.name}`}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-black shadow-lg transition hover:scale-110"
                    >
                      {liked.includes(product.id) ? "♥" : "♡"}
                    </button>
                  </div>

                  <div className="absolute bottom-5 left-1/2 w-[88%] -translate-x-1/2 translate-y-20 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <Link
                      to="/shop"
                      className="block rounded-full bg-black py-4 text-center font-bold text-white shadow-2xl"
                    >
                      View Product →
                    </Link>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-bold tracking-[0.3em] text-zinc-500">
                    {product.category}
                  </p>

                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p className="whitespace-nowrap font-black">
                      {product.price}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <span className="tracking-wide text-yellow-500">
                      ★★★★★
                    </span>
                    <span className="text-zinc-500">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORIES
      ====================================================== */}

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-4 text-xs font-bold tracking-[0.4em] text-zinc-500">
              SHOP YOUR WAY
            </p>

            <h2 className="text-5xl font-black md:text-6xl">
              Find Your Style
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-zinc-500">
              From casual essentials to powerful formal looks.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                to="/shop"
                key={category.name}
                className="group relative overflow-hidden rounded-[25px]"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-[380px] w-full object-cover transition duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-xs tracking-widest text-zinc-300">
                    {category.count}
                  </p>

                  <h3 className="mt-2 text-2xl font-black">
                    {category.name}
                  </h3>

                  <span className="mt-4 inline-block text-sm font-bold transition group-hover:translate-x-2">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BIG SALE
      ====================================================== */}

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[35px] bg-black text-white">
          <div className="grid items-center lg:grid-cols-2">
            <div className="px-8 py-16 md:px-16 md:py-20">
              <p className="text-xs font-bold tracking-[0.4em] text-zinc-500">
                LIMITED DROP
              </p>

              <h2 className="mt-6 text-6xl font-black leading-[0.9] md:text-8xl">
                UP TO
                <br />
                <span className="font-light italic">50% OFF</span>
              </h2>

              <p className="mt-7 max-w-md leading-7 text-zinc-400">
                Upgrade your wardrobe with premium pieces at prices
                that won't stay for long.
              </p>

              <Link
                to="/sale"
                className="mt-9 inline-block rounded-full bg-white px-8 py-4 font-bold text-black transition hover:-translate-y-1 hover:shadow-2xl"
              >
                Shop The Sale →
              </Link>
            </div>

            <div className="h-[450px] overflow-hidden lg:h-[560px]">
              <img
                src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1400&q=90"
                alt="LUXEWEAR sale collection"
                className="h-full w-full object-cover transition duration-1000 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

      <section
        className={`px-6 py-24 ${
          darkMode ? "bg-zinc-900" : "bg-white"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 md:grid-cols-4">
          {[
            ["10K+", "HAPPY CUSTOMERS"],
            ["500+", "PREMIUM PRODUCTS"],
            ["4.9/5", "CUSTOMER RATING"],
            ["25+", "CITIES DELIVERED"],
          ].map(([number, label]) => (
            <div key={label} className="text-center">
              <h3 className="text-5xl font-black md:text-6xl">
                {number}
              </h3>
              <p className="mt-3 text-[10px] font-bold tracking-[0.25em] text-zinc-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          LOOKBOOK
      ====================================================== */}

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="group overflow-hidden rounded-[35px]">
            <img
              src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=1400&q=90"
              alt="Men's lookbook"
              className="h-[600px] w-full object-cover transition duration-1000 group-hover:scale-105"
            />
          </div>

          <div className="lg:pl-10">
            <p className="text-xs font-bold tracking-[0.4em] text-zinc-500">
              THE LOOKBOOK
            </p>

            <h2 className="mt-5 text-6xl font-black leading-[0.9] md:text-7xl">
              EVERYDAY
              <br />
              <span className="font-light italic">CONFIDENCE.</span>
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-8 text-zinc-500">
              Great style doesn't need to be complicated. Build a
              wardrobe around timeless pieces that work effortlessly
              together.
            </p>

            <Link
              to="/shop"
              className="mt-9 inline-block rounded-full bg-black px-8 py-4 font-bold text-white transition hover:-translate-y-1 dark:bg-white dark:text-black"
            >
              Discover The Look →
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY LUXEWEAR
      ====================================================== */}

      <section
        className={`px-6 py-28 ${
          darkMode ? "bg-zinc-900" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold tracking-[0.4em] text-zinc-500">
              WHY LUXEWEAR
            </p>

            <h2 className="mt-4 text-5xl font-black md:text-6xl">
              Built Different.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "✦",
                title: "Premium Quality",
                text: "Carefully selected fabrics and excellent craftsmanship for a superior feel.",
              },
              {
                icon: "↗",
                title: "Fast Delivery",
                text: "Get your favorite pieces delivered quickly, safely and conveniently.",
              },
              {
                icon: "♡",
                title: "Customer First",
                text: "Every detail is designed around giving you a better shopping experience.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`group rounded-[25px] border p-9 transition duration-500 hover:-translate-y-3 ${
                  darkMode
                    ? "border-zinc-800 bg-zinc-950"
                    : "border-zinc-200 bg-[#fafafa]"
                }`}
              >
                <div className="mb-8 text-4xl transition duration-300 group-hover:scale-125">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black">{item.title}</h3>

                <p className="mt-4 leading-7 text-zinc-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          REVIEWS
      ====================================================== */}

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold tracking-[0.4em] text-zinc-500">
              CUSTOMER LOVE
            </p>

            <h2 className="mt-4 text-5xl font-black md:text-6xl">
              Don't Take Our Word.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className={`rounded-[25px] p-8 ${
                  darkMode
                    ? "bg-zinc-900"
                    : "bg-white shadow-[0_15px_50px_rgba(0,0,0,0.06)]"
                }`}
              >
                <div className="text-yellow-500">
                  {"★".repeat(review.rating)}
                </div>

                <p className="mt-7 text-lg leading-8 text-zinc-500">
                  "{review.review}"
                </p>

                <div className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-800">
                  <p className="font-black">{review.name}</p>
                  <p className="mt-1 text-xs text-zinc-500">
                    VERIFIED CUSTOMER
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

      <section className="px-6 py-12">
        <div
          className={`mx-auto max-w-6xl rounded-[35px] px-7 py-16 text-center md:px-16 ${
            darkMode ? "bg-zinc-900" : "bg-zinc-200"
          }`}
        >
          <p className="text-xs font-bold tracking-[0.4em] text-zinc-500">
            EXCLUSIVE ACCESS
          </p>

          <h2 className="mt-5 text-5xl font-black md:text-6xl">
            Get 10% Off.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-zinc-500">
            Join the LUXEWEAR community for exclusive drops,
            collection updates and private offers.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className={`flex-1 rounded-full border px-6 py-4 outline-none ${
                darkMode
                  ? "border-zinc-700 bg-zinc-800 text-white"
                  : "border-zinc-300 bg-white"
              }`}
            />

            <button
              type="submit"
              className="rounded-full bg-black px-8 py-4 font-bold text-white transition hover:-translate-y-1 dark:bg-white dark:text-black"
            >
              Join LUXEWEAR →
            </button>
          </form>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-6 py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold tracking-[0.4em] text-zinc-500">
            YOUR NEXT LOOK STARTS HERE
          </p>

          <h2 className="mt-6 text-6xl font-black leading-[0.9] md:text-8xl">
            YOUR STYLE.
            <br />
            <span className="font-light italic">YOUR RULES.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-zinc-500">
            Discover premium men's fashion made to help you look
            sharp and feel confident.
          </p>

          <Link
            to="/shop"
            className="mt-10 inline-block rounded-full bg-black px-10 py-5 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl dark:bg-white dark:text-black"
          >
            Explore Collection →
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;