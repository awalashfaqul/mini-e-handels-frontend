export default function CategoryCard({ category }) {
  return (
    <div className="bg-white border rounded p-4 text-center shadow-sm hover:shadow-md transition">
      <h4 className="font-semibold truncate">{category.name}</h4>
      <p className="text-sm text-gray-600">
        {category.products?.length || 0} products
      </p>
    </div>
  );
}