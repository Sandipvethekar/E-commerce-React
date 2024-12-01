
import React from "react";
import Home from "./Home";
import About from "./About";
import Products from "./Products"
import Contact from "./Contact";
import SingleProduct from "./SingleProduct"
import Cart from "./Cart"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  const theme = {
    colors: {
      bg: "#F6F8FA",
    },
    media: {
      mobile: "768px",
      tab: "998px"
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <div style={{ marginTop: "90px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Products />} />
            <Route path="/contact" element={< Contact />} />
            <Route path="/singleproducts/:id" element={<  SingleProduct />} />
            <Route path="/card" element={<  Cart />} />
            <Route path="*" element={<  ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
