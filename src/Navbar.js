import './Navbar.css';

// Navbar component: shows the app title and the navigation links
// at the top of every page of the Student App.
function Navbar() {
  return (
    <nav className="navbar">
      {/* App title */}
      <h2 className="logo">Student App</h2>

      {/* Navigation links */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#register">Register</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
