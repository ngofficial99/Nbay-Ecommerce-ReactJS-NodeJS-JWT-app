import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditProduct from './EditProduct';
import "../style/ProductManagement.css"

interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductManagement: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProductId, setEditingProductId] = useState<number | null>(null);

  useEffect(() => {
    // Fetch products data
    axios.get('http://localhost:5000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleDelete = (productId: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      axios.delete(`http://localhost:5000/products/${productId}`)
        .then(() => {
          setProducts(products.filter(product => product.id !== productId));
        })
        .catch(error => console.error('Error deleting product:', error));
    }
  };

  const handleEdit = (productId: number) => {
    setEditingProductId(productId);
  };

  const handleProductUpdated = (updatedProduct: Product) => {
    setProducts(products.map(product => product.id === updatedProduct.id ? updatedProduct : product));
  };

  return (
    <div className="product-management">
      <h2>Product List</h2>
      {products.map(product => (
        <div key={product.id} className="product-item">
          <span>{product.name} - ${product.price.toFixed(2)}</span>
          <button className="edit-button" onClick={() => handleEdit(product.id)}>Edit</button>
          <button className="delete-button" onClick={() => handleDelete(product.id)}>Delete</button>
        </div>
      ))}
      
      {editingProductId !== null && (
        <EditProduct
          productId={editingProductId}
          onClose={() => setEditingProductId(null)}
          onProductUpdated={handleProductUpdated}
        />
      )}
    </div>
  );
};

export default ProductManagement;
