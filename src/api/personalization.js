import { API_BASE, handleResponse } from "../lib/api";

export const getPersonalized = (segment) =>
  fetch(`${API_BASE}/personalization/${segment}`).then(handleResponse);

export const addPersonalized = (payload) =>
  fetch(`${API_BASE}/personalization`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).then(handleResponse);
