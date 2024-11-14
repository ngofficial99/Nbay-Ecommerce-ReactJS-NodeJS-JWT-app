import React from "react";
import "../style/ProductCard.css";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, price, image } = product;
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <p>Product Id: {id}</p>
      <button>Add to Cart</button>
      
    </div>
  );
};  

export default ProductCard;
