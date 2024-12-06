import React, { useEffect } from "react";
import "./style.css";

export const Scroll = () => {
  useEffect(() => {
    const scrollUp = () => {
      const scrollUp = document.getElementById("scroll-up");
      if (window.scrollY >= 350) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    };
    window.addEventListener("scroll", scrollUp);
    return () => {
      window.removeEventListener("scroll", scrollUp);
    };
  }, []);

  return (
    <a href="#" className="scrollup" id="scroll-up">
      <i className="ri-arrow-up-line"></i>
    </a>
  );
};
