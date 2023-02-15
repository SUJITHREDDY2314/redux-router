import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import OrderSummary from "./Components/OrderSummanry";
import NoPage from "./Components/NoPage";
import Products from "./Components/Products";
import FeaturedProducts from "./Components/FeaturedProducts";
import NewProducts from "./Components/NewProducts";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
