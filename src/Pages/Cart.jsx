import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

function Cart({
  darkMode,
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");

  const [savedItems, setSavedItems] = useState([]);
  const [giftMessage, setGiftMessage] = useState("");
  const [orderNote, setOrderNote] = useState("");

  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");

  /* ================= PRODUCTS ================= */

  const recommendedProducts = [
    {
      id: 101,
      name: "Premium Black Shirt",
      price: 4999,
      image:
        "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=700&q=85",
    },
    {
      id: 102,
      name: "Classic Beige Outfit",
      price: 5499,
      image:
        "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=700&q=85",
    },
    {
      id: 103,
      name: "Modern Casual Wear",
      price: 3999,
      image:
        "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=700&q=85",
    },
  ];

  /* ================= CALCULATIONS ================= */

  const subtotal = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    [cart]
  );

  const totalItems = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + item.quantity,
        0
      ),
    [cart]
  );

  const delivery = subtotal >= 10000 || subtotal === 0 ? 0 : 300;

  const discountedSubtotal = Math.max(
    subtotal - discount,
    0
  );

  const total = discountedSubtotal + delivery;

  const freeDeliveryTarget = 10000;

  const remainingForFreeDelivery = Math.max(
    freeDeliveryTarget - subtotal,
    0
  );

  const progress = Math.min(
    (subtotal / freeDeliveryTarget) * 100,
    100
  );

  const estimatedSavings = discount;

  /* ================= COUPON ================= */

  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();

    if (code === "LUXE10") {
      const couponDiscount = Math.round(subtotal * 0.1);

      setDiscount(couponDiscount);
      setCouponMessage(
        "✓ Coupon applied — You saved 10%!"
      );
    } else if (code === "WELCOME500") {
      const couponDiscount = Math.min(500, subtotal);

      setDiscount(couponDiscount);
      setCouponMessage(
        "✓ Welcome coupon applied — Rs. 500 saved!"
      );
    } else if (code === "") {
      setDiscount(0);
      setCouponMessage("Please enter a coupon code.");
    } else {
      setDiscount(0);
      setCouponMessage(
        "Invalid coupon. Try LUXE10."
      );
    }
  };

  /* ================= SAVE ITEM ================= */

  const saveForLater = (item) => {
    setSavedItems((previous) => {
      const alreadySaved = previous.some(
        (saved) => saved.id === item.id
      );

      if (alreadySaved) {
        return previous;
      }

      return [...previous, item];
    });

    removeFromCart(item.id);
  };

  const removeSavedItem = (id) => {
    setSavedItems((previous) =>
      previous.filter((item) => item.id !== id)
    );
  };

  /* ================= CUSTOMER ================= */

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;

    setCustomer((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* ================= CHECKOUT ================= */

  const handleCheckout = (e) => {
    e.preventDefault();

    setCheckoutOpen(false);
    setOrderPlaced(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* ================= STYLES ================= */

  const cardStyle = darkMode
    ? "border-zinc-800 bg-zinc-900"
    : "border-gray-200 bg-white";

  const inputStyle = darkMode
    ? "border-zinc-700 bg-zinc-950 text-white placeholder:text-zinc-500"
    : "border-gray-300 bg-white text-zinc-900";

  /* ================= ORDER SUCCESS ================= */

  if (orderPlaced) {
    return (
      <main
        className={`min-h-screen px-6 py-20 ${
          darkMode
            ? "bg-zinc-950 text-white"
            : "bg-zinc-100 text-zinc-900"
        }`}
      >
        <div className="mx-auto max-w-3xl">

          <div
            className={`rounded-[30px] border p-10 text-center shadow-xl md:p-16 ${cardStyle}`}
          >
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-5xl">
              ✓
            </div>

            <p className="mt-8 text-sm tracking-[0.3em] text-gray-500">
              LUXEWEAR
            </p>

            <h1 className="mt-4 text-5xl font-bold md:text-6xl">
              Order Confirmed!
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-500">
              Thank you for shopping with LUXEWEAR.
              Your order has been received successfully.
            </p>

            <div
              className={`mx-auto mt-8 max-w-md rounded-2xl p-6 ${
                darkMode
                  ? "bg-zinc-950"
                  : "bg-zinc-100"
              }`}
            >
              <p className="text-sm text-gray-500">
                Order Number
              </p>

              <p className="mt-2 text-2xl font-bold">
                #LUXE-{Math.floor(Math.random() * 90000 + 10000)}
              </p>

              <div className="mt-5 flex justify-between border-t border-gray-300 pt-5">
                <span className="text-gray-500">
                  Total
                </span>

                <span className="font-bold">
                  Rs. {total.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/shop"
                className="rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
              >
                Continue Shopping →
              </Link>

              <Link
                to="/"
                className={`rounded-full border px-8 py-4 font-semibold ${
                  darkMode
                    ? "border-zinc-700"
                    : "border-gray-300"
                }`}
              >
                Back Home
              </Link>
            </div>
          </div>

        </div>
      </main>
    );
  }

  return (
    <main
      className={`min-h-screen px-6 py-16 ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-zinc-100 text-zinc-900"
      }`}
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mb-12">

          <p className="text-sm tracking-[0.3em] text-gray-500">
            LUXEWEAR
          </p>

          <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-end">

            <div>
              <h1 className="text-5xl font-bold md:text-6xl">
                Shopping Bag
              </h1>

              <p className="mt-4 text-gray-500">
                Review your selected products before checkout.
              </p>
            </div>

            {cart.length > 0 && (
              <div className="rounded-full border border-gray-300 px-5 py-2 text-sm">
                🛍️ {totalItems}{" "}
                {totalItems === 1 ? "item" : "items"}
              </div>
            )}

          </div>
        </div>

        {/* ================= EMPTY CART ================= */}

        {cart.length === 0 && savedItems.length === 0 ? (
          <div
            className={`rounded-[30px] border px-6 py-24 text-center ${cardStyle}`}
          >
            <div className="text-7xl">
              🛍️
            </div>

            <h2 className="mt-7 text-3xl font-bold">
              Your bag is empty
            </h2>

            <p className="mx-auto mt-4 max-w-md leading-7 text-gray-500">
              You haven't added anything to your bag yet.
              Discover our latest men's collection and find
              something you love.
            </p>

            <Link
              to="/shop"
              className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Start Shopping →
            </Link>

            <p className="mt-8 text-sm text-gray-500">
              Free delivery on orders over Rs. 10,000
            </p>
          </div>
        ) : (
          <>
            {/* ================= FREE DELIVERY ================= */}

            {cart.length > 0 && (
              <div
                className={`mb-8 rounded-2xl border p-6 ${cardStyle}`}
              >
                {remainingForFreeDelivery > 0 ? (
                  <>
                    <div className="flex flex-col justify-between gap-3 sm:flex-row">
                      <p className="font-semibold">
                        🚚 You're Rs.{" "}
                        {remainingForFreeDelivery.toLocaleString()}{" "}
                        away from FREE delivery.
                      </p>

                      <span className="text-sm text-gray-500">
                        Rs. {subtotal.toLocaleString()} /
                        Rs. 10,000
                      </span>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-300">
                      <div
                        className="h-full rounded-full bg-black transition-all duration-500"
                        style={{
                          width: `${progress}%`,
                        }}
                      />
                    </div>
                  </>
                ) : (
                  <div className="flex items-center gap-3 font-semibold">
                    <span className="text-xl">
                      🎉
                    </span>

                    You've unlocked FREE delivery!
                  </div>
                )}
              </div>
            )}

            {/* ================= MAIN CART ================= */}

            {cart.length > 0 && (
              <div className="grid gap-10 lg:grid-cols-[1fr_400px]">

                {/* ================= PRODUCTS ================= */}

                <div className="space-y-5">

                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className={`group rounded-2xl border p-5 transition hover:-translate-y-1 hover:shadow-xl ${cardStyle}`}
                    >
                      <div className="flex flex-col gap-6 sm:flex-row">

                        {/* IMAGE */}

                        <div className="relative shrink-0">

                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-52 w-full rounded-xl object-cover sm:h-40 sm:w-32"
                          />

                          {item.discount && (
                            <span className="absolute left-2 top-2 rounded-full bg-black px-3 py-1 text-xs font-bold text-white">
                              {item.discount}
                            </span>
                          )}

                        </div>

                        {/* DETAILS */}

                        <div className="flex flex-1 flex-col justify-between">

                          <div>

                            <p className="text-xs tracking-[0.2em] text-gray-500">
                              {item.brand || "LUXEWEAR"}
                            </p>

                            <h2 className="mt-2 text-xl font-semibold">
                              {item.name}
                            </h2>

                            {item.rating && (
                              <p className="mt-2 text-sm">
                                ⭐ {item.rating}
                              </p>
                            )}

                            <div className="mt-3 flex items-center gap-3">
                              <span className="font-bold">
                                Rs.{" "}
                                {item.price.toLocaleString()}
                              </span>

                              {item.oldPrice && (
                                <span className="text-sm text-gray-500 line-through">
                                  Rs.{" "}
                                  {item.oldPrice.toLocaleString()}
                                </span>
                              )}
                            </div>

                          </div>

                          {/* CONTROLS */}

                          <div className="mt-6 flex flex-wrap items-center gap-4">

                            <div
                              className={`flex items-center rounded-full border ${
                                darkMode
                                  ? "border-zinc-700"
                                  : "border-gray-300"
                              }`}
                            >

                              <button
                                type="button"
                                onClick={() =>
                                  decreaseQuantity(item.id)
                                }
                                disabled={item.quantity <= 1}
                                className="px-4 py-2 text-lg transition hover:opacity-50 disabled:opacity-30"
                              >
                                −
                              </button>

                              <span className="min-w-8 text-center font-semibold">
                                {item.quantity}
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  increaseQuantity(item.id)
                                }
                                className="px-4 py-2 text-lg transition hover:opacity-50"
                              >
                                +
                              </button>

                            </div>

                            <button
                              type="button"
                              onClick={() =>
                                removeFromCart(item.id)
                              }
                              className="text-sm text-red-500 hover:underline"
                            >
                              Remove
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                saveForLater(item)
                              }
                              className="text-sm text-gray-500 hover:text-black"
                            >
                              ♡ Save for later
                            </button>

                          </div>

                        </div>

                        {/* ITEM TOTAL */}

                        <div className="text-left sm:text-right">

                          <p className="text-xs text-gray-500">
                            Item Total
                          </p>

                          <p className="mt-2 text-lg font-bold">
                            Rs.{" "}
                            {(
                              item.price * item.quantity
                            ).toLocaleString()}
                          </p>

                        </div>

                      </div>
                    </div>
                  ))}

                  <Link
                    to="/shop"
                    className="inline-block pt-3 text-sm font-semibold underline underline-offset-4"
                  >
                    ← Continue Shopping
                  </Link>

                </div>

                {/* ================= RIGHT SIDEBAR ================= */}

                <div className="space-y-5">

                  {/* SUMMARY */}

                  <div
                    className={`h-fit rounded-2xl border p-7 ${cardStyle}`}
                  >

                    <h2 className="text-2xl font-bold">
                      Order Summary
                    </h2>

                    <div className="mt-8 space-y-5">

                      <div className="flex justify-between">
                        <span className="text-gray-500">
                          Items
                        </span>

                        <span>
                          {totalItems}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-500">
                          Subtotal
                        </span>

                        <span className="font-semibold">
                          Rs.{" "}
                          {subtotal.toLocaleString()}
                        </span>
                      </div>

                      {discount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>
                            Discount
                          </span>

                          <span className="font-semibold">
                            - Rs.{" "}
                            {discount.toLocaleString()}
                          </span>
                        </div>
                      )}

                      <div className="flex justify-between">
                        <span className="text-gray-500">
                          Delivery
                        </span>

                        <span className="font-semibold">
                          {delivery === 0
                            ? "FREE"
                            : `Rs. ${delivery}`}
                        </span>
                      </div>

                      <div className="border-t border-gray-300 pt-5">

                        <div className="flex justify-between">
                          <span className="text-lg font-bold">
                            Total
                          </span>

                          <span className="text-xl font-bold">
                            Rs.{" "}
                            {total.toLocaleString()}
                          </span>
                        </div>

                      </div>

                    </div>

                    {/* SAVINGS */}

                    {estimatedSavings > 0 && (
                      <div className="mt-5 rounded-xl bg-green-100 px-4 py-3 text-sm font-semibold text-green-700">
                        🎉 You're saving Rs.{" "}
                        {estimatedSavings.toLocaleString()}
                      </div>
                    )}

                    {/* COUPON */}

                    <div className="mt-8">

                      <label className="mb-2 block text-sm font-semibold">
                        Discount Code
                      </label>

                      <div className="flex gap-2">

                        <input
                          type="text"
                          value={coupon}
                          onChange={(e) =>
                            setCoupon(e.target.value)
                          }
                          placeholder="Enter code"
                          className={`min-w-0 flex-1 rounded-full border px-4 py-3 outline-none ${inputStyle}`}
                        />

                        <button
                          type="button"
                          onClick={applyCoupon}
                          className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:scale-105"
                        >
                          Apply
                        </button>

                      </div>

                      {couponMessage && (
                        <p
                          className={`mt-3 text-sm ${
                            discount > 0
                              ? "text-green-600"
                              : "text-red-500"
                          }`}
                        >
                          {couponMessage}
                        </p>
                      )}

                      <p className="mt-2 text-xs text-gray-500">
                        Try: LUXE10 or WELCOME500
                      </p>

                    </div>

                    {/* CHECKOUT */}

                    <button
                      type="button"
                      onClick={() =>
                        setCheckoutOpen(true)
                      }
                      className="mt-8 w-full rounded-full bg-black px-6 py-4 font-semibold text-white transition hover:scale-[1.02] hover:bg-zinc-800"
                    >
                      Proceed To Checkout →
                    </button>

                  </div>

                  {/* SECURE CHECKOUT */}

                  <div
                    className={`rounded-2xl border p-6 ${cardStyle}`}
                  >

                    <div className="flex gap-4">

                      <div className="text-2xl">
                        🔒
                      </div>

                      <div>
                        <h3 className="font-bold">
                          Secure Checkout
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                          Your information is protected
                          with secure checkout technology.
                        </p>
                      </div>

                    </div>

                    <div className="mt-5 border-t border-gray-300 pt-5">

                      <p className="text-sm font-semibold">
                        Payment Methods
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">

                        <span className="rounded-lg border px-3 py-2 text-xs">
                          💳 Card
                        </span>

                        <span className="rounded-lg border px-3 py-2 text-xs">
                          💵 COD
                        </span>

                        <span className="rounded-lg border px-3 py-2 text-xs">
                          📱 Wallet
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* DELIVERY */}

                  <div
                    className={`rounded-2xl border p-6 ${cardStyle}`}
                  >

                    <h3 className="font-bold">
                      🚚 Delivery Information
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      Estimated delivery:
                      <span className="font-semibold text-current">
                        {" "}3–5 business days
                      </span>
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                      Free delivery above Rs. 10,000.
                    </p>

                  </div>

                </div>
              </div>
            )}

            {/* ================= SAVED ITEMS ================= */}

            {savedItems.length > 0 && (
              <section className="mt-20">

                <div className="mb-8">
                  <p className="text-sm tracking-[0.3em] text-gray-500">
                    YOUR SAVED PRODUCTS
                  </p>

                  <h2 className="mt-3 text-3xl font-bold">
                    Save For Later
                  </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">

                  {savedItems.map((item) => (
                    <div
                      key={item.id}
                      className={`overflow-hidden rounded-2xl border ${cardStyle}`}
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-72 w-full object-cover"
                      />

                      <div className="p-5">

                        <h3 className="font-bold">
                          {item.name}
                        </h3>

                        <p className="mt-2 font-semibold">
                          Rs.{" "}
                          {item.price.toLocaleString()}
                        </p>

                        <button
                          type="button"
                          onClick={() =>
                            removeSavedItem(item.id)
                          }
                          className="mt-5 text-sm text-red-500 hover:underline"
                        >
                          Remove
                        </button>

                      </div>

                    </div>
                  ))}

                </div>
              </section>
            )}

            {/* ================= ORDER NOTES ================= */}

            {cart.length > 0 && (
              <section className="mt-20 grid gap-8 md:grid-cols-2">

                <div
                  className={`rounded-2xl border p-7 ${cardStyle}`}
                >

                  <div className="text-3xl">
                    🎁
                  </div>

                  <h3 className="mt-4 text-xl font-bold">
                    Add a Gift Message
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Add a personal message to your order.
                  </p>

                  <textarea
                    value={giftMessage}
                    onChange={(e) =>
                      setGiftMessage(e.target.value)
                    }
                    maxLength={250}
                    rows="4"
                    placeholder="Happy Birthday!..."
                    className={`mt-5 w-full resize-none rounded-xl border px-4 py-3 outline-none ${inputStyle}`}
                  />

                  <p className="mt-2 text-right text-xs text-gray-500">
                    {giftMessage.length}/250
                  </p>

                </div>

                <div
                  className={`rounded-2xl border p-7 ${cardStyle}`}
                >

                  <div className="text-3xl">
                    📝
                  </div>

                  <h3 className="mt-4 text-xl font-bold">
                    Order Notes
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Any special instructions for delivery?
                  </p>

                  <textarea
                    value={orderNote}
                    onChange={(e) =>
                      setOrderNote(e.target.value)
                    }
                    maxLength={250}
                    rows="4"
                    placeholder="Please call before delivery..."
                    className={`mt-5 w-full resize-none rounded-xl border px-4 py-3 outline-none ${inputStyle}`}
                  />

                  <p className="mt-2 text-right text-xs text-gray-500">
                    {orderNote.length}/250
                  </p>

                </div>

              </section>
            )}

            {/* ================= RECOMMENDED ================= */}

            <section className="mt-24">

              <div className="mb-10 text-center">

                <p className="text-sm tracking-[0.3em] text-gray-500">
                  YOU MAY ALSO LIKE
                </p>

                <h2 className="mt-3 text-4xl font-bold">
                  Complete Your Look
                </h2>

              </div>

              <div className="grid gap-6 md:grid-cols-3">

                {recommendedProducts.map((product) => (
                  <Link
                    to="/shop"
                    key={product.id}
                    className={`group overflow-hidden rounded-2xl border ${cardStyle}`}
                  >

                    <div className="overflow-hidden">

                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                    </div>

                    <div className="p-5">

                      <h3 className="font-bold">
                        {product.name}
                      </h3>

                      <p className="mt-2 font-semibold">
                        Rs.{" "}
                        {product.price.toLocaleString()}
                      </p>

                      <span className="mt-4 inline-block text-sm font-semibold underline">
                        View Product →
                      </span>

                    </div>

                  </Link>
                ))}

              </div>

            </section>

            {/* ================= TRUST ================= */}

            <section className="mt-24 border-t border-gray-300 pt-16">

              <div className="grid gap-10 text-center md:grid-cols-4">

                <div>
                  <div className="text-3xl">
                    🔒
                  </div>

                  <h3 className="mt-3 font-bold">
                    Secure Payment
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Safe and secure checkout
                  </p>
                </div>

                <div>
                  <div className="text-3xl">
                    🚚
                  </div>

                  <h3 className="mt-3 font-bold">
                    Fast Delivery
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Delivery across Pakistan
                  </p>
                </div>

                <div>
                  <div className="text-3xl">
                    ↩️
                  </div>

                  <h3 className="mt-3 font-bold">
                    Easy Returns
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Simple return process
                  </p>
                </div>

                <div>
                  <div className="text-3xl">
                    ♡
                  </div>

                  <h3 className="mt-3 font-bold">
                    Customer Care
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    We're here to help
                  </p>
                </div>

              </div>

            </section>
          </>
        )}
      </div>

      {/* ================= CHECKOUT MODAL ================= */}

      {checkoutOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm">

          <div
            className={`max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl p-7 shadow-2xl md:p-10 ${
              darkMode
                ? "bg-zinc-900 text-white"
                : "bg-white text-zinc-900"
            }`}
          >

            {/* MODAL HEADER */}

            <div className="flex items-start justify-between gap-5">

              <div>
                <p className="text-sm tracking-[0.3em] text-gray-500">
                  LUXEWEAR
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  Checkout
                </h2>
              </div>

              <button
                type="button"
                onClick={() =>
                  setCheckoutOpen(false)
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border text-xl transition hover:bg-zinc-100 hover:text-black"
              >
                ×
              </button>

            </div>

            <form
              onSubmit={handleCheckout}
              className="mt-8 space-y-8"
            >

              {/* CUSTOMER DETAILS */}

              <div>

                <h3 className="text-xl font-bold">
                  Customer Information
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">

                  <input
                    name="name"
                    value={customer.name}
                    onChange={handleCustomerChange}
                    placeholder="Full Name"
                    required
                    className={`rounded-xl border px-5 py-4 outline-none ${inputStyle}`}
                  />

                  <input
                    type="email"
                    name="email"
                    value={customer.email}
                    onChange={handleCustomerChange}
                    placeholder="Email Address"
                    required
                    className={`rounded-xl border px-5 py-4 outline-none ${inputStyle}`}
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={customer.phone}
                    onChange={handleCustomerChange}
                    placeholder="+92 300 1234567"
                    required
                    className={`rounded-xl border px-5 py-4 outline-none ${inputStyle}`}
                  />

                  <input
                    name="city"
                    value={customer.city}
                    onChange={handleCustomerChange}
                    placeholder="City"
                    required
                    className={`rounded-xl border px-5 py-4 outline-none ${inputStyle}`}
                  />

                  <input
                    name="postalCode"
                    value={customer.postalCode}
                    onChange={handleCustomerChange}
                    placeholder="Postal Code"
                    className={`rounded-xl border px-5 py-4 outline-none ${inputStyle}`}
                  />

                  <input
                    name="address"
                    value={customer.address}
                    onChange={handleCustomerChange}
                    placeholder="Complete Address"
                    required
                    className={`rounded-xl border px-5 py-4 outline-none md:col-span-2 ${inputStyle}`}
                  />

                </div>

              </div>

              {/* PAYMENT */}

              <div>

                <h3 className="text-xl font-bold">
                  Payment Method
                </h3>

                <div className="mt-5 grid gap-3">

                  <label
                    className={`flex cursor-pointer items-center gap-4 rounded-xl border p-5 ${
                      paymentMethod === "cod"
                        ? "border-black"
                        : ""
                    }`}
                  >

                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={
                        paymentMethod === "cod"
                      }
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                    />

                    <div>
                      <p className="font-bold">
                        💵 Cash on Delivery
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        Pay when your order arrives.
                      </p>
                    </div>

                  </label>

                  <label
                    className={`flex cursor-pointer items-center gap-4 rounded-xl border p-5 ${
                      paymentMethod === "card"
                        ? "border-black"
                        : ""
                    }`}
                  >

                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={
                        paymentMethod === "card"
                      }
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                    />

                    <div>
                      <p className="font-bold">
                        💳 Debit / Credit Card
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        Secure online payment.
                      </p>
                    </div>

                  </label>

                  <label
                    className={`flex cursor-pointer items-center gap-4 rounded-xl border p-5 ${
                      paymentMethod === "wallet"
                        ? "border-black"
                        : ""
                    }`}
                  >

                    <input
                      type="radio"
                      name="payment"
                      value="wallet"
                      checked={
                        paymentMethod === "wallet"
                      }
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                    />

                    <div>
                      <p className="font-bold">
                        📱 Mobile Wallet
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        Pay using your mobile wallet.
                      </p>
                    </div>

                  </label>

                </div>

              </div>

              {/* TOTAL */}

              <div
                className={`rounded-2xl p-6 ${
                  darkMode
                    ? "bg-zinc-950"
                    : "bg-zinc-100"
                }`}
              >

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Order Total
                  </span>

                  <span className="text-2xl font-bold">
                    Rs. {total.toLocaleString()}
                  </span>
                </div>

              </div>

              {/* CONFIRM */}

              <button
                type="submit"
                className="w-full rounded-full bg-black px-6 py-4 font-semibold text-white transition hover:scale-[1.02]"
              >
                Place Order →
              </button>

              <p className="text-center text-xs text-gray-500">
                🔒 Your information is secure and protected.
              </p>

            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default Cart;