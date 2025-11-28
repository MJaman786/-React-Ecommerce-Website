import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCardWrapper from "./components/ProductCardWrapper";

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-gray-900 font-sans p-4">
        <ProductCardWrapper/>
      </div>
    </>
  );
};

export default App;