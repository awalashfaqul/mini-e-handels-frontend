import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
//import ProductsPage from "./pages/ProductsPage";
//import CartPage from "./pages/CartPage";
//import OrdersPage from "./pages/OrdersPage";
//import ExperimentsPage from "./pages/ExperimentsPage";
//import PersonalizationPage from "./pages/PersonalizationPage";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Mini E-Commerce Store</h1>
      </header>
      <Navbar />
      <main className="flex-1 p-6">
        <Routes>
           <Route path="/" element={<HomePage />} />
          {/*<Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/experiments" element={<ExperimentsPage />} />
          <Route path="/personalization" element={<PersonalizationPage />} /> */}
        </Routes>
        {/* <p className="text-gray-700">Welcome to the store! Enjoy your stay.</p> */}
      </main>

      <Footer />

      {/* <footer className="bg-gray-200 text-center p-4">
        <p className="text-sm">© 2025 Mini E-Commerce Store</p>
      </footer> */}
    </div>
  );
}

//export default App;
