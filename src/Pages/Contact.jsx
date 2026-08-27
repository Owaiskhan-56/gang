{/* =====================================================
    WEBSITE OWNER / FOUNDER
====================================================== */}

<section className="px-4 py-20 sm:px-6 lg:py-28">
  <div
    className={`mx-auto max-w-7xl overflow-hidden rounded-[32px] border shadow-2xl md:rounded-[40px] ${
      darkMode
        ? "border-zinc-800 bg-zinc-950"
        : "border-zinc-200 bg-white"
    }`}
  >
    <div className="grid lg:grid-cols-2">

      {/* =================================================
          OWNER IMAGE
      ================================================== */}

      <div
        className={`relative flex min-h-[620px] items-center justify-center overflow-hidden p-8 sm:p-12 lg:p-16 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        {/* Decorative glow */}
        <div
          className={`absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl ${
            darkMode ? "bg-zinc-700/30" : "bg-white"
          }`}
        />

        <div
          className={`absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl ${
            darkMode ? "bg-zinc-700/30" : "bg-zinc-200"
          }`}
        />

        {/* Brand badge */}
        <div
          className={`absolute left-6 top-6 z-20 rounded-full border px-5 py-2 text-xs font-bold tracking-[0.25em] backdrop-blur-md sm:left-10 sm:top-10 ${
            darkMode
              ? "border-zinc-700 bg-black/60 text-zinc-200"
              : "border-zinc-200 bg-white/80 text-zinc-700"
          }`}
        >
          LUXEWEAR
        </div>

        {/* Image */}
        <div className="relative z-10">

          {/* Image frame */}
          <div
            className={`absolute -inset-5 rounded-[38px] border ${
              darkMode
                ? "border-zinc-700"
                : "border-zinc-300"
            }`}
          />

          <div
            className={`absolute -inset-2 rounded-[34px] ${
              darkMode ? "bg-zinc-800/30" : "bg-white/50"
            }`}
          />

          <img
            src="/shahzaib.png"
            alt="Shahzaib - Founder and Owner of LUXEWEAR"
            className="relative h-[460px] w-[330px] rounded-[30px] object-cover object-center shadow-2xl transition duration-700 hover:scale-[1.02] sm:h-[500px] sm:w-[360px]"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85";
            }}
          />

          {/* Image information */}
          <div
            className={`absolute bottom-5 left-5 right-5 rounded-2xl border px-5 py-4 shadow-xl backdrop-blur-xl ${
              darkMode
                ? "border-white/10 bg-black/80 text-white"
                : "border-white/60 bg-white/90 text-zinc-900"
            }`}
          >
            <p className="text-[10px] font-bold tracking-[0.3em] text-gray-500">
              WEBSITE OWNER & FOUNDER
            </p>

            <div className="mt-1 flex items-center justify-between gap-4">
              <p className="text-xl font-bold">
                Shahzaib
              </p>

              <span
                className={`rounded-full px-3 py-1 text-[10px] font-bold tracking-wider ${
                  darkMode
                    ? "bg-white text-black"
                    : "bg-black text-white"
                }`}
              >
                LUXEWEAR
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          OWNER INFORMATION
      ================================================== */}

      <div className="flex flex-col justify-center px-7 py-14 sm:px-10 lg:px-16 lg:py-20">

        {/* Label */}
        <div className="flex items-center gap-3">
          <span
            className={`h-px w-10 ${
              darkMode ? "bg-zinc-600" : "bg-zinc-400"
            }`}
          />

          <p className="text-xs font-bold tracking-[0.35em] text-gray-500">
            ABOUT THE OWNER
          </p>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-5xl font-black tracking-tight sm:text-6xl">
          Shahzaib
        </h2>

        <p className="mt-3 text-lg font-medium text-gray-500">
          Founder & Owner of LUXEWEAR
        </p>

        {/* Divider */}
        <div
          className={`mt-7 h-1 w-16 rounded-full ${
            darkMode ? "bg-white" : "bg-black"
          }`}
        />

        {/* Main description */}
        <p className="mt-8 text-base leading-8 text-gray-500 sm:text-lg">
          Welcome to LUXEWEAR. I'm Shahzaib, the founder and
          owner behind this website and brand. I created
          LUXEWEAR with a passion for modern men's fashion,
          premium style, and creating a simple and enjoyable
          online shopping experience.
        </p>

        <p className="mt-5 text-base leading-8 text-gray-500">
          Every part of LUXEWEAR is built with a focus on
          quality, confidence, modern design, and timeless
          men's fashion. Our goal is to make premium fashion
          accessible through a professional digital experience.
        </p>

        {/* =================================================
            FEATURE CARDS
        ================================================== */}

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

          {/* Card 1 */}
          <div
            className={`group rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 ${
              darkMode
                ? "border-zinc-800 bg-zinc-900 hover:border-zinc-700"
                : "border-zinc-200 bg-zinc-50 hover:border-zinc-300"
            }`}
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${
                darkMode
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              👔
            </div>

            <h3 className="mt-4 font-bold">
              Men's Fashion
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Modern & timeless style
            </p>
          </div>

          {/* Card 2 */}
          <div
            className={`group rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 ${
              darkMode
                ? "border-zinc-800 bg-zinc-900 hover:border-zinc-700"
                : "border-zinc-200 bg-zinc-50 hover:border-zinc-300"
            }`}
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${
                darkMode
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              ✨
            </div>

            <h3 className="mt-4 font-bold">
              Premium Quality
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Designed for confidence
            </p>
          </div>
        </div>

        {/* =================================================
            OWNER STATS
        ================================================== */}

        <div
          className={`mt-7 grid grid-cols-3 divide-x rounded-2xl border py-5 ${
            darkMode
              ? "divide-zinc-800 border-zinc-800 bg-zinc-900"
              : "divide-zinc-200 border-zinc-200 bg-zinc-50"
          }`}
        >
          <div className="px-3 text-center">
            <p className="text-xl font-black sm:text-2xl">
              100%
            </p>

            <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-gray-500 sm:text-xs">
              Passion
            </p>
          </div>

          <div className="px-3 text-center">
            <p className="text-xl font-black sm:text-2xl">
              24/7
            </p>

            <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-gray-500 sm:text-xs">
              Support
            </p>
          </div>

          <div className="px-3 text-center">
            <p className="text-xl font-black sm:text-2xl">
              100%
            </p>

            <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-gray-500 sm:text-xs">
              Commitment
            </p>
          </div>
        </div>

        {/* =================================================
            BUTTONS
        ================================================== */}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          {/* Contact Owner */}
          <a
            href="mailto:support@luxewear.com"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-zinc-800 hover:shadow-xl dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Contact Owner

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center justify-center gap-2 rounded-full border px-7 py-4 text-sm font-bold transition duration-300 hover:-translate-y-1 ${
              darkMode
                ? "border-zinc-700 hover:bg-zinc-800"
                : "border-zinc-300 hover:bg-zinc-100"
            }`}
          >
            WhatsApp
            <span>↗</span>
          </a>
        </div>

        {/* Bottom text */}
        <p className="mt-6 text-xs leading-5 text-gray-500">
          LUXEWEAR is founded and managed by Shahzaib,
          bringing modern men's fashion, quality, and
          premium style together in one destination.
        </p>
      </div>
    </div>
  </div>
</section>

{/* =====================================================
    SUPPORT STATS
====================================================== */}