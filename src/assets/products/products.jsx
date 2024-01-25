// ProductPage.js
import React from "react";
import ProductCard from "../../components/card";

const products = [
  {
    id: 1,
    title: "Product 1",
    image: "product1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  // Add more products as needed
];

const ProductPage = () => {
  return (
    <div className="bg-orange-500 dark:bg-gray-800 min-h-screen p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
