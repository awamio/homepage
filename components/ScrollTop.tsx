"use client";

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const ScrollTop = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const currentProgress = Math.min(
        100,
        Math.round((scrollTop / scrollHeight) * 100),
      );

      setProgress(currentProgress);
      setIsVisible(currentProgress > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isAtBottom = progress === 100;

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed right-5 bottom-5 size-8 rounded-full bg-gray-600/85 shadow-xl transition-all duration-300 ease-in-out ${
        isVisible
          ? "scale-100 opacity-100"
          : "pointer-events-none scale-50 opacity-0"
      }`}
      aria-label={isHovered || isAtBottom ? "返回顶部" : `已滚动${progress}%`}
    >
      <div className="relative size-full">
        <div
          className={`absolute inset-0 grid place-items-center transition-all duration-300 ease-in-out ${
            isHovered || isAtBottom
              ? "-translate-y-1 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          <span className="text-sm text-white">{progress}</span>
        </div>
        <div
          className={`absolute inset-0 grid place-items-center transition-all duration-300 ease-in-out ${
            isHovered || isAtBottom
              ? "translate-y-0 opacity-100"
              : "translate-y-1 opacity-0"
          }`}
        >
          <Icon icon="line-md:arrow-up" className="text-white" />
        </div>
      </div>
    </button>
  );
};

export default ScrollTop;
