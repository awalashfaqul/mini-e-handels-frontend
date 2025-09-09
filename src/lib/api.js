export const API_BASE = "http://localhost:5246/api"; // Change this to your actual API base URL

// Handles all API responses
export async function handleResponse(res) {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `API error: ${res.status}`);
  }
  return res.json();
}
