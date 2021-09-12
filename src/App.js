import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import MovieReview from "./pages/MovieReview/MovieReview";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {

  return (
    <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieReview />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
