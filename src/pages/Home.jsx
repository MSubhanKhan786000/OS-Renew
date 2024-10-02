import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchProducts } from '../services/productService';
import ProductCard from '../Components/ProductCard';

function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts, 
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products</div>;

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <p>This is the home page of the website.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data?.data?.map((product) => (
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
