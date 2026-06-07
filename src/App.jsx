import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import NavBar from "./components/NavBar"
import AuthProvider from "./context/AuthContext";
import CartProvider from "./context/CartContext";


function App() {
  const location = useLocation();
  return (
    <AuthProvider>
      <CartProvider>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth key={location.state?.mode || "auth"} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;