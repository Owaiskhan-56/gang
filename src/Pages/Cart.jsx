import React from "react";
import { Link } from "react-router-dom";

function Cart({
  darkMode,
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const delivery = subtotal >= 10000 || subtotal === 0
    ? 0
    : 300;

  const total = subtotal + delivery;

  return (
    <main
      className={`min-h-screen px-6 py-16 ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-white text-zinc-900"
      }`}
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-12">

          <p className="text-sm tracking-[0.3em] text-gray-500">
            LUXEMEN
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Shopping Bag
          </h1>

          <p className="mt-4 text-gray-500">
            Review your selected products before checkout.
          </p>

        </div>


        {/* EMPTY CART */}
        {cart.length === 0 ? (
          <div className="rounded-3xl border border-gray-200 px-6 py-20 text-center">

            <div className="text-6xl">
              🛍️
            </div>

            <h2 className="mt-6 text-3xl font-bold">
              Your bag is empty
            </h2>

            <p className="mt-4 text-gray-500">
              You haven't added anything to your bag yet.
            </p>

            <Link
              to="/shop"
              className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Start Shopping →
            </Link>

          </div>
        ) : (

          <div className="grid gap-10 lg:grid-cols-[1fr_380px]">

            {/* CART PRODUCTS */}
            <div className="space-y-5">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className={`flex flex-col gap-5 rounded-2xl border p-5 sm:flex-row ${
                    darkMode
                      ? "border-zinc-800 bg-zinc-900"
                      : "border-gray-200 bg-white"
                  }`}
                >

                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-40 w-full rounded-xl object-cover sm:w-32"
                  />


                  {/* INFO */}
                  <div className="flex flex-1 flex-col justify-between">

                    <div>

                      <p className="text-xs tracking-[0.2em] text-gray-500">
                        {item.brand}
                      </p>

                      <h2 className="mt-2 text-xl font-semibold">
                        {item.name}
                      </h2>

                      <p className="mt-2 font-bold">
                        Rs. {item.price.toLocaleString()}
                      </p>

                    </div>


                    {/* QUANTITY */}
                    <div className="mt-5 flex items-center gap-4">

                      <div className="flex items-center rounded-full border border-gray-300">

                        <button
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                          className="px-4 py-2"
                        >
                          −
                        </button>

                        <span className="min-w-8 text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                          className="px-4 py-2"
                        >
                          +
                        </button>

                      </div>

                      <button
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                        className="text-sm text-red-500 hover:underline"
                      >
                        Remove
                      </button>

                    </div>

                  </div>


                  {/* ITEM TOTAL */}
                  <div className="text-left sm:text-right">

                    <p className="text-lg font-bold">
                      Rs.{" "}
                      {(
                        item.price * item.quantity
                      ).toLocaleString()}
                    </p>

                  </div>

                </div>

              ))}

            </div>


            {/* SUMMARY */}
            <div
              className={`h-fit rounded-2xl border p-6 ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-gray-200 bg-gray-50"
              }`}
            >

              <h2 className="text-2xl font-bold">
                Order Summary
              </h2>


              <div className="mt-8 space-y-5">

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Subtotal
                  </span>

                  <span className="font-semibold">
                    Rs. {subtotal.toLocaleString()}
                  </span>
                </div>


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
                      Rs. {total.toLocaleString()}
                    </span>

                  </div>

                </div>

              </div>


              {/* CHECKOUT */}
              <button
                onClick={() =>
                  alert(
                    "Checkout system coming next!"
                  )
                }
                className="mt-8 w-full rounded-full bg-black px-6 py-4 font-semibold text-white transition hover:scale-[1.02]"
              >
                Proceed To Checkout →
              </button>


              <Link
                to="/shop"
                className="mt-4 block text-center text-sm font-semibold underline underline-offset-4"
              >
                Continue Shopping
              </Link>

            </div>

          </div>

        )}

      </div>
    </main>
  );
}

export default Cart;
