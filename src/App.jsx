import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Homepage } from "./Components/Homepage/Homepage";
import { ArticlePage } from "./Components/ArticlePage/ArticlePage";
import { ArticleCard } from "./Components/Homepage/ArticleCard";

function App() {
  
  return (
    <>
      <Link to="/">
        <Header />
      </Link>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/article/:article_id" element={<ArticlePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
