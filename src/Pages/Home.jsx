import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home({ darkMode = false }) {
  const [email, setEmail] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  // ============================================================
  // PRODUCTS
  // ============================================================

  const products = [
    {
      id: 1,
      name: "Premium Black Shirt",
      category: "Shirts",
      price: "Rs. 4,999",
      oldPrice: "Rs. 6,499",
      rating: 4.9,
      reviews: 128,
      image: "/shirt.jpg",
      badge: "BEST SELLER",
    },
    {
      id: 2,
      name: "Classic Beige Outfit",
      category: "Casual Wear",
      price: "Rs. 5,499",
      oldPrice: "Rs. 7,000",
      rating: 4.8,
      reviews: 96,
      image: "/casual.jpg",
      badge: "NEW",
    },
    {
      id: 3,
      name: "Premium Denim Jacket",
      category: "Jackets",
      price: "Rs. 7,499",
      oldPrice: "Rs. 9,999",
      rating: 4.8,
      reviews: 112,
      image: "/jacket.jpg",
      badge: "TRENDING",
    },
    {
      id: 4,
      name: "Luxury Formal Suit",
      category: "Formal Wear",
      price: "Rs. 12,999",
      oldPrice: "Rs. 16,999",
      rating: 5.0,
      reviews: 73,
      image: "/suit.jpg",
      badge: "PREMIUM",
    },
    {
      id: 5,
      name: "Minimal White T-Shirt",
      category: "T-Shirts",
      price: "Rs. 2,999",
      oldPrice: "Rs. 3,999",
      rating: 4.9,
      reviews: 156,
      image: "/tshirt.jpg",
      badge: "POPULAR",
    },
    {
      id: 6,
      name: "Modern Black Jacket",
      category: "Jackets",
      price: "Rs. 8,999",
      oldPrice: "Rs. 11,999",
      rating: 4.9,
      reviews: 88,
      image: "/jacket.jpg",
      badge: "NEW",
    },
  ];

  // ============================================================
  // CATEGORIES
  // ============================================================

  const categories = [
    {
      name: "Shirts",
      count: "24+ Products",
      image: "/shirt.jpg",
    },
    {
      name: "T-Shirts",
      count: "30+ Products",
      image: "/tshirt.jpg",
    },
    {
      name: "Jackets",
      count: "18+ Products",
      image: "/jacket.jpg",
    },
    {
      name: "Formal Wear",
      count: "15+ Products",
      image: "/suit.jpg",
    },
  ];

  // ============================================================
  // FEATURES
  // ============================================================

  const features = [
    {
      icon: "✦",
      title: "Premium Quality",
      text: "High-quality fabrics and excellent craftsmanship designed for everyday comfort.",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      text: "Quick and reliable delivery across Pakistan with carefully packed products.",
    },
    {
      icon: "↻",
      title: "Easy Returns",
      text: "Simple return process so you can shop confidently without unnecessary stress.",
    },
    {
      icon: "♡",
      title: "Customer First",
      text: "Your satisfaction is our priority. We are always here to help.",
    },
  ];

  // ============================================================
  // REVIEWS
  // ============================================================

  const reviews = [
    {
      name: "Ahmed Khan",
      role: "Verified Customer",
      rating: 5,
      text: "Amazing quality and perfect fitting. The fabric feels premium and delivery was very fast.",
    },
    {
      name: "Hamza Ali",
      role: "Verified Customer",
      rating: 5,
      text: "LUXEWEAR has become my favorite men's clothing store. The designs are clean and stylish.",
    },
    {
      name: "Usman Raza",
      role: "Verified Customer",
      rating: 5,
      text: "Excellent experience. The product looked exactly like the pictures and the quality was impressive.",
    },
  ];

  // ============================================================
  // STATS
  // ============================================================

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
      number: "4.9",
      label: "Average Rating",
    },
    {
      number: "25+",
      label: "Cities Delivered",
    },
  ];

  // ============================================================
  // FAQ
  // ============================================================

  const faqs = [
    {
      question: "How long does delivery take?",
      answer:
        "Orders are normally delivered within 3 to 7 working days depending on your city.",
    },
    {
      question: "Can I return my order?",
      answer:
        "Yes. Eligible products can be returned according to our return policy.",
    },
    {
      question: "Do you deliver across Pakistan?",
      answer:
        "Yes. We provide delivery services to major cities and many other areas across Pakistan.",
    },
    {
      question: "How can I find my correct size?",
      answer:
        "You can use our size guide on the product page to select the best size for you.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact our support team through the Contact page or the information provided on our website.",
    },
  ];

  // ============================================================
  // NEWSLETTER
  // ============================================================

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    alert(`Thank you! ${email} has been subscribed.`);
    setEmail("");
  };

  // ============================================================
  // COLORS
  // ============================================================

  const pageBg = darkMode
    ? "bg-zinc-950 text-white"
    : "bg-zinc-50 text-zinc-900";

  const sectionBg = darkMode
    ? "bg-zinc-900"
    : "bg-white";

  const muted = darkMode
    ? "text-zinc-400"
    : "text-zinc-500";

  const border = darkMode
    ? "border-zinc-800"
    : "border-zinc-200";

  // ============================================================
  // RETURN
  // ============================================================

  return (
    <main className={`min-h-screen ${pageBg}`}>

      {/* ========================================================
          TOP ANNOUNCEMENT
      ======================================================== */}

      <div className="bg-black px-4 py-3 text-center text-sm font-semibold text-white">
        <span className="mr-2">🔥</span>
        New Season 2026 — Up To 50% Off Selected Styles
        <Link
          to="/sale"
          className="ml-3 underline underline-offset-4"
        >
          Shop Now
        </Link>
      </div>

      {/* ========================================================
          HERO SECTION
      ======================================================== */}

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24 lg:py-28">

          {/* HERO TEXT */}

          <div className="relative z-10">

            <div
              className={`mb-6 inline-flex rounded-full border px-4 py-2 text-xs font-bold tracking-[0.2em] ${border}`}
            >
              NEW COLLECTION • 2026
            </div>

            <p className="mb-5 text-sm font-semibold tracking-[0.35em] text-cyan-500">
              PREMIUM MEN'S FASHION
            </p>

            <h1 className="text-5xl font-black leading-[0.95] sm:text-6xl lg:text-8xl">
              Style
              <br />
              <span className="font-light italic">
                Defines You.
              </span>
            </h1>

            <p
              className={`mt-8 max-w-xl text-base leading-8 sm:text-lg ${muted}`}
            >
              Discover premium men's clothing designed for
              confidence, comfort and modern living. From
              everyday essentials to sophisticated formal wear.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/shop"
                className="rounded-full bg-black px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-zinc-800 hover:shadow-xl"
              >
                Shop Collection →
              </Link>

              <Link
                to="/new-arrivals"
                className={`rounded-full border px-8 py-4 font-bold transition duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? "border-zinc-700 hover:bg-zinc-900"
                    : "border-zinc-300 hover:bg-white"
                }`}
              >
                New Arrivals
              </Link>

            </div>

            {/* HERO STATS */}

            <div className="mt-12 flex flex-wrap gap-8">

              <div>
                <p className="text-2xl font-black">
                  10K+
                </p>

                <p className={`mt-1 text-sm ${muted}`}>
                  Customers
                </p>
              </div>

              <div>
                <p className="text-2xl font-black">
                  4.9★
                </p>

                <p className={`mt-1 text-sm ${muted}`}>
                  Rating
                </p>
              </div>

              <div>
                <p className="text-2xl font-black">
                  500+
                </p>

                <p className={`mt-1 text-sm ${muted}`}>
                  Products
                </p>
              </div>

            </div>
          </div>

          {/* HERO IMAGE */}

          <div className="relative">

            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[35px] shadow-2xl">

              <img
                src="/hero.jpg"
                alt="LUXEWEAR Men's Collection"
                className="h-[520px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[620px]"
              />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-5 text-black backdrop-blur-md">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs font-semibold tracking-[0.2em] text-zinc-500">
                      FEATURED COLLECTION
                    </p>

                    <p className="mt-1 text-lg font-black">
                      Premium Essentials
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-xl text-white">
                    →
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          BRAND STRIP
      ======================================================== */}

      <section
        className={`border-y px-6 py-8 ${border} ${sectionBg}`}
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8">

          {["LUXEWEAR", "FENDI", "YSL", "GUCCI", "H&M"].map(
            (brand) => (
              <span
                key={brand}
                className={`text-lg font-black tracking-[0.25em] transition hover:text-cyan-500 sm:text-xl ${
                  darkMode
                    ? "text-zinc-600"
                    : "text-zinc-400"
                }`}
              >
                {brand}
              </span>
            )
          )}

        </div>
      </section>

      {/* ========================================================
          FEATURED PRODUCTS
      ======================================================== */}

      <section
        className={`px-6 py-24 ${sectionBg}`}
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <p className="mb-3 text-sm font-bold tracking-[0.3em] text-cyan-500">
                OUR COLLECTION
              </p>

              <h2 className="text-4xl font-black sm:text-5xl">
                Featured Pieces
              </h2>

              <p
                className={`mt-4 max-w-2xl leading-7 ${muted}`}
              >
                Carefully selected pieces made for modern men
                who appreciate quality and timeless style.
              </p>

            </div>

            <Link
              to="/shop"
              className="font-bold underline underline-offset-8"
            >
              View All Products →
            </Link>

          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {products.map((product) => (

              <article
                key={product.id}
                className={`group overflow-hidden rounded-3xl border ${border} ${
                  darkMode
                    ? "bg-zinc-950"
                    : "bg-zinc-50"
                } transition duration-300 hover:-translate-y-2 hover:shadow-2xl`}
              >

                <div className="relative overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[390px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-black px-4 py-2 text-xs font-bold text-white">
                    {product.badge}
                  </span>

                  <button
                    type="button"
                    className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-black shadow-lg transition hover:scale-110"
                  >
                    ♡
                  </button>

                  <Link
                    to={`/products/${product.id}`}
                    className="absolute bottom-5 left-1/2 w-[85%] -translate-x-1/2 translate-y-20 rounded-full bg-black py-4 text-center font-bold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    View Product →
                  </Link>

                </div>

                <div className="p-6">

                  <p className="text-xs font-bold uppercase tracking-widest text-cyan-500">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    {product.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-2">

                    <span className="text-yellow-500">
                      ★★★★★
                    </span>

                    <span className={`text-sm ${muted}`}>
                      {product.rating} ({product.reviews})
                    </span>

                  </div>

                  <div className="mt-4 flex items-center gap-3">

                    <span className="text-xl font-black">
                      {product.price}
                    </span>

                    <span
                      className={`text-sm line-through ${muted}`}
                    >
                      {product.oldPrice}
                    </span>

                  </div>

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          CATEGORIES
      ======================================================== */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <p className="mb-3 text-sm font-bold tracking-[0.3em] text-cyan-500">
              SHOP BY CATEGORY
            </p>

            <h2 className="text-4xl font-black sm:text-5xl">
              Find Your Style
            </h2>

            <p
              className={`mx-auto mt-4 max-w-2xl leading-7 ${muted}`}
            >
              Explore our collections and find the perfect pieces
              for your wardrobe.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

            {categories.map((category) => (

              <Link
                key={category.name}
                to="/shop"
                className="group relative overflow-hidden rounded-3xl"
              >

                <img
                  src={category.image}
                  alt={category.name}
                  className="h-[330px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent p-5 sm:p-7">

                  <h3 className="text-xl font-black text-white">
                    {category.name}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-300">
                    {category.count}
                  </p>

                  <span className="mt-3 text-sm font-bold text-white">
                    Explore →
                  </span>

                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SALE BANNER
      ======================================================== */}

      <section className="px-6 py-10">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[35px] bg-black text-white">

          <div className="grid items-center md:grid-cols-2">

            <div className="px-8 py-16 md:px-16">

              <p className="mb-5 text-sm font-bold tracking-[0.3em] text-zinc-400">
                LIMITED TIME OFFER
              </p>

              <h2 className="text-5xl font-black sm:text-7xl">
                Up To
                <br />
                <span className="font-light italic">
                  50% OFF
                </span>
              </h2>

              <p className="mt-6 max-w-md leading-7 text-zinc-400">
                Upgrade your wardrobe with premium men's fashion
                at special prices.
              </p>

              <Link
                to="/sale"
                className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-black transition hover:-translate-y-1 hover:bg-zinc-200"
              >
                Shop Sale →
              </Link>

            </div>

            <div className="h-full min-h-[350px] overflow-hidden">

              <img
                src="/jacket.jpg"
                alt="LUXEWEAR Sale"
                className="h-full min-h-[350px] w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          STATS
      ======================================================== */}

      <section
        className={`px-6 py-20 ${sectionBg}`}
      >

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">

          {stats.map((stat) => (

            <div
              key={stat.label}
              className="text-center"
            >

              <h3 className="text-4xl font-black sm:text-5xl">
                {stat.number}
              </h3>

              <p className={`mt-3 text-sm ${muted}`}>
                {stat.label}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* ========================================================
          LOOKBOOK
      ======================================================== */}

      <section className="px-6 py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div className="overflow-hidden rounded-[35px]">

            <img
              src="/casual.jpg"
              alt="LUXEWEAR Lookbook"
              className="h-[550px] w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

          <div>

            <p className="mb-4 text-sm font-bold tracking-[0.3em] text-cyan-500">
              THE LOOKBOOK
            </p>

            <h2 className="text-5xl font-black leading-tight sm:text-6xl">
              Everyday
              <br />
              <span className="font-light italic">
                Confidence.
              </span>
            </h2>

            <p
              className={`mt-7 max-w-xl text-lg leading-8 ${muted}`}
            >
              Great style doesn't need to be complicated. Build
              your wardrobe with timeless pieces that work
              together effortlessly.
            </p>

            <Link
              to="/shop"
              className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-zinc-800"
            >
              Discover The Look →
            </Link>

          </div>
        </div>
      </section>

      {/* ========================================================
          WHY CHOOSE US
      ======================================================== */}

      <section
        className={`px-6 py-24 ${sectionBg}`}
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="mb-3 text-sm font-bold tracking-[0.3em] text-cyan-500">
              WHY LUXEWEAR
            </p>

            <h2 className="text-4xl font-black sm:text-5xl">
              Made For Your Lifestyle
            </h2>

          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => (

              <div
                key={feature.title}
                className={`rounded-3xl border p-8 ${border} transition duration-300 hover:-translate-y-2 hover:shadow-xl`}
              >

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 text-2xl text-black">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-black">
                  {feature.title}
                </h3>

                <p
                  className={`mt-4 leading-7 ${muted}`}
                >
                  {feature.text}
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          CUSTOMER REVIEWS
      ======================================================== */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <p className="mb-3 text-sm font-bold tracking-[0.3em] text-cyan-500">
              CUSTOMER LOVE
            </p>

            <h2 className="text-4xl font-black sm:text-5xl">
              What Our Customers Say
            </h2>

          </div>

          <div className="grid gap-7 md:grid-cols-3">

            {reviews.map((review) => (

              <div
                key={review.name}
                className={`rounded-3xl border p-8 ${border} ${
                  darkMode
                    ? "bg-zinc-900"
                    : "bg-white shadow-sm"
                }`}
              >

                <div className="text-yellow-500">
                  {"★".repeat(review.rating)}
                </div>

                <p
                  className={`mt-6 leading-8 ${muted}`}
                >
                  "{review.text}"
                </p>

                <div
                  className={`mt-7 border-t pt-5 ${border}`}
                >

                  <p className="font-black">
                    {review.name}
                  </p>

                  <p className={`mt-1 text-sm ${muted}`}>
                    {review.role}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          NEWSLETTER
      ======================================================== */}

      <section className="px-6 py-12">

        <div
          className={`mx-auto max-w-7xl rounded-[35px] px-8 py-16 text-center md:px-16 ${
            darkMode
              ? "bg-zinc-900"
              : "bg-zinc-200"
          }`}
        >

          <p className="mb-4 text-sm font-bold tracking-[0.3em] text-cyan-500">
            STAY IN THE LOOP
          </p>

          <h2 className="text-4xl font-black sm:text-5xl">
            Get 10% Off Your First Order
          </h2>

          <p
            className={`mx-auto mt-5 max-w-xl leading-7 ${muted}`}
          >
            Subscribe to our newsletter for exclusive offers,
            new collection updates and fashion tips.
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
              className={`flex-1 rounded-full border px-6 py-4 outline-none ${border} ${
                darkMode
                  ? "bg-zinc-800 text-white"
                  : "bg-white text-black"
              }`}
            />

            <button
              type="submit"
              className="rounded-full bg-black px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-zinc-800"
            >
              Subscribe
            </button>

          </form>
        </div>
      </section>

      {/* ========================================================
          FAQ
      ======================================================== */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-4xl">

          <div className="mb-12 text-center">

            <p className="mb-3 text-sm font-bold tracking-[0.3em] text-cyan-500">
              FAQ
            </p>

            <h2 className="text-4xl font-black sm:text-5xl">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="space-y-4">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border ${border} ${
                    darkMode
                      ? "bg-zinc-900"
                      : "bg-white"
                  }`}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left font-bold"
                  >

                    <span>
                      {faq.question}
                    </span>

                    <span className="text-xl text-cyan-500">
                      {isOpen ? "−" : "+"}
                    </span>

                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6">

                      <p className={`leading-7 ${muted}`}>
                        {faq.answer}
                      </p>

                    </div>
                  )}

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ========================================================
          FINAL CTA
      ======================================================== */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-5 text-sm font-bold tracking-[0.3em] text-cyan-500">
            READY TO UPGRADE?
          </p>

          <h2 className="text-5xl font-black leading-tight sm:text-7xl">
            Your Style.
            <br />
            <span className="font-light italic">
              Your Rules.
            </span>
          </h2>

          <p
            className={`mx-auto mt-8 max-w-xl text-lg leading-8 ${muted}`}
          >
            Discover our latest collection and find pieces that
            match your personality.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              to="/shop"
              className="rounded-full bg-black px-10 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-zinc-800"
            >
              Explore Collection →
            </Link>

            <Link
              to="/contact"
              className={`rounded-full border px-10 py-4 font-bold transition hover:-translate-y-1 ${border}`}
            >
              Contact Us
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Home;