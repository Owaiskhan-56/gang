import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import NewArrivals from "./Pages/NewArrivals";
import Sale from "./Pages/Sale";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // CART
  const [cart, setCart] = useState([]);

  // ADD PRODUCT TO CART
  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // REMOVE PRODUCT
  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  // INCREASE QUANTITY
  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // DECREASE QUANTITY
  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // TOTAL ITEMS
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <BrowserRouter>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode
            ? "bg-zinc-950 text-white"
            : "bg-white text-zinc-900"
        }`}
      >

        {/* NAVBAR */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          cartCount={cartCount}
        />

        {/* ROUTES */}
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <Home
                darkMode={darkMode}
                addToCart={addToCart}
              />
            }
          />

          {/* SHOP */}
          <Route
            path="/shop"
            element={
              <Shop
                darkMode={darkMode}
                addToCart={addToCart}
              />
            }
          />

          {/* NEW ARRIVALS */}
          <Route
            path="/new-arrivals"
            element={
              <NewArrivals
                darkMode={darkMode}
                addToCart={addToCart}
              />
            }
          />

          {/* SALE */}
          <Route
            path="/sale"
            element={
              <Sale
                darkMode={darkMode}
                addToCart={addToCart}
              />
            }
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={
              <Contact
                darkMode={darkMode}
              />
            }
          />

          {/* PRODUCT DETAILS */}
          <Route
            path="/product/:id"
            element={
              <ProductDetails
                darkMode={darkMode}
                addToCart={addToCart}
              />
            }
          />

          {/* CART */}
          <Route
            path="/cart"
            element={
              <Cart
                darkMode={darkMode}
                cart={cart}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            }
          />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">

                <p className="text-sm tracking-[0.3em] text-gray-500">
                  404
                </p>

                <h1 className="mt-4 text-5xl font-bold">
                  Page Not Found
                </h1>

                <a
                  href="/"
                  className="mt-8 rounded-full bg-black px-8 py-4 font-semibold text-white"
                >
                  Back To Home
                </a>

              </div>
            }
          />

        </Routes>

        {/* FOOTER */}
        <Footer darkMode={darkMode} />

      </div>
    </BrowserRouter>
  );
}

export default App;