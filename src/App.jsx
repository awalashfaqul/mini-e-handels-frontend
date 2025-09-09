//import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import Categories from "./pages/Categories";
// import Cart from "./pages/Cart";
// import Orders from "./pages/Orders";
// import Customers from "./pages/Customers";
// import Experiments from "./pages/Experiments";
// import Personalization from "./pages/Personalization";
// import { getVariant } from "./api/experiments";
// import { getPersonalized } from "./api/personalization";
// import ExperimentBanner from "./components/ExperimentBanner";
// import PersonalizedBanner from "./components/PersonalizedBanner";

// export default function App(){
//   return (
//     <div className="min-h-screen flex flex-col bg-slate-50">
//       <Navbar />
//       <main className="flex-1 container mx-auto px-4 py-8">
//         <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/products" element={<Products/>} />
//           <Route path="/categories" element={<Categories/>} />
//           <Route path="/cart" element={<Cart/>} />
//           <Route path="/orders" element={<Orders/>} />
//           <Route path="/customers" element={<Customers/>} />
//           <Route path="/experiments" element={<Experiments/>} />
//           <Route path="/personalization" element={<Personalization/>} />
//         </Routes>
//         <p className="text-gray-700">Welcome to the store! Enjoy your stay.</p>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <h1 className="text-4xl font-bold text-blue-600">Hello React 🚀</h1>
//     </div>
//   );
// }

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Experiments from "./pages/Experiments";
import Personalization from "./pages/Personalization";

// import { getVariant } from "./api/experiments";
// import { getPersonalized } from "./api/personalization";
// import ExperimentBanner from "./components/ExperimentBanner";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* Optional experiment banner at top */}
      {/* <ExperimentBanner getVariant={getVariant} getPersonalized={getPersonalized} /> */}

      <main className="flex-1 container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="/Experiments" element={<Experiments />} />
          <Route path="/Personalization" element={<Personalization />} />
        </Routes>
      </main>
      {/* <p className="text-gray-700 mt-8">Welcome to the store! Enjoy your stay.</p> */}

      <Footer />
    </div>
  );
}