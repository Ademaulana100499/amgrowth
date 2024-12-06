import React from "react";
import { useEffect } from "react";
export default function RevealEffect() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
    });

    sr.reveal(".home__data, .experience, .skills, .contact__container");
    sr.reveal(".home__img", { delay: 500 });
    sr.reveal(".home__scroll", { delay: 700 });
    sr.reveal(".project__card, .services__card", { interval: 100 });
    sr.reveal(".about__content", { origin: "right" });
    sr.reveal(".about__img", { origin: "left" });

    return () => {
      sr.destroy();
    };
  }, []);
  return (
    <div className="reveal">
      <p>This element will reveal when scrolled into view!</p>
    </div>
  );
}
