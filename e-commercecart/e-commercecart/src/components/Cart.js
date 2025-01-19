import CartItem from './CartItem';

export default function Cart({ cartItems, removeFromCart, updateQuantity }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          ))}
          <h2 className="text-xl font-bold">Total: ${totalPrice}</h2>
        </div>
      )}
    </div>
  );
}
