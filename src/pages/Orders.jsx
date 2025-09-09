// import { useEffect, useState } from "react";
// import { getOrders, placeOrder, cancelOrder, checkoutOrder } from "../api/orders";
// import { useCart } from "../context/CartContext";
// import OrderCard from "../components/OrderCard";

// export default function Orders() {
//   const [orders, setOrders] = useState([]);
//   const { cart } = useCart(); // use cart context

//   // load all orders on mount
//   useEffect(() => {
//     getOrders().then(setOrders).catch(() => {});
//   }, []);

//   const handlePlace = async (id) => {
//     await placeOrder(id);
//     setOrders(await getOrders());
//   };

//   const handleCancel = async (id) => {
//     await cancelOrder(id);
//     setOrders(await getOrders());
//   };

//   const handleCheckout = async () => {
//     if (!cart?.id || cart.items.length === 0) {
//       alert("Your cart is empty");
//       return;
//     }
//     const order = await checkoutOrder(cart.id, 1); // for now, customerId=1
//     setOrders((prev) => [...prev, order]);
//     alert("Order placed successfully!");
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">Orders</h1>

//       {/* Checkout button */}
//       <button
//         onClick={handleCheckout}
//         className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
//       >
//         Checkout Current Cart
//       </button>

//       {/* Orders list */}
//       <div className="mt-8 space-y-4">
//         {orders.length === 0 ? (
//           <p className="text-gray-600">No orders placed yet.</p>
//         ) : (
//           orders.map((o) => (
//             <OrderCard
//               key={o.id}
//               order={o}
//               onPlace={handlePlace}
//               onCancel={handleCancel}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { getOrders } from "../api/orders"; // check this path is correct!

// export default function Orders() {
//   const [orders, setOrders] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // getOrders()
//     //   .then((data) => {
//     //     console.log("Orders fetched:", data); // 👀 log to debug
//     //     setOrders(data || []); // prevent null crash
//     //   })
//     //   .catch((err) => {
//     //     console.error("Error fetching orders:", err);
//     //     setError("Could not load orders");
//     //   })
//     //   .finally(() => setLoading(false));
//     const fakeOrders = [
//     { id: 1, status: "Processing" },
//     { id: 2, status: "Shipped" },
//     ];
//     setOrders(fakeOrders);
//     setLoading(false);

//   }, []);

//   if (loading) {
//     return <p className="text-gray-500">Loading orders...</p>;
//   }

//   if (error) {
//     return <p className="text-red-600">{error}</p>;
//   }

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Orders</h1>
//       {orders.length > 0 ? (
//         <ul className="space-y-2">
//           {orders.map((order) => (
//             <li key={order.id} className="p-4 border rounded bg-white shadow">
//               <p className="font-semibold">Order #{order.id}</p>
//               <p>Status: {order.status}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="text-gray-500">No orders found</p>
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { getOrders, placeOrder, cancelOrder, checkout } from "../api/orders";
import { useCart } from "../context/CartContext";
import OrderCard from "../components/OrderCard";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { cart } = useCart(); // use cart context

  // load all orders on mount
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (err) {
        console.error("Failed to load orders:", err);
        setError("Couldn't load orders. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handlePlace = async (id) => {
    try {
      await placeOrder(id);
      setOrders(await getOrders());
    } catch (err) {
      console.error("Failed to place order:", err);
      alert("Failed to place order. Please try again.");
    }
  };

  const handleCancel = async (id) => {
    try {
      await cancelOrder(id);
      setOrders(await getOrders());
    } catch (err) {
      console.error("Failed to cancel order:", err);
      alert("Failed to cancel order. Please try again.");
    }
  };

  const handleCheckout = async () => {
    if (!cart?.id || cart.items.length === 0) {
      alert("Your cart is empty");
      return;
    }
    try {
      const order = await checkout(cart.id, 1); // customerId=1
      setOrders((prev) => [...prev, order]);
      alert("Order placed successfully!");
    } catch (err) {
      console.error("Checkout failed:", err);
      alert("Checkout failed. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>

      {/* Checkout button */}
      <button
        onClick={handleCheckout}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
      >
        Checkout Current Cart
      </button>

      {/* Loading & Error States */}
      {loading && <p className="text-gray-500 mt-6">Loading orders...</p>}
      {error && <p className="text-red-600 mt-6">{error}</p>}

      {/* Orders list */}
      {!loading && !error && (
        <div className="mt-8 space-y-4">
          {orders.length === 0 ? (
            <p className="text-gray-600">No orders placed yet.</p>
          ) : (
            orders.map((o) => (
              <OrderCard
                key={o.id}
                order={o}
                onPlace={handlePlace}
                onCancel={handleCancel}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}
