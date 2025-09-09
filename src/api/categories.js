import { API_BASE, handleResponse } from "../lib/api";

export const getCategories = () => fetch(`${API_BASE}/category`).then(handleResponse);

export const getCategory = (id) => fetch(`${API_BASE}/category/${id}`).then(handleResponse);

export const createCategory = (data) =>
  fetch(`${API_BASE}/category`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(handleResponse);

  export const updateCategory = (id, data) =>
  fetch(`${API_BASE}/category/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(handleResponse);

  export const deleteCategory = (id) =>
  fetch(`${API_BASE}/category/${id}`, { method: "DELETE" }).then(handleResponse);
