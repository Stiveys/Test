export default function ProductItem({ product, addToCart }) {
    return (
      <div className="border p-4 rounded">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p>${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    );
  }
