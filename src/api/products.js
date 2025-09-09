import { API_BASE, handleResponse } from "../lib/api";

export const getProducts = () => fetch(`${API_BASE}/product`).then(handleResponse);

export const getProduct = (id) => fetch(`${API_BASE}/product/${id}`).then(handleResponse);

export const createProduct = (product) =>
  fetch(`${API_BASE}/product`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  }).then(handleResponse);

  export const deleteProduct = (id) =>
  fetch(`${API_BASE}/product/${id}`, { method: "DELETE" }).then(handleResponse);

  export const getProductsByCategory = (categoryId) =>
  fetch(`${API_BASE}/product/category/${categoryId}`).then(handleResponse);
