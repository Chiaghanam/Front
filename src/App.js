import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
function App() {
  return (
    <Router className="App">
      <Routes element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id/" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
