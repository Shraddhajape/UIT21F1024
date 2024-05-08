// ProductList.js
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div>
    </div>
  );
};

export default ProductList;
