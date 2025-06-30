import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // ✅ Now works correctly
    };
  }, []);

  return (
    <div className={`nav ${show ? "nav__black" : ""}`}>
      <img className="nav__logo" src="./netflix-logo.png" alt="netflix-logo" />
      <img
        className="nav__avatar"
        src="./netflix-avatar.png"
        alt="netflix-avatar"
      />
    </div>
  );
};

export default Navbar;
