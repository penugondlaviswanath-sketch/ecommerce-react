import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products
    .filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) =>
      category === "All" ? true : item.category === category
    );

  return (
    <div className="home-page">

         {/* HERO SECTION */}
        <div className="hero">
          <div className="hero-content">
             <h1>Big Sale is Live 🔥</h1>
             <p>Discover the best deals on electronics & fashion</p>
              <button className="hero-btn">Shop Now</button>
            </div>
        </div>


      {/* SEARCH + FILTER */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
        </select>
      </div>

      {/* PRODUCT GRID */}
      <div className="product-grid">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

    </div>
  );
}

export default Home;


