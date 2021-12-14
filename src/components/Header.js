import React from 'react';
import Logo from '../images/logo.png';
import '../stylesheets/Header.scss';


const Header = (props) => {
    const handleFilter = (ev) => {
      props.handleFilter(ev.currentTarget.value);
    };
  
    // const handleContentClick = (ev) => {
    //   ev.preventDefault();
    // };
  
    return (
        <header className="header">
          <div className="header__logo">
          <img
            src={Logo}
            className="header__logo--img"
            alt="Shop's logo"
          />
          </div>
          <div className="header__input">
            {/* <form className="header__input" onSubmit={handleContentClick}> */}
                <span className="material-icons">search</span>
                <input
                type="text"
                placeholder="You're looking for something?"
                key="filterProduct"
                id="filterProduct"
                value={props.filterProduct}
                onChange={handleFilter}
              />
          {/* </form> */}
        </div>
      </header>
    );
}

export default Header;