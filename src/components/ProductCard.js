import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/ProductCard.scss';
import  { ReactComponent as LikeIcon } from '../images/likes.svg';
import  { ReactComponent as ResetIcon } from '../images/reset.svg';

function ProductCard({ handleLikes, productInfo}) {
  // console.log(key,productInfo)

  const addLike = (ev) => {
    console.log('id,likes',productInfo.id,productInfo.likes_count)
    handleLikes(productInfo.id,productInfo.likes_count++);
  };

  return (
    <li className={`product product__${productInfo.id}`}>
      <div className="product__corner">
        <p className="product__corner--price">{productInfo.price} €</p>
      </div>
      <div className="product__image">
        <img src={productInfo.main_attachment.small} alt={`${productInfo.title} by ${productInfo.author} `} />{/*// corregir */}
      </div>
      <div className="product__text">
        <p className="product__text--title">{productInfo.title.toUpperCase()}</p>
        <p className="product__text--author"><span>by</span> {productInfo.author}</p>
      </div>
      <div className="product__users">
         <div> 
         <button type="button" onClick={addLike} className={`product__users--likeButton ${productInfo.liked ? "liked" : ""}`}>

            <LikeIcon />
          </button>
          <p className="product__users--likesCount ">{productInfo.likes_count}</p>
        </div>
        <div> 
        <button type="button" className="product__users--likeButton">
            <ResetIcon/>
          </button>
          <p className="product__users--likesCount">{productInfo.liked}</p>

        </div>
      </div>
    </li>
  );
}
ProductCard.propTypes = {
  author: PropTypes.string,
  id: PropTypes.number,
  liked: PropTypes.bool,
  likes_count: PropTypes.number,
  main_attachment:PropTypes.array,
  price: PropTypes.number,
  title: PropTypes.string,
};

export default ProductCard;