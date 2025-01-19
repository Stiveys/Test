import ProductItem from './ProductItem';

const products = [
  { id: 1, name: 'T-Shirt', price: 20 },
  { id: 2, name: 'Jeans', price: 40 },
  { id: 3, name: 'Sneakers', price: 60 },
  { id: 4, name: 'Hat', price: 15 },
  { id: 5, name: 'Socks', price: 5 },
];

export default function ProductList({ addToCart }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}
