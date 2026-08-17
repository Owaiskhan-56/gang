import React from "react";

const products = [
  {
    id: 1,
    name: "Classic Black Suit",
    brand: "LUXEMEN",
    price: 8999,
    rating: "4.9",
    reviews: "128",
    bought: "500+",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 2,
    name: "Premium Casual Shirt",
    brand: "LUXEMEN",
    price: 3999,
    rating: "4.8",
    reviews: "94",
    bought: "300+",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 3,
    name: "Luxury Black Jacket",
    brand: "LUXEMEN",
    price: 7499,
    rating: "4.9",
    reviews: "76",
    bought: "250+",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 4,
    name: "Modern White Shirt",
    brand: "LUXEMEN",
    price: 3499,
    rating: "4.7",
    reviews: "113",
    bought: "400+",
    image:
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 5,
    name: "Premium Brown Jacket",
    brand: "LUXEMEN",
    price: 6999,
    rating: "4.8",
    reviews: "61",
    bought: "200+",
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=85",
  },

  {
    id: 6,
    name: "Elegant Formal Look",
    brand: "LUXEMEN",
    price: 9999,
    rating: "5.0",
    reviews: "82",
    bought: "350+",
    image:
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=800&q=85",
  },
];

function Products({ darkMode }) {
  return (
    <section
      id="shop"
      className={`px-6 py-24 ${
        darkMode ? "bg-zinc-950" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
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

          <p className="max-w-md text-gray-500">
            Discover premium pieces designed for
            modern men's wardrobes.
          </p>
        </div>

        {/* PRODUCTS */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (
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
                  className="h-[400px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black">
                  NEW
                </span>

              </div>

              {/* DETAILS */}
              <div className="p-6">

                <p className="text-xs tracking-widest text-gray-500">
                  {product.brand}
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-sm">
                  <span>⭐ {product.rating}</span>
                  <span className="text-gray-500">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  {product.bought} bought
                </p>

                <div className="mt-5 flex items-center justify-between">

                  <span className="text-xl font-bold">
                    Rs. {product.price.toLocaleString()}
                  </span>

                  <button
                    onClick={() =>
                      alert(`${product.name} added to bag!`)
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
      </div>
    </section>
  );
}

export default Products;