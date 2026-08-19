import React from "react";
import { Link, useParams } from "react-router-dom";

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
    description:
      "A premium black suit designed for weddings, business meetings and special occasions.",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=85",
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
    description:
      "A comfortable premium casual shirt made for everyday modern style.",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=85",
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
    description:
      "A stylish black jacket that gives your wardrobe a modern luxury look.",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=85",
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
    description:
      "A clean white shirt perfect for casual and semi-formal occasions.",
    image:
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=1000&q=85",
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
    description:
      "Premium brown jacket with a timeless design and comfortable fit.",
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=1000&q=85",
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
    description:
      "An elegant formal outfit created for premium occasions and events.",
    image:
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=1000&q=85",
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
    description:
      "Classic denim jacket that works perfectly with everyday outfits.",
    image:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=1000&q=85",
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
    description:
      "A premium beige shirt with a clean and modern appearance.",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=85",
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
    description:
      "A modern grey suit designed for elegant formal occasions.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
  },
];

function ProductDetails({ darkMode, addToCart }) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  // PRODUCT NOT FOUND
  if (!product) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="text-center">

          <h1 className="text-4xl font-bold">
            Product Not Found
          </h1>

          <Link
            to="/shop"
            className="mt-6 inline-block rounded-full bg-black px-8 py-4 text-white"
          >
            Back To Shop
          </Link>

        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to your bag!`);
  };

  return (
    <main
      className={`min-h-screen px-6 py-16 ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-white text-zinc-900"
      }`}
    >
      <div className="mx-auto max-w-7xl">

        {/* BREADCRUMB */}
        <div className="mb-10 text-sm text-gray-500">
          <Link to="/" className="hover:text-black">
            Home
          </Link>

          <span className="mx-2">/</span>

          <Link to="/shop" className="hover:text-black">
            Shop
          </Link>

          <span className="mx-2">/</span>

          <span>{product.name}</span>
        </div>


        {/* PRODUCT */}
        <div className="grid gap-12 md:grid-cols-2">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-3xl">

            <img
              src={product.image}
              alt={product.name}
              className="h-[600px] w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>


          {/* DETAILS */}
          <div className="flex flex-col justify-center">

            <p className="text-sm tracking-[0.3em] text-gray-500">
              {product.brand}
            </p>

            <h1 className="mt-4 text-5xl font-bold">
              {product.name}
            </h1>

            <p className="mt-3 text-gray-500">
              {product.category}
            </p>


            {/* RATING */}
            <div className="mt-6 flex items-center gap-3">

              <span>
                ⭐ {product.rating}
              </span>

              <span className="text-gray-500">
                {product.reviews} reviews
              </span>

            </div>


            {/* PRICE */}
            <p className="mt-7 text-3xl font-bold">
              Rs. {product.price.toLocaleString()}
            </p>


            {/* DESCRIPTION */}
            <p className="mt-7 max-w-xl leading-8 text-gray-500">
              {product.description}
            </p>


            {/* BOUGHT */}
            <p className="mt-5 text-sm text-gray-500">
              🔥 {product.bought} customers bought this
              product
            </p>


            {/* SIZE */}
            <div className="mt-8">

              <p className="mb-3 font-semibold">
                Select Size
              </p>

              <div className="flex gap-3">

                {["S", "M", "L", "XL", "XXL"].map(
                  (size) => (
                    <button
                      key={size}
                      className={`flex h-11 w-11 items-center justify-center rounded-lg border ${
                        darkMode
                          ? "border-zinc-700 hover:bg-zinc-800"
                          : "border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {size}
                    </button>
                  )
                )}

              </div>

            </div>


            {/* BUTTONS */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <button
                onClick={handleAddToCart}
                className="rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
              >
                Add To Bag
              </button>

              <Link
                to="/cart"
                className={`rounded-full border px-8 py-4 text-center font-semibold transition hover:scale-105 ${
                  darkMode
                    ? "border-zinc-700"
                    : "border-gray-300"
                }`}
              >
                View Cart
              </Link>

            </div>


            {/* FEATURES */}
            <div className="mt-10 grid grid-cols-2 gap-4 border-t pt-8">

              <div>
                <p className="font-semibold">
                  🚚 Fast Delivery
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Across Pakistan
                </p>
              </div>

              <div>
                <p className="font-semibold">
                  ↩️ Easy Returns
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Simple return process
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}

export default ProductDetails;