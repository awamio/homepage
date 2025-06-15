"use client";

import { TextPlugin } from "gsap/TextPlugin";
import { useEffect } from "react";
import gsap from "gsap";

const Animations = () => {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    gsap.fromTo(
      ".animate-fade-in-up",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power2.out",
        stagger: 0.3,
      },
    );

    gsap.fromTo(
      ".animate-rotate",
      { rotation: 15 },
      {
        rotation: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
      },
    );
  }, []);

  return null;
};

export default Animations;
