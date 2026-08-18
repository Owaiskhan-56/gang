import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white text-gray-900">
      
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold tracking-[0.25em]">
            LUXE<span className="font-light">MEN</span>
          </h2>

          <p className="mt-5 max-w-xs text-sm leading-6 text-gray-500">
            Modern men's fashion designed for confidence, comfort and
            timeless style.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-sm transition hover:bg-black hover:text-white"
            >
              f
            </a>

            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-sm transition hover:bg-black hover:text-white"
            >
              ◎
            </a>

            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-sm transition hover:bg-black hover:text-white"
            >
              𝕏
            </a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest">
            Shop
          </h3>

          <ul className="space-y-3 text-sm text-gray-500">
            <li>
              <a href="/" className="transition hover:text-black">
                Home
              </a>
            </li>

            <li>
              <a href="/shop" className="transition hover:text-black">
                Shop
              </a>
            </li>

            <li>
              <a href="/new-arrivals" className="transition hover:text-black">
                New Arrivals
              </a>
            </li>

            <li>
              <a href="/sale" className="transition hover:text-black">
                Sale
              </a>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest">
            Help
          </h3>

          <ul className="space-y-3 text-sm text-gray-500">
            <li>
              <a href="/contact" className="transition hover:text-black">
                Contact Us
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-black">
                Shipping & Delivery
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-black">
                Returns & Exchange
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-black">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest">
            Stay Updated
          </h3>

          <p className="mb-5 text-sm leading-6 text-gray-500">
            Subscribe for new arrivals, exclusive offers and fashion updates.
          </p>

          <div className="flex border-b border-gray-400 pb-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />

            <button className="text-sm font-medium transition hover:opacity-60">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-5 text-xs text-gray-500 md:flex-row">
          <p>
            © 2026 LUXEMEN. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-black">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-black">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;