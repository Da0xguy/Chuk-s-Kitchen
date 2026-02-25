import { Routes, Route } from "react-router-dom";
import Home from "./pages/landingpage";
import Explore from "./pages/explorepage";
import Cart from "./pages/cart";
import OrderSummary from "./pages/ordersummary";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order-summary" element={<OrderSummary />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;