import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./css/nav.css";

export default function NavBar({ setMobileToggle }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [isSticky, setIsSticky] = useState(false);

  // Function to handle resizing the window
  const handleResize = () => {
    setIsMobile(window.innerWidth < 992);
  };

  // Function to handle scrolling and toggle sticky navbar
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener
      window.removeEventListener("scroll", handleScroll); // Cleanup scroll listener
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg  ${isMobile ? "mobile_menu" : ""} ${
        isSticky ? "sticky" : ""
      }`}
    >
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setMobileToggle((prev) => !prev)}
        aria-controls="navbarNav"
        aria-expanded={isMobile ? "true" : "false"}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="parent-div d-flex  align-items-center">
            <div
            className={` collapse navbar-collapse justify-content-end flex-grow-1 pe-3 ${
                isMobile ? "show" : ""
            }`}
            id="navbarNav"
            >
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <Link
                    className="nav-link"
                    to="/"
                    onClick={() => setMobileToggle(false)}
                >
                    Home
                </Link>
                </li>
                <li className="nav-item">
                <Link
                    className="nav-link"
                    to="/about"
                    onClick={() => setMobileToggle(false)}
                >
                    About
                </Link>
                </li>
                <li className="nav-item">
                <Link
                    className="nav-link"
                    to="/service"
                    onClick={() => setMobileToggle(false)}
                >
                    Services
                </Link>
                </li>
                <li className="nav-item">
                <Link
                    className="nav-link"
                    to="/portfolio"
                    onClick={() => setMobileToggle(false)}
                >
                    Portfolio
                </Link>
                </li>
                <li className="nav-item">
                <Link
                    className="nav-link"
                    to="/contact"
                    onClick={() => setMobileToggle(false)}
                >
                    Contact
                </Link>
                </li>
            </ul>
            </div>
            <div>
                <button >Login</button>
            </div>
        </div>
    </nav>
  );
}
