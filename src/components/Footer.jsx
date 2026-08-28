import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = ({ darkMode = false }) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email address.");
      setSubscribed(false);
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      setSubscribed(false);
      return;
    }

    setError("");
    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const mutedText = darkMode
    ? "text-zinc-400"
    : "text-gray-500";

  const hoverText = darkMode
    ? "hover:text-white"
    : "hover:text-black";

  const border = darkMode
    ? "border-zinc-800"
    : "border-gray-200";

  const socialButton = darkMode
    ? "border-zinc-700 hover:bg-white hover:text-black"
    : "border-gray-300 hover:bg-black hover:text-white";

  const shopLinks = [
    { name: "Home", path: "/" },
    { name: "Shop Collection", path: "/shop" },
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Sale", path: "/sale" },
    { name: "Shopping Cart", path: "/cart" },
  ];

  const customerLinks = [
    { name: "Contact Us", path: "/contact" },
    { name: "Shipping & Delivery", path: "/contact" },
    { name: "Returns & Exchange", path: "/contact" },
    { name: "Frequently Asked Questions", path: "/contact" },
    { name: "Size Guide", path: "/contact" },
  ];

  const features = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      text: "Across Pakistan",
    },
    {
      icon: "↩️",
      title: "Easy Returns",
      text: "Simple return process",
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      text: "100% secure checkout",
    },
    {
      icon: "⭐",
      title: "Premium Quality",
      text: "Quality you can trust",
    },
  ];

  return (
    <footer
      className={`border-t ${border} ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-gray-900"
      }`}
    >
      {/* =====================================================
          VIP NEWSLETTER
      ====================================================== */}

      <section
        className={`px-6 py-20 ${
          darkMode ? "bg-zinc-950" : "bg-gray-50"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div
            className={`overflow-hidden rounded-[32px] border p-8 shadow-2xl sm:p-12 lg:p-16 ${border}`}
          >
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-xl ${
                      darkMode
                        ? "bg-white text-black"
                        : "bg-black text-white"
                    }`}
                  >
                    ♛
                  </div>

                  <p className="text-xs font-bold uppercase tracking-[0.3em]">
                    LUXEMEN VIP
                  </p>
                </div>

                <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                  Stay In
                  <span className="block font-light">
                    Style.
                  </span>
                </h2>

                <p
                  className={`mt-6 max-w-xl text-sm leading-7 sm:text-base ${mutedText}`}
                >
                  Join the LUXEMEN community and receive
                  exclusive access to new collections, private
                  offers, premium fashion inspiration and
                  members-only promotions.
                </p>

                <div
                  className={`mt-7 flex flex-wrap gap-5 text-xs font-semibold ${mutedText}`}
                >
                  <span>✓ Exclusive Offers</span>
                  <span>✓ New Arrivals</span>
                  <span>✓ VIP Access</span>
                </div>
              </div>

              {/* Newsletter Form */}

              <div>
                <form
                  onSubmit={handleSubscribe}
                  className="space-y-4"
                >
                  <div
                    className={`flex flex-col gap-3 rounded-2xl border p-3 sm:flex-row ${border} ${
                      darkMode
                        ? "bg-black"
                        : "bg-white"
                    }`}
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      placeholder="Enter your email address"
                      className={`min-w-0 flex-1 rounded-xl bg-transparent px-5 py-4 text-sm outline-none ${
                        darkMode
                          ? "text-white placeholder:text-zinc-600"
                          : "text-black placeholder:text-gray-400"
                      }`}
                    />

                    <button
                      type="submit"
                      className={`rounded-xl px-7 py-4 text-sm font-bold transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                        darkMode
                          ? "bg-white text-black hover:bg-zinc-200"
                          : "bg-black text-white hover:bg-zinc-800"
                      }`}
                    >
                      Join VIP
                    </button>
                  </div>

                  {error && (
                    <p className="px-2 text-sm font-semibold text-red-500">
                      ⚠ {error}
                    </p>
                  )}

                  {subscribed && (
                    <p className="px-2 text-sm font-semibold text-green-500">
                      ✓ Successfully subscribed to LUXEMEN VIP.
                    </p>
                  )}
                </form>

                <p
                  className={`mt-4 text-xs leading-6 ${mutedText}`}
                >
                  By subscribing, you agree to receive
                  occasional emails from LUXEMEN. You can
                  unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-14 sm:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}

          <div>
            <Link
              to="/"
              onClick={scrollToTop}
              className="group inline-block"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold transition duration-300 group-hover:rotate-6 ${
                    darkMode
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  ♛
                </div>

                <span className="text-3xl font-black tracking-[0.18em]">
                  LUXE
                  <span className="font-light">
                    MEN
                  </span>
                </span>
              </div>
            </Link>

            <p
              className={`mt-7 max-w-sm text-sm leading-7 ${mutedText}`}
            >
              Premium men's fashion created for modern
              confidence. Discover timeless designs,
              contemporary styles and exceptional quality
              clothing made for those who value their look.
            </p>

            {/* SOCIAL */}

            <div className="mt-8 flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm font-bold transition duration-300 hover:-translate-y-1 ${socialButton}`}
              >
                f
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className={`flex h-11 w-11 items-center justify-center rounded-full border text-lg transition duration-300 hover:-translate-y-1 ${socialButton}`}
              >
                ◎
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm font-bold transition duration-300 hover:-translate-y-1 ${socialButton}`}
              >
                𝕏
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm transition duration-300 hover:-translate-y-1 ${socialButton}`}
              >
                ▶
              </a>
            </div>
          </div>

          {/* SHOP */}

          <div>
            <h3 className="mb-7 text-sm font-black uppercase tracking-[0.25em]">
              Shop
            </h3>

            <ul className="space-y-4">
              {shopLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={scrollToTop}
                    className={`text-sm transition duration-300 ${mutedText} ${hoverText}`}
                  >
                    → {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CUSTOMER CARE */}

          <div>
            <h3 className="mb-7 text-sm font-black uppercase tracking-[0.25em]">
              Customer Care
            </h3>

            <ul className="space-y-4">
              {customerLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={scrollToTop}
                    className={`text-sm transition duration-300 ${mutedText} ${hoverText}`}
                  >
                    → {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}

          <div>
            <h3 className="mb-7 text-sm font-black uppercase tracking-[0.25em]">
              Contact
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    darkMode
                      ? "bg-zinc-900"
                      : "bg-gray-100"
                  }`}
                >
                  ✉
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider">
                    Email
                  </p>

                  <a
                    href="mailto:support@luxemen.com"
                    className={`mt-1 block text-sm transition ${mutedText} ${hoverText}`}
                  >
                    support@luxemen.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    darkMode
                      ? "bg-zinc-900"
                      : "bg-gray-100"
                  }`}
                >
                  ☎
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider">
                    Phone
                  </p>

                  <a
                    href="tel:+923001234567"
                    className={`mt-1 block text-sm transition ${mutedText} ${hoverText}`}
                  >
                    +92 300 1234567
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    darkMode
                      ? "bg-zinc-900"
                      : "bg-gray-100"
                  }`}
                >
                  📍
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider">
                    Location
                  </p>

                  <p
                    className={`mt-1 text-sm ${mutedText}`}
                  >
                    Pakistan
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ====================================================== */}

      <section className={`border-y ${border}`}>
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex items-center gap-4"
            >
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl transition duration-300 group-hover:-translate-y-1 ${
                  darkMode
                    ? "bg-zinc-900"
                    : "bg-gray-100"
                }`}
              >
                {feature.icon}
              </div>

              <div>
                <p className="font-bold">
                  {feature.title}
                </p>

                <p
                  className={`mt-1 text-sm ${mutedText}`}
                >
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          PAYMENT
      ====================================================== */}

      <section className={`border-b ${border}`}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
          <div>
            <p className="text-sm font-bold">
              Secure Payment Methods
            </p>

            <p className={`mt-1 text-xs ${mutedText}`}>
              Shop safely with trusted payment options.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <span
              className={`rounded-lg border px-5 py-3 text-xs font-black tracking-wider ${border}`}
            >
              VISA
            </span>

            <span
              className={`rounded-lg border px-5 py-3 text-xs font-black tracking-wider ${border}`}
            >
              MASTER
            </span>

            <span
              className={`rounded-lg border px-5 py-3 text-xs font-black tracking-wider ${border}`}
            >
              COD
            </span>

            <span
              className={`rounded-lg border px-5 py-3 text-xs font-black tracking-wider ${border}`}
            >
              EASYPAISA
            </span>

            <span
              className={`rounded-lg border px-5 py-3 text-xs font-black tracking-wider ${border}`}
            >
              JAZZCASH
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          VIP MESSAGE
      ====================================================== */}

      <section className={`border-b ${border}`}>
        <div className="mx-auto max-w-7xl px-6 py-10 text-center">
          <div className="text-2xl">
            ✦
          </div>

          <p className="mt-3 text-sm font-bold tracking-widest">
            LUXEMEN — MODERN STYLE. TIMELESS CONFIDENCE.
          </p>

          <p
            className={`mx-auto mt-3 max-w-2xl text-xs leading-6 ${mutedText}`}
          >
            Designed for men who believe that great style
            begins with confidence, quality and attention to
            detail.
          </p>
        </div>
      </section>

      {/* =====================================================
          BOTTOM
      ====================================================== */}

      <section>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-center md:flex-row md:text-left">

          <div>
            <p className={`text-xs ${mutedText}`}>
              © 2026 LUXEMEN. All rights reserved.
            </p>

            <p
              className={`mt-2 text-[11px] ${mutedText}`}
            >
              Premium Men's Fashion Store
            </p>
          </div>

          <div
            className={`flex flex-wrap justify-center gap-6 text-xs ${mutedText}`}
          >
            <Link
              to="/contact"
              onClick={scrollToTop}
              className={`transition ${hoverText}`}
            >
              Privacy Policy
            </Link>

            <Link
              to="/contact"
              onClick={scrollToTop}
              className={`transition ${hoverText}`}
            >
              Terms & Conditions
            </Link>

            <Link
              to="/contact"
              onClick={scrollToTop}
              className={`transition ${hoverText}`}
            >
              FAQs
            </Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`flex h-12 w-12 items-center justify-center rounded-full border text-xl transition duration-300 hover:-translate-y-1 ${
              darkMode
                ? "border-zinc-700 hover:bg-white hover:text-black"
                : "border-gray-300 hover:bg-black hover:text-white"
            }`}
          >
            ↑
          </button>

        </div>
      </section>
    </footer>
  );
};

export default Footer;
