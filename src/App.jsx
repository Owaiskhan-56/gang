import React, { useState } from "react";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import NewArrivals from "./Pages/NewArrivals";
import Sale from "./Pages/Sale";
import Contact from "./Pages/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <div
        className={
          darkMode
            ? "min-h-screen bg-zinc-950 text-white"
            : "min-h-screen bg-white text-zinc-900"
        }
      >
        {/* Navbar */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* Pages / Routes */}
        <Routes>
          <Route
            path="/"
            element={<Home darkMode={darkMode} />}
          />

          <Route
            path="/shop"
            element={<Shop darkMode={darkMode} />}
          />

          <Route
            path="/new-arrivals"
            element={<NewArrivals darkMode={darkMode} />}
          />

          <Route
            path="/sale"
            element={<Sale darkMode={darkMode} />}
          />

          <Route
            path="/contact"
            element={<Contact darkMode={darkMode} />}
          />
        </Routes>

        {/* Footer */}
        <Footer darkMode={darkMode} />
      </div>
    </BrowserRouter>
  );
}

export default App;