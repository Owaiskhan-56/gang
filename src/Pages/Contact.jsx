import React, { useState } from "react";

function Contact({ darkMode = false }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields.");
      return;
    }

    alert("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main
      className={`min-h-screen px-4 py-24 transition-colors ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* PAGE TITLE */}
      <section className="mx-auto mb-16 max-w-4xl text-center">
        <p className="mb-3 font-semibold uppercase tracking-widest text-cyan-500">
          Contact Us
        </p>

        <h1 className="text-4xl font-bold sm:text-5xl">
          Get In Touch
        </h1>

        <p
          className={`mx-auto mt-5 max-w-2xl ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Have a question or want to work with us? Send us a message.
        </p>
      </section>

      {/* CONTACT AREA */}
      <section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        {/* FORM */}
        <div
          className={`rounded-2xl border p-6 shadow-sm sm:p-8 ${
            darkMode
              ? "border-zinc-800 bg-zinc-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <h2 className="text-2xl font-bold">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`w-full rounded-xl border px-4 py-3 outline-none focus:border-cyan-500 ${
                  darkMode
                    ? "border-zinc-700 bg-zinc-950 text-white"
                    : "border-gray-300 bg-white"
                }`}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full rounded-xl border px-4 py-3 outline-none focus:border-cyan-500 ${
                  darkMode
                    ? "border-zinc-700 bg-zinc-950 text-white"
                    : "border-gray-300 bg-white"
                }`}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Message
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message..."
                className={`w-full resize-none rounded-xl border px-4 py-3 outline-none focus:border-cyan-500 ${
                  darkMode
                    ? "border-zinc-700 bg-zinc-950 text-white"
                    : "border-gray-300 bg-white"
                }`}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* FOUNDER */}
        <div
          className={`rounded-2xl border p-6 shadow-sm sm:p-8 ${
            darkMode
              ? "border-zinc-800 bg-zinc-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="flex flex-col items-center text-center">
            <img
              src="/owais.png"
              alt="Owais Khan"
              className="h-64 w-64 rounded-2xl object-cover"
            />

            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-cyan-500">
              Founder & Developer
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Owais Khan
            </h2>

            <p
              className={`mt-4 max-w-md leading-7 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              I create modern, responsive, and user-friendly
              websites using modern web technologies.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium transition hover:border-cyan-500 hover:text-cyan-500"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium transition hover:border-cyan-500 hover:text-cyan-500"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;