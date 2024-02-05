import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Collection } from "./components/collection";
import { Home } from "./components/home";
import { ProductDetails } from "./components/collection/productDetails";
import { WishlistProvider } from "./wishlistContext";
import { CartProvider } from "./cartContext";
import Checkout from "./components/checkout";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <WishlistProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection/:category?" element={<Collection />} />
            <Route
              path="/collection/productDetails/:productID"
              element={<ProductDetails />}
            />
            <Route path="/checkout/" element={<Checkout />} />
          </Routes>
          <Footer />
        </WishlistProvider>
      </CartProvider>
    </div>
  );
}

export default App;
