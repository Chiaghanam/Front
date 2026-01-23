import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import UpdateProfile from './pages/UpdateProfile';
import Header from './component/Header';
import Footer from './component/Footer';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
function App() {
  return (

    <Router className="App">
          <Header />
      <Routes element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id/" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UpdateProfile />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
