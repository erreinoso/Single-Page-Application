import React, { useEffect, useState } from 'react';
import '../stylesheets/App.scss';
import ProductList from './ProductList';
import Header from './Header';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState('');

  useEffect(() => {
    fetch('http://localhost:3100/images') // 
    .then(response => response.json())
    .then(data => setProducts(data));
  }, []);

  const handleFilter = (data) => {
      setFilterProduct(data);
  };

  const handleLikes = (id) => {
    let newProductsArray= [...products]; // copying the old datas array
    let productIndex = newProductsArray.findIndex(pr=> pr.id===id);
    let productModified = newProductsArray.find(pr=> pr.id===id);
    productModified.liked ===false ? productModified.likes_count=productModified.likes_count+1: productModified.likes_count=productModified.likes_count-1;
    productModified.liked=!productModified.liked;
    newProductsArray[productIndex]=productModified;
    setProducts(newProductsArray);
  };
  
  const renderFilteredProducts = () => {
    return products
      .filter((product) => {
        const filteredProduct = (product.title
          .toUpperCase()
          .includes(filterProduct.toUpperCase()))
          ||
          (product.author
            .toUpperCase()
            .includes(filterProduct.toUpperCase())) ;
      return filteredProduct;
    })
  };

  return (
    <>
      <Header
        filterProduct={filterProduct}
        handleFilter={handleFilter}
      />
      <ProductList
        handleLikes={handleLikes}
        filterName={filterProduct}
        products={renderFilteredProducts()}
      />
    </>
  );
};

export default App;