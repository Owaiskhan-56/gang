import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

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
    discount: "18% OFF",
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
    oldPrice: 4999,
    rating: "4.8",
    reviews: 94,
    bought: "300+",
    discount: "20% OFF",
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
    oldPrice: 8999,
    rating: "4.9",
    reviews: 76,
    bought: "250+",
    discount: "17% OFF",
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
    oldPrice: 4299,
    rating: "4.7",
    reviews: 113,
    bought: "400+",
    discount: "19% OFF",
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
    oldPrice: 8499,
    rating: "4.8",
    reviews: 61,
    bought: "200+",
    discount: "18% OFF",
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
    oldPrice: 11999,
    rating: "5.0",
    reviews: 82,
    bought: "350+",
    discount: "17% OFF",
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
    oldPrice: 6999,
    rating: "4.8",
    reviews: 72,
    bought: "180+",
    discount: "14% OFF",
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
    oldPrice: 4999,
    rating: "4.7",
    reviews: 89,
    bought: "270+",
    discount: "14% OFF",
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
    oldPrice: 13999,
    rating: "4.9",
    reviews: 105,
    bought: "450+",
    discount: "14% OFF",
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

  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    product?.image
  );
  const [pincode, setPincode] = useState("");
  const [deliveryMessage, setDeliveryMessage] = useState("");

  if (!product) {
    return (
      <main
        className={`flex min-h-[80vh] items-center justify-center px-6 ${
          darkMode
            ? "bg-zinc-950 text-white"
            : "bg-white text-zinc-900"
        }`}
      >
        <div className="text-center">

          <div className="text-7xl">😕</div>

          <h1 className="mt-6 text-4xl font-bold">
            Product Not Found
          </h1>

          <p className="mt-4 text-gray-500">
            Sorry, we couldn't find the product you're looking for.
          </p>

          <Link
            to="/shop"
            className="mt-7 inline-block rounded-full bg-black px-8 py-4 font-semibold text-white"
          >
            Back To Shop →
          </Link>

        </div>
      </main>
    );
  }

  const gallery = [
    product.image,
    product.image,
    product.image,
  ];

  const handleAddToCart = () => {
    addToCart({
      ...product,
      size: selectedSize,
      quantity,
    });

    alert(
      `${product.name} (${selectedSize}) added to your bag!`
    );
  };

  const handleBuyNow = () => {
    addToCart({
      ...product,
      size: selectedSize,
      quantity,
    });

    alert("Product added. Proceeding to checkout!");
  };

  const checkDelivery = () => {
    if (pincode.length >= 5) {
      setDeliveryMessage(
        "✓ Great! Delivery is available to your location."
      );
    } else {
      setDeliveryMessage(
        "Please enter a valid Pakistani postal code."
      );
    }
  };

  const increaseQuantity = () => {
    setQuantity((previous) => previous + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((previous) =>
      previous > 1 ? previous - 1 : 1
    );
  };

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 3);

  return (
    <main
      className={`min-h-screen ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-white text-zinc-900"
      }`}
    >

      {/* ================= TOP BANNER ================= */}

      <div className="bg-black px-6 py-3 text-center text-sm text-white">
        🚚 Free delivery on orders above Rs. 10,000
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* ================= BREADCRUMB ================= */}

        <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-gray-500">

          <Link
            to="/"
            className="transition hover:text-current"
          >
            Home
          </Link>

          <span>/</span>

          <Link
            to="/shop"
            className="transition hover:text-current"
          >
            Shop
          </Link>

          <span>/</span>

          <span>{product.category}</span>

          <span>/</span>

          <span>{product.name}</span>

        </div>

        {/* ================= PRODUCT SECTION ================= */}

        <section className="grid gap-12 lg:grid-cols-2">

          {/* ================= IMAGE GALLERY ================= */}

          <div>

            <div className="relative overflow-hidden rounded-[30px]">

              <img
                src={selectedImage}
                alt={product.name}
                className="h-[500px] w-full object-cover transition duration-700 hover:scale-105 md:h-[650px]"
              />

              {/* DISCOUNT */}

              <span className="absolute left-5 top-5 rounded-full bg-black px-5 py-2 text-sm font-bold text-white">
                {product.discount}
              </span>

              {/* WISHLIST */}

              <button
                onClick={() =>
                  setWishlist(!wishlist)
                }
                className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-lg transition hover:scale-110"
              >
                {wishlist ? "❤️" : "♡"}
              </button>

            </div>

            {/* THUMBNAILS */}

            <div className="mt-5 grid grid-cols-3 gap-4">

              {gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setSelectedImage(image)
                  }
                  className={`overflow-hidden rounded-2xl border-2 ${
                    selectedImage === image
                      ? "border-black"
                      : darkMode
                      ? "border-zinc-800"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="h-28 w-full object-cover transition hover:scale-105"
                  />
                </button>
              ))}

            </div>

          </div>

          {/* ================= PRODUCT INFORMATION ================= */}

          <div className="flex flex-col justify-center">

            <p className="text-sm tracking-[0.35em] text-gray-500">
              {product.brand}
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              {product.name}
            </h1>

            <p className="mt-3 text-gray-500">
              {product.category} Collection
            </p>

            {/* RATING */}

            <div className="mt-6 flex flex-wrap items-center gap-4">

              <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-800">
                ⭐ {product.rating}
              </span>

              <span className="text-sm text-gray-500">
                {product.reviews} customer reviews
              </span>

              <span className="text-sm text-gray-500">
                🔥 {product.bought} sold
              </span>

            </div>

            {/* PRICE */}

            <div className="mt-7 flex items-center gap-4">

              <span className="text-3xl font-bold">
                Rs. {product.price.toLocaleString()}
              </span>

              <span className="text-lg text-gray-400 line-through">
                Rs. {product.oldPrice.toLocaleString()}
              </span>

            </div>

            <p className="mt-2 text-sm font-semibold text-green-600">
              You save Rs.{" "}
              {(product.oldPrice - product.price).toLocaleString()}
            </p>

            {/* DESCRIPTION */}

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-500">
              {product.description}
            </p>

            {/* SIZE */}

            <div className="mt-9">

              <div className="mb-4 flex items-center justify-between">

                <p className="font-bold">
                  Select Size
                </p>

                <button className="text-sm underline">
                  Size Guide
                </button>

              </div>

              <div className="flex flex-wrap gap-3">

                {["S", "M", "L", "XL", "XXL"].map(
                  (size) => (
                    <button
                      key={size}
                      onClick={() =>
                        setSelectedSize(size)
                      }
                      className={`flex h-12 min-w-12 items-center justify-center rounded-xl border px-4 font-semibold transition ${
                        selectedSize === size
                          ? "bg-black text-white"
                          : darkMode
                          ? "border-zinc-700 hover:bg-zinc-800"
                          : "border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {size}
                    </button>
                  )
                )}

              </div>

              <p className="mt-3 text-sm text-gray-500">
                Selected size:{" "}
                <span className="font-semibold text-current">
                  {selectedSize}
                </span>
              </p>

            </div>

            {/* QUANTITY */}

            <div className="mt-8">

              <p className="mb-3 font-bold">
                Quantity
              </p>

              <div
                className={`flex w-fit items-center rounded-full border ${
                  darkMode
                    ? "border-zinc-700"
                    : "border-gray-300"
                }`}
              >

                <button
                  onClick={decreaseQuantity}
                  className="px-5 py-3 text-xl hover:opacity-60"
                >
                  −
                </button>

                <span className="min-w-10 text-center font-semibold">
                  {quantity}
                </span>

                <button
                  onClick={increaseQuantity}
                  className="px-5 py-3 text-xl hover:opacity-60"
                >
                  +
                </button>

              </div>

            </div>

            {/* BUTTONS */}

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <button
                onClick={handleAddToCart}
                className="rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-[1.02] hover:bg-zinc-800"
              >
                🛍️ Add To Bag
              </button>

              <button
                onClick={handleBuyNow}
                className={`rounded-full border px-8 py-4 font-semibold transition hover:scale-[1.02] ${
                  darkMode
                    ? "border-zinc-700 hover:bg-zinc-800"
                    : "border-gray-300 hover:bg-gray-100"
                }`}
              >
                Buy Now →
              </button>

            </div>

            <Link
              to="/cart"
              className="mt-4 block text-center text-sm font-semibold underline underline-offset-4"
            >
              View Shopping Bag
            </Link>

            {/* PRODUCT BENEFITS */}

            <div className="mt-10 grid gap-4 border-t pt-8 sm:grid-cols-2">

              <div className="rounded-2xl p-4">

                <div className="text-2xl">
                  🚚
                </div>

                <h3 className="mt-2 font-bold">
                  Fast Delivery
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  3–5 business days
                </p>

              </div>

              <div className="rounded-2xl p-4">

                <div className="text-2xl">
                  ↩️
                </div>

                <h3 className="mt-2 font-bold">
                  Easy Returns
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Simple return process
                </p>

              </div>

              <div className="rounded-2xl p-4">

                <div className="text-2xl">
                  🔒
                </div>

                <h3 className="mt-2 font-bold">
                  Secure Payment
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Safe checkout
                </p>

              </div>

              <div className="rounded-2xl p-4">

                <div className="text-2xl">
                  ♡
                </div>

                <h3 className="mt-2 font-bold">
                  Premium Quality
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Quality guaranteed
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ================= DELIVERY CHECKER ================= */}

        <section
          className={`mt-20 rounded-3xl p-8 md:p-12 ${
            darkMode
              ? "bg-zinc-900"
              : "bg-zinc-100"
          }`}
        >

          <div className="grid items-center gap-8 md:grid-cols-2">

            <div>

              <p className="text-sm tracking-[0.3em] text-gray-500">
                DELIVERY CHECK
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Check delivery availability
              </h2>

              <p className="mt-3 text-gray-500">
                Enter your postal code to check delivery
                availability in your area.
              </p>

            </div>

            <div>

              <div className="flex gap-3">

                <input
                  type="text"
                  value={pincode}
                  onChange={(e) =>
                    setPincode(e.target.value)
                  }
                  placeholder="Enter postal code"
                  className={`min-w-0 flex-1 rounded-full border px-5 py-4 outline-none ${
                    darkMode
                      ? "border-zinc-700 bg-zinc-950"
                      : "border-gray-300 bg-white"
                  }`}
                />

                <button
                  onClick={checkDelivery}
                  className="rounded-full bg-black px-6 py-4 font-semibold text-white"
                >
                  Check
                </button>

              </div>

              {deliveryMessage && (
                <p
                  className={`mt-4 text-sm font-semibold ${
                    deliveryMessage.startsWith("✓")
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {deliveryMessage}
                </p>
              )}

            </div>

          </div>

        </section>

        {/* ================= PRODUCT DETAILS ================= */}

        <section className="mt-24">

          <div className="mb-10">

            <p className="text-sm tracking-[0.3em] text-gray-500">
              PRODUCT INFORMATION
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Made For Your Style.
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div
              className={`rounded-3xl border p-7 ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-gray-200"
              }`}
            >

              <div className="text-3xl">
                ✨
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Premium Fabric
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                Carefully selected materials provide
                comfort, durability and a premium feel.
              </p>

            </div>

            <div
              className={`rounded-3xl border p-7 ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-gray-200"
              }`}
            >

              <div className="text-3xl">
                👔
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Modern Fit
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                Designed with a modern silhouette that
                works for both everyday and special occasions.
              </p>

            </div>

            <div
              className={`rounded-3xl border p-7 ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-gray-200"
              }`}
            >

              <div className="text-3xl">
                🧵
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Quality Stitching
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                Every detail is finished carefully to
                deliver long-lasting quality.
              </p>

            </div>

          </div>

        </section>

        {/* ================= REVIEWS ================= */}

        <section className="mt-24">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="text-sm tracking-[0.3em] text-gray-500">
                CUSTOMER REVIEWS
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                What Customers Say
              </h2>

            </div>

            <div className="text-right">

              <p className="text-4xl font-bold">
                ⭐ {product.rating}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Based on {product.reviews} reviews
              </p>

            </div>

          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">

            {[
              {
                name: "Ahmed R.",
                text: "Excellent quality and perfect fitting. Definitely worth the price.",
              },
              {
                name: "Hamza K.",
                text: "The material feels premium and delivery was very fast.",
              },
              {
                name: "Usman A.",
                text: "Amazing product. Looks exactly like the pictures.",
              },
            ].map((review, index) => (

              <div
                key={index}
                className={`rounded-3xl border p-7 ${
                  darkMode
                    ? "border-zinc-800 bg-zinc-900"
                    : "border-gray-200"
                }`}
              >

                <div className="text-sm">
                  ⭐⭐⭐⭐⭐
                </div>

                <p className="mt-5 leading-7 text-gray-500">
                  "{review.text}"
                </p>

                <p className="mt-5 font-bold">
                  {review.name}
                </p>

                <p className="mt-1 text-xs text-green-600">
                  ✓ Verified Purchase
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* ================= FAQ ================= */}

        <section className="mt-24">

          <div className="text-center">

            <p className="text-sm tracking-[0.3em] text-gray-500">
              NEED HELP?
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Product Questions
            </h2>

          </div>

          <div className="mx-auto mt-10 max-w-4xl space-y-4">

            <details
              className={`rounded-2xl p-6 ${
                darkMode
                  ? "bg-zinc-900"
                  : "bg-zinc-100"
              }`}
            >
              <summary className="cursor-pointer font-semibold">
                Is this product available in all sizes?
              </summary>

              <p className="mt-4 leading-7 text-gray-500">
                This product is available in S, M, L, XL
                and XXL, depending on stock availability.
              </p>
            </details>

            <details
              className={`rounded-2xl p-6 ${
                darkMode
                  ? "bg-zinc-900"
                  : "bg-zinc-100"
              }`}
            >
              <summary className="cursor-pointer font-semibold">
                How long does delivery take?
              </summary>

              <p className="mt-4 leading-7 text-gray-500">
                Standard delivery normally takes 3–5
                business days.
              </p>
            </details>

            <details
              className={`rounded-2xl p-6 ${
                darkMode
                  ? "bg-zinc-900"
                  : "bg-zinc-100"
              }`}
            >
              <summary className="cursor-pointer font-semibold">
                Can I return this product?
              </summary>

              <p className="mt-4 leading-7 text-gray-500">
                Eligible products can be returned according
                to the LUXEMEN return policy.
              </p>
            </details>

            <details
              className={`rounded-2xl p-6 ${
                darkMode
                  ? "bg-zinc-900"
                  : "bg-zinc-100"
              }`}
            >
              <summary className="cursor-pointer font-semibold">
                Do you offer Cash on Delivery?
              </summary>

              <p className="mt-4 leading-7 text-gray-500">
                Cash on Delivery may be available depending
                on your delivery location.
              </p>
            </details>

          </div>

        </section>

        {/* ================= RELATED PRODUCTS ================= */}

        <section className="mt-24">

          <div className="flex items-end justify-between">

            <div>

              <p className="text-sm tracking-[0.3em] text-gray-500">
                YOU MAY ALSO LIKE
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Related Products
              </h2>

            </div>

            <Link
              to="/shop"
              className="hidden text-sm font-semibold underline md:block"
            >
              View All →
            </Link>

          </div>

          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {relatedProducts.map((item) => (

              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className={`group overflow-hidden rounded-3xl border ${
                  darkMode
                    ? "border-zinc-800 bg-zinc-900"
                    : "border-gray-200 bg-white"
                }`}
              >

                <div className="overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-96 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="p-6">

                  <p className="text-xs tracking-[0.2em] text-gray-500">
                    {item.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    {item.name}
                  </h3>

                  <div className="mt-3 flex justify-between">

                    <span className="font-bold">
                      Rs. {item.price.toLocaleString()}
                    </span>

                    <span>
                      ⭐ {item.rating}
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </section>

        {/* ================= FINAL CTA ================= */}

        <section className="mt-24">

          <div className="rounded-[35px] bg-black px-8 py-16 text-center text-white md:px-20">

            <p className="text-sm tracking-[0.3em] text-zinc-400">
              LUXEMEN
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-6xl">
              Upgrade Your
              <br />
              <span className="font-light italic">
                Wardrobe.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-7 text-zinc-400">
              Discover premium men's fashion designed for
              confidence, comfort and modern style.
            </p>

            <Link
              to="/shop"
              className="mt-8 inline-block rounded-full bg-white px-9 py-4 font-semibold text-black transition hover:scale-105"
            >
              Explore Collection →
            </Link>

          </div>

        </section>

      </div>
    </main>
  );
}

export default ProductDetails;