import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
