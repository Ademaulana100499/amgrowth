import "./style.css";
import React, { useState, useEffect } from "react";

export const Header = (props) => {
  const { logo, navList } = props;
  const [logoSrc, setLogoSrc] = useState(logo.imageWhite);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const sections = document.querySelectorAll(".section");

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionTop = section.offsetTop - 58;
        const sectionHeight = section.offsetHeight;

        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });

      const header = document.getElementById("header");
      if (scrollTop >= 50) {
        header.classList.add("blur-header");
      } else {
        header.classList.remove("blur-header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const toggleTheme = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  return (
    <header className="header" id="header">
      <nav className="container nav">
        <a href="#" className="nav__logo">
          <img src={logoSrc} alt="logo" id="logo" className="nav__logo-img" />
          {logo.name}
        </a>
        <div
          id="nav-menu"
          className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}
        >
          <ul className="nav__list">
            {navList.map((item, index) => {
              const sectionId = item.toLowerCase();
              return (
                <li key={index}>
                  <a
                    href={`#${sectionId}`}
                    className={`nav__link ${
                      activeLink === sectionId ? "active-link" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
            <li>
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
            </li>
          </ul>
          <div className="nav__close" onClick={toggleMenu}>
            <i className="ri-close-line"></i>
          </div>
        </div>
        <div className="nav__toggle" onClick={toggleMenu}>
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
};
