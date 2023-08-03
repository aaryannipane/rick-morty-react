import React from "react";
import { Header } from "./components/Navbar/Header";
import { Home } from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CharDetails } from "./components/CharDetails/CharDetails";
import "../src/components/styles.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/character/:id" element={<CharDetails />} />
        </Routes>
        <div className="p-3 bg-dark text-white text-center">
          <p className="lead pt-2">Made By <a href="https://github.com/aaryannipane" target="_blank">Aryan Nipane</a></p>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
