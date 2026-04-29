function formatPrice(value) {
  return `$${value.toFixed(2)}`;
}

export default function CartPanel({
  items,
  subtotal,
  shippingFee,
  total,
  checkoutForm,
  onChange,
  onQuantityChange,
  onCheckout
}) {
  return (
    <aside className="cart-panel">
      <div>
        <p className="eyebrow">Your Bag</p>
        <h2>Checkout</h2>
      </div>

      <div className="cart-items">
        {items.length === 0 ? (
          <div className="empty-state">
            <p>Your cart is empty.</p>
            <span>Add a few products to place an order.</span>
          </div>
        ) : (
          items.map((item) => (
            <div className="cart-item" key={item.productId}>
              <img src={item.imageUrl} alt={item.name} />
              <div className="cart-item-details">
                <strong>{item.name}</strong>
                <span>{formatPrice(item.price)}</span>
                <div className="quantity-control">
                  <button type="button" onClick={() => onQuantityChange(item.productId, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => onQuantityChange(item.productId, 1)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="summary-card">
        <div className="summary-row">
          <span>Subtotal</span>
          <strong>{formatPrice(subtotal)}</strong>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <strong>{shippingFee === 0 ? "Free" : formatPrice(shippingFee)}</strong>
        </div>
        <div className="summary-row total">
          <span>Total</span>
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>

      <form className="checkout-form" onSubmit={onCheckout}>
        <input
          name="customerName"
          placeholder="Full name"
          value={checkoutForm.customerName}
          onChange={onChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email address"
          value={checkoutForm.email}
          onChange={onChange}
        />
        <textarea
          name="address"
          placeholder="Shipping address"
          rows="3"
          value={checkoutForm.address}
          onChange={onChange}
        />
        <button type="submit" disabled={items.length === 0}>
          Place Order
        </button>
      </form>
    </aside>
  );
}
