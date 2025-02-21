import { useEffect, useState } from "react";
import "./App.css";
import Category from "./components/Category";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("latest");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");

console.log("hello world")

  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = filterSelectedCategory(result);
    result = sortDate(result);
    setFilteredProducts(result);
  }, [products, sort, searchValue, selectedCategory]);

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };

  const filterSearchTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  };

  const sortDate = (array) => {
    let sorttedProducts = [...array];
    return sorttedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };

  const selectCategoryHandler = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filterSelectedCategory = (array) => {
    if (!selectedCategory) return array;
    return array.filter((item) => item.categoryId === selectedCategory);
  };

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const savedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
    setProducts(savedProducts);
    setCategories(savedCategories);
  }, []);

  useEffect(() => {
    if (products.length) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    if (categories.length) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

  return (
    <div>
      <div className="bg-slate-800 min-h-screen">
        <NavBar products={products} />
        <div className="container max-w-screen-sm mx-auto p-4">
          <Category setCategories={setCategories} />
          <Products categories={categories} setProducts={setProducts} />
          <Filter
            onSort={sortHandler}
            onSearch={searchHandler}
            sort={sort}
            searchValue={searchValue}
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={selectCategoryHandler}
          />
          <ProductList
            products={filteredProducts}
            categories={categories}
            setProducts={setProducts}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
