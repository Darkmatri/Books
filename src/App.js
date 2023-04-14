import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Categories from "./routes/Categories.js";
import Sign from "./routes/Sign.js";
import Searchbar from "./components/search/Searchbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/search" element={<Searchbar />} />
      </Routes>
    </>
  );
}

export default App;