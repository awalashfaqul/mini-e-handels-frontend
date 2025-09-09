import React, { createContext, useContext, useEffect, useState } from "react";
import { createCart, getCart, addToCart as apiAddToCart } from "../api/cart";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // On mount create a cart (demo single cart)
  useEffect(() => {
    async function init() {
      setLoading(true);
      setError(null);
      try {
        const created = await createCart();
        setCart(created);
      } catch (err) {
        setError("Cart initialization failed");
        console.error("Cart init failed", err);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);

  const refresh = async () => {
    if (!cart) return;
    setLoading(true);
    setError(null);
    try {
      const fresh = await getCart(cart.id);
      setCart(fresh);
    } catch (err) {
      setError("Failed to refresh cart");
      console.error("Cart refresh failed", err);
    } finally {
      setLoading(false);
    }
  };

  const addItem = async (product, qty = 1) => {
    if (!cart) {
      setError("Cart not ready");
      console.error("Cart not ready");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await apiAddToCart(cart.id, product.id, qty);
      await refresh();
    } catch (err) {
      setError("Failed to add item to cart");
      console.error("Add to cart failed", err);
      setLoading(false);
    }
  };

  const clear = async () => {
    if (!cart) return;
    setLoading(true);
    setError(null);
    try {
      await fetch(`/api/cart/${cart.id}/clear`, { method: "POST" });
      await refresh();
    } catch (err) {
      setError("Failed to clear cart");
      console.error("Clear cart failed", err);
      setLoading(false);
    }
  };

  const value = { cart, loading, error, refresh, addItem, clear };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}