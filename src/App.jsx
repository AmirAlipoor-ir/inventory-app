import { useState } from "react";
import "./App.css";
import Category from "./components/Category";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ProductList from "./components/ProductList";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  return (
    <div>
      <div className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <Category setCategories={setCategories} />
          <Products categories={categories} setProducts={setProducts} />
          <ProductList products={products} categories={categories} setProducts={setProducts}/>
        </div>
      </div>
    </div>
  );
}

export default App;
