import React from "react";

const Navbar = () => {
  return(
  <>
    <nav className="navigation">
      <a href="/" className="kickerLogo123">
        <img src="/images/kickerlogo.png" alt="kicker logo" />
      </a>
      <a href="/">HOME</a>
      <a href="/products">PRODUCTS</a>
      <a href="/contacts">CONTACTS</a>
      {/* <a href="Cart.html">MY CART</a> */}
    </nav>
  </>
  )};

export default Navbar;