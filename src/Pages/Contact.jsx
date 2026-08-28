import React, { useState } from "react";

function FounderCard({
  darkMode,
  image,
  name,
  role,
  description,
  skills,
}) {
  return (
    <article
      className={`group overflow-hidden rounded-3xl border shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
        darkMode
          ? "border-zinc-800 bg-zinc-900"
          : "border-gray-200 bg-white"
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        <div className="absolute right-5 top-5 rounded-full bg-black/60 px-4 py-2 text-xs font-bold text-white backdrop-blur">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-400" />
          Available
        </div>

        <div className="absolute bottom-6 left-6">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            {role}
          </p>

          <h3 className="mt-2 text-3xl font-black text-white">
            {name}
          </h3>
        </div>
      </div>

      <div className="p-7 text-center">
        <p
          className={`leading-7 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {description}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className={`rounded-full border px-4 py-2 text-xs font-bold ${
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
              darkMode
                ? "border-zinc-700 text-white"
                : "border-gray-300 text-gray-900"
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

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSuccess(false);
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

    setSuccess(true);

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
      name: "Shahzaib Khan",
      role: "Co-Founder & Developer",
      description:
        "Shahzaib contributes to creative digital solutions, modern interfaces, and professional web development.",
      skills: [
        "JavaScript",
        "React",
        "UI Design",
        "Development",
      ],
    },
    {
      image: "/owais.png",
      name: "Owais Khan",
      role: "Founder & Developer",
      description:
        "Owais focuses on React development, responsive design, clean code, and modern digital experiences.",
      skills: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Frontend",
      ],
    },
  ];

  const features = [
    {
      icon: "⚡",
      title: "Fast Performance",
      text: "Fast and optimized websites for a smooth experience.",
    },
    {
      icon: "🎨",
      title: "Premium Design",
      text: "Modern and professional interfaces for your brand.",
    },
    {
      icon: "📱",
      title: "Responsive",
      text: "Perfect layouts for mobile, tablet, and desktop.",
    },
    {
      icon: "💻",
      title: "Clean Code",
      text: "Organized React and Tailwind development.",
    },
  ];

  return (
    <main
      className={`min-h-screen px-4 py-20 transition-colors duration-500 sm:px-6 lg:px-8 ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* HERO */}

      <section className="mx-auto max-w-7xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs font-black uppercase tracking-widest text-cyan-500">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
          Contact Us
        </div>

        <h1 className="mt-6 text-5xl font-black tracking-tight sm:text-6xl lg:text-8xl">
          Let's Talk
          <span className="block text-cyan-500">
            About Your Project.
          </span>
        </h1>

        <p
          className={`mx-auto mt-6 max-w-3xl text-lg leading-8 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Have a question, project idea, or business concept?
          Send us a message and let's build something amazing.
        </p>
      </section>

      {/* STATS */}

      <section className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
        {[
          ["24/7", "Support"],
          ["100%", "Responsive"],
          ["VIP", "Quality"],
          ["2+", "Developers"],
        ].map(([number, title]) => (
          <div
            key={title}
            className={`rounded-2xl border p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-500 ${
              darkMode
                ? "border-zinc-800 bg-zinc-900"
                : "border-gray-200 bg-white"
            }`}
          >
            <h3 className="text-3xl font-black text-cyan-500">
              {number}
            </h3>

            <p
              className={`mt-1 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {title}
            </p>
          </div>
        ))}
      </section>

      {/* CONTACT CARDS */}

      <section className="mx-auto mt-16 grid max-w-7xl gap-6 md:grid-cols-3">
        <div
          className={`group rounded-3xl border p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl ${
            darkMode
              ? "border-zinc-800 bg-zinc-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl">
            ✉️
          </div>

          <h3 className="mt-6 text-2xl font-black">
            Email Us
          </h3>

          <p
            className={`mt-3 leading-7 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Send us your questions or project details.
          </p>

          <a
            href="mailto:contact@example.com"
            className="mt-5 inline-block font-bold text-cyan-500"
          >
            contact@example.com
          </a>
        </div>

        <div
          className={`group rounded-3xl border p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl ${
            darkMode
              ? "border-zinc-800 bg-zinc-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl">
            📞
          </div>

          <h3 className="mt-6 text-2xl font-black">
            Call Us
          </h3>

          <p
            className={`mt-3 leading-7 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Talk directly with our development team.
          </p>

          <a
            href="tel:+923000000000"
            className="mt-5 inline-block font-bold text-cyan-500"
          >
            +92 300 0000000
          </a>
        </div>

        <div
          className={`group rounded-3xl border p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl ${
            darkMode
              ? "border-zinc-800 bg-zinc-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl">
            📍
          </div>

          <h3 className="mt-6 text-2xl font-black">
            Location
          </h3>

          <p
            className={`mt-3 leading-7 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            We work with clients and teams online.
          </p>

          <span className="mt-5 inline-block font-bold text-cyan-500">
            Pakistan
          </span>
        </div>
      </section>

      {/* CONTACT FORM */}

      <section className="mx-auto mt-16 grid max-w-7xl gap-8 lg:grid-cols-2">
        <div
          className={`rounded-3xl border p-6 shadow-xl sm:p-10 ${
            darkMode
              ? "border-zinc-800 bg-zinc-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <p className="text-sm font-black uppercase tracking-widest text-cyan-500">
            Send A Message
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Tell Us About Your Project
          </h2>

          <p
            className={`mt-4 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Fill out the form below and send your requirements.
          </p>

          {success && (
            <div className="mt-6 rounded-2xl bg-green-500/10 p-4 font-bold text-green-500">
              ✓ Message sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full rounded-xl border px-4 py-4 outline-none focus:border-cyan-500 ${
                    darkMode
                      ? "border-zinc-700 bg-zinc-950 text-white"
                      : "border-gray-300 bg-gray-50 text-gray-900"
                  }`}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full rounded-xl border px-4 py-4 outline-none focus:border-cyan-500 ${
                    darkMode
                      ? "border-zinc-700 bg-zinc-950 text-white"
                      : "border-gray-300 bg-gray-50 text-gray-900"
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project subject"
                className={`w-full rounded-xl border px-4 py-4 outline-none focus:border-cyan-500 ${
                  darkMode
                    ? "border-zinc-700 bg-zinc-950 text-white"
                    : "border-gray-300 bg-gray-50 text-gray-900"
                }`}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold">
                Message
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={7}
                placeholder="Write your message..."
                className={`w-full resize-none rounded-xl border px-4 py-4 outline-none focus:border-cyan-500 ${
                  darkMode
                    ? "border-zinc-700 bg-zinc-950 text-white"
                    : "border-gray-300 bg-gray-50 text-gray-900"
                }`}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-cyan-500 px-6 py-4 font-black text-black transition hover:bg-cyan-400 hover:shadow-xl"
            >
              Send Message →
            </button>
          </form>
        </div>

        {/* WHY US */}

        <div
          className={`rounded-3xl border p-6 shadow-xl sm:p-10 ${
            darkMode
              ? "border-zinc-800 bg-zinc-900"
              : "border-gray-200 bg-white"
          }`}
        >
          <p className="text-sm font-black uppercase tracking-widest text-cyan-500">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Premium Digital Work
          </h2>

          <p
            className={`mt-5 leading-8 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            We create modern websites that are beautiful,
            responsive, fast, and easy to use.
          </p>

          <div className="mt-10 space-y-7">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-500 text-xl">
                  {feature.icon}
                </div>

                <div>
                  <h3 className="font-black">
                    {feature.title}
                  </h3>

                  <p
                    className={`mt-1 text-sm leading-6 ${
                      darkMode
                        ? "text-gray-400"
                        : "text-gray-600"
                    }`}
                  >
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}

      <section className="mx-auto mt-24 max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-widest text-cyan-500">
            Our Team
          </p>

          <h2 className="mt-4 text-5xl font-black sm:text-6xl">
            Meet The Founders
          </h2>

          <p
            className={`mx-auto mt-5 max-w-2xl leading-8 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Meet the developers behind our website and digital
            experiences.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {founders.map((founder) => (
            <FounderCard
              key={founder.name}
              darkMode={darkMode}
              image={founder.image}
              name={founder.name}
              role={founder.role}
              description={founder.description}
              skills={founder.skills}
            />
          ))}
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="mx-auto mt-20 max-w-7xl">
        <div className="rounded-3xl bg-cyan-500 px-6 py-16 text-center sm:px-10">
          <p className="text-sm font-black uppercase tracking-widest text-black/60">
            Have An Idea?
          </p>

          <h2 className="mt-4 text-4xl font-black text-black sm:text-6xl">
            Let's Build Something Amazing
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-black/70">
            Turn your idea into a modern digital experience.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="mt-8 rounded-xl bg-black px-8 py-4 font-black text-white transition hover:bg-zinc-800"
          >
            Contact Us ↑
          </button>
        </div>
      </section>
    </main>
  );
}

export default Contact;