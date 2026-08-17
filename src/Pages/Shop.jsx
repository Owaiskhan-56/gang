import React from "react";

const products = [
  {
    id: 1,
    name: "Classic Black Suit",
    price: 8999,
    rating: "4.9",
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 2,
    name: "Premium Casual Shirt",
    price: 3999,
    rating: "4.8",
    reviews: 94,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 3,
    name: "Luxury Black Jacket",
    price: 7499,
    rating: "4.9",
    reviews: 76,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 4,
    name: "Modern White Shirt",
    price: 3499,
    rating: "4.7",
    reviews: 113,
    image:
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 5,
    name: "Premium Brown Jacket",
    price: 6999,
    rating: "4.8",
    reviews: 61,
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 6,
    name: "Elegant Formal Look",
    price: 9999,
    rating: "5.0",
    reviews: 82,
    image:
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=800&q=85",
  },
];

const Shop = ({ darkMode }) => {
  return (
    <main
      className={`min-h-screen px-6 py-20 ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-white text-zinc-900"
      }`}
    >
      <div className="mx-auto max-w-7xl">

        <p className="text-sm tracking-[0.3em] text-gray-500">
          LUXEMEN COLLECTION
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Shop Men's Clothing
        </h1>

        <p className="mt-5 max-w-xl text-gray-500">
          Discover our premium collection of modern
          men's fashion.
        </p>

        {/* PRODUCTS */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (
            <div
              key={product.id}
              className={`overflow-hidden rounded-2xl border ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-[400px] w-full object-cover"
              />

              <div className="p-6">

                <p className="text-xs tracking-widest text-gray-500">
                  LUXEMEN
                </p>

                <h2 className="mt-2 text-xl font-semibold">
                  {product.name}
                </h2>

                <div className="mt-3 text-sm">
                  ⭐ {product.rating}{" "}
                  <span className="text-gray-500">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <p className="mt-4 text-xl font-bold">
                  Rs. {product.price.toLocaleString()}
                </p>

                <button
                  onClick={() =>
                    alert(`${product.name} added to bag!`)
                  }
                  className="mt-5 w-full rounded-full bg-black px-5 py-3 font-semibold text-white transition hover:scale-[1.02]"
                >
                  Add to Bag
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
};

export default Shop;