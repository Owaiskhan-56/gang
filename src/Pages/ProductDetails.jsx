import React, { useMemo, useState } from "react";
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
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=90",
    description:
      "A premium black suit designed for weddings, business meetings and special occasions.",
    colors: ["Black", "Charcoal", "Navy"],
    material: "Premium Wool Blend",
    fit: "Modern Slim Fit",
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
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=90",
    description:
      "A comfortable premium casual shirt made for everyday modern style.",
    colors: ["White", "Blue", "Black"],
    material: "Premium Cotton",
    fit: "Regular Fit",
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
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=90",
    description:
      "A stylish black jacket that gives your wardrobe a modern luxury look.",
    colors: ["Black", "Brown"],
    material: "Premium Synthetic Leather",
    fit: "Slim Fit",
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
    image:
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=1200&q=90",
    description:
      "A clean white shirt perfect for casual and semi-formal occasions.",
    colors: ["White", "Cream"],
    material: "Premium Cotton",
    fit: "Modern Fit",
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
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=1200&q=90",
    description:
      "Premium brown jacket with a timeless design and comfortable fit.",
    colors: ["Brown", "Black"],
    material: "Premium Leather",
    fit: "Regular Fit",
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
    image:
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=1200&q=90",
    description:
      "An elegant formal outfit created for premium occasions and events.",
    colors: ["Black", "Navy"],
    material: "Luxury Suiting Fabric",
    fit: "Tailored Fit",
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
    image:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=1200&q=90",
    description:
      "Classic denim jacket that works perfectly with everyday outfits.",
    colors: ["Blue", "Black"],
    material: "Premium Denim",
    fit: "Regular Fit",
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
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=90",
    description:
      "A premium beige shirt with a clean and modern appearance.",
    colors: ["Beige", "White"],
    material: "Premium Cotton",
    fit: "Relaxed Fit",
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
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=90",
    description:
      "A modern grey suit designed for elegant formal occasions.",
    colors: ["Grey", "Black", "Navy"],
    material: "Premium Wool Blend",
    fit: "Tailored Fit",
  },
];

const sizes = ["S", "M", "L", "XL", "XXL"];

const reviewsData = [
  {
    name: "Ahmed R.",
    rating: 5,
    date: "2 weeks ago",
    text: "Excellent quality and perfect fitting. The fabric feels premium and the overall finishing is amazing.",
  },
  {
    name: "Hamza K.",
    rating: 5,
    date: "1 month ago",
    text: "The material feels premium and delivery was very fast. Definitely ordering again from LUXEMEN.",
  },
  {
    name: "Usman A.",
    rating: 5,
    date: "1 month ago",
    text: "Amazing product. Looks exactly like the pictures and the fitting is excellent.",
  },
  {
    name: "Bilal M.",
    rating: 4,
    date: "2 months ago",
    text: "Very good quality product. Packaging was also clean and professional.",
  },
  {
    name: "Saad H.",
    rating: 5,
    date: "2 months ago",
    text: "The suit looks expensive and elegant. I received many compliments at the event.",
  },
  {
    name: "Ali Z.",
    rating: 5,
    date: "3 months ago",
    text: "Perfect for formal occasions. Comfortable, stylish and premium.",
  },
];

function ProductDetails({ darkMode = false, addToCart = () => {} }) {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || "Black"
  );
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [selectedImage, setSelectedImage] = useState(product?.image || "");
  const [pincode, setPincode] = useState("");
  const [deliveryMessage, setDeliveryMessage] = useState("");
  const [activeTab, setActiveTab] = useState("description");
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [zoom, setZoom] = useState(false);

  const gallery = useMemo(() => {
    if (!product) return [];

    return [
      product.image,
      product.image,
      product.image,
      product.image,
    ];
  }, [product]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];

    return products
      .filter(
        (item) =>
          item.category === product.category && item.id !== product.id
      )
      .slice(0, 3);
  }, [product]);

  const totalPrice = product ? product.price * quantity : 0;
  const totalOldPrice = product ? product.oldPrice * quantity : 0;
  const totalSaving = totalOldPrice - totalPrice;

  const handleAddToCart = () => {
    if (!product) return;

    addToCart({
      ...product,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });

    alert(
      `${product.name} (${selectedSize}, ${selectedColor}) added to your bag!`
    );
  };

  const handleBuyNow = () => {
    if (!product) return;

    addToCart({
      ...product,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });

    alert("Product added. Proceeding to checkout!");
  };

  const increaseQuantity = () => {
    setQuantity((previous) => previous + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((previous) => Math.max(1, previous - 1));
  };

  const checkDelivery = () => {
    const cleanPincode = pincode.trim();

    if (/^\d{5}$/.test(cleanPincode)) {
      setDeliveryMessage(
        "✓ Great! Delivery is available to your location."
      );
    } else {
      setDeliveryMessage(
        "Please enter a valid 5-digit Pakistani postal code."
      );
    }
  };

  if (!product) {
    return (
      <main
        className={`flex min-h-screen items-center justify-center px-6 ${
          darkMode
            ? "bg-zinc-950 text-white"
            : "bg-white text-zinc-900"
        }`}
      >
        <div className="w-full max-w-xl text-center">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-zinc-100 text-6xl dark:bg-zinc-900">
            😕
          </div>

          <p className="mt-8 text-sm font-bold tracking-[0.35em] text-zinc-500">
            LUXEMEN
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            Product Not Found
          </h1>

          <p className="mx-auto mt-5 max-w-md leading-7 text-zinc-500">
            Sorry, we couldn't find the product you're looking for.
            It may have been removed or the product link may be incorrect.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-flex rounded-full bg-black px-9 py-4 font-bold text-white transition hover:scale-105 hover:bg-zinc-800"
          >
            Back To Shop →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      className={`min-h-screen ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-white text-zinc-900"
      }`}
    >
      {/* =========================================================
          VIP TOP ANNOUNCEMENT
      ========================================================== */}

      <div className="bg-black px-4 py-3 text-center text-xs font-semibold tracking-wide text-white sm:text-sm">
        <span className="mr-2">🚚</span>
        Free delivery on orders above Rs. 10,000
        <span className="mx-2 text-zinc-500">•</span>
        Secure checkout
        <span className="mx-2 text-zinc-500">•</span>
        Premium quality
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* =========================================================
            BREADCRUMB
        ========================================================== */}

        <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-zinc-500">
          <Link
            to="/"
            className="transition hover:text-black dark:hover:text-white"
          >
            Home
          </Link>

          <span>/</span>

          <Link
            to="/shop"
            className="transition hover:text-black dark:hover:text-white"
          >
            Shop
          </Link>

          <span>/</span>

          <span>{product.category}</span>

          <span>/</span>

          <span className="font-medium text-current">
            {product.name}
          </span>
        </nav>

        {/* =========================================================
            PRODUCT HERO
        ========================================================== */}

        <section className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* =======================================================
              IMAGE AREA
          ======================================================== */}

          <div>
            <div
              className={`group relative overflow-hidden rounded-[32px] border ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-zinc-200 bg-zinc-100"
              }`}
              onMouseEnter={() => setZoom(true)}
              onMouseLeave={() => setZoom(false)}
            >
              <img
                src={selectedImage}
                alt={product.name}
                className={`h-[480px] w-full object-cover transition duration-700 sm:h-[600px] lg:h-[680px] ${
                  zoom ? "scale-110" : "scale-100"
                }`}
              />

              {/* DISCOUNT */}

              <div className="absolute left-5 top-5 rounded-full bg-black px-5 py-2.5 text-xs font-black tracking-wide text-white shadow-xl">
                {product.discount}
              </div>

              {/* PREMIUM BADGE */}

              <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-black/70 px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md">
                ✦ PREMIUM COLLECTION
              </div>

              {/* WISHLIST */}

              <button
                type="button"
                aria-label="Add to wishlist"
                onClick={() => setWishlist((previous) => !previous)}
                className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-black shadow-xl transition hover:scale-110"
              >
                {wishlist ? "❤️" : "♡"}
              </button>

              {/* IMAGE ZOOM LABEL */}

              <div className="absolute bottom-5 right-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-black opacity-0 shadow-lg backdrop-blur transition duration-300 group-hover:opacity-100">
                Move cursor to zoom
              </div>
            </div>

            {/* THUMBNAILS */}

            <div className="mt-5 grid grid-cols-4 gap-3">
              {gallery.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`overflow-hidden rounded-2xl border-2 transition ${
                    selectedImage === image
                      ? "border-black dark:border-white"
                      : darkMode
                      ? "border-zinc-800"
                      : "border-zinc-200"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="h-24 w-full object-cover transition duration-500 hover:scale-110 sm:h-32"
                  />
                </button>
              ))}
            </div>

            {/* TRUST STRIP */}

            <div className="mt-5 grid grid-cols-3 gap-2">
              <div
                className={`rounded-2xl p-4 text-center ${
                  darkMode ? "bg-zinc-900" : "bg-zinc-100"
                }`}
              >
                <div className="text-xl">🔒</div>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                  Secure
                </p>
              </div>

              <div
                className={`rounded-2xl p-4 text-center ${
                  darkMode ? "bg-zinc-900" : "bg-zinc-100"
                }`}
              >
                <div className="text-xl">✓</div>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                  Authentic
                </p>
              </div>

              <div
                className={`rounded-2xl p-4 text-center ${
                  darkMode ? "bg-zinc-900" : "bg-zinc-100"
                }`}
              >
                <div className="text-xl">↩</div>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                  Easy Return
                </p>
              </div>
            </div>
          </div>

          {/* =======================================================
              PRODUCT INFORMATION
          ======================================================== */}

          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold tracking-[0.4em] text-zinc-500">
              {product.brand}
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>

            <p className="mt-4 text-zinc-500">
              {product.category} Collection
            </p>

            {/* RATING */}

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-bold text-yellow-800">
                ⭐ {product.rating}
              </span>

              <span className="text-sm text-zinc-500">
                {product.reviews} Reviews
              </span>

              <span className="text-sm text-zinc-500">
                •
              </span>

              <span className="text-sm text-zinc-500">
                🔥 {product.bought} sold
              </span>
            </div>

            {/* PRICE */}

            <div className="mt-8">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-3xl font-black sm:text-4xl">
                  Rs. {product.price.toLocaleString()}
                </span>

                <span className="text-lg text-zinc-400 line-through">
                  Rs. {product.oldPrice.toLocaleString()}
                </span>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  SAVE{" "}
                  {Math.round(
                    ((product.oldPrice - product.price) /
                      product.oldPrice) *
                      100
                  )}
                  %
                </span>
              </div>

              <p className="mt-2 text-sm font-semibold text-green-600">
                You save Rs.{" "}
                {(product.oldPrice - product.price).toLocaleString()}
              </p>
            </div>

            {/* DESCRIPTION */}

            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-500 sm:text-lg">
              {product.description}
            </p>

            {/* PRODUCT DETAILS MINI GRID */}

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div
                className={`rounded-2xl border p-4 ${
                  darkMode
                    ? "border-zinc-800 bg-zinc-900"
                    : "border-zinc-200 bg-zinc-50"
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Material
                </p>
                <p className="mt-2 font-bold">{product.material}</p>
              </div>

              <div
                className={`rounded-2xl border p-4 ${
                  darkMode
                    ? "border-zinc-800 bg-zinc-900"
                    : "border-zinc-200 bg-zinc-50"
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Fit
                </p>
                <p className="mt-2 font-bold">{product.fit}</p>
              </div>
            </div>

            {/* =====================================================
                COLOR
            ====================================================== */}

            <div className="mt-8">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-black">Select Color</p>
                <span className="text-sm text-zinc-500">
                  {selectedColor}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                      selectedColor === color
                        ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                        : darkMode
                        ? "border-zinc-700 hover:bg-zinc-800"
                        : "border-zinc-300 hover:bg-zinc-100"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* =====================================================
                SIZE
            ====================================================== */}

            <div className="mt-8">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-black">Select Size</p>

                <button
                  type="button"
                  className="text-sm font-semibold underline underline-offset-4"
                  onClick={() =>
                    alert(
                      "Size Guide: S = 36, M = 38, L = 40, XL = 42, XXL = 44"
                    )
                  }
                >
                  Size Guide
                </button>
              </div>

              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`flex h-12 min-w-14 items-center justify-center rounded-xl border px-4 font-bold transition ${
                      selectedSize === size
                        ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                        : darkMode
                        ? "border-zinc-700 hover:bg-zinc-800"
                        : "border-zinc-300 hover:bg-zinc-100"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <p className="mt-3 text-sm text-zinc-500">
                Selected size:{" "}
                <span className="font-bold text-current">
                  {selectedSize}
                </span>
              </p>
            </div>

            {/* =====================================================
                QUANTITY
            ====================================================== */}

            <div className="mt-8">
              <p className="mb-3 font-black">Quantity</p>

              <div
                className={`flex w-fit items-center overflow-hidden rounded-full border ${
                  darkMode
                    ? "border-zinc-700"
                    : "border-zinc-300"
                }`}
              >
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="px-6 py-3 text-xl transition hover:bg-zinc-100 hover:text-black dark:hover:bg-zinc-800 dark:hover:text-white"
                >
                  −
                </button>

                <span className="min-w-12 text-center font-black">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="px-6 py-3 text-xl transition hover:bg-zinc-100 hover:text-black dark:hover:bg-zinc-800 dark:hover:text-white"
                >
                  +
                </button>
              </div>
            </div>

            {/* =====================================================
                TOTAL
            ====================================================== */}

            <div
              className={`mt-8 rounded-3xl p-5 ${
                darkMode ? "bg-zinc-900" : "bg-zinc-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-500">
                  Total
                </span>

                <span className="text-2xl font-black">
                  Rs. {totalPrice.toLocaleString()}
                </span>
              </div>

              {quantity > 1 && (
                <p className="mt-2 text-sm text-green-600">
                  You save Rs. {totalSaving.toLocaleString()} on this
                  order.
                </p>
              )}
            </div>

            {/* =====================================================
                ACTION BUTTONS
            ====================================================== */}

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="rounded-full bg-black px-8 py-4 font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                🛍️ Add To Bag
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                className={`rounded-full border px-8 py-4 font-black transition hover:-translate-y-1 ${
                  darkMode
                    ? "border-zinc-700 hover:bg-zinc-800"
                    : "border-zinc-300 hover:bg-zinc-100"
                }`}
              >
                Buy Now →
              </button>
            </div>

            <Link
              to="/cart"
              className="mt-5 block text-center text-sm font-bold underline underline-offset-4"
            >
              View Shopping Bag
            </Link>

            {/* =====================================================
                BENEFITS
            ====================================================== */}

            <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-7 border-t pt-8">
              <div>
                <div className="text-2xl">🚚</div>
                <h3 className="mt-2 font-bold">Fast Delivery</h3>
                <p className="mt-1 text-sm text-zinc-500">
                  3–5 business days
                </p>
              </div>

              <div>
                <div className="text-2xl">↩️</div>
                <h3 className="mt-2 font-bold">Easy Returns</h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Simple return process
                </p>
              </div>

              <div>
                <div className="text-2xl">🔒</div>
                <h3 className="mt-2 font-bold">Secure Payment</h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Safe checkout
                </p>
              </div>

              <div>
                <div className="text-2xl">✦</div>
                <h3 className="mt-2 font-bold">Premium Quality</h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Quality guaranteed
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            DELIVERY CHECKER
        ========================================================== */}

        <section
          className={`mt-20 overflow-hidden rounded-[32px] ${
            darkMode ? "bg-zinc-900" : "bg-zinc-100"
          }`}
        >
          <div className="grid gap-10 p-7 md:grid-cols-2 md:p-12">
            <div>
              <p className="text-xs font-bold tracking-[0.35em] text-zinc-500">
                DELIVERY CHECK
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Check delivery availability
              </h2>

              <p className="mt-4 max-w-lg leading-7 text-zinc-500">
                Enter your 5-digit Pakistani postal code to check
                whether delivery is available in your area.
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={5}
                  value={pincode}
                  onChange={(e) =>
                    setPincode(
                      e.target.value.replace(/\D/g, "").slice(0, 5)
                    )
                  }
                  placeholder="Enter postal code"
                  className={`min-w-0 flex-1 rounded-full border px-6 py-4 outline-none transition focus:ring-2 focus:ring-black dark:focus:ring-white ${
                    darkMode
                      ? "border-zinc-700 bg-zinc-950"
                      : "border-zinc-300 bg-white"
                  }`}
                />

                <button
                  type="button"
                  onClick={checkDelivery}
                  className="rounded-full bg-black px-7 py-4 font-bold text-white transition hover:scale-105 dark:bg-white dark:text-black"
                >
                  Check
                </button>
              </div>

              {deliveryMessage && (
                <p
                  className={`mt-4 text-sm font-bold ${
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

        {/* =========================================================
            PRODUCT INFORMATION TABS
        ========================================================== */}

        <section className="mt-24">
          <div className="border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex gap-8 overflow-x-auto">
              {[
                ["description", "Description"],
                ["details", "Details"],
                ["shipping", "Shipping"],
                ["returns", "Returns"],
              ].map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={`whitespace-nowrap border-b-2 pb-4 text-sm font-bold transition ${
                    activeTab === key
                      ? "border-black text-current dark:border-white"
                      : "border-transparent text-zinc-500"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="py-10">
            {activeTab === "description" && (
              <div className="max-w-4xl">
                <p className="text-sm font-bold tracking-[0.3em] text-zinc-500">
                  PRODUCT INFORMATION
                </p>

                <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                  Made For Your Style.
                </h2>

                <p className="mt-5 leading-8 text-zinc-500">
                  {product.description} LUXEMEN combines modern
                  silhouettes, premium materials and careful
                  craftsmanship to create clothing designed for
                  confidence and everyday luxury.
                </p>
              </div>
            )}

            {activeTab === "details" && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["Material", product.material],
                  ["Fit", product.fit],
                  ["Category", product.category],
                  ["Brand", product.brand],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className={`rounded-2xl border p-6 ${
                      darkMode
                        ? "border-zinc-800 bg-zinc-900"
                        : "border-zinc-200 bg-zinc-50"
                    }`}
                  >
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      {label}
                    </p>
                    <p className="mt-3 font-black">{value}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="max-w-3xl">
                <h3 className="text-2xl font-black">
                  Shipping Information
                </h3>

                <ul className="mt-5 space-y-4 text-zinc-500">
                  <li>✓ Standard delivery: 3–5 business days.</li>
                  <li>✓ Free delivery on orders above Rs. 10,000.</li>
                  <li>✓ Order tracking is available after dispatch.</li>
                  <li>✓ Delivery time may vary by location.</li>
                </ul>
              </div>
            )}

            {activeTab === "returns" && (
              <div className="max-w-3xl">
                <h3 className="text-2xl font-black">
                  Returns & Exchanges
                </h3>

                <p className="mt-5 leading-8 text-zinc-500">
                  Eligible products can be returned according to the
                  LUXEMEN return policy. Items should be unused,
                  unworn and returned with their original packaging.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* =========================================================
            FEATURES
        ========================================================== */}

        <section className="mt-20">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-[0.35em] text-zinc-500">
              WHY LUXEMEN
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Crafted For Premium Living.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: "✨",
                title: "Premium Fabric",
                text: "Carefully selected materials provide comfort, durability and a luxurious feel.",
              },
              {
                icon: "👔",
                title: "Modern Fit",
                text: "Designed with contemporary silhouettes for confident everyday styling.",
              },
              {
                icon: "🧵",
                title: "Quality Stitching",
                text: "Every detail is finished carefully to deliver long-lasting quality.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className={`rounded-[28px] border p-8 transition hover:-translate-y-1 ${
                  darkMode
                    ? "border-zinc-800 bg-zinc-900"
                    : "border-zinc-200 bg-white shadow-sm"
                }`}
              >
                <div className="text-4xl">{feature.icon}</div>

                <h3 className="mt-6 text-xl font-black">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-500">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            REVIEWS
        ========================================================== */}

        <section className="mt-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.35em] text-zinc-500">
                CUSTOMER REVIEWS
              </p>

              <h2 className="mt-3 text-4xl font-black">
                What Customers Say
              </h2>
            </div>

            <div className="rounded-3xl border border-zinc-200 p-5 dark:border-zinc-800">
              <p className="text-4xl font-black">
                ⭐ {product.rating}
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                Based on {product.reviews} reviews
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {(showAllReviews
              ? reviewsData
              : reviewsData.slice(0, 3)
            ).map((review) => (
              <div
                key={review.name}
                className={`rounded-[28px] border p-7 ${
                  darkMode
                    ? "border-zinc-800 bg-zinc-900"
                    : "border-zinc-200 bg-white"
                }`}
              >
                <div className="text-sm">
                  {"⭐".repeat(review.rating)}
                </div>

                <p className="mt-5 leading-7 text-zinc-500">
                  "{review.text}"
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-black">{review.name}</p>

                    <p className="mt-1 text-xs text-zinc-500">
                      {review.date}
                    </p>
                  </div>

                  <span className="text-xs font-bold text-green-600">
                    ✓ Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() =>
                setShowAllReviews((previous) => !previous)
              }
              className={`rounded-full border px-7 py-3 text-sm font-bold transition ${
                darkMode
                  ? "border-zinc-700 hover:bg-zinc-800"
                  : "border-zinc-300 hover:bg-zinc-100"
              }`}
            >
              {showAllReviews ? "Show Less" : "View All Reviews"}
            </button>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================== */}

        <section className="mt-24">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.35em] text-zinc-500">
              NEED HELP?
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Product Questions
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-4xl space-y-4">
            {[
              [
                "Is this product available in all sizes?",
                "This product is available in S, M, L, XL and XXL, depending on stock availability.",
              ],
              [
                "How long does delivery take?",
                "Standard delivery normally takes 3–5 business days.",
              ],
              [
                "Can I return this product?",
                "Eligible products can be returned according to the LUXEMEN return policy.",
              ],
              [
                "Do you offer Cash on Delivery?",
                "Cash on Delivery may be available depending on your delivery location.",
              ],
              [
                "Is the product authentic?",
                "Yes. LUXEMEN products are presented as premium original products from the LUXEMEN collection.",
              ],
            ].map(([question, answer]) => (
              <details
                key={question}
                className={`group rounded-2xl p-6 ${
                  darkMode ? "bg-zinc-900" : "bg-zinc-100"
                }`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-bold">
                  <span>{question}</span>
                  <span className="ml-4 text-xl transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-3xl leading-7 text-zinc-500">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* =========================================================
            RELATED PRODUCTS
        ========================================================== */}

        <section className="mt-24">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold tracking-[0.35em] text-zinc-500">
                YOU MAY ALSO LIKE
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Related Products
              </h2>
            </div>

            <Link
              to="/shop"
              className="hidden text-sm font-bold underline underline-offset-4 md:block"
            >
              View All →
            </Link>
          </div>

          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className={`group overflow-hidden rounded-[28px] border transition duration-300 hover:-translate-y-2 ${
                  darkMode
                    ? "border-zinc-800 bg-zinc-900"
                    : "border-zinc-200 bg-white"
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-96 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-black px-4 py-2 text-xs font-bold text-white">
                    {item.discount}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                    {item.category}
                  </p>

                  <h3 className="mt-2 text-xl font-black">
                    {item.name}
                  </h3>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <span className="font-black">
                      Rs. {item.price.toLocaleString()}
                    </span>

                    <span className="text-sm">
                      ⭐ {item.rating}
                    </span>
                  </div>

                  <div className="mt-5 rounded-full bg-black py-3 text-center text-sm font-bold text-white transition group-hover:bg-zinc-800 dark:bg-white dark:text-black">
                    View Product →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* =========================================================
            FINAL VIP CTA
        ========================================================== */}

        <section className="mt-24">
          <div className="relative overflow-hidden rounded-[38px] bg-black px-7 py-16 text-center text-white sm:px-12 md:px-20 md:py-24">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

            <div className="relative">
              <p className="text-xs font-bold tracking-[0.4em] text-zinc-400">
                LUXEMEN
              </p>

              <h2 className="mt-5 text-4xl font-black sm:text-5xl md:text-7xl">
                Upgrade Your
                <br />
                <span className="font-light italic">
                  Wardrobe.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-2xl leading-8 text-zinc-400">
                Discover premium men's fashion designed for
                confidence, comfort and modern style. Build a wardrobe
                that makes every occasion unforgettable.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/shop"
                  className="rounded-full bg-white px-9 py-4 font-black text-black transition hover:scale-105"
                >
                  Explore Collection →
                </Link>

                <Link
                  to="/cart"
                  className="rounded-full border border-white/30 px-9 py-4 font-black text-white transition hover:bg-white/10"
                >
                  View Shopping Bag
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProductDetails;