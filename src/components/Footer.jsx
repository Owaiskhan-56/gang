import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = ({ darkMode }) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return;

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer
      className={`border-t ${
        darkMode
          ? "border-zinc-800 bg-zinc-950 text-white"
          : "border-gray-200 bg-white text-gray-900"
      }`}
    >

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 md:grid-cols-4">

        {/* BRAND */}
        <div>

          <Link
            to="/"
            className="text-2xl font-bold tracking-[0.25em]"
          >
            LUXE
            <span className="font-light">
              MEN
            </span>
          </Link>

          <p
            className={`mt-5 max-w-xs text-sm leading-6 ${
              darkMode
                ? "text-zinc-400"
                : "text-gray-500"
            }`}
          >
            Modern men's fashion designed for confidence,
            comfort and timeless style.
          </p>


          {/* SOCIAL */}
          <div className="mt-6 flex gap-3">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm transition hover:bg-black hover:text-white ${
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
              className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm transition hover:bg-black hover:text-white ${
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
              className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm transition hover:bg-black hover:text-white ${
                darkMode
                  ? "border-zinc-700"
                  : "border-gray-300"
              }`}
            >
              𝕏
            </a>

          </div>

        </div>


        {/* ================= SHOP ================= */}
        <div>

          <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest">
            Shop
          </h3>

          <ul
            className={`space-y-3 text-sm ${
              darkMode
                ? "text-zinc-400"
                : "text-gray-500"
            }`}
          >

            <li>
              <Link
                to="/"
                className="transition hover:text-black dark:hover:text-white"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/shop"
                className="transition hover:text-black dark:hover:text-white"
              >
                Shop
              </Link>
            </li>

            <li>
              <Link
                to="/new-arrivals"
                className="transition hover:text-black dark:hover:text-white"
              >
                New Arrivals
              </Link>
            </li>

            <li>
              <Link
                to="/sale"
                className="transition hover:text-black dark:hover:text-white"
              >
                Sale
              </Link>
            </li>

            <li>
              <Link
                to="/cart"
                className="transition hover:text-black dark:hover:text-white"
              >
                Shopping Cart
              </Link>
            </li>

          </ul>

        </div>


        {/* ================= HELP ================= */}
        <div>

          <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest">
            Help
          </h3>

          <ul
            className={`space-y-3 text-sm ${
              darkMode
                ? "text-zinc-400"
                : "text-gray-500"
            }`}
          >

            <li>
              <Link
                to="/contact"
                className="transition hover:text-black"
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="transition hover:text-black"
              >
                Shipping & Delivery
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="transition hover:text-black"
              >
                Returns & Exchange
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="transition hover:text-black"
              >
                FAQs
              </Link>
            </li>

          </ul>

        </div>


        {/* ================= NEWSLETTER ================= */}
        <div>

          <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest">
            Stay Updated
          </h3>

          <p
            className={`mb-5 text-sm leading-6 ${
              darkMode
                ? "text-zinc-400"
                : "text-gray-500"
            }`}
          >
            Subscribe for new arrivals, exclusive offers
            and fashion updates.
          </p>


          <form onSubmit={handleSubscribe}>

            <div
              className={`flex border-b pb-2 ${
                darkMode
                  ? "border-zinc-700"
                  : "border-gray-400"
              }`}
            >

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
                placeholder="Your email address"
                className={`w-full bg-transparent text-sm outline-none placeholder:text-gray-400 ${
                  darkMode
                    ? "text-white"
                    : "text-black"
                }`}
              />

              <button
                type="submit"
                className="text-lg font-medium transition hover:opacity-60"
              >
                →
              </button>

            </div>

          </form>


          {subscribed && (
            <p className="mt-4 text-sm font-medium text-green-600">
              ✓ Thanks! You're subscribed.
            </p>
          )}

        </div>

      </div>


      {/* ================= CONTACT STRIP ================= */}
      <div
        className={`border-t ${
          darkMode
            ? "border-zinc-800"
            : "border-gray-200"
        }`}
      >

        <div className="mx-auto grid max-w-7xl gap-5 px-6 py-8 text-sm md:grid-cols-3">

          <a
            href="mailto:support@luxemen.com"
            className={`transition hover:text-black ${
              darkMode
                ? "text-zinc-400"
                : "text-gray-500"
            }`}
          >
            ✉️ support@luxemen.com
          </a>

          <a
            href="tel:+923001234567"
            className={`transition hover:text-black ${
              darkMode
                ? "text-zinc-400"
                : "text-gray-500"
            }`}
          >
            📞 +92 300 1234567
          </a>

          <span
            className={
              darkMode
                ? "text-zinc-400"
                : "text-gray-500"
            }
          >
            🚚 Fast delivery across Pakistan
          </span>

        </div>

      </div>


      {/* ================= BOTTOM FOOTER ================= */}
      <div
        className={`border-t ${
          darkMode
            ? "border-zinc-800"
            : "border-gray-200"
        }`}
      >

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-6 text-xs md:flex-row">

          <p
            className={
              darkMode
                ? "text-zinc-500"
                : "text-gray-500"
            }
          >
            © 2026 LUXEMEN. All rights reserved.
          </p>


          <div
            className={`flex flex-wrap gap-6 ${
              darkMode
                ? "text-zinc-500"
                : "text-gray-500"
            }`}
          >

            <Link
              to="/contact"
              className="transition hover:text-black"
            >
              Privacy Policy
            </Link>

            <Link
              to="/contact"
              className="transition hover:text-black"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/contact"
              className="transition hover:text-black"
            >
              FAQs
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;