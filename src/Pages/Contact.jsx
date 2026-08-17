import React from "react";

const Contact = ({ darkMode }) => {
  return (
    <main
      className={`min-h-screen px-6 py-20 ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-white text-zinc-900"
      }`}
    >
      <div className="mx-auto max-w-3xl">

        <div className="text-center">

          <p className="text-sm tracking-[0.3em] text-gray-500">
            CONTACT LUXEMEN
          </p>

          <h1 className="mt-5 text-5xl font-bold">
            Get In Touch
          </h1>

          <p className="mt-5 text-gray-500">
            Have a question? Send us a message and
            our team will get back to you.
          </p>

        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent successfully!");
          }}
          className="mt-14 space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full rounded-xl border border-gray-300 bg-transparent px-5 py-4 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full rounded-xl border border-gray-300 bg-transparent px-5 py-4 outline-none"
          />

          <textarea
            placeholder="Your Message"
            required
            rows="6"
            className="w-full resize-none rounded-xl border border-gray-300 bg-transparent px-5 py-4 outline-none"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-[1.01]"
          >
            Send Message
          </button>
        </form>

      </div>
    </main>
  );
};

export default Contact;