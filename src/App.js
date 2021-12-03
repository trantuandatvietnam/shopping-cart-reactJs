import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import DataProvider from "./components/Data/DataProvider";
import Details from "./components/Details";
import Header from "./components/Header";
import Products from "./components/Products";
function App(props) {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <section>
            <Routes>
              <Route index element={<Products />} />
              <Route path="/products" element={<Products />} />
              <Route path="products/:productsId" element={<Details />} />
              <Route path="/about" element={<Products />} />
              <Route path="/contact" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </section>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
