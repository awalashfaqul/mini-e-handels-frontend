import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../api/products";
import { useCart } from "../context/CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { addItem } = useCart();

  useEffect(() => {
    getProducts().then(setProducts).catch(()=>{});
  }, []);

  const handleAdd = async (p) => {
    await addItem(p, 1);
    alert(`${p.name} added to cart`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => <ProductCard key={p.id} product={p} onAdd={handleAdd} />)}
      </div>
    </div>
  );
}
