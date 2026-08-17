import React from "react";

const NewArrivals = ({ darkMode }) => {
  const products = [
    {
      name: "Premium Black Shirt",
      price: 4499,
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=85",
    },
    {
      name: "Luxury Casual Jacket",
      price: 7999,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85",
    },
    {
      name: "Classic White Outfit",
      price: 5999,
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85",
    },
  ];

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
          JUST DROPPED
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          New Arrivals
        </h1>

        <p className="mt-5 text-gray-500">
          Fresh styles for your wardrobe.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {products.map((product, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-[450px] w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-xl font-semibold">
                  {product.name}
                </h2>

                <p className="mt-3 font-bold">
                  Rs. {product.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
};

export default NewArrivals;