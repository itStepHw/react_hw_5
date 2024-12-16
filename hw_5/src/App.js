import React, { useState } from "react";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import "./App.css";

const App = () => {

  const [products, setProducts] = useState([
    { id: 1, name: "Процессор", description: "Intel Core i7", price: 300, year: 2021, manufacturer: "Intel" },
    { id: 2, name: "Видеокарта", description: "NVIDIA RTX 3060", price: 500, year: 2022, manufacturer: "NVIDIA" },
    { id: 3, name: "Оперативная память", description: "16GB DDR4", price: 120, year: 2020, manufacturer: "Kingston" },
    { id: 4, name: "SSD", description: "Samsung 1TB", price: 150, year: 2021, manufacturer: "Samsung" },
    { id: 5, name: "Материнская плата", description: "ASUS ROG", price: 200, year: 2019, manufacturer: "ASUS" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState(null);


  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };


  const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price") return a.price - b.price;
    return 0;
  });

  return (
      <div className="app">
        <h1>Магазин компьютерных запчастей</h1>
        <div className="controls">
          <input
              type="text"
              placeholder="Поиск по имени..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={() => setSortBy("price")}>Сортировать по цене</button>
        </div>
        <ProductList products={sortedProducts} />
        <ProductForm onAddProduct={addProduct} />
      </div>
  );
};

export default App;