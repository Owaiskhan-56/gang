import React, { useState } from "react";

function Contact({ darkMode = false }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
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

    if (
      !form.name ||
      !form.email ||
      !form.subject ||
      !form.message
    ) {
      alert("Please fill all fields.");
      return;
    }

    alert("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main
      className={`min-h-screen px-4 py-24 transition-colors duration-300 ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >

      {/* =====================================================
          CONTACT HERO
      ====================================================== */}

      <section className="mx-auto mb-16 max-w-6xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-500">
          Contact Us
        </p>

        <h1 className="text-4xl font-black sm:text-5xl lg:text-6xl">
          Get In Touch
        </h1>

        <p
          className={`mx-auto mt-5 max-w-2xl text-base leading-7 sm:text-lg ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Have a question, project idea, or want to work with
          us? Send us a message and we will get back to you.
        </p>
      </section>


      {/* =====================================================
          CONTACT INFORMATION
      ====================================================== */}

      <section className="mx-auto mb-16 grid max-w-6xl gap-6 md:grid-cols-3">

        {/* EMAIL */}

        <div
          className={`rounded-2xl border p-6 shadow-sm ${
            darkMode
              ? "border-zinc-800 bg-zinc-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-xl">
            ✉
          </div>

          <h3 className="mt-5 text-xl font-bold">
            Email
          </h3>

          <p
            className={`mt-2 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Send us an email anytime.
          </p>

          <a
            href="mailto:contact@example.com"
            className="mt-4 inline-block font-semibold text-cyan-500 hover:text-cyan-400"
          >
            contact@example.com
          </a>
        </div>


        {/* PHONE */}

        <div
          className={`rounded-2xl border p-6 shadow-sm ${
            darkMode
              ? "border-zinc-800 bg-zinc-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-xl">
            ☎
          </div>

          <h3 className="mt-5 text-xl font-bold">
            Phone
          </h3>

          <p
            className={`mt-2 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Contact us directly for quick help.
          </p>

          <a
            href="tel:+923000000000"
            className="mt-4 inline-block font-semibold text-cyan-500 hover:text-cyan-400"
          >
            +92 300 0000000
          </a>
        </div>


        {/* LOCATION */}

        <div
          className={`rounded-2xl border p-6 shadow-sm ${
            darkMode
              ? "border-zinc-800 bg-zinc-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-xl">
            📍
          </div>

          <h3 className="mt-5 text-xl font-bold">
            Location
          </h3>

          <p
            className={`mt-2 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            We are available online and ready to work with
            you.
          </p>

          <span className="mt-4 inline-block font-semibold text-cyan-500">
            Pakistan
          </span>
        </div>
      </section>


      {/* =====================================================
          CONTACT FORM
      ====================================================== */}

      <section className="mx-auto mb-24 grid max-w-6xl gap-8 lg:grid-cols-2">

        {/* FORM */}

        <div
          className={`rounded-3xl border p-6 shadow-sm sm:p-8 ${
            darkMode
              ? "border-zinc-800 bg-zinc-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-500">
            Send Message
          </p>

          <h2 className="mt-2 text-3xl font-black">
            Tell Us About Your Project
          </h2>

          <p
            className={`mt-3 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Fill out the form and we will get back to you.
          </p>


          <form
            onSubmit={handleSubmit}
            className="mt-7 space-y-5"
          >

            {/* NAME */}

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:border-cyan-500 ${
                  darkMode
                    ? "border-zinc-700 bg-zinc-950 text-white placeholder:text-gray-600"
                    : "border-gray-300 bg-white"
                }`}
              />
            </div>


            {/* EMAIL */}

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:border-cyan-500 ${
                  darkMode
                    ? "border-zinc-700 bg-zinc-950 text-white placeholder:text-gray-600"
                    : "border-gray-300 bg-white"
                }`}
              />
            </div>


            {/* SUBJECT */}

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:border-cyan-500 ${
                  darkMode
                    ? "border-zinc-700 bg-zinc-950 text-white placeholder:text-gray-600"
                    : "border-gray-300 bg-white"
                }`}
              />
            </div>


            {/* MESSAGE */}

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Message
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                placeholder="Write your message..."
                className={`w-full resize-none rounded-xl border px-4 py-3 outline-none transition focus:border-cyan-500 ${
                  darkMode
                    ? "border-zinc-700 bg-zinc-950 text-white placeholder:text-gray-600"
                    : "border-gray-300 bg-white"
                }`}
              />
            </div>


            {/* BUTTON */}

            <button
              type="submit"
              className="w-full rounded-xl bg-cyan-500 px-5 py-3.5 font-bold text-black transition hover:bg-cyan-400"
            >
              Send Message →
            </button>

          </form>
        </div>


        {/* QUICK CONTACT */}

        <div
          className={`rounded-3xl border p-6 shadow-sm sm:p-8 ${
            darkMode
              ? "border-zinc-800 bg-zinc-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-500">
            Why Contact Us?
          </p>

          <h2 className="mt-2 text-3xl font-black">
            Let's Build Something Great
          </h2>

          <p
            className={`mt-5 leading-7 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Whether you need a new website, a redesign, or
            help with your existing project, we are ready to
            help.
          </p>


          <div className="mt-8 space-y-5">

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500 font-bold text-black">
                ✓
              </div>

              <div>
                <h3 className="font-bold">
                  Modern Design
                </h3>

                <p
                  className={`mt-1 text-sm ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  Clean and professional website designs.
                </p>
              </div>
            </div>


            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500 font-bold text-black">
                ✓
              </div>

              <div>
                <h3 className="font-bold">
                  Responsive Website
                </h3>

                <p
                  className={`mt-1 text-sm ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  Websites that work on mobile, tablet and
                  desktop.
                </p>
              </div>
            </div>


            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500 font-bold text-black">
                ✓
              </div>

              <div>
                <h3 className="font-bold">
                  Clean Code
                </h3>

                <p
                  className={`mt-1 text-sm ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  Organized and maintainable development.
                </p>
              </div>
            </div>


            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500 font-bold text-black">
                ✓
              </div>

              <div>
                <h3 className="font-bold">
                  Great Experience
                </h3>

                <p
                  className={`mt-1 text-sm ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  Smooth and simple user experience.
                </p>
              </div>
            </div>

          </div>
        </div>

      </section>


      {/* =====================================================
          FOUNDERS
      ====================================================== */}

      <section className="mx-auto max-w-6xl">

        {/* HEADING */}

        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-500">
            Meet The Team
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Our Founders
          </h2>

          <p
            className={`mx-auto mt-4 max-w-2xl leading-7 ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            Meet the people behind the website and the vision
            behind our work.
          </p>
        </div>


        {/* FOUNDERS GRID */}

        <div className="grid gap-8 md:grid-cols-2">


          {/* =================================================
              SHAHZAIB
          ================================================== */}

          <div
            className={`overflow-hidden rounded-3xl border shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
              darkMode
                ? "border-zinc-800 bg-zinc-900"
                : "border-gray-200 bg-white"
            }`}
          >

            {/* IMAGE */}

            <div className="flex justify-center p-8">
              <img
                src="/shahzaib.png"
                alt="Shahzaib"
                className="h-80 w-full max-w-sm rounded-2xl object-cover shadow-lg"
              />
            </div>


            {/* CONTENT */}

            <div className="px-8 pb-10 text-center">

              <p className="text-sm font-bold uppercase tracking-widest text-cyan-500">
                Co-Founder & Developer
              </p>

              <h3 className="mt-2 text-3xl font-black">
                Shahzaib
              </h3>

              <p
                className={`mx-auto mt-4 max-w-md leading-7 ${
                  darkMode
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                Shahzaib is part of the team helping create
                modern digital experiences and innovative
                website solutions.
              </p>


              {/* SKILLS */}

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {[
                  "Web Development",
                  "UI Design",
                  "JavaScript",
                ].map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-4 py-2 text-sm font-medium ${
                      darkMode
                        ? "border-zinc-700 text-gray-300"
                        : "border-gray-200 text-gray-700"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>


              {/* SOCIAL */}

              <div className="mt-7 flex justify-center gap-3">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-400"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-xl border px-5 py-3 font-semibold transition hover:border-cyan-500 hover:text-cyan-500 ${
                    darkMode
                      ? "border-zinc-700"
                      : "border-gray-300"
                  }`}
                >
                  LinkedIn ↗
                </a>

              </div>
            </div>
          </div>


          {/* =================================================
              OWAIS
          ================================================== */}

          <div
            className={`overflow-hidden rounded-3xl border shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
              darkMode
                ? "border-zinc-800 bg-zinc-900"
                : "border-gray-200 bg-white"
            }`}
          >

            {/* IMAGE */}

            <div className="flex justify-center p-8">
              <img
                src="/owais.png"
                alt="Owais Khan"
                className="h-80 w-full max-w-sm rounded-2xl object-cover shadow-lg"
              />
            </div>


            {/* CONTENT */}

            <div className="px-8 pb-10 text-center">

              <p className="text-sm font-bold uppercase tracking-widest text-cyan-500">
                Founder & Developer
              </p>

              <h3 className="mt-2 text-3xl font-black">
                Owais Khan
              </h3>

              <p
                className={`mx-auto mt-4 max-w-md leading-7 ${
                  darkMode
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                Owais is the founder and developer behind
                the website, focused on creating modern,
                responsive, and user-friendly experiences.
              </p>


              {/* SKILLS */}

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {[
                  "React",
                  "Tailwind CSS",
                  "JavaScript",
                  "Frontend",
                ].map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-4 py-2 text-sm font-medium ${
                      darkMode
                        ? "border-zinc-700 text-gray-300"
                        : "border-gray-200 text-gray-700"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>


              {/* SOCIAL */}

              <div className="mt-7 flex justify-center gap-3">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-400"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-xl border px-5 py-3 font-semibold transition hover:border-cyan-500 hover:text-cyan-500 ${
                    darkMode
                      ? "border-zinc-700"
                      : "border-gray-300"
                  }`}
                >
                  LinkedIn ↗
                </a>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="mx-auto mt-20 max-w-6xl">
        <div className="rounded-3xl bg-cyan-500 px-6 py-14 text-center sm:px-10">

          <h2 className="text-3xl font-black text-black sm:text-4xl">
            Ready to Build Something Amazing?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-black/70">
            Have an idea for your next website? Get in touch
            with us and let's make it happen.
          </p>

          <a
            href="#contact-form"
            className="mt-7 inline-block rounded-xl bg-black px-7 py-3 font-bold text-white transition hover:bg-zinc-800"
          >
            Start a Conversation
          </a>

        </div>
      </section>

    </main>
  );
}

export default Contact;