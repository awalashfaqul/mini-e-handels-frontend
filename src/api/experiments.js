import { API_BASE, handleResponse } from "../lib/api";

export const createExperiment = (exp) =>
  fetch(`${API_BASE}/experiment`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(exp),
  }).then(handleResponse);

export const getExperiment = (id) => fetch(`${API_BASE}/experiment/${id}`).then(handleResponse);

export const getVariant = (id) => fetch(`${API_BASE}/experiment/${id}/variant`).then(handleResponse);
