// import { API_BASE, handleResponse } from "../lib/api";

// export const createCart = () =>
//   fetch(`${API_BASE}/cart`, { method: "POST" }).then(handleResponse);

// export const getCart = (id) =>
//   fetch(`${API_BASE}/cart/${id}`).then(handleResponse);

// export const addToCart = (cartId, productId, qty = 1) =>
//   fetch(`${API_BASE}/cart/${cartId}/add/${productId}?qty=${qty}`, { method: "POST" }).then(handleResponse);

// export const clearCart = (cartId) =>
//   fetch(`${API_BASE}/cart/${cartId}/clear`, { method: "POST" }).then(handleResponse);

import { API_BASE, handleResponse } from "../lib/api";

// Normalizer: converts backend PascalCase → frontend camelCase
const normalizeCart = (cart) => ({
  id: cart.Id,
  customerId: cart.CustomerId,
  totalAmount: cart.TotalAmount,
  items: cart.Items?.map((i) => ({
    productId: i.ProductId,
    productName: i.ProductName,
    quantity: i.Quantity,
    price: i.Price,
  })) || [],
});

export const createCart = () =>
  fetch(`${API_BASE}/cart`, { method: "POST" })
    .then(handleResponse)
    .then(normalizeCart);

export const getCart = (id) =>
  fetch(`${API_BASE}/cart/${id}`)
    .then(handleResponse)
    .then(normalizeCart);

export const addToCart = (cartId, productId, qty = 1) =>
  fetch(`${API_BASE}/cart/${cartId}/add/${productId}?qty=${qty}`, { method: "POST" })
    .then(handleResponse)
    .then(normalizeCart);

export const clearCart = (cartId) =>
  fetch(`${API_BASE}/cart/${cartId}/clear`, { method: "POST" })
    .then(handleResponse)
    .then(normalizeCart);
