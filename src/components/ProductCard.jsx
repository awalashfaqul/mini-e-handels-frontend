function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 flex flex-col hover:shadow-lg transition">
      <img
        src={product.image || "https://via.placeholder.com/150"}
        alt={product.name}
        className="h-40 object-cover mb-3 rounded"
        loading="lazy"
      />
      <h3 className="text-lg font-semibold truncate">{product.name}</h3>
      <p className="text-gray-600 flex-grow line-clamp-2">{product.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-blue-600 font-bold text-lg">{product.price} kr</div>
        <button
          onClick={() => onAddToCart(product)}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ProductCard;