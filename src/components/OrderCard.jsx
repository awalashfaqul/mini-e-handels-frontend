// export default function OrderCard({ order, onPlace, onCancel }) {
//   return (
//     <div className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition">
//       <div className="flex justify-between items-center mb-2">
//         <h2 className="text-lg font-semibold">Order #{order.id}</h2>
//         <span
//           className={`px-3 py-1 text-sm font-medium rounded-full ${
//             order.status === "Pending"
//               ? "bg-yellow-100 text-yellow-800"
//               : order.status === "Confirmed"
//               ? "bg-green-100 text-green-800"
//               : "bg-red-100 text-red-800"
//           }`}
//         >
//           {order.status}
//         </span>
//       </div>

//       <div className="text-sm text-gray-600 space-y-1">
//         <p><strong>Customer ID:</strong> {order.customerId}</p>
//         <p><strong>Total:</strong> {order.totalAmount} kr</p>
//         {order.items && (
//           <p>
//             <strong>Items:</strong>{" "}
//             {order.items.map((i) => i.productName).join(", ")}
//           </p>
//         )}
//       </div>

//       {/* Action buttons */}
//       <div className="mt-4 flex gap-3">
//         {order.status === "Pending" && (
//           <button
//             onClick={() => onPlace(order.id)}
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
//           >
//             Confirm
//           </button>
//         )}
//         {order.status !== "Cancelled" && (
//           <button
//             onClick={() => onCancel(order.id)}
//             className="bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition"
//           >
//             Cancel
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

export default function OrderCard({ order, onPlace, onCancel }) {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Order #{order.id ?? order.Id}</h2>
        <span
          className={`px-3 py-1 text-sm font-medium rounded-full ${
            (order.status ?? order.Status) === "Pending"
              ? "bg-yellow-100 text-yellow-800"
              : (order.status ?? order.Status) === "Confirmed"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {order.status ?? order.Status}
        </span>
      </div>

      {/* Details */}
      <div className="text-sm text-gray-600 space-y-1">
        <p><strong>Customer ID:</strong> {order.customerId ?? order.CustomerId}</p>
        <p><strong>Total:</strong> {order.totalAmount ?? order.TotalAmount} kr</p>
        {(order.items ?? order.OrderItems) && (
          <p>
            <strong>Items:</strong>{" "}
            {(order.items ?? order.OrderItems)
              .map((i) => i.productName ?? i.ProductName)
              .join(", ")}
          </p>
        )}
      </div>

      {/* Action buttons */}
      <div className="mt-4 flex gap-3">
        {(order.status ?? order.Status) === "Pending" && (
          <button
            onClick={() => onPlace(order.id ?? order.Id)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Confirm
          </button>
        )}
        {(order.status ?? order.Status) !== "Cancelled" && (
          <button
            onClick={() => onCancel(order.id ?? order.Id)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}
