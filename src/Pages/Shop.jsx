import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Classic Black Suit",
    price: 8999,
    oldPrice: 10999,
    rating: "4.9",
    reviews: 128,
    category: "Suits",
    badge: "BEST SELLER",
    stock: 8,
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 2,
    name: "Premium Casual Shirt",
    price: 3999,
    oldPrice: 4999,
    rating: "4.8",
    reviews: 94,
    category: "Shirts",
    badge: "NEW",
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 3,
    name: "Luxury Black Jacket",
    price: 7499,
    oldPrice: 8999,
    rating: "4.9",
    reviews: 76,
    category: "Jackets",
    badge: "TRENDING",
    stock: 6,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 4,
    name: "Modern White Shirt",
    price: 3499,
    oldPrice: 4499,
    rating: "4.7",
    reviews: 113,
    category: "Shirts",
    badge: "POPULAR",
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 5,
    name: "Premium Brown Jacket",
    price: 6999,
    oldPrice: 8499,
    rating: "4.8",
    reviews: 61,
    category: "Jackets",
    badge: "NEW",
    stock: 9,
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 6,
    name: "Elegant Formal Look",
    price: 9999,
    oldPrice: 11999,
    rating: "5.0",
    reviews: 82,
    category: "Formal",
    badge: "PREMIUM",
    stock: 5,
    image:
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 7,
    name: "Classic Denim Jacket",
    price: 5999,
    oldPrice: 7499,
    rating: "4.8",
    reviews: 72,
    category: "Jackets",
    badge: "POPULAR",
    stock: 11,
    image:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 8,
    name: "Luxury Beige Shirt",
    price: 4299,
    oldPrice: 5299,
    rating: "4.7",
    reviews: 89,
    category: "Shirts",
    badge: "NEW",
    stock: 13,
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 9,
    name: "Modern Grey Suit",
    price: 11999,
    oldPrice: 13999,
    rating: "4.9",
    reviews: 105,
    category: "Suits",
    badge: "LUXURY",
    stock: 4,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85",
  },
];

const categories = [
  {
    name: "Shirts",
    icon: "👔",
    text: "Smart everyday styles",
  },
  {
    name: "Jackets",
    icon: "🧥",
    text: "Modern outerwear",
  },
  {
    name: "Suits",
    icon: "🤵",
    text: "Premium formal looks",
  },
  {
    name: "Formal",
    icon: "✨",
    text: "Elegant occasions",
  },
];

const Shop = ({ darkMode }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [maxPrice, setMaxPrice] = useState(15000);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [quickView, setQuickView] = useState(null);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

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
      result.sort(
        (a, b) => Number(b.rating) - Number(a.rating)
      );
    }

    if (sort === "popular") {
      result.sort((a, b) => b.reviews - a.reviews);
    }

    return result;
  }, [search, category, maxPrice, sort]);

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const addToCart = (product) => {
    setCart((current) => [...current, product]);
    alert(`${product.name} added to your bag!`);
  };

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setMaxPrice(15000);
    setSort("default");
  };

  const discountPercentage = (oldPrice, price) => {
    return Math.round(((oldPrice - price) / oldPrice) * 100);
  };

  return (
    <main
      className={`min-h-screen ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-white text-zinc-900"
      }`}
    >
      {/* =========================================
          HERO
      ========================================== */}

      <section
        className={`px-6 py-20 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm tracking-[0.4em] text-gray-500">
                LUXEMEN • MEN'S COLLECTION
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">
                Find Your
                <br />
                <span className="font-light italic">
                  Signature Style.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
                Explore premium men's clothing designed
                for confidence, comfort and modern style.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
                >
                  Shop Collection
                </a>

                <Link
                  to="/sale"
                  className={`rounded-full border px-8 py-4 font-semibold transition hover:scale-105 ${
                    darkMode
                      ? "border-zinc-700 hover:bg-zinc-800"
                      : "border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  View Sale
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[30px]">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85"
                alt="Men's fashion"
                className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          BENEFITS
      ========================================== */}

      <section className="bg-black px-6 py-8 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-3xl">🚚</p>
            <h3 className="mt-2 font-bold">Fast Delivery</h3>
            <p className="mt-1 text-sm text-zinc-400">
              Across Pakistan
            </p>
          </div>

          <div>
            <p className="text-3xl">↩️</p>
            <h3 className="mt-2 font-bold">Easy Returns</h3>
            <p className="mt-1 text-sm text-zinc-400">
              Simple return policy
            </p>
          </div>

          <div>
            <p className="text-3xl">🔒</p>
            <h3 className="mt-2 font-bold">Secure Payment</h3>
            <p className="mt-1 text-sm text-zinc-400">
              100% secure checkout
            </p>
          </div>

          <div>
            <p className="text-3xl">⭐</p>
            <h3 className="mt-2 font-bold">Premium Quality</h3>
            <p className="mt-1 text-sm text-zinc-400">
              Carefully selected
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          CATEGORIES
      ========================================== */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm tracking-[0.3em] text-gray-500">
              SHOP BY CATEGORY
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Find Your Look
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setCategory(item.name);
                  document
                    .getElementById("products")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className={`rounded-2xl border p-8 text-left transition duration-300 hover:-translate-y-2 ${
                  darkMode
                    ? "border-zinc-800 bg-zinc-900 hover:bg-zinc-800"
                    : "border-gray-200 bg-gray-50 hover:bg-white hover:shadow-xl"
                }`}
              >
                <div className="text-4xl">{item.icon}</div>

                <h3 className="mt-5 text-xl font-bold">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {item.text}
                </p>

                <p className="mt-5 text-sm font-semibold">
                  Explore →
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SHOP HEADER + FILTERS
      ========================================== */}

      <section
        id="products"
        className={`px-6 py-20 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-50"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm tracking-[0.3em] text-gray-500">
              LUXEMEN COLLECTION
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-6xl">
              Shop Men's Clothing
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-gray-500">
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
                placeholder="Search men's clothing..."
                className={`w-full rounded-full border px-6 py-4 pr-14 outline-none transition ${
                  darkMode
                    ? "border-zinc-700 bg-zinc-950 text-white focus:border-white"
                    : "border-gray-200 bg-white focus:border-black"
                }`}
              />

              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xl">
                🔍
              </span>
            </div>
          </div>

          {/* FILTERS */}
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`rounded-full border px-5 py-3 outline-none ${
                darkMode
                  ? "border-zinc-700 bg-zinc-950"
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
              className={`rounded-full border px-5 py-3 outline-none ${
                darkMode
                  ? "border-zinc-700 bg-zinc-950"
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
              className={`rounded-full border px-5 py-3 outline-none ${
                darkMode
                  ? "border-zinc-700 bg-zinc-950"
                  : "border-gray-200 bg-white"
              }`}
            >
              <option value="default">Sort Products</option>
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

          {/* RESULTS */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-gray-500">
                Showing{" "}
                <span className="font-semibold">
                  {filteredProducts.length}
                </span>{" "}
                products
              </p>
            </div>

            <div className="flex items-center gap-5">
              <p className="text-sm text-gray-500">
                ❤️ {wishlist.length} Wishlist
              </p>

              <p className="text-sm text-gray-500">
                🛍️ {cart.length} Bag
              </p>

              {(search ||
                category !== "All" ||
                maxPrice !== 15000 ||
                sort !== "default") && (
                <button
                  onClick={clearFilters}
                  className="text-sm font-semibold underline"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* =========================================
              PRODUCTS
          ========================================== */}

          {filteredProducts.length > 0 ? (
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`group overflow-hidden rounded-3xl border transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
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
                      className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* BADGE */}
                    <span className="absolute left-4 top-4 rounded-full bg-black px-4 py-2 text-xs font-bold text-white">
                      {product.badge}
                    </span>

                    {/* DISCOUNT */}
                    <span className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-2 text-xs font-bold text-black shadow">
                      {discountPercentage(
                        product.oldPrice,
                        product.price
                      )}
                      % OFF
                    </span>

                    {/* WISHLIST */}
                    <button
                      onClick={() =>
                        toggleWishlist(product.id)
                      }
                      className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-lg transition hover:scale-110"
                    >
                      {wishlist.includes(product.id)
                        ? "❤️"
                        : "♡"}
                    </button>

                    {/* QUICK VIEW */}
                    <button
                      onClick={() => setQuickView(product)}
                      className="absolute bottom-4 right-4 rounded-full bg-black px-5 py-2 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100"
                    >
                      Quick View
                    </button>
                  </div>

                  {/* DETAILS */}
                  <div className="p-6">
                    <p className="text-xs tracking-[0.2em] text-gray-500">
                      LUXEMEN • {product.category}
                    </p>

                    <h3 className="mt-2 text-xl font-bold">
                      {product.name}
                    </h3>

                    {/* RATING */}
                    <div className="mt-3 flex items-center gap-2 text-sm">
                      <span>⭐ {product.rating}</span>

                      <span className="text-gray-500">
                        ({product.reviews} reviews)
                      </span>
                    </div>

                    {/* PRICE */}
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <span className="text-xl font-bold">
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
                        <p className="text-sm font-semibold text-red-500">
                          🔥 Only {product.stock} left
                        </p>
                      ) : (
                        <p className="text-sm text-green-600">
                          ✓ In stock
                        </p>
                      )}
                    </div>

                    {/* BUTTONS */}
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <Link
                        to={`/product/${product.id}`}
                        className={`rounded-full border px-4 py-3 text-center text-sm font-semibold transition hover:scale-[1.02] ${
                          darkMode
                            ? "border-zinc-700 hover:bg-zinc-800"
                            : "border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        Details
                      </Link>

                      <button
                        onClick={() => addToCart(product)}
                        className="rounded-full bg-black px-4 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
                      >
                        Add to Bag
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* EMPTY STATE */
            <div className="py-24 text-center">
              <div className="text-7xl">🔍</div>

              <h2 className="mt-6 text-3xl font-bold">
                No Products Found
              </h2>

              <p className="mt-3 text-gray-500">
                Try changing your search or filters.
              </p>

              <button
                onClick={clearFilters}
                className="mt-7 rounded-full bg-black px-8 py-4 font-semibold text-white"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================
          PROMOTIONAL BANNER
      ========================================== */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-black px-8 py-16 text-center text-white md:px-20">
          <p className="text-sm tracking-[0.4em] text-zinc-400">
            LUXEMEN SPECIAL
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            Upgrade Your Wardrobe.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            Get premium men's fashion with selected
            styles available at special prices.
          </p>

          <Link
            to="/sale"
            className="mt-8 inline-block rounded-full bg-white px-9 py-4 font-semibold text-black transition hover:scale-105"
          >
            Explore Sale
          </Link>
        </div>
      </section>

      {/* =========================================
          FINAL CTA
      ========================================== */}

      <section className="px-6 py-24 text-center">
        <p className="text-sm tracking-[0.3em] text-gray-500">
          YOUR STYLE STARTS HERE
        </p>

        <h2 className="mt-5 text-5xl font-bold md:text-6xl">
          Dress Sharp.
          <br />
          <span className="font-light italic">
            Feel Confident.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-gray-500">
          Discover carefully selected pieces made for
          the modern man.
        </p>

        <a
          href="#products"
          className="mt-8 inline-block rounded-full bg-black px-10 py-4 font-semibold text-white transition hover:scale-105"
        >
          Start Shopping
        </a>
      </section>

      {/* =========================================
          QUICK VIEW MODAL
      ========================================== */}

      {quickView && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm"
          onClick={() => setQuickView(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative grid max-h-[90vh] w-full max-w-4xl overflow-auto rounded-3xl ${
              darkMode
                ? "bg-zinc-900 text-white"
                : "bg-white text-zinc-900"
            } md:grid-cols-2`}
          >
            {/* CLOSE */}
            <button
              onClick={() => setQuickView(null)}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black text-xl text-white"
            >
              ×
            </button>

            <img
              src={quickView.image}
              alt={quickView.name}
              className="h-[450px] w-full object-cover md:h-full"
            />

            <div className="flex flex-col justify-center p-8 md:p-10">
              <p className="text-xs tracking-[0.3em] text-gray-500">
                LUXEMEN • {quickView.category}
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                {quickView.name}
              </h2>

              <div className="mt-4">
                ⭐ {quickView.rating}
                <span className="ml-2 text-gray-500">
                  ({quickView.reviews} reviews)
                </span>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <span className="text-2xl font-bold">
                  Rs.{" "}
                  {quickView.price.toLocaleString()}
                </span>

                <span className="text-gray-500 line-through">
                  Rs.{" "}
                  {quickView.oldPrice.toLocaleString()}
                </span>
              </div>

              <p className="mt-6 text-gray-500">
                Premium quality men's fashion designed
                for modern everyday style.
              </p>

              <button
                onClick={() => {
                  addToCart(quickView);
                  setQuickView(null);
                }}
                className="mt-8 rounded-full bg-black px-8 py-4 font-semibold text-white"
              >
                Add To Bag
              </button>

              <Link
                to={`/product/${quickView.id}`}
                onClick={() => setQuickView(null)}
                className={`mt-3 rounded-full border px-8 py-4 text-center font-semibold ${
                  darkMode
                    ? "border-zinc-700"
                    : "border-gray-300"
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
};

export default Shop;