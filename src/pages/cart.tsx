import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

type CartItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
};

const initialItems: CartItem[] = [
  {
    id: "1",
    name: "Jollof Rice & Fried Chicken",
    description: "With plantain, extra pepper sauce",
    price: 3200,
    image: "src/assets/image 9.png",
    quantity: 1,
  },
  {
    id: "2",
    name: "Jollof Rice & Fried Chicken",
    description: "With plantain, extra pepper sauce",
    price: 3200,
    image: "src/assets/image4.png",
    quantity: 1,
  },
];

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialItems);

  const increaseQty = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
    <Navbar />
    <div className="bg-gray-100 p-6 rounded-lg max-w-3xl mx-auto my-22">
      <h2 className="text-lg font-semibold mb-4">Your Cart</h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center bg-white p-4 rounded-lg mb-3 shadow-sm"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 rounded-md object-cover"
          />

          <div className="flex-1 ml-4">
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => decreaseQty(item.id)}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              −
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() => increaseQty(item.id)}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              +
            </button>
          </div>

          <div className="w-24 text-right font-semibold text-orange-600">
            ₦{(item.price * item.quantity).toLocaleString()}
          </div>

          <button
            onClick={() => removeItem(item.id)}
            className="ml-4 text-red-500 font-bold"
          >
            ×
          </button>
        </div>
      ))}

      <div className="flex justify-between items-center mt-6">
        <a href="/explore" className="text-blue-600 text-sm">
          + Add more items from Chuck's Kitchen
        </a>

        <div className="text-lg font-bold">
          Total: ₦{total.toLocaleString()}
        </div>
      </div>
      <a href="/order-summary" className="bg-orange-500 hover:bg-orange-600 px-12 py-2 rounded-md text-white transition">Checkout</a>
    </div>
    <Footer />
    </>
  );
};

export default Cart;