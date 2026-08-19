import React, { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Classic Black Suit",
    brand: "LUXEMEN",
    category: "Formal",
    price: 8999,
    rating: "4.9",
    reviews: 128,
    bought: "500+",
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 2,
    name: "Premium Casual Shirt",
    brand: "LUXEMEN",
    category: "Shirts",
    price: 3999,
    rating: "4.8",
    reviews: 94,
    bought: "300+",
    badge: "POPULAR",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 3,
    name: "Luxury Black Jacket",
    brand: "LUXEMEN",
    category: "Jackets",
    price: 7499,
    rating: "4.9",
    reviews: 76,
    bought: "250+",
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 4,
    name: "Modern White Shirt",
    brand: "LUXEMEN",
    category: "Shirts",
    price: 3499,
    rating: "4.7",
    reviews: 113,
    bought: "400+",
    badge: "BEST SELLER",
    image:
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 5,
    name: "Premium Brown Jacket",
    brand: "LUXEMEN",
    category: "Jackets",
    price: 6999,
    rating: "4.8",
    reviews: 61,
    bought: "200+",
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 6,
    name: "Elegant Formal Look",
    brand: "LUXEMEN",
    category: "Formal",
    price: 9999,
    rating: "5.0",
    reviews: 82,
    bought: "350+",
    badge: "PREMIUM",
    image:
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 7,
    name: "Classic Denim Jacket",
    brand: "LUXEMEN",
    category: "Jackets",
    price: 5999,
    rating: "4.8",
    reviews: 72,
    bought: "180+",
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 8,
    name: "Luxury Beige Shirt",
    brand: "LUXEMEN",
    category: "Shirts",
    price: 4299,
    rating: "4.7",
    reviews: 89,
    bought: "270+",
    badge: "POPULAR",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 9,
    name: "Modern Grey Suit",
    brand: "LUXEMEN",
    category: "Formal",
    price: 11999,
    rating: "4.9",
    reviews: 105,
    bought: "450+",
    badge: "PREMIUM",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85",
  },
];

function Products({ darkMode }) {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const addToBag = (product) => {
    alert(`${product.name} added to your shopping bag!`);
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

        {/* ================= HEADER ================= */}
        <div
          id="new"
          className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-sm tracking-[0.3em] text-gray-500">
              OUR COLLECTION
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              New Arrivals
            </h2>
          </div>

          <div className="flex flex-col gap-4 md:items-end">

            <p className="max-w-md text-gray-500">
              Discover premium pieces designed for
              modern men's wardrobes.
            </p>

            <Link
              to="/shop"
              className="text-sm font-semibold underline underline-offset-4"
            >
              View All Products →
            </Link>

          </div>
        </div>


        {/* ================= PRODUCTS ================= */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (

            <div
              key={product.id}
              className={`group overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-gray-200 bg-white"
              }`}
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                />


                {/* BADGE */}
                <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-black shadow">
                  {product.badge}
                </span>


                {/* WISHLIST */}
                <button
                  onClick={() =>
                    toggleWishlist(product.id)
                  }
                  aria-label="Add to wishlist"
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow transition hover:scale-110"
                >
                  {wishlist.includes(product.id)
                    ? "❤️"
                    : "♡"}
                </button>


                {/* IMAGE HOVER BUTTON */}
                <div className="absolute inset-x-4 bottom-4 translate-y-16 transition duration-300 group-hover:translate-y-0">

                  <Link
                    to={`/product/${product.id}`}
                    className="block w-full rounded-full bg-white py-3 text-center text-sm font-bold text-black shadow-lg"
                  >
                    View Details
                  </Link>

                </div>

              </div>


              {/* DETAILS */}
              <div className="p-6">

                {/* BRAND + CATEGORY */}
                <div className="flex items-center justify-between">

                  <p className="text-xs tracking-[0.2em] text-gray-500">
                    {product.brand}
                  </p>

                  <span className="text-xs text-gray-500">
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
                    ({product.reviews} reviews)
                  </span>

                </div>


                {/* BOUGHT */}
                <p className="mt-2 text-sm text-gray-500">
                  🔥 {product.bought} bought
                </p>


                {/* PRICE */}
                <div className="mt-5 flex items-center justify-between gap-4">

                  <span className="text-xl font-bold">
                    Rs. {product.price.toLocaleString()}
                  </span>


                  {/* ADD BAG */}
                  <button
                    onClick={() =>
                      addToBag(product)
                    }
                    className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:scale-105"
                  >
                    Add to Bag
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* ================= BOTTOM BUTTON ================= */}
        <div className="mt-16 text-center">

          <Link
            to="/shop"
            className={`inline-block rounded-full border px-9 py-4 font-semibold transition hover:scale-105 ${
              darkMode
                ? "border-zinc-700 hover:bg-zinc-900"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            Explore Full Collection →
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Products;