import PropTypes from 'prop-types';
import '../stylesheets/ProductCard.scss';
import LikeIcon from '../images/like.png';
import RepostIcon from '../images/repost.png';

function ProductCard({ handleLikes, productInfo}) {

  const addLike = () => {
    handleLikes(productInfo.id);
  };

  return (
    <li className={`product product__${productInfo.id}`}>
      <div className="product__corner">
        <p className="product__corner--price">{productInfo.price.toFixed(2)} <span> €</span></p>
      </div>
      <div className="product__image">
        <img className="product__image--small" src={productInfo.main_attachment.small} alt={`${productInfo.title} by ${productInfo.author} `} />
        <img className="product__image--big" src={productInfo.main_attachment.big} alt={`${productInfo.title} by ${productInfo.author} `} />
      </div>
      <div className="product__text">
        <p className="product__text--title">{productInfo.title.toUpperCase()}</p>
        <p className="product__text--author"><span>by</span> {productInfo.author}</p>
      </div>
      <div className="product__users">
         <div className="product__users--likes"> 
          <p className="product__users--likes--count ">{('000'+productInfo.likes_count).slice(-3)}</p>
          <input type="button" style={{ backgroundImage: `url(${LikeIcon})` }} onClick={addLike} className={`product__users--likes--button ${productInfo.liked ? "liked" : ""}`}></input>
        </div>
        <div className="product__users--repost"> 
          <input type="button" style={{ backgroundImage: `url(${RepostIcon})` }} className="product__users--repost--button"></input>
          <p className="product__users--repost--count">000</p>        
        </div>
      </div>
    </li>
  );
}

export default ProductCard;