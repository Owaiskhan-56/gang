import React, { useState } from "react";

const Contact = ({ darkMode }) => {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
    setOrderNumber("");

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const handleNewsletter = (e) => {
    e.preventDefault();

    if (!newsletterEmail) return;

    alert("Thank you for subscribing to LUXEWEAR!");
    setNewsletterEmail("");
  };

  const inputStyle = `w-full rounded-xl border px-5 py-4 outline-none transition focus:ring-2 focus:ring-black ${
    darkMode
      ? "border-zinc-700 bg-zinc-950 text-white placeholder:text-zinc-500"
      : "border-gray-300 bg-white text-zinc-900 placeholder:text-gray-400"
  }`;

  const contactCards = [
    {
      icon: "✉️",
      title: "Email Us",
      description: "Get help from our support team.",
      value: "support@luxewear.com",
      action: "Send Email →",
      href: "mailto:support@luxewear.com",
    },
    {
      icon: "📞",
      title: "Call Us",
      description: "Talk directly with our team.",
      value: "+92 300 1234567",
      action: "Call Now →",
      href: "tel:+923001234567",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      description: "Chat with our support team.",
      value: "Available 10 AM - 8 PM",
      action: "Chat Now →",
      href: "https://wa.me/923001234567",
    },
  ];

  const services = [
    {
      icon: "📦",
      title: "Order Support",
      text: "Need help with an existing order? Our team can help you check your order status.",
    },
    {
      icon: "👕",
      title: "Product Advice",
      text: "Not sure about your size, fit or style? Ask our team for personalized guidance.",
    },
    {
      icon: "↩️",
      title: "Returns & Exchange",
      text: "Questions about returns or exchanges? We will guide you through the process.",
    },
    {
      icon: "🚚",
      title: "Delivery Help",
      text: "Need an update about your delivery? Send us your order details.",
    },
  ];

  const stats = [
    {
      number: "24h",
      label: "Average Response",
    },
    {
      number: "98%",
      label: "Customer Satisfaction",
    },
    {
      number: "10K+",
      label: "Customers Helped",
    },
    {
      number: "7 Days",
      label: "Support Available",
    },
  ];

  const faqs = [
    {
      question: "How long does delivery take?",
      answer:
        "Orders are normally delivered within 3–5 business days depending on your location.",
    },
    {
      question: "Can I return or exchange my order?",
      answer:
        "Yes. Eligible products can be returned or exchanged according to our return policy.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Contact our support team with your order number and we will help you check your order status.",
    },
    {
      question: "Do you offer Cash on Delivery?",
      answer:
        "Cash on Delivery may be available depending on your location and order.",
    },
    {
      question: "How do I choose the right size?",
      answer:
        "Check the size information available with the product. If you are still unsure, contact our team for assistance.",
    },
    {
      question: "How can I contact LUXEWEAR?",
      answer:
        "You can contact us through email, phone, WhatsApp or the contact form on this page.",
    },
  ];

  return (
    <main
      className={`min-h-screen ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-white text-zinc-900"
      }`}
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className={`relative overflow-hidden px-6 py-24 md:py-32 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm tracking-[0.4em] text-gray-500">
            CONTACT LUXEWEAR
          </p>

          <h1 className="mt-5 text-6xl font-bold leading-none md:text-8xl">
            Get In
            <br />
            <span className="font-light italic">Touch.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-500">
            Have a question about your order, product, delivery,
            return or anything else? Our support team is ready
            to help you.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:support@luxewear.com"
              className="rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Email Us →
            </a>

            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noreferrer"
              className={`rounded-full border px-8 py-4 font-semibold transition hover:scale-105 ${
                darkMode
                  ? "border-zinc-700 hover:bg-zinc-800"
                  : "border-zinc-300 hover:bg-white"
              }`}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CARDS
      ====================================================== */}

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {contactCards.map((card) => (
            <div
              key={card.title}
              className={`group rounded-3xl border p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 text-3xl transition group-hover:scale-110">
                {card.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {card.title}
              </h3>

              <p className="mt-3 text-gray-500">
                {card.description}
              </p>

              <p className="mt-4 font-medium">
                {card.value}
              </p>

              <a
                href={card.href}
                target={
                  card.href.startsWith("https")
                    ? "_blank"
                    : undefined
                }
                rel={
                  card.href.startsWith("https")
                    ? "noreferrer"
                    : undefined
                }
                className="mt-5 inline-block font-semibold underline underline-offset-4"
              >
                {card.action}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          SUPPORT STATS
      ====================================================== */}

      <section
        className={`px-6 py-16 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        <div className="mx-auto grid max-w-6xl gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-4xl font-bold md:text-5xl">
                {stat.number}
              </h3>

              <p className="mt-2 text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          SUPPORT SERVICES
      ====================================================== */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-sm tracking-[0.3em] text-gray-500">
              HOW CAN WE HELP?
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-6xl">
              We're Here For You.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-500">
              Whatever you need, our team is ready to make your
              shopping experience simple and stress-free.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className={`rounded-3xl border p-7 transition duration-300 hover:-translate-y-2 ${
                  darkMode
                    ? "border-zinc-800 bg-zinc-900"
                    : "border-gray-200 bg-white shadow-sm"
                }`}
              >
                <div className="text-4xl">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-500">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ORDER TRACKING
      ====================================================== */}

      <section
        className={`px-6 py-20 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[30px] bg-black px-8 py-12 text-white md:px-14">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <p className="text-sm tracking-[0.3em] text-zinc-400">
                  ORDER SUPPORT
                </p>

                <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                  Need to check your order?
                </h2>

                <p className="mt-5 leading-7 text-zinc-400">
                  Enter your order number and contact our team
                  for assistance with your delivery.
                </p>
              </div>

              <div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    if (!orderNumber) return;

                    alert(
                      `Order ${orderNumber} received. Our support team will help you track it.`
                    );

                    setOrderNumber("");
                  }}
                  className="flex flex-col gap-3"
                >
                  <input
                    type="text"
                    value={orderNumber}
                    onChange={(e) =>
                      setOrderNumber(e.target.value)
                    }
                    placeholder="Enter order number"
                    className="rounded-full border border-zinc-700 bg-zinc-900 px-6 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-white"
                    required
                  />

                  <button
                    type="submit"
                    className="rounded-full bg-white px-6 py-4 font-semibold text-black transition hover:scale-[1.02]"
                  >
                    Track Order →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM
      ====================================================== */}

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2">
          {/* LEFT */}

          <div>
            <p className="text-sm tracking-[0.3em] text-gray-500">
              WE'D LOVE TO HEAR FROM YOU
            </p>

            <h2 className="mt-5 text-5xl font-bold md:text-6xl">
              Let's Talk.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-500">
              Whether you need help choosing the perfect
              outfit, tracking your order or requesting an
              exchange, send us a message.
            </p>

            <div
              className={`mt-10 rounded-3xl p-8 ${
                darkMode
                  ? "bg-zinc-900"
                  : "bg-zinc-100"
              }`}
            >
              <div className="flex items-start gap-5">
                <div className="text-3xl">💬</div>

                <div>
                  <h3 className="text-xl font-bold">
                    Customer Support
                  </h3>

                  <p className="mt-2 leading-7 text-gray-500">
                    Our support team usually responds within
                    24 hours during business days.
                  </p>

                  <a
                    href="https://wa.me/923001234567"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-block rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:scale-105"
                  >
                    WhatsApp Us →
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`mt-5 rounded-3xl border p-8 ${
                darkMode
                  ? "border-zinc-800"
                  : "border-gray-200"
              }`}
            >
              <h3 className="text-xl font-bold">
                Need help with an order?
              </h3>

              <p className="mt-3 text-gray-500">
                Keep your order number ready so our team can
                assist you faster.
              </p>
            </div>

            {/* ADDRESS */}

            <div
              className={`mt-5 rounded-3xl border p-8 ${
                darkMode
                  ? "border-zinc-800"
                  : "border-gray-200"
              }`}
            >
              <div className="flex gap-5">
                <div className="text-3xl">📍</div>

                <div>
                  <h3 className="text-xl font-bold">
                    Our Store
                  </h3>

                  <p className="mt-3 leading-7 text-gray-500">
                    LUXEWEAR Fashion Store
                    <br />
                    Lahore, Pakistan
                    <br />
                    Monday - Saturday
                    <br />
                    10:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}

          <div
            className={`rounded-3xl border p-8 shadow-sm md:p-10 ${
              darkMode
                ? "border-zinc-800 bg-zinc-900"
                : "border-gray-200 bg-white"
            }`}
          >
            {submitted && (
              <div className="mb-6 rounded-xl bg-green-100 px-5 py-4 font-medium text-green-800">
                ✓ Your message has been sent successfully!
                <br />
                <span className="text-sm">
                  Our team will contact you soon.
                </span>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Your Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Phone Number
                </label>

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+92 300 1234567"
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Subject
                </label>

                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className={inputStyle}
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

                  <option value="payment">
                    Payment
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

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
                  className={`${inputStyle} resize-none`}
                />
              </div>

              <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-500">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4"
                />

                <span>
                  I agree that LUXEWEAR may contact me
                  regarding my inquiry.
                </span>
              </label>

              <button
                type="submit"
                className="w-full rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-[1.02] hover:bg-zinc-800"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

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

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-500">
              Find quick answers to some of the most common
              questions from our customers.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className={`group rounded-2xl p-6 ${
                  darkMode
                    ? "bg-zinc-950"
                    : "bg-white"
                }`}
              >
                <summary className="cursor-pointer list-none font-semibold">
                  <div className="flex items-center justify-between gap-5">
                    <span>{faq.question}</span>

                    <span className="text-xl transition group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <p className="mt-4 leading-7 text-gray-500">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NEWSLETTER
      ====================================================== */}

      <section className="px-6 py-24">
        <div
          className={`mx-auto max-w-6xl rounded-[30px] px-8 py-16 text-center md:px-16 ${
            darkMode
              ? "bg-zinc-900"
              : "bg-zinc-200"
          }`}
        >
          <p className="text-sm tracking-[0.3em] text-gray-500">
            STAY CONNECTED
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Join The LUXEWEAR Community
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-500">
            Get fashion updates, new arrivals and exclusive
            offers directly in your inbox.
          </p>

          <form
            onSubmit={handleNewsletter}
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) =>
                setNewsletterEmail(e.target.value)
              }
              placeholder="Enter your email"
              required
              className={`flex-1 rounded-full border px-6 py-4 outline-none ${
                darkMode
                  ? "border-zinc-700 bg-zinc-950 text-white"
                  : "border-gray-300 bg-white"
              }`}
            />

            <button
              type="submit"
              className="rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* =====================================================
          SOCIAL
      ====================================================== */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm tracking-[0.3em] text-gray-500">
            FOLLOW LUXEWEAR
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            Stay Connected.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-500">
            Follow us for new collections, fashion inspiration,
            special offers and exclusive updates.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {["Instagram", "Facebook", "TikTok", "YouTube"].map(
              (social) => (
                <a
                  href="#"
                  key={social}
                  className={`rounded-full border px-6 py-3 font-semibold transition ${
                    darkMode
                      ? "border-zinc-700 hover:bg-white hover:text-black"
                      : "border-zinc-300 hover:bg-black hover:text-white"
                  }`}
                >
                  {social}
                </a>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[30px] bg-black px-8 py-16 text-center text-white md:px-20">
          <p className="text-sm tracking-[0.3em] text-zinc-400">
            LUXEWEAR SUPPORT
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            We're Here
            <br />
            <span className="font-light italic">
              To Help.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-zinc-400">
            Have a question? Don't hesitate to reach out.
            Our team is always happy to help.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:support@luxewear.com"
              className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Contact Support →
            </a>

            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-600 px-8 py-4 font-semibold transition hover:bg-zinc-900"
            >
              WhatsApp →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;