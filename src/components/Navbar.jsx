import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      {/* <h1 className="font-bold text-xl">Mini E-Commerce Store</h1> */}
      <div className="space-x-4">
        <Link to="/">Home</Link>
      {/*   <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/experiments">Experiments</Link>
        <Link to="/personalization">Personalization</Link> */}
      </div> 
    </nav>
  );
}
