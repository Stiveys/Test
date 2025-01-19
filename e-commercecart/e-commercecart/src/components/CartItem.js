export default function CartItem({ item, removeFromCart, updateQuantity }) {
    return (
      <div className="flex justify-between items-center border-b py-2">
        <div>
          <h3 className="text-lg">{item.name}</h3>
          <p>${item.price}</p>
        </div>
        <div>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            className="w-16 text-center border rounded"
          />
          <button
            onClick={() => removeFromCart(item.id)}
            className="ml-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
