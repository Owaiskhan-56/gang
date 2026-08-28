import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  ShoppingBag,
  Star,
  Truck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const Home = ({ darkMode, addToCart }) => {
  const [liked, setLiked] = useState([]);

  const products = [
    {
      id: 1,
      name: "Premium Black Shirt",
      category: "Essentials",
      price: 4999,
      rating: 4.9,
      reviews: 128,
      image:
        "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=90",
    },
    {
      id: 2,
      name: "Classic Beige Outfit",
      category: "New Arrival",
      price: 5499,
      rating: 4.8,
      reviews: 96,
      image:
        "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=900&q=90",
    },
    {
      id: 3,
      name: "Modern Casual Wear",
      category: "Casual",
      price: 3999,
      rating: 4.9,
      reviews: 84,
      image:
        "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=900&q=90",
    },
    {
      id: 4,
      name: "Luxury Formal Suit",
      category: "Formal",
      price: 12999,
      rating: 5.0,
      reviews: 73,
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=90",
    },
    {
      id: 5,
      name: "Premium Denim Jacket",
      category: "Jackets",
      price: 7499,
      rating: 4.8,
      reviews: 112,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=90",
    },
    {
      id: 6,
      name: "Minimal White T-Shirt",
      category: "Basics",
      price: 2999,
      rating: 4.9,
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

  const toggleLike = (id) => {
    setLiked((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const handleAddToCart = (product) => {
    if (addToCart) {
      addToCart(product);
    }
  };

  return (
    <main
      className={`min-h-screen overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-[#f7f7f5] text-zinc-950"
      }`}
    >
      {/* HERO */}

      <section className="relative px-5 pb-24 pt-12 sm:px-8 lg:px-12 lg:pt-20">
        <div className="absolute left-[-150px] top-20 h-96 w-96 rounded-full bg-zinc-300/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
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

            <p className="mb-5 text-xs font-bold tracking-[0.35em] text-zinc-500">
              LUXEWEAR / MEN'S COLLECTION
            </p>

            <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[90px]">
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
              Premium men's fashion built for confidence, comfort
              and unforgettable first impressions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="group rounded-full bg-black px-8 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl dark:bg-white dark:text-black"
              >
                Explore Collection
                <ArrowRight
                  size={18}
                  className="ml-2 inline-block transition group-hover:translate-x-2"
                />
              </Link>

              <Link
                to="/new-arrivals"
                className={`rounded-full border px-8 py-4 font-bold transition hover:-translate-y-1 ${
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
                <p className="mt-1 text-xs text-zinc-500">
                  CUSTOMERS
                </p>
              </div>

              <div className="border-x border-zinc-300/70 pl-5 dark:border-zinc-800">
                <p className="text-2xl font-black">4.9</p>
                <p className="mt-1 text-xs text-zinc-500">
                  RATING
                </p>
              </div>

              <div className="pl-5">
                <p className="text-2xl font-black">500+</p>
                <p className="mt-1 text-xs text-zinc-500">
                  PRODUCTS
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 z-20 hidden rounded-full border border-zinc-300 bg-white px-5 py-3 text-xs font-bold shadow-xl sm:block dark:border-zinc-700 dark:bg-zinc-900">
              PREMIUM QUALITY
            </div>

            <div className="group relative overflow-hidden rounded-[35px]">
              <img
                src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1400&q=90"
                alt="Premium men's fashion"
                className="h-[600px] w-full object-cover transition duration-1000 group-hover:scale-105 md:h-[700px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-white">
                <div>
                  <p className="text-xs tracking-[0.3em] text-zinc-300">
                    FEATURED COLLECTION
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
          </div>
        </div>
      </section>

      {/* BRANDS */}

      <section
        className={`border-y py-8 ${
          darkMode
            ? "border-zinc-800 bg-zinc-900"
            : "border-zinc-200 bg-white"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-6">
          {[
            "LUXEWEAR",
            "FENDI",
            "YSL",
            "GUCCI",
            "PRADA",
            "ARMANI",
          ].map((brand) => (
            <span
              key={brand}
              className="text-lg font-black tracking-[0.2em] text-zinc-400 transition hover:text-black dark:hover:text-white"
            >
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}

      <section
        className={`px-5 py-24 sm:px-8 lg:px-12 ${
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
              <ArrowRight
                size={17}
                className="ml-2 inline-block transition group-hover:translate-x-2"
              />
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
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-[430px] w-full object-cover transition duration-1000 group-hover:scale-110"
                    />
                  </Link>

                  <div className="absolute left-5 top-5">
                    <span className="rounded-full bg-white px-4 py-2 text-[10px] font-black tracking-widest text-black shadow-lg">
                      {index < 3 ? "NEW" : "POPULAR"}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleLike(product.id)}
                    className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:scale-110"
                  >
                    <Heart
                      size={20}
                      fill={
                        liked.includes(product.id)
                          ? "currentColor"
                          : "none"
                      }
                    />
                  </button>

                  <div className="absolute bottom-5 left-1/2 w-[88%] -translate-x-1/2 translate-y-20 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-black py-4 font-bold text-white shadow-2xl dark:bg-white dark:text-black"
                    >
                      <ShoppingBag size={18} />
                      Add To Cart
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                    {product.category}
                  </p>

                  <div className="mt-3 flex items-start justify-between gap-4">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-xl font-bold hover:opacity-60">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="whitespace-nowrap font-black">
                      Rs. {product.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <div className="flex text-yellow-500">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={15}
                          fill="currentColor"
                        />
                      ))}
                    </div>

                    <span className="text-zinc-500">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`mt-5 flex w-full items-center justify-center gap-2 rounded-full border py-3 text-sm font-bold lg:hidden ${
                      darkMode
                        ? "border-zinc-700"
                        : "border-zinc-300"
                    }`}
                  >
                    <ShoppingBag size={17} />
                    Add To Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}

      <section className="px-5 py-24 sm:px-8 lg:px-12">
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
                  className="h-[350px] w-full object-cover transition duration-1000 group-hover:scale-110"
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

      {/* SALE */}

      <section className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[35px] bg-black text-white">
          <div className="grid items-center lg:grid-cols-2">
            <div className="px-8 py-16 md:px-16 md:py-20">
              <div className="mb-5 flex items-center gap-2 text-cyan-400">
                <Sparkles size={18} />

                <span className="text-xs font-bold tracking-[0.3em]">
                  LIMITED DROP
                </span>
              </div>

              <h2 className="text-6xl font-black leading-[0.9] md:text-8xl">
                UP TO
                <br />
                <span className="font-light italic">
                  50% OFF
                </span>
              </h2>

              <p className="mt-7 max-w-md leading-7 text-zinc-400">
                Upgrade your wardrobe with premium pieces at prices
                that won't stay for long.
              </p>

              <Link
                to="/sale"
                className="mt-9 inline-flex items-center rounded-full bg-white px-8 py-4 font-bold text-black transition hover:-translate-y-1"
              >
                Shop The Sale
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            <div className="h-[450px] overflow-hidden lg:h-[560px]">
              <img
                src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1400&q=90"
                alt="Sale collection"
                className="h-full w-full object-cover transition duration-1000 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY LUXEWEAR */}

      <section
        className={`px-5 py-24 sm:px-8 lg:px-12 ${
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
            <div
              className={`rounded-[25px] border p-9 ${
                darkMode
                  ? "border-zinc-800 bg-zinc-950"
                  : "border-zinc-200 bg-[#fafafa]"
              }`}
            >
              <Truck size={38} />

              <h3 className="mt-7 text-2xl font-black">
                Fast Delivery
              </h3>

              <p className="mt-4 leading-7 text-zinc-500">
                Quick and reliable delivery straight to your doorstep.
              </p>
            </div>

            <div
              className={`rounded-[25px] border p-9 ${
                darkMode
                  ? "border-zinc-800 bg-zinc-950"
                  : "border-zinc-200 bg-[#fafafa]"
              }`}
            >
              <ShieldCheck size={38} />

              <h3 className="mt-7 text-2xl font-black">
                Premium Quality
              </h3>

              <p className="mt-4 leading-7 text-zinc-500">
                Carefully selected fabrics and excellent craftsmanship.
              </p>
            </div>

            <div
              className={`rounded-[25px] border p-9 ${
                darkMode
                  ? "border-zinc-800 bg-zinc-950"
                  : "border-zinc-200 bg-[#fafafa]"
              }`}
            >
              <Heart size={38} />

              <h3 className="mt-7 text-2xl font-black">
                Customer First
              </h3>

              <p className="mt-4 leading-7 text-zinc-500">
                Your satisfaction is at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="px-5 py-28 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold tracking-[0.4em] text-zinc-500">
            YOUR NEXT LOOK STARTS HERE
          </p>

          <h2 className="mt-6 text-6xl font-black leading-[0.9] md:text-8xl">
            YOUR STYLE.
            <br />
            <span className="font-light italic">
              YOUR RULES.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-zinc-500">
            Discover premium men's fashion made to help you look
            sharp and feel confident.
          </p>

          <Link
            to="/shop"
            className="mt-10 inline-flex items-center rounded-full bg-black px-10 py-5 font-bold text-white shadow-xl transition hover:-translate-y-1 dark:bg-white dark:text-black"
          >
            Explore Collection
            <ArrowRight size={19} className="ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;