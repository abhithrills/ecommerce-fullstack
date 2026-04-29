import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import CartPanel from "./components/CartPanel";

const API_BASE_URL = "https://myspringbootapi-fzeah7f7edahafcg.centralindia-01.azurewebsites.net";
const DEFAULT_SHIPPING_FEE = 12;

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [status, setStatus] = useState({
    type: "idle",
    message: ""
  });
  const [checkoutForm, setCheckoutForm] = useState({
    customerName: "",
    email: "",
    address: ""
  });

  useEffect(() => {
    async function loadProducts() {
      try {
        setStatus({ type: "loading", message: "Loading products..." });
        const response = await fetch(`${API_BASE_URL}/api/products`);
        if (!response.ok) {
          throw new Error("Unable to load products.");
        }

        const payload = await response.json();
        setProducts(payload.data ?? []);
        setStatus({ type: "success", message: "Fresh arrivals are ready to shop." });
      } catch (error) {
        setStatus({
          type: "error",
          message: "The backend is not reachable yet. Start Spring Boot on port 8080 and refresh."
        });
      }
    }

    loadProducts();
  }, []);

  function handleAddToCart(product) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.productId === product.id);
      if (existingItem) {
        return currentItems.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...currentItems,
        {
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          imageUrl: product.imageUrl
        }
      ];
    });

    setStatus({ type: "success", message: `${product.name} added to cart.` });
  }

  function handleQuantityChange(productId, delta) {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCheckoutForm((currentForm) => ({
      ...currentForm,
      [name]: value
    }));
  }

  async function handleCheckout(event) {
    event.preventDefault();

    if (!checkoutForm.customerName || !checkoutForm.email || !checkoutForm.address) {
      setStatus({ type: "error", message: "Please fill in your name, email, and address." });
      return;
    }

    try {
      setStatus({ type: "loading", message: "Placing your order..." });
      const response = await fetch(`${API_BASE_URL}/orders/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...checkoutForm,
          items: cartItems
        })
      });

      if (!response.ok) {
        throw new Error("Unable to place the order.");
      }

      const payload = await response.json();
      const orderId = payload.data?.id;

      setCartItems([]);
      setCheckoutForm({
        customerName: "",
        email: "",
        address: ""
      });
      setStatus({
        type: "success",
        message: `Order #${orderId} placed successfully.`
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Checkout failed. Confirm the backend is running and try again."
      });
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = subtotal === 0 || subtotal >= 150 ? 0 : DEFAULT_SHIPPING_FEE;
  const total = subtotal + shippingFee;

  return (
  <div className="page-shell">
    <main className="layout">
      <section className="hero">
        <p className="eyebrow">Modern Ecommerce Demo</p>
        <h1>
          Abhishek Store 
        </h1>
        <div className={`status-banner ${status.type}`}>
          {status.message}
        </div>
      </section>

        <section className="content-grid">
          <div className="products-panel">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Products</p>
                <h2>Featured picks</h2>
              </div>
              <span>{products.length} items</span>
            </div>

            <div className="product-grid">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </div>

          <CartPanel
            items={cartItems}
            subtotal={subtotal}
            shippingFee={shippingFee}
            total={total}
            checkoutForm={checkoutForm}
            onChange={handleInputChange}
            onQuantityChange={handleQuantityChange}
            onCheckout={handleCheckout}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
