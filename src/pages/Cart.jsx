import { useEffect, useState } from "react";
import { getCart, clearCart, addToCart } from "../api/cart";
import { getProducts } from "../api/products";

export default function Cart() {
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCart(1).then(setCart).catch(() => {});
    getProducts().then(setProducts).catch(() => {});
  }, []);

  const handleAdd = async (productId) => {
    await addToCart(1, productId);
    setCart(await getCart(1));
  };

  const handleClear = async () => {
    await clearCart(1);
    setCart(await getCart(1));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {/* Cart Items */}
      {cart && cart.items.length > 0 ? (
        <div className="space-y-4">
          {cart.items.map((item) => (
            <div
              key={item.productId}
              className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{item.productName}</p>
                <p className="text-sm text-gray-600">
                  Qty: {item.quantity} × {item.price} kr
                </p>
              </div>
              <p className="font-bold text-lg">
                {item.quantity * item.price} kr
              </p>
            </div>
          ))}

          <div className="flex justify-between items-center mt-4 p-4 border-t">
            <p className="text-lg font-semibold">Total:</p>
            <p className="text-xl font-bold">{cart.totalAmount} kr</p>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              onClick={handleClear}
              className="bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition"
            >
              Clear Cart
            </button>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}

      {/* Product Quick Add */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Add More Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((p) => (
            <div
              key={p.id}
              className="border rounded-lg p-4 shadow bg-white flex flex-col justify-between hover:shadow-lg transition"
            >
              <div>
                <p className="font-semibold">{p.name}</p>
                <p className="text-sm text-gray-600">{p.price} kr</p>
              </div>
              <button
                onClick={() => handleAdd(p.id)}
                className="mt-3 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
