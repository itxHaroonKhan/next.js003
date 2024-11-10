import React from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden" id='products'>
     <Image 
        src={product.image} 
        alt={product.title} 
        width={400} // specify width
        height={256} // specify height
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
        <p className="text-gray-600 text-sm">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
