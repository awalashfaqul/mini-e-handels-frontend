// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";
// import { useCart } from "../context/CartContext";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const { cart } = useCart();
//   const location = useLocation();
//   // Use quantity sum if available, fallback to length
//   const count =
//     cart?.cartItems?.reduce((sum, item) => sum + (item.quantity || 1), 0) ||
//     cart?.cartItems?.length ||
//     0;

//   const navLinks = [
//     { to: "/", label: "Home" },
//     { to: "/Products", label: "Products" },
//     { to: "/Categories", label: "Categories" },
//     { to: "/Customers", label: "Customers" },
//     { to: "/Orders", label: "Orders" },
//     { to: "/Experiments", label: "Experiments" },
//     { to: "/Personalization", label: "Personalization" },
//   ];

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-30">
//       <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//         <Link to="/" className="flex items-center gap-3">
//           <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded font-bold">
//             MES
//           </div>
//           <span className="font-semibold text-lg">Mini E-Commerce Store</span>
//         </Link>

//         {/* Desktop menu */}
//         <nav className="hidden md:flex items-center gap-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.to}
//               className={`hover:underline ${
//                 location.pathname === link.to ? "font-semibold text-blue-600" : ""
//               }`}
//               to={link.to}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>

//         <div className="flex items-center gap-4">
//           <Link to="/cart" className="relative" aria-label="Cart">
//             <svg
//               className="w-6 h-6 text-gray-700"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeWidth="2"
//                 d="M3 3h2l.4 2M7 13h10l4-8H5.4"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               ></path>
//             </svg>
//             {count > 0 && (
//               <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
//                 {count}
//               </span>
//             )}
//           </Link>

//           {/* Hamburger */}
//           <button
//             className="md:hidden p-2 border rounded"
//             onClick={() => setOpen((v) => !v)}
//             aria-label="Toggle menu"
//           >
//             <div className="w-6 h-6 flex flex-col justify-between">
//               <span className="block w-5 h-0.5 bg-gray-700"></span>
//               <span className="block w-5 h-0.5 bg-gray-700"></span>
//               <span className="block w-5 h-0.5 bg-gray-700"></span>
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {open && (
//         <div className="md:hidden border-t bg-white">
//           <div className="flex flex-col container mx-auto p-4 gap-3">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 onClick={() => setOpen(false)}
//                 className={`${
//                   location.pathname === link.to ? "font-semibold text-blue-600" : ""
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <Link
//               to="/cart"
//               onClick={() => setOpen(false)}
//               className="flex items-center gap-2"
//             >
//               Cart
//               {count > 0 && (
//                 <span className="text-xs bg-red-500 text-white rounded-full px-1">
//                   {count}
//                 </span>
//               )}
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";
// import { useCart } from "../context/CartContext";

// export default function Navbar() {
//   const { cart } = useCart(); // get cart from context
//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const links = [
//     { name: "Home", path: "/" },
//     { name: "Products", path: "/products" },
//     { name: "Categories", path: "/categories" },
//     { name: "Cart", path: "/cart" },
//     { name: "Orders", path: "/orders" },
//   ];

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/" className="text-2xl font-bold text-blue-600">
//               MiniStore
//             </Link>
//           </div>

//           {/* Desktop Links */}
//           <div className="hidden md:flex space-x-6 items-center">
//             {links.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`${
//                   location.pathname === link.path
//                     ? "text-blue-600 font-semibold"
//                     : "text-gray-700 hover:text-blue-600"
//                 }`}
//               >
//                 {link.name}
//                 {link.name === "Cart" && cart?.items?.length > 0 && (
//                   <span className="ml-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
//                     {cart.items.length}
//                   </span>
//                 )}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Hamburger */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-gray-700 hover:text-blue-600 focus:outline-none"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {menuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200 px-4 py-2 space-y-2">
//           {links.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               onClick={() => setMenuOpen(false)}
//               className={`block ${
//                 location.pathname === link.path
//                   ? "text-blue-600 font-semibold"
//                   : "text-gray-700 hover:text-blue-600"
//               }`}
//             >
//               {link.name}
//               {link.name === "Cart" && cart?.items?.length > 0 && (
//                 <span className="ml-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
//                   {cart.items.length}
//                 </span>
//               )}
//             </Link>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }

// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";
// import { useCart } from "../context/CartContext";

// export default function Navbar() {
//   const { cart } = useCart();
//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const links = [
//     { name: "Home", path: "/" },
//     { name: "Products", path: "/products" },
//     { name: "Categories", path: "/categories" },
//     { name: "Cart", path: "/cart" },
//     { name: "Orders", path: "/orders" },
//   ];

//   return (
//     <header className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
//       {/* Store Header */}
//       <div className="text-center py-3 font-bold text-xl md:text-2xl tracking-wide">
//         <h1>Mini e-Commerce Store (MeCS)</h1>
//       </div>

//       {/* Navigation */}
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/" className="text-2xl font-extrabold tracking-wide text-white">
//               MeCS
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6 items-center">
//             {links.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`px-3 py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-200 ${
//                   location.pathname === link.path
//                     ? "bg-white text-blue-600 shadow-md"
//                     : "hover:bg-white hover:text-blue-600"
//                 }`}
//               >
//                 {link.name}
//                 {link.name === "Cart" && cart?.items?.length > 0 && (
//                   <span className="ml-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
//                     {cart.items.length}
//                   </span>
//                 )}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Hamburger */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-white focus:outline-none"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {menuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="md:hidden mt-2 bg-white text-gray-700 rounded-lg shadow-lg py-2 space-y-2">
//             {links.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 onClick={() => setMenuOpen(false)}
//                 className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${
//                   location.pathname === link.path
//                     ? "bg-blue-100 text-blue-600 font-semibold"
//                     : "hover:bg-blue-100 hover:text-blue-600"
//                 }`}
//               >
//                 {link.name}
//                 {link.name === "Cart" && cart?.items?.length > 0 && (
//                   <span className="ml-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
//                     {cart.items.length}
//                   </span>
//                 )}
//               </Link>
//             ))}
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }


// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";
// import { useCart } from "../context/CartContext";

// export default function Navbar() {
//   const { cart } = useCart();
//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = [
//     { to: "/", label: "Home" },
//     { to: "/Products", label: "Products" },
//     { to: "/Categories", label: "Categories" },
//     { to: "/Customers", label: "Customers" },
//     { to: "/Orders", label: "Orders" },
//     { to: "/Experiments", label: "Experiments" },
//     { to: "/Personalization", label: "Personalization" },
//   ];

//   const cartCount = cart?.items?.reduce((sum, item) => sum + (item.quantity || 1), 0) || 0;

//   return (
//     <header className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg sticky top-0 z-50">
//       {/* Store Header */}
//       <div className="text-center py-3 font-bold text-xl md:text-2xl tracking-wide">
//         <h1>Mini e-Commerce Store (MeCS)</h1>
//       </div>

//       {/* Navigation */}
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="text-2xl font-extrabold tracking-wide text-white">
//             MeCS
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 className={`px-3 py-2 rounded-lg text-sm md:text-base font-medium transition-colors duration-200 ${
//                   location.pathname === link.to
//                     ? "bg-white text-blue-600 shadow-md"
//                     : "hover:bg-white hover:text-blue-600"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}

//             {/* Cart */}
//             <Link
//               to="/cart"
//               className="px-3 py-2 rounded-lg text-sm md:text-base font-medium bg-white text-blue-600 shadow-md hover:bg-blue-700 hover:text-white transition-colors"
//             >
//               Cart
//               {cartCount > 0 && (
//                 <span className="ml-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>
//           </div>

//           {/* Tablet & Mobile Dropdown */}
//           <div className="md:hidden relative">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="px-3 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-700 hover:text-white transition-colors"
//             >
//               Menu
//             </button>

//             {menuOpen && (
//               <div className="absolute right-0 mt-2 w-56 bg-white text-gray-700 rounded-lg shadow-lg z-50">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.to}
//                     to={link.to}
//                     onClick={() => setMenuOpen(false)}
//                     className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${
//                       location.pathname === link.to
//                         ? "bg-blue-100 text-blue-600 font-semibold"
//                         : "hover:bg-blue-100 hover:text-blue-600"
//                     }`}
//                   >
//                     {link.label}
//                   </Link>
//                 ))}

//                 {/* Cart in dropdown */}
//                 <Link
//                   to="/cart"
//                   onClick={() => setMenuOpen(false)}
//                   className="block px-4 py-2 rounded-lg transition-colors duration-200 bg-blue-50 hover:bg-blue-100 hover:text-blue-600"
//                 >
//                   Cart
//                   {cartCount > 0 && (
//                     <span className="ml-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
//                       {cartCount}
//                     </span>
//                   )}
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// import { Link, useLocation } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// export default function Navbar() {
//   const { cart } = useCart();
//   const location = useLocation();

//   const navLinks = [
//     { to: "/", label: "Home" },
//     { to: "/Products", label: "Products" },
//     { to: "/Categories", label: "Categories" },
//     { to: "/Customers", label: "Customers" },
//     { to: "/Orders", label: "Orders" },
//     { to: "/Experiments", label: "Experiments" },
//     { to: "/Personalization", label: "Personalization" },
//   ];

//   const cartCount = cart?.items?.reduce((sum, item) => sum + (item.quantity || 1), 0) || 0;

//   return (
//     <header className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg sticky top-0 z-50">
//       {/* Store Header */}
//       <div className="text-center py-3 font-bold text-xl md:text-2xl tracking-wide">
//         <h1>Mini e-Commerce Store (MeCS)</h1>
//       </div>

//       {/* Navigation Bar */}
//       <nav className="bg-blue-700">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-center space-x-4 md:space-x-6 h-14 items-center">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 className={`px-3 py-2 rounded-lg text-sm md:text-base font-medium transition-colors duration-200 ${
//                   location.pathname === link.to
//                     ? "bg-white text-blue-600 shadow-md"
//                     : "hover:bg-white hover:text-blue-600"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}

//             {/* Cart */}
//             <Link
//               to="/cart"
//               className="px-3 py-2 rounded-lg text-sm md:text-base font-medium bg-white text-blue-600 shadow-md hover:bg-blue-700 hover:text-white transition-colors"
//             >
//               Cart
//               {cartCount > 0 && (
//                 <span className="ml-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// import { Link, useLocation } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// export default function Navbar() {
//   const { cart } = useCart();
//   const location = useLocation();

//   const navLinks = [
//     { to: "/", label: "Home" },
//     { to: "/Products", label: "Products" },
//     { to: "/Categories", label: "Categories" },
//     { to: "/Customers", label: "Customers" },
//     { to: "/Orders", label: "Orders" },
//     { to: "/Experiments", label: "Experiments" },
//     { to: "/Personalization", label: "Personalization" },
//   ];

//   const cartCount = cart?.items?.reduce((sum, item) => sum + (item.quantity || 1), 0) || 0;

//   return (
//     <header className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg sticky top-0 z-50">
//       {/* Store Header */}
//       <div className="text-center py-3 font-bold text-xl md:text-2xl tracking-wide">
//         <h1>Mini e-Commerce Store (MeCS)</h1>
//       </div>

//       {/* Navigation Bar */}
//       <nav className="bg-blue-700">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Added gap-x-4 for spacing between menu items */}
//           <div className="flex justify-center items-center h-14 gap-x-8 md:gap-x-12">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 className={`px-3 py-2 rounded-lg text-sm md:text-base font-medium transition-colors duration-200 ${
//                   location.pathname === link.to
//                     ? "bg-white text-blue-600 shadow-md"
//                     : "hover:bg-white hover:text-blue-600"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}

//             {/* Cart */}
//             <Link
//               to="/cart"
//               className="px-3 py-2 rounded-lg text-sm md:text-base font-medium bg-white text-blue-600 shadow-md hover:bg-blue-700 hover:text-white transition-colors"
//             >
//               Cart
//               {cartCount > 0 && (
//                 <span className="ml-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/Products", label: "Products" },
    { to: "/Categories", label: "Categories" },
    { to: "/Customers", label: "Customers" },
    { to: "/Orders", label: "Orders" },
    { to: "/Experiments", label: "Experiments" },
    { to: "/Personalization", label: "Personalization" },
    { to: "/Cart", label: "Cart" },
  ];

  return (
    <header className="bg-blue-800 shadow-lg">
      {/* Store header */}
      <div className="text-center text-white font-bold text-xl md:text-2xl py-3">
        <h1>Mini e-Commerce Store (MeCS)</h1>
      </div>

      {/* Menu Bar */}
      <nav className="flex justify-center gap-3 py-2 flex-wrap">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={location.pathname === link.to ? "active" : ""}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
