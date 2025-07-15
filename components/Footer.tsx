"use client";

import { useEffect, useState, useRef, useLayoutEffect } from "react";
import config from "@/config/site.config";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";
import gsap from "gsap";

type ThemeOption = {
  name: string;
  icon: string;
  label: string;
};

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isAnimating = useRef(false);

  const themeInitialized = useRef(false);
  const indicatorInitialized = useRef(false);

  const themeOptions: ThemeOption[] = [
    {
      name: "light",
      icon: "line-md:sunny",
      label: "浅色模式",
    },
    {
      name: "dark",
      icon: "line-md:moon",
      label: "暗色模式",
    },
    {
      name: "system",
      icon: "line-md:computer-twotone",
      label: "系统主题",
    },
  ];

  useEffect(() => {
    setMounted(true);

    if (!themeInitialized.current) {
      setTheme("system");
      themeInitialized.current = true;
    }
  }, [setTheme]);

  useEffect(() => {
    if (theme) {
      if (theme === "system") {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;
        document.documentElement.setAttribute(
          "data-theme",
          prefersDark ? "dark" : "light",
        );
      } else {
        document.documentElement.setAttribute("data-theme", theme);
      }
    }
  }, [theme]);

  useLayoutEffect(() => {
    if (!mounted || !containerRef.current || !indicatorRef.current) return;

    if (buttonRefs.current.some((ref) => !ref)) return;

    const activeIndex = themeOptions.findIndex(
      (option) => option.name === theme,
    );

    const index = activeIndex === -1 ? 0 : activeIndex;
    const activeButton = buttonRefs.current[index];
    if (!activeButton) return;

    const buttonRect = activeButton.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    if (!indicatorInitialized.current) {
      gsap.set(indicatorRef.current, {
        x: buttonRect.left - containerRect.left,
        y: buttonRect.top - containerRect.top,
        width: buttonRect.width,
        height: buttonRect.height,
        opacity: 1,
      });
      indicatorInitialized.current = true;
    } else if (!isAnimating.current) {
      gsap.set(indicatorRef.current, {
        x: buttonRect.left - containerRect.left,
        y: buttonRect.top - containerRect.top,
        width: buttonRect.width,
        height: buttonRect.height,
      });
    }
  }, [mounted, theme, themeOptions]);

  const handleThemeChange = (themeName: string) => {
    if (isAnimating.current || !containerRef.current || !indicatorRef.current)
      return;

    setTheme(themeName);

    const activeIndex = themeOptions.findIndex(
      (option) => option.name === themeName,
    );
    if (activeIndex === -1 || !buttonRefs.current[activeIndex]) return;

    isAnimating.current = true;

    const buttonRect = buttonRefs.current[activeIndex]!.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    gsap.to(indicatorRef.current, {
      keyframes: [
        {
          width: buttonRect.width * 1.25,
          height: buttonRect.height * 0.75,
          duration: 0.1,
          ease: "power2.out",
        },
        {
          x: buttonRect.left - containerRect.left,
          y: buttonRect.top - containerRect.top,
          width: buttonRect.width,
          height: buttonRect.height,
          duration: 0.3,
          ease: "power2.inOut",
          onComplete: () => {
            isAnimating.current = false;
          },
        },
      ],
    });
  };

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="relative grid h-8 w-24 grid-cols-3 gap-1 rounded-full bg-gray-200 p-1 transition-colors dark:bg-gray-700"
      aria-label="主题切换"
    >
      <div
        ref={indicatorRef}
        className="absolute rounded-full bg-white opacity-0 shadow-sm transition-colors dark:bg-gray-600"
      />

      {themeOptions.map((option, index) => {
        const isActive = theme === option.name;
        return (
          <button
            key={option.name}
            ref={(el) => {
              buttonRefs.current[index] = el;
            }}
            onClick={() => handleThemeChange(option.name)}
            aria-label={option.label}
            aria-pressed={isActive}
            className={`relative z-10 flex items-center justify-center rounded-full transition-colors ${
              isActive
                ? "text-cyan-500"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
          >
            <Icon icon={option.icon} width={20} height={20} />
          </button>
        );
      })}
    </div>
  );
};

const currentYear = new Date().getFullYear();
const startYear = 2024;
const copyrightText =
  currentYear > startYear ? `${startYear}–${currentYear}` : `${startYear}`;

export default function Footer() {
  return (
    <footer className="animate-fade-in-up relative grid auto-cols-min grid-flow-col place-content-center gap-x-3 pb-5">
      <div className="absolute left-5">
        <ThemeSelector />
      </div>
      <time dateTime={currentYear.toString()} className="grid auto-cols-max">
        &copy; {copyrightText}
      </time>
      <span className="text-author font-bold">{config.author}</span>
    </footer>
  );
}
