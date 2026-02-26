import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

type Step = "summary" | "checkout" | "payment";

const OrderSummary: React.FC = () => {
  const [step, setStep] = useState<Step>("summary");
  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">(
    "delivery"
  );

  const [deliveryDetails, setDeliveryDetails] = useState({
    address: "123 Main Street, Victoria Island, Lagos",
    deliveryTime: "ASAP (10-20 mins)",
    instructions: "",
    contact: "+234 801 234 5678",
  });

  const orderItems = [
    { id: 1, name: "Jollof Rice & Fried Chicken", quantity: 2, price: 3500 },
    { id: 2, name: "Peppered Snail", quantity: 1, price: 2000 },
  ];

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryFee = deliveryType === "delivery" ? 500 : 0;
  const serviceFee = 300;
  const total = subtotal + deliveryFee + serviceFee;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-gray-100 pt-28 pb-20 flex items-center justify-center px-4">

        {/* ========================= */}
        {/* ORDER SUMMARY */}
        {/* ========================= */}
        {step === "summary" && (
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md space-y-6">

            <h2 className="text-2xl font-bold">Order Summary</h2>

            {orderItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between bg-gray-50 p-3 rounded-lg text-sm"
              >
                <span>{item.name} × {item.quantity}</span>
                <span>₦{(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}

            <div className="bg-gray-50 p-4 rounded-xl text-sm space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₦{deliveryFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Service Fee</span>
                <span>₦{serviceFee.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex justify-between bg-orange-50 p-4 rounded-xl font-bold text-lg text-orange-600">
              <span>Total</span>
              <span>₦{total.toLocaleString()}</span>
            </div>

            <button
              onClick={() => setStep("checkout")}
              className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition"
            >
              Proceed to Checkout →
            </button>
          </div>
        )}

        {/* ========================= */}
        {/* CHECKOUT */}
        {/* ========================= */}
        {step === "checkout" && (
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md space-y-6">

            <h2 className="text-2xl font-bold">Checkout Details</h2>

            {deliveryType === "delivery" && (
              <div className="space-y-4">
                <input
                  type="text"
                  value={deliveryDetails.address}
                  onChange={(e) =>
                    setDeliveryDetails({
                      ...deliveryDetails,
                      address: e.target.value,
                    })
                  }
                  placeholder="Delivery Address"
                  className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-orange-200 outline-none"
                />

                <input
                  type="text"
                  value={deliveryDetails.deliveryTime}
                  onChange={(e) =>
                    setDeliveryDetails({
                      ...deliveryDetails,
                      deliveryTime: e.target.value,
                    })
                  }
                  placeholder="Delivery Time"
                  className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-orange-200 outline-none"
                />

                <textarea
                  value={deliveryDetails.instructions}
                  onChange={(e) =>
                    setDeliveryDetails({
                      ...deliveryDetails,
                      instructions: e.target.value,
                    })
                  }
                  placeholder="Instructions (Optional)"
                  className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-orange-200 outline-none resize-none"
                />

                <input
                  type="text"
                  value={deliveryDetails.contact}
                  onChange={(e) =>
                    setDeliveryDetails({
                      ...deliveryDetails,
                      contact: e.target.value,
                    })
                  }
                  placeholder="Contact Number"
                  className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-orange-200 outline-none"
                />
              </div>
            )}

            <button
              onClick={() => setStep("payment")}
              className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
            >
              Continue to Payment →
            </button>

            <button
              onClick={() => setStep("summary")}
              className="w-full text-sm text-gray-500"
            >
              ← Back
            </button>
          </div>
        )}

        {/* ========================= */}
        {/* PAYMENT CARD */}
        {/* ========================= */}
        {step === "payment" && (
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm space-y-4">

            <h2 className="text-xl font-semibold">Payment</h2>

            {/* Pay With */}
            <div className="text-sm">
              <p className="mb-2 font-medium">Pay With:</p>
              <div className="flex gap-6 text-gray-600">
                <label className="flex items-center gap-2">
                  <input type="radio" defaultChecked />
                  Card
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  Bank
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  Transfer
                </label>
              </div>
            </div>

            {/* Card Number */}
            <div>
              <label className="text-sm">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9101 1121"
                className="w-full border p-2 rounded mt-1 text-sm"
              />
            </div>

            {/* Expiry + CVV */}
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="text-sm">Expiration Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full border p-2 rounded mt-1 text-sm"
                />
              </div>
              <div className="w-24">
                <label className="text-sm">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full border p-2 rounded mt-1 text-sm"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-600">
              <input type="checkbox" />
              <span>Save card details</span>
            </div>

            <button className="w-full bg-orange-600 text-white py-2 rounded font-semibold hover:bg-orange-700 transition">
              Pay ₦{total.toLocaleString()}
            </button>

            <button
              onClick={() => setStep("checkout")}
              className="w-full text-sm text-gray-500"
            >
              ← Back
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default OrderSummary;