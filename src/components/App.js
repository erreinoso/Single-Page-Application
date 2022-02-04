import React, { useEffect, useState } from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import ProductList from './ProductList';

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
    fetch(`http://localhost:3100/images/${id}}/likes`, {
      method: "post",
      body: JSON.stringify()
      })
    .then(response => response.ok ? updateLikes(id): alert("Your like could not be sent"))
  };
  
  const updateLikes = (id) => {
    let newProductsArray= [...products]; 
    let productIndex = newProductsArray.findIndex(pr=> pr.id===id);
    let productModified = newProductsArray.find(pr=> pr.id===id);
    
    productModified.liked=!productModified.liked;

    productModified.liked ? productModified.likes_count++ : productModified.likes_count--; //Thanks for the tip, Pedro & Aleksei.

    newProductsArray[productIndex]=productModified;
    setProducts(newProductsArray);
  }


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