import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componenty/Header";
import Footer from "./componenty/Footer";
import HomeScreen from "./componenty/screens/HomeScreen";
import "bootstrap/dist/js/bootstrap.bundle.min"; 
import SignupScreen from "./componenty/screens/SignupScreen";
import LoginScreen from "./componenty/screens/LoginScreen";
import ProductScreen from "./componenty/screens/ProductScreen";
import Product from "./componenty/Product";
import CartScreen from "./componenty/screens/CartScreen";









export default function App() {
  return (
<Router>
  <Header />  
  <Routes>
    <Route path="/" element={<HomeScreen/>}></Route>
    <Route path="/prihlaseni" element={<LoginScreen/>}></Route>
    <Route path="/registrace" element={<SignupScreen/>}></Route>
    <Route path="/produkt/:id" element={<ProductScreen/>}></Route>
    <Route path="/kosik/:id?" element={<CartScreen/>}></Route>
  </Routes>
  <Footer />
</Router>
  );
}
