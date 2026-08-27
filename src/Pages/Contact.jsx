{/* =====================================================
    WEBSITE FOUNDERS
====================================================== */}

<section className="px-4 py-20 sm:px-6 lg:py-28">
  <div
    className={`mx-auto max-w-7xl overflow-hidden rounded-[32px] border shadow-2xl md:rounded-[40px] ${
      darkMode
        ? "border-zinc-800 bg-zinc-950"
        : "border-zinc-200 bg-white"
    }`}
  >

    {/* =================================================
        SECTION HEADING
    ================================================== */}

    <div className="px-6 pt-14 text-center sm:px-10 lg:px-16 lg:pt-20">

      <div className="flex items-center justify-center gap-3">
        <span
          className={`h-px w-10 ${
            darkMode ? "bg-zinc-700" : "bg-zinc-300"
          }`}
        />

        <p className="text-xs font-bold tracking-[0.35em] text-gray-500">
          MEET THE TEAM
        </p>

        <span
          className={`h-px w-10 ${
            darkMode ? "bg-zinc-700" : "bg-zinc-300"
          }`}
        />
      </div>

      <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
        The People Behind LUXEWEAR
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
        Meet the founders behind LUXEWEAR, combining fashion,
        technology, creativity, and a passion for building a
        premium online shopping experience.
      </p>
    </div>


    {/* =================================================
        FOUNDERS GRID
    ================================================== */}

    <div className="grid gap-8 px-6 py-14 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-20">


      {/* =================================================
          SHAHZAIB CARD
      ================================================== */}

      <div
        className={`group overflow-hidden rounded-[30px] border transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${
          darkMode
            ? "border-zinc-800 bg-zinc-900"
            : "border-zinc-200 bg-zinc-50"
        }`}
      >

        {/* Image area */}

        <div
          className={`relative flex min-h-[550px] items-center justify-center overflow-hidden p-8 sm:p-10 ${
            darkMode ? "bg-zinc-950" : "bg-zinc-100"
          }`}
        >

          {/* Glow */}

          <div
            className={`absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl ${
              darkMode ? "bg-white/5" : "bg-white"
            }`}
          />

          <div
            className={`absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl ${
              darkMode ? "bg-white/5" : "bg-zinc-200"
            }`}
          />

          {/* Founder badge */}

          <div
            className={`absolute left-6 top-6 z-20 rounded-full border px-4 py-2 text-[10px] font-bold tracking-[0.25em] backdrop-blur-md ${
              darkMode
                ? "border-zinc-700 bg-black/70 text-white"
                : "border-zinc-200 bg-white/80 text-zinc-800"
            }`}
          >
            FOUNDER
          </div>


          {/* Image frame */}

          <div className="relative">

            <div
              className={`absolute -inset-5 rounded-[38px] border ${
                darkMode
                  ? "border-zinc-700"
                  : "border-zinc-300"
              }`}
            />

            <img
              src="/shahzaib.png"
              alt="Shahzaib - Founder of LUXEWEAR"
              className="relative h-[430px] w-[300px] rounded-[30px] object-cover object-center shadow-2xl transition duration-700 group-hover:scale-[1.02] sm:h-[460px] sm:w-[330px]"
            />

            {/* Image bottom information */}

            <div
              className={`absolute bottom-5 left-5 right-5 rounded-2xl border px-5 py-4 backdrop-blur-xl ${
                darkMode
                  ? "border-white/10 bg-black/80 text-white"
                  : "border-white/60 bg-white/90 text-zinc-900"
              }`}
            >

              <p className="text-[9px] font-bold tracking-[0.3em] text-gray-500">
                LUXEWEAR
              </p>

              <div className="mt-1 flex items-center justify-between gap-3">

                <p className="text-xl font-black">
                  Shahzaib
                </p>

                <span
                  className={`rounded-full px-3 py-1 text-[9px] font-bold ${
                    darkMode
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  FOUNDER
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* Shahzaib information */}

        <div className="p-7 sm:p-9">

          <p className="text-xs font-bold tracking-[0.3em] text-gray-500">
            FOUNDER & OWNER
          </p>

          <h3 className="mt-3 text-3xl font-black">
            Shahzaib
          </h3>

          <p className="mt-2 font-medium text-gray-500">
            Founder & Owner of LUXEWEAR
          </p>

          <div
            className={`mt-6 h-1 w-14 rounded-full ${
              darkMode ? "bg-white" : "bg-black"
            }`}
          />

          <p className="mt-6 text-sm leading-7 text-gray-500 sm:text-base">
            Shahzaib is the founder and owner of LUXEWEAR.
            His vision is to create a modern men's fashion
            brand focused on premium style, quality, confidence,
            and a professional shopping experience.
          </p>

          {/* Skills */}

          <div className="mt-7 flex flex-wrap gap-2">

            <span
              className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                darkMode
                  ? "border-zinc-700"
                  : "border-zinc-200"
              }`}
            >
              Men's Fashion
            </span>

            <span
              className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                darkMode
                  ? "border-zinc-700"
                  : "border-zinc-200"
              }`}
            >
              Brand Vision
            </span>

            <span
              className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                darkMode
                  ? "border-zinc-700"
                  : "border-zinc-200"
              }`}
            >
              Leadership
            </span>

          </div>

        </div>

      </div>



      {/* =================================================
          OWAIS CARD
      ================================================== */}

      <div
        className={`group overflow-hidden rounded-[30px] border transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${
          darkMode
            ? "border-zinc-800 bg-zinc-900"
            : "border-zinc-200 bg-zinc-50"
        }`}
      >

        {/* Image area */}

        <div
          className={`relative flex min-h-[550px] items-center justify-center overflow-hidden p-8 sm:p-10 ${
            darkMode ? "bg-zinc-950" : "bg-zinc-100"
          }`}
        >

          {/* Glow */}

          <div
            className={`absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl ${
              darkMode ? "bg-white/5" : "bg-white"
            }`}
          />

          <div
            className={`absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl ${
              darkMode ? "bg-white/5" : "bg-zinc-200"
            }`}
          />

          {/* Co-founder badge */}

          <div
            className={`absolute right-6 top-6 z-20 rounded-full border px-4 py-2 text-[10px] font-bold tracking-[0.25em] backdrop-blur-md ${
              darkMode
                ? "border-zinc-700 bg-black/70 text-white"
                : "border-zinc-200 bg-white/80 text-zinc-800"
            }`}
          >
            CO-FOUNDER
          </div>


          {/* Image frame */}

          <div className="relative">

            <div
              className={`absolute -inset-5 rounded-[38px] border ${
                darkMode
                  ? "border-zinc-700"
                  : "border-zinc-300"
              }`}
            />

            <img
              src="/owais.png"
              alt="Owais - Co-Founder of LUXEWEAR"
              className="relative h-[430px] w-[300px] rounded-[30px] object-cover object-center shadow-2xl transition duration-700 group-hover:scale-[1.02] sm:h-[460px] sm:w-[330px]"
            />

            {/* Image bottom information */}

            <div
              className={`absolute bottom-5 left-5 right-5 rounded-2xl border px-5 py-4 backdrop-blur-xl ${
                darkMode
                  ? "border-white/10 bg-black/80 text-white"
                  : "border-white/60 bg-white/90 text-zinc-900"
              }`}
            >

              <p className="text-[9px] font-bold tracking-[0.3em] text-gray-500">
                LUXEWEAR
              </p>

              <div className="mt-1 flex items-center justify-between gap-3">

                <p className="text-xl font-black">
                  Owais
                </p>

                <span
                  className={`rounded-full px-3 py-1 text-[9px] font-bold ${
                    darkMode
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  CO-FOUNDER
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* Owais information */}

        <div className="p-7 sm:p-9">

          <p className="text-xs font-bold tracking-[0.3em] text-gray-500">
            CO-FOUNDER & DEVELOPER
          </p>

          <h3 className="mt-3 text-3xl font-black">
            Owais
          </h3>

          <p className="mt-2 font-medium text-gray-500">
            Co-Founder & Developer of LUXEWEAR
          </p>

          <div
            className={`mt-6 h-1 w-14 rounded-full ${
              darkMode ? "bg-white" : "bg-black"
            }`}
          />

          <p className="mt-6 text-sm leading-7 text-gray-500 sm:text-base">
            Owais is the co-founder and developer behind
            LUXEWEAR. He focuses on the website, technology,
            user experience, and creating a smooth modern
            digital platform for customers.
          </p>

          {/* Skills */}

          <div className="mt-7 flex flex-wrap gap-2">

            <span
              className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                darkMode
                  ? "border-zinc-700"
                  : "border-zinc-200"
              }`}
            >
              React
            </span>

            <span
              className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                darkMode
                  ? "border-zinc-700"
                  : "border-zinc-200"
              }`}
            >
              Development
            </span>

            <span
              className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                darkMode
                  ? "border-zinc-700"
                  : "border-zinc-200"
              }`}
            >
              UI/UX
            </span>

          </div>

        </div>

      </div>

    </div>



    {/* =================================================
        TEAM STATS
    ================================================== */}

    <div className="px-6 pb-14 sm:px-10 lg:px-16 lg:pb-20">

      <div
        className={`grid grid-cols-3 divide-x rounded-2xl border py-6 ${
          darkMode
            ? "divide-zinc-800 border-zinc-800 bg-zinc-900"
            : "divide-zinc-200 border-zinc-200 bg-zinc-50"
        }`}
      >

        <div className="px-2 text-center">

          <p className="text-2xl font-black sm:text-3xl">
            100%
          </p>

          <p className="mt-1 text-[9px] font-semibold uppercase tracking-widest text-gray-500 sm:text-xs">
            Passion
          </p>

        </div>


        <div className="px-2 text-center">

          <p className="text-2xl font-black sm:text-3xl">
            24/7
          </p>

          <p className="mt-1 text-[9px] font-semibold uppercase tracking-widest text-gray-500 sm:text-xs">
            Support
          </p>

        </div>


        <div className="px-2 text-center">

          <p className="text-2xl font-black sm:text-3xl">
            100%
          </p>

          <p className="mt-1 text-[9px] font-semibold uppercase tracking-widest text-gray-500 sm:text-xs">
            Commitment
          </p>

        </div>

      </div>



      {/* =================================================
          BUTTONS
      ================================================== */}

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

        <a
          href="mailto:support@luxewear.com"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-zinc-800 hover:shadow-xl dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Contact Founders

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>


        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 text-sm font-bold transition duration-300 hover:-translate-y-1 ${
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

      <p className="mx-auto mt-7 max-w-2xl text-center text-xs leading-6 text-gray-500">
        LUXEWEAR is founded and managed by Shahzaib and
        Owais, bringing fashion, technology, quality, and
        premium style together in one destination.
      </p>

    </div>

  </div>
</section>