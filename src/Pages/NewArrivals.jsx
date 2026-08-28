import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const NewArrivals = ({
  darkMode = false,
  addToCart,
  cart = [],
}) => {
  const [wishlist, setWishlist] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [quickView, setQuickView] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [addedProduct, setAddedProduct] = useState("");
  const [showWishlistOnly, setShowWishlistOnly] = useState(false);

  const products = [
    {
      id: 1,
      name: "Premium Black Shirt",
      price: 4499,
      oldPrice: 5499,
      rating: 4.9,
      reviews: 54,
      category: "Shirts",
      badge: "BESTSELLER",
      stock: 12,
      sizes: ["S", "M", "L", "XL"],
      description:
        "A refined black shirt crafted for effortless elegance. Premium fabric, modern tailoring and timeless style.",
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 2,
      name: "Luxury Casual Jacket",
      price: 7999,
      oldPrice: 9999,
      rating: 4.8,
      reviews: 42,
      category: "Jackets",
      badge: "TRENDING",
      stock: 8,
      sizes: ["M", "L", "XL"],
      description:
        "A modern luxury jacket combining street-inspired design with a sophisticated premium finish.",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 3,
      name: "Classic White Outfit",
      price: 5999,
      oldPrice: 6999,
      rating: 4.9,
      reviews: 67,
      category: "Casual",
      badge: "NEW",
      stock: 15,
      sizes: ["S", "M", "L", "XL"],
      description:
        "Clean, confident and contemporary. A premium white outfit for effortless everyday style.",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 4,
      name: "Modern Beige Shirt",
      price: 3999,
      oldPrice: 4999,
      rating: 4.7,
      reviews: 38,
      category: "Shirts",
      badge: "NEW",
      stock: 19,
      sizes: ["S", "M", "L"],
      description:
        "A sophisticated beige essential featuring a modern cut and versatile premium styling.",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 5,
      name: "Urban Denim Jacket",
      price: 6999,
      oldPrice: 8499,
      rating: 4.8,
      reviews: 45,
      category: "Jackets",
      badge: "HOT",
      stock: 6,
      sizes: ["M", "L", "XL"],
      description:
        "An urban denim statement piece made for confident everyday styling.",
      image:
        "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 6,
      name: "Modern Formal Look",
      price: 8999,
      oldPrice: 10999,
      rating: 5.0,
      reviews: 29,
      category: "Formal",
      badge: "PREMIUM",
      stock: 5,
      sizes: ["S", "M", "L", "XL"],
      description:
        "A premium formal look designed for weddings, meetings and special occasions.",
      image:
        "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 7,
      name: "Premium Navy Polo",
      price: 3499,
      oldPrice: 4299,
      rating: 4.8,
      reviews: 73,
      category: "Casual",
      badge: "NEW",
      stock: 24,
      sizes: ["S", "M", "L", "XL"],
      description:
        "A luxurious navy polo with a clean silhouette for casual and smart styling.",
      image:
        "https://images.unsplash.com/photo-1625910513413-5fc45c5d8fce?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 8,
      name: "Classic Black Blazer",
      price: 9999,
      oldPrice: 11999,
      rating: 4.9,
      reviews: 36,
      category: "Formal",
      badge: "PREMIUM",
      stock: 4,
      sizes: ["M", "L", "XL"],
      description:
        "The ultimate black blazer for a sharp, sophisticated and timeless wardrobe.",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=90",
    },
    {
      id: 9,
      name: "Oversized Street Hoodie",
      price: 4999,
      oldPrice: 5999,
      rating: 4.7,
      reviews: 81,
      category: "Casual",
      badge: "TRENDING",
      stock: 11,
      sizes: ["S", "M", "L", "XL"],
      description:
        "A relaxed oversized hoodie designed for premium streetwear styling and everyday comfort.",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=90",
    },
  ];

  const categories = [
    "All",
    "Shirts",
    "Jackets",
    "Casual",
    "Formal",
  ];

  const formatPrice = (price) => {
    return `Rs. ${price.toLocaleString("en-PK")}`;
  };

  const getDiscount = (price, oldPrice) => {
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

  const openQuickView = (product) => {
    setQuickView(product);
    setSelectedSize(product.sizes[0]);
  };

  const closeQuickView = () => {
    setQuickView(null);
    setSelectedSize("");
  };

  const handleAddToCart = (
    product,
    size = product.sizes[0]
  ) => {
    if (addToCart) {
      addToCart({
        ...product,
        selectedSize: size,
        quantity: 1,
      });
    }

    setAddedProduct(product.name);

    setTimeout(() => {
      setAddedProduct("");
    }, 2500);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== "All") {
      result = result.filter(
        (product) => product.category === category
      );
    }

    if (showWishlistOnly) {
      result = result.filter((product) =>
        wishlist.includes(product.id)
      );
    }

    if (search.trim()) {
      const keyword = search.toLowerCase().trim();

      result = result.filter((product) => {
        return (
          product.name.toLowerCase().includes(keyword) ||
          product.category.toLowerCase().includes(keyword) ||
          product.badge.toLowerCase().includes(keyword)
        );
      });
    }

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

    if (sort === "discount") {
      result.sort(
        (a, b) =>
          getDiscount(b.price, b.oldPrice) -
          getDiscount(a.price, a.oldPrice)
      );
    }

    return result;
  }, [
    category,
    search,
    sort,
    showWishlistOnly,
    wishlist,
  ]);

  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  return (
    <main
      className={`min-h-screen overflow-hidden ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-white text-zinc-900"
      }`}
    >
      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section
        className={`relative overflow-hidden px-5 py-20 sm:px-8 md:py-28 lg:px-12 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-zinc-300/20 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-current" />

                <span className="text-xs font-bold tracking-[0.4em] text-zinc-500">
                  LUXEMEN
                </span>
              </div>

              <p className="text-sm font-semibold tracking-[0.35em] text-zinc-500">
                NEW SEASON • 2026
              </p>

              <h1 className="mt-6 text-6xl font-black leading-[0.85] tracking-tight sm:text-7xl md:text-8xl">
                New
                <br />

                <span className="font-light italic">
                  Arrivals.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-zinc-500 sm:text-lg">
                Discover the newest generation of LUXEMEN.
                Premium fabrics, modern silhouettes and
                effortless confidence — designed for the
                man who refuses ordinary.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#new-products"
                  className="rounded-full bg-black px-8 py-4 text-sm font-bold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-white dark:text-black"
                >
                  Explore Collection →
                </a>

                <Link
                  to="/shop"
                  className={`rounded-full border px-8 py-4 text-sm font-bold transition duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? "border-zinc-700 hover:bg-zinc-800"
                      : "border-zinc-300 hover:bg-white"
                  }`}
                >
                  Shop All
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap gap-8 border-t border-zinc-300/50 pt-8 dark:border-zinc-700">
                <div>
                  <p className="text-2xl font-black">
                    09+
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    New Pieces
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-black">
                    4.8★
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    Avg. Rating
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-black">
                    100%
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    Premium
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[38px] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=90"
                  alt="LUXEMEN new men's collection"
                  className="h-[560px] w-full object-cover transition duration-1000 hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white px-6 py-5 shadow-2xl sm:-left-8 dark:bg-zinc-800">
                <p className="text-[10px] font-bold tracking-[0.25em] text-zinc-500">
                  COLLECTION
                </p>

                <p className="mt-1 text-lg font-black">
                  2026 / 01
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PREMIUM INFO BAR
      ====================================================== */}

      <section className="bg-black px-5 py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-3xl font-black">09+</p>
            <p className="mt-2 text-xs text-zinc-500">
              New Products
            </p>
          </div>

          <div>
            <p className="text-3xl font-black">2026</p>
            <p className="mt-2 text-xs text-zinc-500">
              Latest Collection
            </p>
          </div>

          <div>
            <p className="text-3xl font-black">4.8★</p>
            <p className="mt-2 text-xs text-zinc-500">
              Average Rating
            </p>
          </div>

          <div>
            <p className="text-3xl font-black">100%</p>
            <p className="mt-2 text-xs text-zinc-500">
              Premium Quality
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS SECTION
      ====================================================== */}

      <section
        id="new-products"
        className="px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.4em] text-zinc-500">
              FRESH FROM LUXEMEN
            </p>

            <h2 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl">
              Latest{" "}
              <span className="font-light italic">
                Pieces.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-7 text-zinc-500">
              Meet the newest additions to the LUXEMEN
              wardrobe. Carefully selected for modern
              confidence, comfort and style.
            </p>
          </div>

          {/* SEARCH */}

          <div className="mx-auto mt-14 max-w-3xl">
            <div
              className={`flex items-center rounded-full border px-6 py-4 ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-zinc-200 bg-zinc-50"
              }`}
            >
              <span className="mr-4 text-xl">
                🔎
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search shirts, jackets, casual..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-500"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="ml-3 text-zinc-500 hover:text-red-500"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* CATEGORIES */}

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full px-6 py-3 text-xs font-bold transition ${
                  category === item
                    ? "bg-black text-white shadow-lg dark:bg-white dark:text-black"
                    : darkMode
                    ? "border border-zinc-800 hover:bg-zinc-900"
                    : "border border-zinc-200 hover:bg-zinc-100"
                }`}
              >
                {item}
              </button>
            ))}

            <button
              type="button"
              onClick={() =>
                setShowWishlistOnly(!showWishlistOnly)
              }
              className={`rounded-full px-6 py-3 text-xs font-bold transition ${
                showWishlistOnly
                  ? "bg-red-500 text-white"
                  : darkMode
                  ? "border border-zinc-800"
                  : "border border-zinc-200"
              }`}
            >
              ♥ Wishlist ({wishlist.length})
            </button>
          </div>

          {/* SORT */}

          <div className="mt-12 flex flex-col justify-between gap-5 border-y border-zinc-200 py-5 dark:border-zinc-800 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold">
                {filteredProducts.length} Products
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                Curated for the new season
              </p>
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className={`rounded-full border px-5 py-3 text-xs font-semibold outline-none ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-zinc-200 bg-white"
              }`}
            >
              <option value="featured">
                Sort: Featured
              </option>

              <option value="low">
                Price: Low to High
              </option>

              <option value="high">
                Price: High to Low
              </option>

              <option value="rating">
                Highest Rated
              </option>

              <option value="popular">
                Most Reviewed
              </option>

              <option value="discount">
                Biggest Discount
              </option>
            </select>
          </div>

          {/* PRODUCT GRID */}

          {filteredProducts.length === 0 ? (
            <div className="py-32 text-center">
              <div className="text-7xl">🔎</div>

              <h3 className="mt-7 text-3xl font-black">
                Nothing Found
              </h3>

              <p className="mx-auto mt-3 max-w-md text-zinc-500">
                We couldn't find anything matching your
                current filters.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                  setShowWishlistOnly(false);
                }}
                className="mt-7 rounded-full bg-black px-7 py-3 text-sm font-bold text-white dark:bg-white dark:text-black"
              >
                Reset Everything
              </button>
            </div>
          ) : (
            <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => {
                const isWishlisted =
                  wishlist.includes(product.id);

                const cartItem = cart.find(
                  (item) => item.id === product.id
                );

                const discount = getDiscount(
                  product.price,
                  product.oldPrice
                );

                return (
                  <article
                    key={product.id}
                    className={`group overflow-hidden rounded-[30px] border transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                      darkMode
                        ? "border-zinc-800 bg-zinc-900"
                        : "border-zinc-200 bg-white"
                    }`}
                  >
                    {/* PRODUCT IMAGE */}

                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-[450px] w-full object-cover transition duration-1000 group-hover:scale-110"
                      />

                      {/* BADGES */}

                      <div className="absolute left-4 top-4 flex flex-col gap-2">
                        <span className="w-fit rounded-full bg-black px-4 py-2 text-[10px] font-black tracking-wider text-white">
                          {product.badge}
                        </span>

                        <span className="w-fit rounded-full bg-white px-4 py-2 text-[10px] font-black text-black shadow-lg">
                          -{discount}%
                        </span>
                      </div>

                      {/* WISHLIST */}

                      <button
                        type="button"
                        onClick={() =>
                          toggleWishlist(product.id)
                        }
                        className={`absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full text-xl shadow-xl transition hover:scale-110 ${
                          isWishlisted
                            ? "bg-red-500 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        {isWishlisted ? "♥" : "♡"}
                      </button>

                      {/* QUICK VIEW */}

                      <button
                        type="button"
                        onClick={() =>
                          openQuickView(product)
                        }
                        className="absolute bottom-5 left-5 right-5 rounded-full bg-white py-4 text-xs font-black text-black opacity-0 shadow-2xl transition duration-500 group-hover:opacity-100"
                      >
                        QUICK VIEW →
                      </button>
                    </div>

                    {/* PRODUCT DETAILS */}

                    <div className="p-6">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[10px] font-bold tracking-[0.25em] text-zinc-500">
                          LUXEMEN • {product.category}
                        </p>

                        <span
                          className={`text-[10px] font-bold ${
                            product.stock <= 5
                              ? "text-red-500"
                              : "text-emerald-500"
                          }`}
                        >
                          {product.stock <= 5
                            ? "LOW STOCK"
                            : "IN STOCK"}
                        </span>
                      </div>

                      <h3 className="mt-3 text-xl font-black">
                        {product.name}
                      </h3>

                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-sm">
                          ★ {product.rating}
                        </span>

                        <span className="text-xs text-zinc-500">
                          ({product.reviews} reviews)
                        </span>
                      </div>

                      {/* PRICE */}

                      <div className="mt-5 flex items-center gap-3">
                        <span className="text-xl font-black">
                          {formatPrice(product.price)}
                        </span>

                        <span className="text-sm text-zinc-400 line-through">
                          {formatPrice(product.oldPrice)}
                        </span>
                      </div>

                      {/* SIZES */}

                      <div className="mt-5">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                          Available Sizes
                        </p>

                        <div className="mt-2 flex gap-2">
                          {product.sizes.map((size) => (
                            <span
                              key={size}
                              className={`rounded-lg border px-3 py-1.5 text-[10px] font-bold ${
                                darkMode
                                  ? "border-zinc-700"
                                  : "border-zinc-200"
                              }`}
                            >
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* BUTTONS */}

                      <div className="mt-6 grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() =>
                            openQuickView(product)
                          }
                          className={`rounded-full border py-3 text-xs font-bold transition hover:-translate-y-0.5 ${
                            darkMode
                              ? "border-zinc-700 hover:bg-zinc-800"
                              : "border-zinc-200 hover:bg-zinc-100"
                          }`}
                        >
                          Details
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            handleAddToCart(product)
                          }
                          className="rounded-full bg-black py-3 text-xs font-bold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-black"
                        >
                          {cartItem
                            ? `In Bag (${cartItem.quantity})`
                            : "Add To Bag"}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          VIP EXPERIENCE
      ====================================================== */}

      <section
        className={`px-5 py-24 sm:px-8 lg:px-12 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[40px] bg-black px-7 py-16 text-white shadow-2xl md:px-16 lg:px-20">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="text-xs font-bold tracking-[0.4em] text-zinc-500">
                  THE LUXEMEN EXPERIENCE
                </p>

                <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                  Not Just Clothes.
                  <br />

                  <span className="font-light italic">
                    An Identity.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-zinc-400">
                  Every LUXEMEN piece is selected to help
                  you look sharper, feel stronger and move
                  with confidence.
                </p>

                <Link
                  to="/shop"
                  className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition hover:scale-105"
                >
                  Explore LUXEMEN →
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                  <p className="text-4xl font-black">
                    100%
                  </p>

                  <p className="mt-2 text-xs text-zinc-500">
                    Premium Quality
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                  <p className="text-4xl font-black">
                    4.8★
                  </p>

                  <p className="mt-2 text-xs text-zinc-500">
                    Customer Rating
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                  <p className="text-4xl font-black">
                    09+
                  </p>

                  <p className="mt-2 text-xs text-zinc-500">
                    New Arrivals
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                  <p className="text-4xl font-black">
                    VIP
                  </p>

                  <p className="mt-2 text-xs text-zinc-500">
                    Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WISHLIST
      ====================================================== */}

      <section className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold tracking-[0.4em] text-zinc-500">
                YOUR FAVORITES
              </p>

              <h2 className="mt-5 text-5xl font-black tracking-tight">
                Your
                <br />

                <span className="font-light italic">
                  Wishlist.
                </span>
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-zinc-500">
                Keep the pieces you love close. Your
                favorite LUXEMEN styles are only one click
                away.
              </p>

              <button
                type="button"
                onClick={() =>
                  setShowWishlistOnly(!showWishlistOnly)
                }
                className="mt-8 rounded-full bg-black px-7 py-4 text-sm font-bold text-white dark:bg-white dark:text-black"
              >
                {showWishlistOnly
                  ? "View All Products"
                  : `View Wishlist (${wishlist.length})`}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {products
                .filter((product) =>
                  wishlist.includes(product.id)
                )
                .slice(0, 4)
                .map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => openQuickView(product)}
                    className="group relative overflow-hidden rounded-3xl"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                    <p className="absolute bottom-4 left-4 right-4 text-left text-sm font-bold text-white">
                      {product.name}
                    </p>
                  </button>
                ))}

              {wishlist.length === 0 && (
                <div className="col-span-2 rounded-[30px] border border-dashed border-zinc-300 p-16 text-center dark:border-zinc-700">
                  <div className="text-6xl">♡</div>

                  <h3 className="mt-5 text-xl font-black">
                    Nothing saved yet.
                  </h3>

                  <p className="mt-2 text-sm text-zinc-500">
                    Tap the heart on a product to add it
                    here.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}

      <section
        className={`px-5 py-24 sm:px-8 lg:px-12 ${
          darkMode ? "bg-zinc-900" : "bg-zinc-100"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.4em] text-zinc-500">
              WHY LUXEMEN
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              Built Around You.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "01",
                "Fast Delivery",
                "Reliable delivery within 3–5 business days.",
              ],
              [
                "02",
                "Secure Payment",
                "Protected checkout and secure payment processing.",
              ],
              [
                "03",
                "Easy Returns",
                "Simple return experience when something isn't right.",
              ],
              [
                "04",
                "Premium Support",
                "Our team is ready whenever you need assistance.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className={`rounded-[30px] p-8 transition duration-500 hover:-translate-y-2 ${
                  darkMode
                    ? "bg-zinc-950"
                    : "bg-white"
                }`}
              >
                <p className="text-xs font-black text-zinc-400">
                  {number}
                </p>

                <div className="mt-8 text-3xl">
                  ✦
                </div>

                <h3 className="mt-6 text-lg font-black">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NEWSLETTER
      ====================================================== */}

      <section className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-black px-7 py-20 text-center text-white shadow-2xl md:px-20">
          <p className="text-xs font-bold tracking-[0.4em] text-zinc-500">
            JOIN THE LUXEMEN CLUB
          </p>

          <h2 className="mt-6 text-5xl font-black sm:text-6xl">
            Never Miss
            <br />

            <span className="font-light italic">
              A Drop.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-7 text-zinc-400">
            Get early access to new arrivals, exclusive
            offers and the latest LUXEMEN releases.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Welcome to the LUXEMEN community!"
              );
            }}
            className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 rounded-full bg-white px-6 py-4 text-sm text-black outline-none"
            />

            <button
              type="submit"
              className="rounded-full bg-white px-8 py-4 text-sm font-black text-black transition hover:scale-105"
            >
              Subscribe →
            </button>
          </form>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-5 pb-28 text-center">
        <p className="text-xs font-bold tracking-[0.4em] text-zinc-500">
          YOUR NEXT LOOK
        </p>

        <h2 className="mt-6 text-5xl font-black sm:text-7xl">
          Fresh Style.
          <br />

          <span className="font-light italic">
            Fresh Start.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-xl leading-7 text-zinc-500">
          Your wardrobe deserves something new.
          Discover the complete LUXEMEN collection.
        </p>

        <Link
          to="/shop"
          className="mt-9 inline-flex rounded-full bg-black px-10 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:shadow-xl dark:bg-white dark:text-black"
        >
          Shop Collection →
        </Link>
      </section>

      {/* =====================================================
          QUICK VIEW MODAL
      ====================================================== */}

      {quickView && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={closeQuickView}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[35px] shadow-2xl ${
              darkMode
                ? "bg-zinc-900 text-white"
                : "bg-white text-zinc-900"
            }`}
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative">
                <img
                  src={quickView.image}
                  alt={quickView.name}
                  className="h-[450px] w-full object-cover lg:h-full lg:min-h-[650px]"
                />

                <div className="absolute left-5 top-5 rounded-full bg-black px-4 py-2 text-xs font-bold text-white">
                  {quickView.badge}
                </div>
              </div>

              <div className="p-7 sm:p-10 lg:p-14">
                <button
                  type="button"
                  onClick={closeQuickView}
                  className="float-right flex h-11 w-11 items-center justify-center rounded-full bg-zinc-100 text-black transition hover:rotate-90 dark:bg-zinc-800 dark:text-white"
                >
                  ✕
                </button>

                <p className="pt-2 text-[10px] font-bold tracking-[0.3em] text-zinc-500">
                  LUXEMEN • {quickView.category}
                </p>

                <h2 className="mt-6 text-4xl font-black leading-tight">
                  {quickView.name}
                </h2>

                <div className="mt-5 flex items-center gap-3">
                  <span>
                    ★ {quickView.rating}
                  </span>

                  <span className="text-sm text-zinc-500">
                    {quickView.reviews} Reviews
                  </span>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <span className="text-3xl font-black">
                    {formatPrice(quickView.price)}
                  </span>

                  <span className="text-sm text-zinc-400 line-through">
                    {formatPrice(quickView.oldPrice)}
                  </span>

                  <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                    -
                    {getDiscount(
                      quickView.price,
                      quickView.oldPrice
                    )}
                    %
                  </span>
                </div>

                <p className="mt-7 leading-8 text-zinc-500">
                  {quickView.description}
                </p>

                {/* SIZE */}

                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-black uppercase tracking-widest">
                      Select Size
                    </p>

                    <span className="text-xs text-zinc-500">
                      {quickView.stock} left
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {quickView.sizes.map((size) => (
                      <button
                        type="button"
                        key={size}
                        onClick={() =>
                          setSelectedSize(size)
                        }
                        className={`rounded-xl border px-5 py-3 text-xs font-bold transition ${
                          selectedSize === size
                            ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                            : darkMode
                            ? "border-zinc-700 hover:bg-zinc-800"
                            : "border-zinc-200 hover:bg-zinc-100"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* MODAL ACTIONS */}

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() =>
                      toggleWishlist(quickView.id)
                    }
                    className={`rounded-full border py-4 text-sm font-bold ${
                      wishlist.includes(quickView.id)
                        ? "border-red-500 text-red-500"
                        : darkMode
                        ? "border-zinc-700"
                        : "border-zinc-200"
                    }`}
                  >
                    {wishlist.includes(quickView.id)
                      ? "♥ Saved"
                      : "♡ Save"}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      handleAddToCart(
                        quickView,
                        selectedSize
                      );

                      closeQuickView();
                    }}
                    className="rounded-full bg-black py-4 text-sm font-bold text-white dark:bg-white dark:text-black"
                  >
                    Add To Bag →
                  </button>
                </div>

                {/* GUARANTEE */}

                <div className="mt-8 grid grid-cols-3 gap-3 border-t border-zinc-200 pt-7 dark:border-zinc-800">
                  <div className="text-center">
                    <p className="text-lg">🚚</p>

                    <p className="mt-2 text-[9px] font-bold text-zinc-500">
                      FAST DELIVERY
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-lg">🔒</p>

                    <p className="mt-2 text-[9px] font-bold text-zinc-500">
                      SECURE PAY
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-lg">↩️</p>

                    <p className="mt-2 text-[9px] font-bold text-zinc-500">
                      EASY RETURNS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          CART SUCCESS NOTIFICATION
      ====================================================== */}

      {addedProduct && (
        <div className="fixed bottom-6 left-1/2 z-[120] w-[calc(100%-32px)] max-w-md -translate-x-1/2 rounded-2xl bg-black px-5 py-4 text-white shadow-2xl dark:bg-white dark:text-black">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
              ✓
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-black">
                ADDED TO BAG
              </p>

              <p className="mt-1 truncate text-xs opacity-60">
                {addedProduct}
              </p>
            </div>

            <Link
              to="/cart"
              className="shrink-0 rounded-full border border-current px-4 py-2 text-xs font-bold"
            >
              Bag ({cartCount})
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default NewArrivals;