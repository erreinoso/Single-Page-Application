import React from 'react';
import '../stylesheets/ProductList.scss';
import ProductCard from './ProductCard';


const ProductList = ({handleLikes, filterName,products}) => {
  if (products.length === 0 ){
    return (
      <main>
            <p className="productEmpty">
            There are no products matching with {filterName}.
            </p>
      </main>)
  }
  else
  {
    const productList =products.map((product, index) => {
        return (
            <ProductCard
            key={index}
                handleLikes={handleLikes}
                productInfo={product}
              />
          );
        }
    )
    return (
    <main>
      <ul className="productList">{productList} </ul> {/*//COrregir */}
    </main>
    )
  }
}


export default ProductList;