import React, { useState, useEffect } from "react";
import "./style.css";

const Theme = ({ logo, setLogoSrc }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("lightmode");
    if (savedTheme === "active") {
      setIsLightMode(true);
    } else {
      setIsLightMode(false);
    }
  }, []);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add("lightmode");
      localStorage.setItem("lightmode", "active");
      setLogoSrc(logo.imageBlack);
      setImageHomeSrc(imageHome.imageBlack);
    } else {
      document.body.classList.remove("lightmode");
      localStorage.setItem("lightmode", null);
      setLogoSrc(logo.imageWhite);
      setImageHomeSrc(imageHome.imageWhite);
    }
  }, [isLightMode, logo.imageBlack, logo.imageWhite, setLogoSrc]);

  const toggleTheme = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  return (
    <button
      id="theme-switch"
      className="theme-switch"
      onClick={toggleTheme}
      style={{ cursor: "pointer" }}
    >
      {isLightMode ? (
        <i className="ri-moon-line"></i>
      ) : (
        <i className="ri-sun-line"></i>
      )}
    </button>
  );
};

export default Theme;
