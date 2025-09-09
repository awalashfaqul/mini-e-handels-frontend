// import { API_BASE, handleResponse } from "../lib/api";

// export const getOrders = () => fetch(`${API_BASE}/orders`).then(handleResponse);

// export const getOrder = (id) => fetch(`${API_BASE}/orders/${id}`).then(handleResponse);

// export const createOrder = (order) =>
//   fetch(`${API_BASE}/orders`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(order),
//   }).then(handleResponse);

// // Checkout: call POST /api/order/checkout?cartId=1&customerId=1
// export const checkout = (cartId, customerId = null) => {
//   const query = `?cartId=${cartId}${customerId ? `&customerId=${customerId}` : ""}`;
//   return fetch(`${API_BASE}/orders/checkout${query}`, { method: "POST" }).then(handleResponse);
// };

// export const placeOrder = (id) => fetch(`${API_BASE}/orders/${id}/place`, { method: "PUT" }).then(handleResponse);

// export const cancelOrder = (id) => fetch(`${API_BASE}/orders/${id}/cancel`, { method: "PUT" }).then(handleResponse);

// export const deleteOrder = (id) => fetch(`${API_BASE}/orders/${id}`, { method: "DELETE" }).then(handleResponse);


import { API_BASE, handleResponse } from "../lib/api";

// GET all orders
export const getOrders = () =>
  fetch(`${API_BASE}/Order`).then(handleResponse);

// GET single order
export const getOrder = (id) =>
  fetch(`${API_BASE}/Order/${id}`).then(handleResponse);

// Create a new order
export const createOrder = (order) =>
  fetch(`${API_BASE}/Order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  }).then(handleResponse);

// Checkout: POST /api/Order/checkout?cartId=1&customerId=1
export const checkout = (cartId, customerId = null) => {
  const query = `?cartId=${cartId}${
    customerId ? `&customerId=${customerId}` : ""
  }`;
  return fetch(`${API_BASE}/Order/checkout${query}`, {
    method: "POST",
  }).then(handleResponse);
};

// Place order
export const placeOrder = (id) =>
  fetch(`${API_BASE}/Order/${id}/place`, { method: "PUT" }).then(handleResponse);

// Cancel order
export const cancelOrder = (id) =>
  fetch(`${API_BASE}/Order/${id}/cancel`, { method: "PUT" }).then(handleResponse);

// Delete order
export const deleteOrder = (id) =>
  fetch(`${API_BASE}/Order/${id}`, { method: "DELETE" }).then(handleResponse);
