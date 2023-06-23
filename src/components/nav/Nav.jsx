import React, { useEffect, useState } from "react";
import AVATAR from "../../assets/Netflix-avatar.png";
import LOGO from "../../assets/logo.png";
import "./nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [isVisible, setVisible] = useState(false);
  const navigate = useNavigate()
  function checkScrollMovement() {
    let scrollY = Math.floor(window.scrollY);
    if (scrollY >= 180) {
      setVisible(true);
    }
    if (scrollY <= 10) {
      setVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", checkScrollMovement);
  }, []);

  return (
    <nav
      className="navbar"
      style={{ backgroundColor: `${isVisible ? "#030c23" : "transparent"}` }}
    >
      <img src={LOGO} alt="netflix logo" />
      <img src={AVATAR} alt="profile" onClick={() => navigate("/profile")} />
    </nav>
  );
}

export default Nav;
