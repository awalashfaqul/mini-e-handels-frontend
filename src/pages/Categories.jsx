import { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import { getCategories } from "../api/categories";

export default function Categories() {
  const [cats, setCats] = useState([]);
  useEffect(()=> { getCategories().then(setCats).catch(()=>{}); }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cats.map(c => <CategoryCard key={c.id} category={c} />)}
      </div>
    </div>
  );
}
