import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Classic Blue Suit",
    price: 8999,
    oldPrice: 10999,
    rating: 4.9,
    reviews: 128,
    category: "Suits",
    badge: "BEST SELLER",
    stock: 8,
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 2,
    name: "Premium Casual Shirt",
    price: 3999,
    oldPrice: 4999,
    rating: 4.8,
    reviews: 94,
    category: "Shirts",
    badge: "NEW",
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 3,
    name: "Luxury Black Jacket",
    price: 7499,
    oldPrice: 8999,
    rating: 4.9,
    reviews: 76,
    category: "Jackets",
    badge: "TRENDING",
    stock: 6,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 4,
    name: "Modern White Shirt",
    price: 3499,
    oldPrice: 4499,
    rating: 4.7,
    reviews: 113,
    category: "Shirts",
    badge: "POPULAR",
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 5,
    name: "Premium Brown Jacket",
    price: 6999,
    oldPrice: 8499,
    rating: 4.8,
    reviews: 61,
    category: "Jackets",
    badge: "NEW",
    stock: 9,
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 6,
    name: "Elegant Formal Look",
    price: 9999,
    oldPrice: 11999,
    rating: 5.0,
    reviews: 82,
    category: "Formal",
    badge: "PREMIUM",
    stock: 5,
    image:
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 7,
    name: "Classic Denim Jacket",
    price: 5999,
    oldPrice: 7499,
    rating: 4.8,
    reviews: 72,
    category: "Jackets",
    badge: "POPULAR",
    stock: 11,
    image:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 8,
    name: "Luxury Beige Shirt",
    price: 4299,
    oldPrice: 5299,
    rating: 4.7,
    reviews: 89,
    category: "Shirts",
    badge: "NEW",
    stock: 13,
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 9,
    name: "Modern Grey Suit",
    price: 11999,
    oldPrice: 13999,
    rating: 4.9,
    reviews: 105,
    category: "Suits",
    badge: "LUXURY",
    stock: 4,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 10,
    name: "Midnight Premium Blazer",
    price: 10999,
    oldPrice: 12999,
    rating: 4.9,
    reviews: 67,
    category: "Formal",
    badge: "EXCLUSIVE",
    stock: 7,
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 11,
    name: "Premium Summer Shirt",
    price: 3799,
    oldPrice: 4599,
    rating: 4.8,
    reviews: 56,
    category: "Shirts",
    badge: "HOT",
    stock: 18,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 12,
    name: "Urban Leather Jacket",
    price: 8499,
    oldPrice: 9999,
    rating: 4.9,
    reviews: 91,
    category: "Jackets",
    badge: "TRENDING",
    stock: 6,
    image:
      "https://images.unsplash.com/photo-1520975958225-5f61d8b4b1a1?auto=format&fit=crop&w=1000&q=90",
  },
];

const categories = [
  {
    name: "Shirts",
    icon: "👔",
    description: "Smart everyday styles",
  },
  {
    name: "Jackets",
    icon: "🧥",
    description: "Modern premium outerwear",
  },
  {
    name: "Suits",
    icon: "🤵",
    description: "Sharp formal collections",
  },
  {
    name: "Formal",
    icon: "✨",
    description: "Elegant occasion wear",
  },
];

function Shop({ darkMode = false, addToCart: externalAddToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [maxPrice, setMaxPrice] = useState(15000);

  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [quickView, setQuickView] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const searchText = search.trim().toLowerCase();

      const matchesSearch =
        product.name.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText) ||
        product.badge.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" || product.category === category;

      const matchesPrice = product.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    });

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sort === "popular") {
      result.sort((a, b) => b.reviews - a.reviews);
    }

    return result;
  }, [search, category, sort, maxPrice]);

  const discountPercentage = (oldPrice, price) => {
    return Math.round(((oldPrice - price) / oldPrice) * 100);
  };

  const toggleWishlist = (id) => {
    setWishlist((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }

      return [...current, id];
    });
  };

  const handleAddToCart = (product) => {
    if (externalAddToCart) {
      externalAddToCart(product);
    }

    setCart((current) => {
      const existing = current.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1,
              }
            : item
        );
      }

      return [
        ...current,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    alert(`${product.name} added to your bag!`);
  };

  const removeFromCart = (id) => {
    setCart((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setSort("default");
    setMaxPrice(15000);
  };

  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const cartTotal = cart.reduce(
    (total, item) =>
      total + item.price * (item.quantity || 1),
    0
  );

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-white text-zinc-950"
      }`}
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className={`relative overflow-hidden px-6 py-20 md:py-28 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold tracking-[0.45em] text-gray-500">
                LUXEMEN • MEN'S COLLECTION
              </p>

              <h1 className="mt-6 text-5xl font-black leading-[0.95] sm:text-6xl md:text-7xl">
                Find Your
                <br />
                <span className="font-light italic">
                  Signature Style.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-gray-500">
                Explore premium men's clothing designed
                for confidence, comfort and modern luxury.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="rounded-full bg-black px-8 py-4 font-bold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  Shop Collection →
                </a>

                <Link
                  to="/sale"
                  className={`rounded-full border px-8 py-4 font-bold transition duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? "border-zinc-700 hover:bg-zinc-800"
                      : "border-gray-300 hover:bg-white"
                  }`}
                >
                  View Sale
                </Link>
              </div>

              <div className="mt-10 grid max-w-lg grid-cols-3 gap-5">
                <div>
                  <p className="text-2xl font-black">12+</p>
                  <p className="mt-1 text-xs text-gray-500">
                    Premium Styles
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-black">4.9★</p>
                  <p className="mt-1 text-xs text-gray-500">
                    Customer Rating
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-black">100%</p>
                  <p className="mt-1 text-xs text-gray-500">
                    Quality Checked
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[35px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=90"
                alt="Luxury men's fashion"
                className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-105 md:h-[620px]"
              />

              <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-black/75 p-5 text-white backdrop-blur-md">
                <p className="text-xs tracking-[0.3em] text-zinc-300">
                  FEATURED COLLECTION
                </p>

                <p className="mt-2 text-xl font-bold">
                  Modern Luxury Essentials
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}

      <section className="bg-black px-6 py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          <div className="group">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-2xl transition group-hover:scale-110">
              🚚
            </div>

            <h3 className="mt-4 font-bold">
              Fast Delivery
            </h3>

            <p className="mt-1 text-sm text-zinc-400">
              Across Pakistan
            </p>
          </div>

          <div className="group">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-2xl transition group-hover:scale-110">
              ↩️
            </div>

            <h3 className="mt-4 font-bold">
              Easy Returns
            </h3>

            <p className="mt-1 text-sm text-zinc-400">
              Simple return policy
            </p>
          </div>

          <div className="group">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-2xl transition group-hover:scale-110">
              🔒
            </div>

            <h3 className="mt-4 font-bold">
              Secure Payment
            </h3>

            <p className="mt-1 text-sm text-zinc-400">
              Safe checkout
            </p>
          </div>

          <div className="group">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-2xl transition group-hover:scale-110">
              ⭐
            </div>

            <h3 className="mt-4 font-bold">
              Premium Quality
            </h3>

            <p className="mt-1 text-sm text-zinc-400">
              Carefully selected
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORIES
      ====================================================== */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.35em] text-gray-500">
              SHOP BY CATEGORY
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Find Your Look
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-500">
              Explore carefully selected collections made
              for the modern gentleman.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => {
                  setCategory(item.name);

                  document
                    .getElementById("products")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className={`group rounded-[28px] border p-8 text-left transition duration-500 hover:-translate-y-2 ${
                  darkMode
                    ? "border-zinc-800 bg-zinc-900 hover:border-zinc-600"
                    : "border-gray-200 bg-gray-50 hover:bg-white hover:shadow-2xl"
                }`}
              >
                <div className="text-5xl transition duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-black">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {item.description}
                </p>

                <p className="mt-6 text-sm font-bold">
                  Explore Collection →
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS SECTION
      ====================================================== */}

      <section
        id="products"
        className={`px-6 py-24 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-50"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.35em] text-gray-500">
              LUXEMEN COLLECTION
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Shop Men's Clothing
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-500">
              Discover premium shirts, jackets, suits and
              formalwear for every occasion.
            </p>
          </div>

          {/* SEARCH */}

          <div className="mt-12">
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search shirts, jackets, suits..."
                className={`w-full rounded-full border px-7 py-5 pr-16 outline-none transition ${
                  darkMode
                    ? "border-zinc-700 bg-zinc-950 text-white placeholder:text-zinc-500 focus:border-white"
                    : "border-gray-200 bg-white text-zinc-900 placeholder:text-gray-400 focus:border-black"
                }`}
              />

              <span className="absolute right-7 top-1/2 -translate-y-1/2 text-xl">
                🔍
              </span>
            </div>
          </div>

          {/* MOBILE FILTER BUTTON */}

          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className={`mt-5 rounded-full border px-6 py-3 font-bold md:hidden ${
              darkMode
                ? "border-zinc-700"
                : "border-gray-300"
            }`}
          >
            {showFilters ? "Hide Filters ↑" : "Show Filters ↓"}
          </button>

          {/* FILTERS */}

          <div
            className={`mt-5 grid gap-4 md:grid-cols-3 ${
              showFilters ? "grid" : "hidden md:grid"
            }`}
          >
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`rounded-full border px-5 py-4 outline-none ${
                darkMode
                  ? "border-zinc-700 bg-zinc-950 text-white"
                  : "border-gray-200 bg-white"
              }`}
            >
              <option value="All">All Categories</option>
              <option value="Shirts">Shirts</option>
              <option value="Jackets">Jackets</option>
              <option value="Suits">Suits</option>
              <option value="Formal">Formal</option>
            </select>

            <select
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(Number(e.target.value))
              }
              className={`rounded-full border px-5 py-4 outline-none ${
                darkMode
                  ? "border-zinc-700 bg-zinc-950 text-white"
                  : "border-gray-200 bg-white"
              }`}
            >
              <option value={15000}>All Prices</option>
              <option value={4000}>Under Rs. 4,000</option>
              <option value={6000}>Under Rs. 6,000</option>
              <option value={8000}>Under Rs. 8,000</option>
              <option value={10000}>Under Rs. 10,000</option>
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className={`rounded-full border px-5 py-4 outline-none ${
                darkMode
                  ? "border-zinc-700 bg-zinc-950 text-white"
                  : "border-gray-200 bg-white"
              }`}
            >
              <option value="default">
                Sort Products
              </option>

              <option value="low">
                Price: Low → High
              </option>

              <option value="high">
                Price: High → Low
              </option>

              <option value="rating">
                Highest Rated
              </option>

              <option value="popular">
                Most Popular
              </option>
            </select>
          </div>

          {/* RESULTS BAR */}

          <div className="mt-10 flex flex-wrap items-center justify-between gap-5">
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-bold">
                {filteredProducts.length}
              </span>{" "}
              products
            </p>

            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">
              <span>
                ❤️ {wishlist.length} Wishlist
              </span>

              <span>🛍️ {cartCount} Bag</span>

              {(search ||
                category !== "All" ||
                maxPrice !== 15000 ||
                sort !== "default") && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="font-bold underline"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* PRODUCT GRID */}

          {filteredProducts.length > 0 ? (
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className={`group overflow-hidden rounded-[30px] border transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                    darkMode
                      ? "border-zinc-800 bg-zinc-950"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  {/* IMAGE */}

                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-[440px] w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />

                    {/* BADGE */}

                    <span className="absolute left-5 top-5 rounded-full bg-black px-4 py-2 text-xs font-black tracking-wider text-white">
                      {product.badge}
                    </span>

                    {/* DISCOUNT */}

                    <span className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-2 text-xs font-black text-black shadow-lg">
                      {discountPercentage(
                        product.oldPrice,
                        product.price
                      )}
                      % OFF
                    </span>

                    {/* WISHLIST */}

                    <button
                      type="button"
                      onClick={() =>
                        toggleWishlist(product.id)
                      }
                      aria-label={`${
                        wishlist.includes(product.id)
                          ? "Remove"
                          : "Add"
                      } ${product.name} ${
                        wishlist.includes(product.id)
                          ? "from"
                          : "to"
                      } wishlist`}
                      className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-xl transition hover:scale-110"
                    >
                      {wishlist.includes(product.id)
                        ? "❤️"
                        : "♡"}
                    </button>

                    {/* QUICK VIEW */}

                    <button
                      type="button"
                      onClick={() => setQuickView(product)}
                      className="absolute bottom-5 right-5 rounded-full bg-black px-5 py-3 text-sm font-bold text-white opacity-0 shadow-xl transition duration-300 group-hover:opacity-100"
                    >
                      Quick View
                    </button>
                  </div>

                  {/* DETAILS */}

                  <div className="p-7">
                    <p className="text-xs font-bold tracking-[0.25em] text-gray-500">
                      LUXEMEN • {product.category}
                    </p>

                    <h3 className="mt-3 text-xl font-black">
                      {product.name}
                    </h3>

                    {/* RATING */}

                    <div className="mt-4 flex items-center gap-2 text-sm">
                      <span className="font-semibold">
                        ⭐ {product.rating}
                      </span>

                      <span className="text-gray-500">
                        ({product.reviews} reviews)
                      </span>
                    </div>

                    {/* PRICE */}

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <span className="text-2xl font-black">
                        Rs.{" "}
                        {product.price.toLocaleString()}
                      </span>

                      <span className="text-sm text-gray-500 line-through">
                        Rs.{" "}
                        {product.oldPrice.toLocaleString()}
                      </span>
                    </div>

                    {/* STOCK */}

                    <div className="mt-4">
                      {product.stock <= 5 ? (
                        <p className="font-bold text-red-500">
                          🔥 Only {product.stock} left
                        </p>
                      ) : (
                        <p className="font-semibold text-green-600">
                          ✓ In stock
                        </p>
                      )}
                    </div>

                    {/* BUTTONS */}

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <Link
                        to={`/product/${product.id}`}
                        className={`rounded-full border px-4 py-3 text-center text-sm font-bold transition hover:-translate-y-0.5 ${
                          darkMode
                            ? "border-zinc-700 hover:bg-zinc-800"
                            : "border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        Details
                      </Link>

                      <button
                        type="button"
                        onClick={() =>
                          handleAddToCart(product)
                        }
                        className="rounded-full bg-black px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        Add to Bag
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* EMPTY STATE */

            <div className="py-28 text-center">
              <div className="text-7xl">🔍</div>

              <h2 className="mt-7 text-3xl font-black">
                No Products Found
              </h2>

              <p className="mt-3 text-gray-500">
                Try changing your search or filters.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-7 rounded-full bg-black px-8 py-4 font-bold text-white transition hover:scale-105"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          SHOPPING BAG PREVIEW
      ====================================================== */}

      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50 w-[calc(100%-48px)] max-w-sm">
          <div
            className={`rounded-[28px] border p-5 shadow-2xl backdrop-blur-xl ${
              darkMode
                ? "border-zinc-700 bg-zinc-900/95"
                : "border-gray-200 bg-white/95"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold tracking-[0.25em] text-gray-500">
                  YOUR BAG
                </p>

                <h3 className="mt-1 text-xl font-black">
                  {cartCount} Item
                  {cartCount !== 1 ? "s" : ""}
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-xl text-white">
                🛍️
              </div>
            </div>

            <div className="mt-4 max-h-48 space-y-3 overflow-y-auto">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between gap-3 rounded-2xl border p-2 ${
                    darkMode
                      ? "border-zinc-800 bg-zinc-950"
                      : "border-gray-100 bg-gray-50"
                  }`}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-14 w-12 rounded-xl object-cover"
                    />

                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold">
                        {item.name}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Qty: {item.quantity || 1}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg text-red-500 transition hover:bg-red-500/10"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-gray-200/20 pt-4">
              <span className="text-sm text-gray-500">
                Total
              </span>

              <span className="text-lg font-black">
                Rs. {cartTotal.toLocaleString()}
              </span>
            </div>

            <Link
              to="/cart"
              className="mt-4 block rounded-full bg-black px-6 py-4 text-center text-sm font-bold text-white transition hover:scale-[1.02]"
            >
              View Shopping Bag →
            </Link>
          </div>
        </div>
      )}

      {/* =====================================================
          PROMOTIONAL BANNER
      ====================================================== */}

      <section className="px-6 py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[35px] bg-black px-8 py-20 text-center text-white shadow-2xl md:px-20">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10">
            <p className="text-xs font-bold tracking-[0.45em] text-zinc-400">
              LUXEMEN SPECIAL
            </p>

            <h2 className="mt-6 text-4xl font-black md:text-6xl">
              Upgrade Your Wardrobe.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-7 text-zinc-400">
              Get premium men's fashion with selected
              styles available at special prices.
            </p>

            <Link
              to="/sale"
              className="mt-9 inline-block rounded-full bg-white px-9 py-4 font-bold text-black transition hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Sale →
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-6 py-28 text-center">
        <p className="text-xs font-bold tracking-[0.4em] text-gray-500">
          YOUR STYLE STARTS HERE
        </p>

        <h2 className="mt-6 text-5xl font-black md:text-7xl">
          Dress Sharp.
          <br />
          <span className="font-light italic">
            Feel Confident.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-gray-500">
          Discover carefully selected pieces made for the
          modern man who values quality, comfort and
          timeless style.
        </p>

        <a
          href="#products"
          className="mt-9 inline-block rounded-full bg-black px-10 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
        >
          Start Shopping →
        </a>
      </section>

      {/* =====================================================
          QUICK VIEW MODAL
      ====================================================== */}

      {quickView && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-5 py-8 backdrop-blur-md"
          onClick={() => setQuickView(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative grid max-h-[90vh] w-full max-w-5xl overflow-auto rounded-[30px] shadow-2xl md:grid-cols-2 ${
              darkMode
                ? "bg-zinc-900 text-white"
                : "bg-white text-zinc-900"
            }`}
          >
            {/* CLOSE */}

            <button
              type="button"
              onClick={() => setQuickView(null)}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black text-2xl text-white shadow-xl transition hover:scale-110"
            >
              ×
            </button>

            {/* IMAGE */}

            <div className="relative">
              <img
                src={quickView.image}
                alt={quickView.name}
                className="h-[400px] w-full object-cover md:h-full"
              />

              <span className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-2 text-xs font-black text-black shadow-lg">
                {discountPercentage(
                  quickView.oldPrice,
                  quickView.price
                )}
                % OFF
              </span>
            </div>

            {/* DETAILS */}

            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-xs font-bold tracking-[0.3em] text-gray-500">
                LUXEMEN • {quickView.category}
              </p>

              <h2 className="mt-5 text-3xl font-black md:text-4xl">
                {quickView.name}
              </h2>

              <div className="mt-5 flex items-center gap-2">
                <span>⭐ {quickView.rating}</span>

                <span className="text-gray-500">
                  ({quickView.reviews} reviews)
                </span>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <span className="text-3xl font-black">
                  Rs.{" "}
                  {quickView.price.toLocaleString()}
                </span>

                <span className="text-gray-500 line-through">
                  Rs.{" "}
                  {quickView.oldPrice.toLocaleString()}
                </span>
              </div>

              <div className="mt-6 rounded-2xl border border-gray-200/20 p-4">
                {quickView.stock <= 5 ? (
                  <p className="font-bold text-red-500">
                    🔥 Hurry! Only {quickView.stock} left.
                  </p>
                ) : (
                  <p className="font-semibold text-green-600">
                    ✓ This product is currently in stock.
                  </p>
                )}
              </div>

              <p className="mt-7 leading-7 text-gray-500">
                Premium quality men's fashion designed for
                modern everyday style. Carefully selected
                materials, comfortable construction and a
                timeless luxury-inspired appearance.
              </p>

              <button
                type="button"
                onClick={() => {
                  handleAddToCart(quickView);
                  setQuickView(null);
                }}
                className="mt-8 rounded-full bg-black px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                Add To Bag →
              </button>

              <Link
                to={`/product/${quickView.id}`}
                onClick={() => setQuickView(null)}
                className={`mt-3 rounded-full border px-8 py-4 text-center font-bold transition ${
                  darkMode
                    ? "border-zinc-700 hover:bg-zinc-800"
                    : "border-gray-300 hover:bg-gray-100"
                }`}
              >
                View Full Details
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Shop;