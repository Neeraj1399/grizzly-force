// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import Logo from "./Logo/GrizzlyForce_Logo-Horizontal_LightBackground.svg"; // Logo as image

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       {/* Logo as an image */}
//       <div className="logo">
//         <Link to="/">
//           <img src={Logo} alt="GrizzlyForce Logo" className="logo-img" />
//         </Link>
//       </div>

//       {/* Main navigation links */}
//       <ul className="nav-links">
//         <li>
//           <Link to="/find-workers">Find Workers</Link>
//         </li>
//         <li>
//           <Link to="/find-jobs">Find Jobs</Link>
//         </li>
//         <li>
//           <Link to="/about-us">About Us</Link>
//         </li>
//         <li>
//           <Link to="/resources">Resources</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>

//       {/* Auth links - Login and Open Account */}
//       <ul className="auth-links">
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//         <li>
//           <Link to="/open-account">
//             <button className="account-btn">Open an Account</button>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css"; // Your CSS file here
// import Logo from "./Logo/GrizzlyForce_Logo-Horizontal_LightBackground.svg"; // Adjust path accordingly

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <Link to="/">
//           <img src={Logo} alt="GrizzlyForce Logo" className="logo-img" />
//         </Link>
//       </div>

//       <button className="hamburger" onClick={toggleMenu}>
//         {/* Replace with an actual hamburger icon (e.g., FontAwesome or SVG) */}
//         ☰
//       </button>

//       <ul className={`nav-links ${isOpen ? "open" : ""}`}>
//         <li>
//           <Link to="/find-workers">Find Workers</Link>
//         </li>
//         <li>
//           <Link to="/find-jobs">Find Jobs</Link>
//         </li>
//         <li>
//           <Link to="/about-us">About Us</Link>
//         </li>
//         <li>
//           <Link to="/resources">Resources</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//         <li className="auth-links">
//           <Link to="/login">Login</Link>
//         </li>
//         <li>
//           <Link to="/open-account">
//             <button className="account-btn">Open an account</button>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Your CSS file here
import Logo from "./Logo/GrizzlyForce_Logo-Horizontal_LightBackground.svg"; // Adjust path accordingly
import BurgerMenuIcon from "./Logo/menu.svg"; // Import your burger menu SVG

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="GrizzlyForce Logo" className="logo-img" />
        </Link>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        <img src={BurgerMenuIcon} alt="Menu" className="hamburger-icon" />
      </button>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/find-workers">Find Workers</Link>
        </li>
        <li>
          <Link to="/find-jobs">Find Jobs</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li className="auth-links">
          <Link to="/login" className="login">
            Login
          </Link>
        </li>
        <li>
          <Link to="/open-account">
            <button className="account-btn">Open an account</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
