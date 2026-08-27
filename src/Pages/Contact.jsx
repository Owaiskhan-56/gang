import React, { useState } from "react";

function FounderCard({
  darkMode,
  image,
  name,
  role,
  description,
  skills,
}) {
  const cardClass = darkMode
    ? "border-zinc-800 bg-zinc-900"
    : "border-gray-200 bg-white";

  const mutedText = darkMode ? "text-gray-400" : "text-gray-600";

  return (
    <article
      className={`group overflow-hidden rounded-3xl border shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${cardClass}`}
    >
      <div className="p-6 sm:p-8">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-80 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-96"
          />
        </div>
      </div>

      <div className="px-6 pb-8 text-center sm:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-cyan-500">
          {role}
        </p>

        <h3 className="mt-2 text-3xl font-black">{name}</h3>

        <p className={`mx-auto mt-4 max-w-md leading-7 ${mutedText}`}>
          {description}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                darkMode
                  ? "border-zinc-700 text-gray-300"
                  : "border-gray-300 text-gray-700"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-7 flex justify-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-cyan-500 px-5 py-3 text-sm font-bold text-black transition hover:bg-cyan-400"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className={`rounded-xl border px-5 py-3 text-sm font-bold transition hover:border-cyan-500 hover:text-cyan-500 ${
              darkMode ? "border-zinc-700" : "border-gray-300"
            }`}
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </article>
  );
}

function Contact({ darkMode = false }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const cardClass = darkMode
    ? "border-zinc-800 bg-zinc-900"
    : "border-gray-200 bg-white";

  const mutedText = darkMode ? "text-gray-400" : "text-gray-600";

  const inputClass = darkMode
    ? "border-zinc-700 bg-zinc-950 text-white placeholder:text-gray-600"
    : "border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-400";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
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

  const founders = [
    {
      image: "/shahzaib.png",
      name: "Shahzaib",
      role: "Co-Founder & Developer",
      description:
        "Shahzaib contributes to the development of creative digital solutions and modern web experiences.",
      skills: ["JavaScript", "UI Design", "Development"],
    },
    {
      image: "/owais.png",
      name: "Owais Khan",
      role: "Founder & Developer",
      description:
        "Owais is the founder and developer focused on building modern, responsive, and user-friendly web experiences.",
      skills: ["React", "Tailwind CSS", "JavaScript", "Frontend"],
    },
  ];

  return (
    <main
      className={`min-h-screen px-4 py-24 transition-colors duration-300 sm:px-6 lg:px-8 ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* HERO */}
      <section className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
          Contact Us
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          Let's Talk
        </h1>

        <p
          className={`mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg ${mutedText}`}
        >
          Have a question, project idea, or want to work with us?
          Send us a message and our team will get back to you.
        </p>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-3">
        {/* EMAIL */}
        <div
          className={`rounded-2xl border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${cardClass}`}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl">
            ✉️
          </div>

          <h3 className="mt-5 text-xl font-bold">Email Us</h3>

          <p className={`mt-2 text-sm leading-6 ${mutedText}`}>
            Have a question? Send us an email.
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
          className={`rounded-2xl border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${cardClass}`}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl">
            📞
          </div>

          <h3 className="mt-5 text-xl font-bold">Call Us</h3>

          <p className={`mt-2 text-sm leading-6 ${mutedText}`}>
            Talk to us directly about your project.
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
          className={`rounded-2xl border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${cardClass}`}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl">
            📍
          </div>

          <h3 className="mt-5 text-xl font-bold">Location</h3>

          <p className={`mt-2 text-sm leading-6 ${mutedText}`}>
            We work with clients and teams online.
          </p>

          <span className="mt-4 inline-block font-semibold text-cyan-500">
            Pakistan
          </span>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-2">
        <div
          className={`rounded-3xl border p-6 shadow-sm sm:p-8 ${cardClass}`}
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-500">
            Send A Message
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Tell Us About Your Project
          </h2>

          <p className={`mt-3 text-sm leading-7 ${mutedText}`}>
            Fill out the form below and tell us what you need.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* NAME */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 ${inputClass}`}
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 ${inputClass}`}
              />
            </div>

            {/* SUBJECT */}
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-semibold"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What do you need help with?"
                className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 ${inputClass}`}
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder="Write your message here..."
                className={`w-full resize-none rounded-xl border px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 ${inputClass}`}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-cyan-500 px-6 py-4 font-bold text-black transition duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Send Message →
            </button>
          </form>
        </div>

        {/* WHY CHOOSE US */}
        <div
          className={`rounded-3xl border p-6 shadow-sm sm:p-8 ${cardClass}`}
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-500">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-3xl font-black">
            We Build With Purpose
          </h2>

          <p className={`mt-5 leading-8 ${mutedText}`}>
            We believe a good website should not only look
            beautiful but also be fast, responsive, easy to use,
            and simple to maintain.
          </p>

          <div className="mt-8 space-y-6">
            {[
              {
                title: "Modern Design",
                text: "Clean and professional user interfaces.",
              },
              {
                title: "Responsive Development",
                text: "Perfect layouts for phones, tablets, and desktops.",
              },
              {
                title: "Clean Code",
                text: "Organized React and Tailwind development.",
              },
              {
                title: "Great Experience",
                text: "Simple and enjoyable user experiences.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500 font-bold text-black">
                  ✓
                </div>

                <div>
                  <h3 className="font-bold">{item.title}</h3>

                  <p className={`mt-1 text-sm leading-6 ${mutedText}`}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="mx-auto mt-24 max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-500">
            Meet The Team
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            Our Founders
          </h2>

          <p className={`mx-auto mt-5 max-w-2xl leading-7 ${mutedText}`}>
            Meet the developers behind our website and the people
            working to turn ideas into modern digital experiences.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {founders.map((founder) => (
            <FounderCard
              key={founder.name}
              darkMode={darkMode}
              {...founder}
            />
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto mt-20 max-w-6xl">
        <div className="rounded-3xl bg-cyan-500 px-6 py-14 text-center sm:px-10">
          <p className="text-sm font-bold uppercase tracking-widest text-black/60">
            Have An Idea?
          </p>

          <h2 className="mt-3 text-3xl font-black text-black sm:text-4xl">
            Let's Build Something Amazing
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-black/70">
            Tell us about your project and let's turn your idea
            into a modern digital experience.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="mt-7 rounded-xl bg-black px-7 py-3 font-bold text-white transition hover:bg-zinc-800"
          >
            Contact Us ↑
          </button>
        </div>
      </section>
    </main>
  );
}

export default Contact;