import React, { useEffect, useState } from 'react';
import '../stylesheets/App.scss';
import ProductList from './ProductList';
import Header from './Header';

const App = () => {
  const [products, setProducts] = useState([]);
  /* El estado por defecto del filterName será o vacío*/
  const [filterProduct, setFilterProduct] = useState('');

  /* Realizamos acciones en las diferentes fases del CICLO DE VIDA */

  // 1. Llamamos a los datos del API

  useEffect(() => {
    fetch('http://localhost:3100/images') // 
    .then(response => response.json())
    .then(data => setProducts(data));
}, []);
  console.log('products',products)

//   useEffect(() => {
//     fetch('http://localhost:3100/images') // 
//     .then(response => response.json())
//     .then(data => setProducts(data));
// }, []);
//   console.log('products',products)

  /* Función por LIFTING, recogemos el valor introducido en el input y los select
   y actualizamos el estado de cada filtro */
  const handleFilter = (data) => {
    console.log('data',data)
      setFilterProduct(data);
  };

  const handleLikes = (id,likes) => {
    console.log('oleeeeeee',id,likes)
    // setProducts(data);
  };

  
  /* Función que se encarga de pintar/filtrar las tarjetas por nombre, especie, estado y género */
  const renderFilteredProduct = () => {
    return products
      .filter((product) => {
        // console.log('product',product)
        const filteredProduct = (product.title
          .toUpperCase()
          .includes(filterProduct.toUpperCase()))
          ||
          (product.author
            .toUpperCase()
            .includes(filterProduct.toUpperCase())) ;
          // console.log('founded',filteredProduct)
        return filteredProduct;
      })
   };

  return (
    <div>
        <Header
          filterProduct={filterProduct}
          handleFilter={handleFilter}
        />
        <ProductList
          handleLikes={handleLikes}
          filterName={filterProduct}
          products={renderFilteredProduct()}
        />
    </div>
  );
};

export default App;