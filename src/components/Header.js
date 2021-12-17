import React from 'react';
import Logo from '../images/logo-s.png';
import '../stylesheets/Header.scss';

const Header = (props) => {
    const handleFilter = (ev) => {
      props.handleFilter(ev.currentTarget.value);
    };
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
                <span className="material-icons">search</span>
                <input
                type="text"
                placeholder="You're looking for something?"
                key="filterProduct"
                id="filterProduct"
                value={props.filterProduct}
                onChange={handleFilter}
              />
        </div>
      </header>
    );
}

export default Header;