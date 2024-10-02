import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { fetchProducts } from "../services/productService";
import ProductCard from "../Components/ProductCard";
import DropDown from "../Components/DropDown";
import HomeSkeleton from "../Components/HomeSkeleton";

function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  console.log(data);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showSkeleton, setShowSkeleton] = useState(true);

  // Show skeleton for 5 seconds, then load actual content
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  // Function to filter products based on selected category
  const filterProducts = (products, category) => {
    if (category === "All") return products;
    return products.filter(product => product.category === category);
  };

  const handleSelectCategory = category => {
    setSelectedCategory(category);
  };

  // Display skeleton if still loading
  if (isLoading || showSkeleton) {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          margin: "auto",
          gap: "16px",
        }}
      >
        {/* Display 16 Skeleton cards (4 rows, 4 columns) */}
        {Array.from({ length: 16 }).map((_, index) => (
          <HomeSkeleton key={index} loading={true} />
        ))}
      </div>
    );
  }

  if (error) return <div>Error fetching products</div>;

  const filteredProducts = filterProducts(data?.data, selectedCategory);

  return (
    <div>
      <h1>Products</h1>
      <DropDown onSelectCategory={handleSelectCategory} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "20px",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {filteredProducts.map(product => (
          <ProductCard
            key={product._id}
            name={product.name}
            description={product.description}
            image={product.image}
            buyPrice={product.buyPrice}
            rentPrice={product.rentPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
