import { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear("userRole");
    navigate("/");
  };

  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark
        relative"
      style={{ backgroundColor: "#ffc107" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={""}
            alt="app logo"
            className="img-fluid"
            style={{ maxWidth: "100px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenuHandler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-center ${
            toggleMenu ? "show" : ""
          }`}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link fontNav" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fontNav" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fontNav" href="#menu">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fontNav" href="#awards">
                Awards
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fontNav" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="logoutNav">
          <div
            onClick={handleLogOut}
            style={{ cursor: "pointer" }}
            className="nav-link"
          >
            Log out
          </div>
          <span className="mx-2">|</span>
          <a href="/" className="nav-link">
            Book Table
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
