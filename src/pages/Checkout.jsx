import { useEffect, useState } from "react";
import { getOrders, checkoutOrder, cancelOrder, placeOrder } from "../api/orders";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const [orders, setOrders] = useState([]);
  const { cart } = useCart(); // from CartContext

  // load all orders
  useEffect(() => {
    getOrders().then(setOrders);
  }, []);

  // checkout current cart
  const handleCheckout = async () => {
    if (!cart?.id || cart.items.length === 0) {
      alert("Cart is empty");
      return;
    }
    const order = await checkoutOrder(cart.id, 1); // here we hardcode customerId=1, in real app take logged in user
    setOrders((prev) => [...prev, order]);
    alert("Order placed successfully!");
  };

  // cancel order
  const handleCancel = async (id) => {
    await cancelOrder(id);
    setOrders((prev) => prev.map((o) => o.id === id ? { ...o, status: "Cancelled" } : o));
  };

  // place order (confirm)
  const handlePlace = async (id) => {
    await placeOrder(id);
    setOrders((prev) => prev.map((o) => o.id === id ? { ...o, status: "Placed" } : o));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout / Orders</h1>

      <button
        onClick={handleCheckout}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
      >
        Checkout Current Cart
      </button>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
        {orders.length === 0 ? (
          <p className="text-gray-600">No orders placed yet.</p>
        ) : (
          <div className="space-y-4">
            {orders.map((o) => (
              <div key={o.id} className="border rounded-lg p-4 shadow bg-white">
                <p><span className="font-semibold">Order ID:</span> {o.id}</p>
                <p><span className="font-semibold">Status:</span> {o.status}</p>
                <p><span className="font-semibold">Total:</span> {o.totalAmount} kr</p>

                <div className="flex gap-3 mt-3">
                  {o.status !== "Placed" && (
                    <button
                      onClick={() => handlePlace(o.id)}
                      className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                    >
                      Place
                    </button>
                  )}
                  {o.status !== "Cancelled" && (
                    <button
                      onClick={() => handleCancel(o.id)}
                      className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
