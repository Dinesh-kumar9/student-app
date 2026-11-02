import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Student App</h2>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#register">Register</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
