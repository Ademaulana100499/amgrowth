import "./style.css";
import React, { useState, useEffect } from "react";

export const Theme = () => {
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
    } else {
      document.body.classList.remove("lightmode");
      localStorage.setItem("lightmode", null);
      setLogoSrc(logo.imageWhite);
    }
  }, [isLightMode]);
};
