import { Routes, Route } from "react-router-dom";
import Home from "./pages/landingpage";
import Explore from "./pages/explorepage";
import Cart from "./pages/cart";
import OrderSummary from "./pages/ordersummary";
import Login from "./pages/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order-summary" element={<OrderSummary />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;