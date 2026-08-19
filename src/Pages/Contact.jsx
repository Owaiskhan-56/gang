import React, { useState } from "react";

const Contact = ({ darkMode }) => {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    setMessage("");

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <main
      className={`min-h-screen ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-white text-zinc-900"
      }`}
    >

      {/* ================= HERO ================= */}
      <section
        className={`px-6 py-24 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm tracking-[0.4em] text-gray-500">
            CONTACT LUXEMEN
          </p>

          <h1 className="mt-5 text-6xl font-bold md:text-8xl">
            Get In
            <br />
            <span className="font-light italic">
              Touch.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg text-gray-500">
            Have a question about an order, product, delivery,
            or anything else? Our team is ready to help.
          </p>

        </div>
      </section>


      {/* ================= CONTACT INFO ================= */}
      <section className="px-6 py-20">

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">

          {/* EMAIL */}
          <div
            className={`rounded-2xl border p-8 text-center ${
              darkMode
                ? "border-zinc-800 bg-zinc-900"
                : "border-gray-200"
            }`}
          >
            <div className="text-4xl">
              ✉️
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Email Us
            </h3>

            <p className="mt-3 text-gray-500">
              support@luxemen.com
            </p>

            <a
              href="mailto:support@luxemen.com"
              className="mt-5 inline-block font-semibold underline"
            >
              Send Email →
            </a>
          </div>


          {/* PHONE */}
          <div
            className={`rounded-2xl border p-8 text-center ${
              darkMode
                ? "border-zinc-800 bg-zinc-900"
                : "border-gray-200"
            }`}
          >
            <div className="text-4xl">
              📞
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Call Us
            </h3>

            <p className="mt-3 text-gray-500">
              +92 300 1234567
            </p>

            <a
              href="tel:+923001234567"
              className="mt-5 inline-block font-semibold underline"
            >
              Call Now →
            </a>
          </div>


          {/* HOURS */}
          <div
            className={`rounded-2xl border p-8 text-center ${
              darkMode
                ? "border-zinc-800 bg-zinc-900"
                : "border-gray-200"
            }`}
          >
            <div className="text-4xl">
              🕐
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Opening Hours
            </h3>

            <p className="mt-3 text-gray-500">
              Mon - Sat
              <br />
              10:00 AM - 8:00 PM
            </p>
          </div>

        </div>

      </section>


      {/* ================= FORM SECTION ================= */}
      <section className="px-6 pb-24">

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">

          {/* LEFT */}
          <div>

            <p className="text-sm tracking-[0.3em] text-gray-500">
              WE'D LOVE TO HEAR FROM YOU
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              Let's Talk.
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-gray-500">
              Whether you need help choosing the perfect
              outfit or have a question about your order,
              simply fill out the form and our team will
              get back to you.
            </p>


            {/* SUPPORT BOX */}
            <div
              className={`mt-10 rounded-2xl p-7 ${
                darkMode
                  ? "bg-zinc-900"
                  : "bg-zinc-100"
              }`}
            >

              <h3 className="text-xl font-bold">
                Customer Support
              </h3>

              <p className="mt-3 text-gray-500">
                Our support team usually responds within
                24 hours.
              </p>

              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block rounded-full bg-black px-6 py-3 font-semibold text-white"
              >
                💬 WhatsApp Us
              </a>

            </div>

          </div>


          {/* FORM */}
          <div
            className={`rounded-3xl border p-8 md:p-10 ${
              darkMode
                ? "border-zinc-800 bg-zinc-900"
                : "border-gray-200 bg-white"
            }`}
          >

            {submitted && (
              <div className="mb-6 rounded-xl bg-green-100 px-5 py-4 text-green-800">
                ✓ Your message has been sent successfully!
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* NAME */}
              <div>

                <label className="mb-2 block text-sm font-semibold">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className={`w-full rounded-xl border px-5 py-4 outline-none transition focus:ring-2 focus:ring-black ${
                    darkMode
                      ? "border-zinc-700 bg-zinc-950"
                      : "border-gray-300 bg-transparent"
                  }`}
                />

              </div>


              {/* EMAIL */}
              <div>

                <label className="mb-2 block text-sm font-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className={`w-full rounded-xl border px-5 py-4 outline-none transition focus:ring-2 focus:ring-black ${
                    darkMode
                      ? "border-zinc-700 bg-zinc-950"
                      : "border-gray-300 bg-transparent"
                  }`}
                />

              </div>


              {/* SUBJECT */}
              <div>

                <label className="mb-2 block text-sm font-semibold">
                  Subject
                </label>

                <select
                  required
                  className={`w-full rounded-xl border px-5 py-4 outline-none ${
                    darkMode
                      ? "border-zinc-700 bg-zinc-950"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  <option value="">
                    Select a subject
                  </option>

                  <option value="order">
                    Order Question
                  </option>

                  <option value="product">
                    Product Question
                  </option>

                  <option value="delivery">
                    Delivery
                  </option>

                  <option value="return">
                    Return / Exchange
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>

              </div>


              {/* MESSAGE */}
              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label className="text-sm font-semibold">
                    Your Message
                  </label>

                  <span className="text-xs text-gray-500">
                    {message.length}/500
                  </span>

                </div>

                <textarea
                  value={message}
                  onChange={(e) => {
                    if (e.target.value.length <= 500) {
                      setMessage(e.target.value);
                    }
                  }}
                  placeholder="Write your message..."
                  required
                  rows="6"
                  className={`w-full resize-none rounded-xl border px-5 py-4 outline-none transition focus:ring-2 focus:ring-black ${
                    darkMode
                      ? "border-zinc-700 bg-zinc-950"
                      : "border-gray-300 bg-transparent"
                  }`}
                />

              </div>


              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-[1.01]"
              >
                Send Message →
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}
      <section
        className={`px-6 py-24 ${
          darkMode
            ? "bg-zinc-900"
            : "bg-zinc-100"
        }`}
      >

        <div className="mx-auto max-w-4xl">

          <div className="text-center">

            <p className="text-sm tracking-[0.3em] text-gray-500">
              NEED HELP?
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Frequently Asked Questions
            </h2>

          </div>


          <div className="mt-12 space-y-4">

            <details
              className={`rounded-2xl p-6 ${
                darkMode
                  ? "bg-zinc-950"
                  : "bg-white"
              }`}
            >
              <summary className="cursor-pointer font-semibold">
                How long does delivery take?
              </summary>

              <p className="mt-4 text-gray-500">
                Orders are usually delivered within
                3–5 business days.
              </p>
            </details>


            <details
              className={`rounded-2xl p-6 ${
                darkMode
                  ? "bg-zinc-950"
                  : "bg-white"
              }`}
            >
              <summary className="cursor-pointer font-semibold">
                Can I return my order?
              </summary>

              <p className="mt-4 text-gray-500">
                Yes. Eligible products can be returned
                according to our return policy.
              </p>
            </details>


            <details
              className={`rounded-2xl p-6 ${
                darkMode
                  ? "bg-zinc-950"
                  : "bg-white"
              }`}
            >
              <summary className="cursor-pointer font-semibold">
                How can I track my order?
              </summary>

              <p className="mt-4 text-gray-500">
                Contact our support team with your order
                number and we will help you track it.
              </p>
            </details>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="px-6 py-24 text-center">

        <p className="text-sm tracking-[0.3em] text-gray-500">
          LUXEMEN SUPPORT
        </p>

        <h2 className="mt-5 text-4xl font-bold md:text-6xl">
          We're Here
          <br />
          <span className="font-light italic">
            To Help.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-gray-500">
          Have a question? Don't hesitate to reach out.
          Our team is always happy to help.
        </p>

      </section>

    </main>
  );
};

export default Contact;