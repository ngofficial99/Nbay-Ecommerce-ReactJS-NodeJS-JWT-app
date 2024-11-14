import React from "react";

import "../style/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="/">NBay</a>
      </div>
      <div className="header-search">
        <input type="text" placeholder="Search Items" />
        <button style={{ marginLeft: "20px" }}>Search</button>
      </div>
      <div className="header-action">
        <ul>
        <li>
            <a href="/productmanagement">
              <i className="fafa-shopping-cart"></i> Product Management
            </a>
          </li>
          <li>
            <a href="/cart">
              <i className="fafa-shopping-cart"></i> Cart
            </a>
          </li>
          <li>
            <a href="/signup">
              <i className="fafa-user"></i> Sign In
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
