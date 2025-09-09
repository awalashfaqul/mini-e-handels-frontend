function CartItem({ item, onRemove }) {
  const total = (item.price * item.quantity).toFixed(2);

  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h4 className="font-semibold truncate">{item.name}</h4>
        <p className="text-gray-500">
          {item.price} kr × {item.quantity} = <span className="font-medium">{total} kr</span>
        </p>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-600 hover:underline"
        aria-label={`Remove ${item.name} from cart`}
      >
        Remove
      </button>
    </div>
  );
}
export default CartItem;