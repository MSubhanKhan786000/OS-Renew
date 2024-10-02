import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { fetchProducts } from '../services/productService';
import ProductCard from '../Components/ProductCard';
import DropDown from '../Components/DropDown';

function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const [selectedCategory, setSelectedCategory] = useState('All');

  // Function to filter products based on selected category
  const filterProducts = (products, category) => {
    if (category === 'All') return products;
    return products.filter(product => product.category === category);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products</div>;

  const filteredProducts = filterProducts(data?.data, selectedCategory);

  return (
    <div>
      <h1>Products</h1>
      <DropDown onSelectCategory={handleSelectCategory} />
      <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '20px', alignItems: 'center', justifyContent: 'space-evenly' }}>
        {filteredProducts.map((product) => (
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
