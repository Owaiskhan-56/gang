import React, { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Classic Black Suit",
    price: 8999,
    rating: "4.9",
    reviews: 128,
    category: "Suits",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 2,
    name: "Premium Casual Shirt",
    price: 3999,
    rating: "4.8",
    reviews: 94,
    category: "Shirts",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 3,
    name: "Luxury Black Jacket",
    price: 7499,
    rating: "4.9",
    reviews: 76,
    category: "Jackets",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 4,
    name: "Modern White Shirt",
    price: 3499,
    rating: "4.7",
    reviews: 113,
    category: "Shirts",
    image:
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 5,
    name: "Premium Brown Jacket",
    price: 6999,
    rating: "4.8",
    reviews: 61,
    category: "Jackets",
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 6,
    name: "Elegant Formal Look",
    price: 9999,
    rating: "5.0",
    reviews: 82,
    category: "Formal",
    image:
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=800&q=85",
  },
];

const Shop = ({ darkMode }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [maxPrice, setMaxPrice] = useState(10000);
  const [wishlist, setWishlist] = useState([]);

  // SEARCH + FILTER
  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    const matchesPrice = product.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  // SORT
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "rating") {
    filteredProducts.sort(
      (a, b) => Number(b.rating) - Number(a.rating)
    );
  }

  // WISHLIST
  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <main
      className={`min-h-screen px-6 py-20 ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-white text-zinc-900"
      }`}
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="text-center">

          <p className="text-sm tracking-[0.3em] text-gray-500">
            LUXEMEN COLLECTION
          </p>

          <h1 className="mt-4 text-5xl font-bold md:text-6xl">
            Shop Men's Clothing
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-gray-500">
            Discover our premium collection of modern
            men's fashion.
          </p>

        </div>


        {/* SEARCH */}
        <div className="mt-14">

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search men's clothing..."
            className={`w-full rounded-full border px-6 py-4 outline-none ${
              darkMode
                ? "border-zinc-700 bg-zinc-900 text-white"
                : "border-gray-200 bg-gray-50"
            }`}
          />

        </div>


        {/* FILTERS */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">

          {/* CATEGORY */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={`rounded-full border px-5 py-3 outline-none ${
              darkMode
                ? "border-zinc-700 bg-zinc-900"
                : "border-gray-200 bg-white"
            }`}
          >
            <option value="All">All Categories</option>
            <option value="Shirts">Shirts</option>
            <option value="Jackets">Jackets</option>
            <option value="Suits">Suits</option>
            <option value="Formal">Formal</option>
          </select>


          {/* PRICE */}
          <select
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className={`rounded-full border px-5 py-3 outline-none ${
              darkMode
                ? "border-zinc-700 bg-zinc-900"
                : "border-gray-200 bg-white"
            }`}
          >
            <option value={10000}>All Prices</option>
            <option value={4000}>Under Rs. 4,000</option>
            <option value={6000}>Under Rs. 6,000</option>
            <option value={8000}>Under Rs. 8,000</option>
          </select>


          {/* SORT */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className={`rounded-full border px-5 py-3 outline-none ${
              darkMode
                ? "border-zinc-700 bg-zinc-900"
                : "border-gray-200 bg-white"
            }`}
          >
            <option value="default">Sort Products</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
            <option value="rating">Highest Rated</option>
          </select>

        </div>


        {/* RESULT COUNT */}
        <div className="mt-10 flex items-center justify-between">

          <p className="text-sm text-gray-500">
            Showing {filteredProducts.length} products
          </p>

          <p className="text-sm text-gray-500">
            ❤️ {wishlist.length} Wishlist
          </p>

        </div>


        {/* PRODUCTS */}
        {filteredProducts.length > 0 ? (

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {filteredProducts.map((product) => (

              <div
                key={product.id}
                className={`group overflow-hidden rounded-2xl border ${
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
                    className="h-[400px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />


                  {/* WISHLIST */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-md transition hover:scale-110"
                  >
                    {wishlist.includes(product.id)
                      ? "❤️"
                      : "♡"}
                  </button>

                </div>


                {/* DETAILS */}
                <div className="p-6">

                  <p className="text-xs tracking-widest text-gray-500">
                    LUXEMEN • {product.category}
                  </p>

                  <h2 className="mt-2 text-xl font-semibold">
                    {product.name}
                  </h2>


                  {/* RATING */}
                  <div className="mt-3 text-sm">
                    ⭐ {product.rating}

                    <span className="text-gray-500">
                      {" "}
                      ({product.reviews} reviews)
                    </span>
                  </div>


                  {/* PRICE */}
                  <p className="mt-4 text-xl font-bold">
                    Rs. {product.price.toLocaleString()}
                  </p>


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
                      View Details
                    </Link>

                    <button
                      onClick={() =>
                        alert(
                          `${product.name} added to bag!`
                        )
                      }
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

          /* NO RESULTS */
          <div className="py-24 text-center">

            <div className="text-6xl">
              🔍
            </div>

            <h2 className="mt-6 text-2xl font-bold">
              No products found
            </h2>

            <p className="mt-3 text-gray-500">
              Try another search or filter.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
                setMaxPrice(10000);
                setSort("default");
              }}
              className="mt-6 rounded-full bg-black px-7 py-3 font-semibold text-white"
            >
              Clear Filters
            </button>

          </div>

        )}

      </div>
    </main>
  );
};

export default Shop;