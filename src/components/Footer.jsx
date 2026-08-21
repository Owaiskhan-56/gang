import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = ({ darkMode }) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
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

  const footerText = darkMode
    ? "text-zinc-400"
    : "text-gray-500";

  const footerHover = darkMode
    ? "hover:text-white"
    : "hover:text-black";

  return (
    <footer
      className={`border-t ${
        darkMode
          ? "border-zinc-800 bg-zinc-950 text-white"
          : "border-gray-200 bg-white text-gray-900"
      }`}
    >
      {/* ================= NEWSLETTER BANNER ================= */}

      <section
        className={`px-6 py-16 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-gray-500">
                LUXEMEN NEWSLETTER
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Stay In Style.
              </h2>

              <p
                className={`mt-4 max-w-xl leading-7 ${footerText}`}
              >
                Get updates about new arrivals, exclusive
                discounts, seasonal collections and premium
                men's fashion.
              </p>
            </div>

            <div>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter your email address"
                  className={`w-full rounded-full border px-6 py-4 outline-none transition ${
                    darkMode
                      ? "border-zinc-700 bg-zinc-950 text-white placeholder:text-zinc-500"
                      : "border-gray-300 bg-white text-black"
                  }`}
                />

                <button
                  type="submit"
                  className="rounded-full bg-black px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  Subscribe
                </button>
              </form>

              {error && (
                <p className="mt-3 text-sm text-red-500">
                  {error}
                </p>
              )}

              {subscribed && (
                <p className="mt-3 text-sm font-semibold text-green-600">
                  ✓ Successfully subscribed to LUXEMEN.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN FOOTER ================= */}

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* BRAND */}

        <div>
          <Link
            to="/"
            onClick={scrollToTop}
            className="inline-block text-3xl font-bold tracking-[0.2em] transition hover:opacity-70"
          >
            LUXE
            <span className="font-light">MEN</span>
          </Link>

          <p
            className={`mt-5 max-w-sm text-sm leading-7 ${footerText}`}
          >
            Premium men's fashion created for modern
            confidence. Discover timeless designs,
            contemporary styles and quality clothing.
          </p>

          {/* SOCIAL */}

          <div className="mt-7 flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className={`flex h-11 w-11 items-center justify-center rounded-full border font-semibold transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white ${
                darkMode
                  ? "border-zinc-700"
                  : "border-gray-300"
              }`}
            >
              f
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className={`flex h-11 w-11 items-center justify-center rounded-full border text-lg transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white ${
                darkMode
                  ? "border-zinc-700"
                  : "border-gray-300"
              }`}
            >
              ◎
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white ${
                darkMode
                  ? "border-zinc-700"
                  : "border-gray-300"
              }`}
            >
              𝕏
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white ${
                darkMode
                  ? "border-zinc-700"
                  : "border-gray-300"
              }`}
            >
              ▶
            </a>
          </div>
        </div>

        {/* SHOP */}

        <div>
          <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em]">
            Shop
          </h3>

          <ul className={`space-y-4 text-sm ${footerText}`}>
            <li>
              <Link
                to="/"
                className={`transition ${footerHover}`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/shop"
                className={`transition ${footerHover}`}
              >
                Shop Collection
              </Link>
            </li>

            <li>
              <Link
                to="/new-arrivals"
                className={`transition ${footerHover}`}
              >
                New Arrivals
              </Link>
            </li>

            <li>
              <Link
                to="/sale"
                className={`transition ${footerHover}`}
              >
                Sale
              </Link>
            </li>

            <li>
              <Link
                to="/cart"
                className={`transition ${footerHover}`}
              >
                Shopping Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* CUSTOMER SERVICE */}

        <div>
          <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em]">
            Customer Care
          </h3>

          <ul className={`space-y-4 text-sm ${footerText}`}>
            <li>
              <Link
                to="/contact"
                className={`transition ${footerHover}`}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={`transition ${footerHover}`}
              >
                Shipping & Delivery
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={`transition ${footerHover}`}
              >
                Returns & Exchange
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={`transition ${footerHover}`}
              >
                Frequently Asked Questions
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={`transition ${footerHover}`}
              >
                Size Guide
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}

        <div>
          <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em]">
            Contact
          </h3>

          <div className={`space-y-5 text-sm ${footerText}`}>
            <div>
              <p className="mb-1 font-semibold text-current">
                Email
              </p>

              <a
                href="mailto:support@luxemen.com"
                className={`transition ${footerHover}`}
              >
                support@luxemen.com
              </a>
            </div>

            <div>
              <p className="mb-1 font-semibold text-current">
                Phone
              </p>

              <a
                href="tel:+923001234567"
                className={`transition ${footerHover}`}
              >
                +92 300 1234567
              </a>
            </div>

            <div>
              <p className="mb-1 font-semibold text-current">
                Location
              </p>

              <p>Pakistan</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FEATURES ================= */}

      <div
        className={`border-y ${
          darkMode
            ? "border-zinc-800"
            : "border-gray-200"
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-4">
            <div className="text-3xl">🚚</div>

            <div>
              <p className="font-semibold">
                Fast Delivery
              </p>

              <p className={`text-sm ${footerText}`}>
                Across Pakistan
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-3xl">↩️</div>

            <div>
              <p className="font-semibold">
                Easy Returns
              </p>

              <p className={`text-sm ${footerText}`}>
                Simple return process
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-3xl">🔒</div>

            <div>
              <p className="font-semibold">
                Secure Payment
              </p>

              <p className={`text-sm ${footerText}`}>
                100% secure checkout
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-3xl">⭐</div>

            <div>
              <p className="font-semibold">
                Premium Quality
              </p>

              <p className={`text-sm ${footerText}`}>
                Quality you can trust
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PAYMENT ================= */}

      <div
        className={`border-b ${
          darkMode
            ? "border-zinc-800"
            : "border-gray-200"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-7 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm font-semibold">
              Secure Payment Methods
            </p>

            <p className={`mt-1 text-xs ${footerText}`}>
              Shop safely with trusted payment options.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <span className="rounded-md border px-4 py-2 text-xs font-bold">
              VISA
            </span>

            <span className="rounded-md border px-4 py-2 text-xs font-bold">
              MASTER
            </span>

            <span className="rounded-md border px-4 py-2 text-xs font-bold">
              COD
            </span>

            <span className="rounded-md border px-4 py-2 text-xs font-bold">
              EASYPAISA
            </span>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}

      <div>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-7 text-center md:flex-row md:text-left">
          <p className={`text-xs ${footerText}`}>
            © 2026 LUXEMEN. All rights reserved.
          </p>

          <div
            className={`flex flex-wrap justify-center gap-6 text-xs ${footerText}`}
          >
            <Link
              to="/contact"
              className={`transition ${footerHover}`}
            >
              Privacy Policy
            </Link>

            <Link
              to="/contact"
              className={`transition ${footerHover}`}
            >
              Terms & Conditions
            </Link>

            <Link
              to="/contact"
              className={`transition ${footerHover}`}
            >
              FAQs
            </Link>
          </div>

          {/* BACK TO TOP */}

          <button
            onClick={scrollToTop}
            className={`flex h-10 w-10 items-center justify-center rounded-full border text-lg transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white ${
              darkMode
                ? "border-zinc-700"
                : "border-gray-300"
            }`}
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;