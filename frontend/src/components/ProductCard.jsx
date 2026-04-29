export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img className="product-image" src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-meta">
        <div className="product-header">
          <span className="product-category">{product.category}</span>
          <span className="product-rating">{Array.from({ length: product.rating }, () => "★").join("")}</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-footer">
          <strong>${product.price.toFixed(2)}</strong>
          <button type="button" onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
