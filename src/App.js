import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from './Home';
import Products from "./Products";
import Profile from "./Profile";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='products' element={<Products />} />
        </Routes>
      </BrowserRouter>
    );
  }
}


export default App;