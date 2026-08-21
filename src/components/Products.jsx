import React, { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Classic Black Suit",
    brand: "LUXEMEN",
    category: "Formal",
    price: 8999,
    oldPrice: 10999,
    rating: "4.9",
    reviews: 128,
    bought: "500+",
    badge: "NEW",
    stock: 8,
    colors: ["Black", "Grey"],
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 2,
    name: "Premium Casual Shirt",
    brand: "LUXEMEN",
    category: "Shirts",
    price: 3999,
    oldPrice: 4999,
    rating: "4.8",
    reviews: 94,
    bought: "300+",
    badge: "POPULAR",
    stock: 14,
    colors: ["White", "Blue", "Black"],
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 3,
    name: "Luxury Black Jacket",
    brand: "LUXEMEN",
    category: "Jackets",
    price: 7499,
    oldPrice: 8999,
    rating: "4.9",
    reviews: 76,
    bought: "250+",
    badge: "NEW",
    stock: 6,
    colors: ["Black"],
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 4,
    name: "Modern White Shirt",
    brand: "LUXEMEN",
    category: "Shirts",
    price: 3499,
    oldPrice: 4499,
    rating: "4.7",
    reviews: 113,
    bought: "400+",
    badge: "BEST SELLER",
    stock: 10,
    colors: ["White", "Grey"],
    image:
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 5,
    name: "Premium Brown Jacket",
    brand: "LUXEMEN",
    category: "Jackets",
    price: 6999,
    oldPrice: 8999,
    rating: "4.8",
    reviews: 61,
    bought: "200+",
    badge: "NEW",
    stock: 5,
    colors: ["Brown", "Black"],
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 6,
    name: "Elegant Formal Look",
    brand: "LUXEMEN",
    category: "Formal",
    price: 9999,
    oldPrice: 11999,
    rating: "5.0",
    reviews: 82,
    bought: "350+",
    badge: "PREMIUM",
    stock: 4,
    colors: ["Black", "Grey"],
    image:
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 7,
    name: "Classic Denim Jacket",
    brand: "LUXEMEN",
    category: "Jackets",
    price: 5999,
    oldPrice: 7499,
    rating: "4.8",
    reviews: 72,
    bought: "180+",
    badge: "NEW",
    stock: 9,
    colors: ["Blue", "Black"],
    image:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 8,
    name: "Luxury Beige Shirt",
    brand: "LUXEMEN",
    category: "Shirts",
    price: 4299,
    oldPrice: 5299,
    rating: "4.7",
    reviews: 89,
    bought: "270+",
    badge: "POPULAR",
    stock: 12,
    colors: ["Beige", "White"],
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 9,
    name: "Modern Grey Suit",
    brand: "LUXEMEN",
    category: "Formal",
    price: 11999,
    oldPrice: 13999,
    rating: "4.9",
    reviews: 105,
    bought: "450+",
    badge: "PREMIUM",
    stock: 3,
    colors: ["Grey", "Black"],
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85",
  },
];

function Products({ darkMode, addToCart }) {
  const [wishlist, setWishlist] = useState([]);
  const [selectedSize, setSelectedSize] = useState({});
  const [selectedColor, setSelectedColor] = useState({});
  const [addedProduct, setAddedProduct] = useState(null);
  const [quickView, setQuickView] = useState(null);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  /* =========================================================
     WISHLIST
  ========================================================== */

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  /* =========================================================
     SIZE
  ========================================================== */

  const selectSize = (productId, size) => {
    setSelectedSize((current) => ({
      ...current,
      [productId]: size,
    }));
  };

  /* =========================================================
     COLOR
  ========================================================== */

  const selectColor = (productId, color) => {
    setSelectedColor((current) => ({
      ...current,
      [productId]: color,
    }));
  };

  /* =========================================================
     ADD TO BAG
  ========================================================== */

  const addToBag = (product) => {
    const productWithOptions = {
      ...product,
      size: selectedSize[product.id] || "M",
      color:
        selectedColor[product.id] ||
        product.colors[0],
    };

    if (addToCart) {
      addToCart(productWithOptions);
    }

    setAddedProduct(product.id);

    setTimeout(() => {
      setAddedProduct(null);
    }, 2500);
  };

  /* =========================================================
     DISCOUNT
  ========================================================== */

  const getDiscount = (price, oldPrice) => {
    return Math.round(
      ((oldPrice - price) / oldPrice) * 100
    );
  };

  return (
    <section
      id="shop"
      className={`px-6 py-24 ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-white text-zinc-900"
      }`}
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          id="new"
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-sm tracking-[0.3em] text-gray-500">
              LUXEMEN COLLECTION
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              New Arrivals
            </h2>

            <p className="mt-4 max-w-xl text-gray-500">
              Discover premium pieces designed for
              modern men's wardrobes.
            </p>
          </div>

          <div className="flex items-center gap-5">

            <div className="text-sm text-gray-500">
              ♡ {wishlist.length} saved
            </div>

            <Link
              to="/shop"
              className="text-sm font-semibold underline underline-offset-4"
            >
              View All Products →
            </Link>

          </div>
        </div>

        {/* =====================================================
            PRODUCT GRID
        ====================================================== */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => {

            const discount = getDiscount(
              product.price,
              product.oldPrice
            );

            const isWishlisted =
              wishlist.includes(product.id);

            const currentSize =
              selectedSize[product.id] || "M";

            const currentColor =
              selectedColor[product.id] ||
              product.colors[0];

            return (
              <div
                key={product.id}
                className={`group overflow-hidden rounded-3xl border transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  darkMode
                    ? "border-zinc-800 bg-zinc-900"
                    : "border-gray-200 bg-white"
                }`}
              >

                {/* =================================================
                    IMAGE
                ================================================== */}

                <div className="relative overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* IMAGE OVERLAY */}

                  <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

                  {/* BADGE */}

                  <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-[10px] font-bold tracking-wider text-black shadow-lg">
                    {product.badge}
                  </span>

                  {/* DISCOUNT */}

                  {discount > 0 && (
                    <span className="absolute left-4 top-14 rounded-full bg-black px-4 py-2 text-[10px] font-bold text-white">
                      {discount}% OFF
                    </span>
                  )}

                  {/* WISHLIST */}

                  <button
                    onClick={() =>
                      toggleWishlist(product.id)
                    }
                    aria-label="Add to wishlist"
                    className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-black shadow-lg transition hover:scale-110"
                  >
                    {isWishlisted
                      ? "❤️"
                      : "♡"}
                  </button>

                  {/* QUICK VIEW */}

                  <button
                    onClick={() =>
                      setQuickView(product)
                    }
                    className="absolute bottom-4 left-4 right-4 translate-y-16 rounded-full bg-white py-3 text-sm font-bold text-black opacity-0 shadow-xl transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    Quick View
                  </button>

                </div>

                {/* =================================================
                    PRODUCT DETAILS
                ================================================== */}

                <div className="p-6">

                  {/* BRAND */}

                  <div className="flex items-center justify-between">

                    <p className="text-xs tracking-[0.2em] text-gray-500">
                      {product.brand}
                    </p>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-600 dark:bg-zinc-800 dark:text-gray-400">
                      {product.category}
                    </span>

                  </div>

                  {/* NAME */}

                  <h3 className="mt-3 text-xl font-semibold">
                    {product.name}
                  </h3>

                  {/* RATING */}

                  <div className="mt-3 flex items-center gap-2 text-sm">

                    <span>
                      ⭐ {product.rating}
                    </span>

                    <span className="text-gray-500">
                      ({product.reviews})
                    </span>

                  </div>

                  {/* BOUGHT */}

                  <p className="mt-2 text-sm text-gray-500">
                    🔥 {product.bought} customers bought
                  </p>

                  {/* STOCK */}

                  <p
                    className={`mt-2 text-xs font-semibold ${
                      product.stock <= 5
                        ? "text-red-500"
                        : "text-green-600"
                    }`}
                  >
                    {product.stock <= 5
                      ? `Only ${product.stock} left in stock`
                      : "In stock • Ready to ship"}
                  </p>

                  {/* PRICE */}

                  <div className="mt-5 flex items-end gap-3">

                    <span className="text-xl font-bold">
                      Rs.{" "}
                      {product.price.toLocaleString()}
                    </span>

                    <span className="text-sm text-gray-400 line-through">
                      Rs.{" "}
                      {product.oldPrice.toLocaleString()}
                    </span>

                  </div>

                  {/* =================================================
                      COLORS
                  ================================================== */}

                  <div className="mt-5">

                    <div className="mb-2 flex items-center justify-between">

                      <p className="text-xs font-semibold">
                        Color
                      </p>

                      <span className="text-xs text-gray-500">
                        {currentColor}
                      </span>

                    </div>

                    <div className="flex gap-2">

                      {product.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() =>
                            selectColor(
                              product.id,
                              color
                            )
                          }
                          className={`rounded-full border px-3 py-1 text-xs transition ${
                            currentColor === color
                              ? darkMode
                                ? "border-white"
                                : "border-black"
                              : darkMode
                                ? "border-zinc-700"
                                : "border-gray-300"
                          }`}
                        >
                          {color}
                        </button>
                      ))}

                    </div>
                  </div>

                  {/* =================================================
                      SIZE
                  ================================================== */}

                  <div className="mt-5">

                    <div className="mb-2 flex items-center justify-between">

                      <p className="text-xs font-semibold">
                        Size
                      </p>

                      <span className="text-xs text-gray-500">
                        {currentSize}
                      </span>

                    </div>

                    <div className="flex gap-2">

                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() =>
                            selectSize(
                              product.id,
                              size
                            )
                          }
                          className={`flex h-9 w-9 items-center justify-center rounded-lg border text-xs font-medium transition ${
                            currentSize === size
                              ? "bg-black text-white"
                              : darkMode
                                ? "border-zinc-700 hover:bg-zinc-800"
                                : "border-gray-300 hover:bg-gray-100"
                          }`}
                        >
                          {size}
                        </button>
                      ))}

                    </div>
                  </div>

                  {/* =================================================
                      ACTIONS
                  ================================================== */}

                  <div className="mt-6 grid grid-cols-2 gap-3">

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
                      onClick={() =>
                        addToBag(product)
                      }
                      className="rounded-full bg-black px-4 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] active:scale-95"
                    >
                      {addedProduct === product.id
                        ? "✓ Added"
                        : "Add to Bag"}
                    </button>

                  </div>

                </div>
              </div>
            );
          })}

        </div>

        {/* =====================================================
            BOTTOM COLLECTION CTA
        ====================================================== */}

        <div
          className={`mt-20 overflow-hidden rounded-3xl px-8 py-16 text-center ${
            darkMode
              ? "bg-zinc-900"
              : "bg-zinc-100"
          }`}
        >

          <p className="text-sm tracking-[0.3em] text-gray-500">
            LUXEMEN
          </p>

          <h3 className="mt-4 text-4xl font-bold md:text-5xl">
            Find Your Signature Style.
          </h3>

          <p className="mx-auto mt-5 max-w-xl text-gray-500">
            Explore the complete LUXEMEN collection
            and discover premium clothing made for
            modern men.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-block rounded-full bg-black px-9 py-4 font-semibold text-white transition hover:scale-105"
          >
            Explore Full Collection →
          </Link>

        </div>

      </div>

      {/* =======================================================
          QUICK VIEW MODAL
      ======================================================== */}

      {quickView && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-6 py-10 backdrop-blur-sm"
          onClick={() => setQuickView(null)}
        >

          <div
            onClick={(e) =>
              e.stopPropagation()
            }
            className={`relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-3xl ${
              darkMode
                ? "bg-zinc-900 text-white"
                : "bg-white text-black"
            }`}
          >

            {/* CLOSE */}

            <button
              onClick={() => setQuickView(null)}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2">

              {/* IMAGE */}

              <div className="overflow-hidden">

                <img
                  src={quickView.image}
                  alt={quickView.name}
                  className="h-[500px] w-full object-cover md:h-full"
                />

              </div>

              {/* CONTENT */}

              <div className="p-8 md:p-10">

                <p className="text-xs tracking-[0.3em] text-gray-500">
                  {quickView.brand}
                </p>

                <h2 className="mt-4 text-3xl font-bold">
                  {quickView.name}
                </h2>

                <p className="mt-2 text-gray-500">
                  {quickView.category}
                </p>

                <div className="mt-5">
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

                  <span className="text-gray-400 line-through">
                    Rs.{" "}
                    {quickView.oldPrice.toLocaleString()}
                  </span>

                </div>

                <p className="mt-5 text-sm leading-7 text-gray-500">
                  Premium LUXEMEN clothing designed
                  with modern style, comfort and
                  quality in mind.
                </p>

                {/* QUICK VIEW SIZE */}

                <div className="mt-7">

                  <p className="mb-3 text-sm font-semibold">
                    Select Size
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() =>
                          selectSize(
                            quickView.id,
                            size
                          )
                        }
                        className={`rounded-lg border px-4 py-2 text-sm ${
                          selectedSize[
                            quickView.id
                          ] === size
                            ? "bg-black text-white"
                            : darkMode
                              ? "border-zinc-700"
                              : "border-gray-300"
                        }`}
                      >
                        {size}
                      </button>
                    ))}

                  </div>

                </div>

                {/* QUICK VIEW BUTTON */}

                <button
                  onClick={() => {
                    addToBag(quickView);
                    setQuickView(null);
                  }}
                  className="mt-8 w-full rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-[1.02]"
                >
                  Add To Bag →
                </button>

                <Link
                  to={`/product/${quickView.id}`}
                  onClick={() =>
                    setQuickView(null)
                  }
                  className={`mt-3 block w-full rounded-full border px-8 py-4 text-center font-semibold ${
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
        </div>
      )}
    </section>
  );
}

export default Products;