function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <h1>
          <span className="pizza">PIZZA</span>{" "}
          <span className="inn">INN</span>
        </h1>

        <ul className="nav-list">
          <li><a href="index.html">HOME</a></li>
          <li><a href="menu.html">MENU</a></li>
          <li><a href="order.html">ORDER</a></li>
          <li><a href="#">CONTACT US</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;