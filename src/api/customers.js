import { API_BASE, handleResponse } from "../lib/api";

export const getCustomers = () => fetch(`${API_BASE}/customer`).then(handleResponse);

export const getCustomer = (id) => fetch(`${API_BASE}/customer/${id}`).then(handleResponse);

export const createCustomer = (c) =>
  fetch(`${API_BASE}/customer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      customersName: c.name,
      customersEmail: c.email,
      customersShippingAddress: c.shipping,
      customersMembershipLevel: c.membership || "Standard",
    }),
  }).then(handleResponse);

export const updateCustomer = (id, payload) =>
  fetch(`${API_BASE}/customer/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).then(handleResponse);

export const deleteCustomer = (id) => fetch(`${API_BASE}/customer/${id}`, { method: "DELETE" }).then(handleResponse);
