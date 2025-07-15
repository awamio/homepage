"use client";

import React, { useEffect, useRef } from "react";
import config from "@/config/site.config";
import Image from "next/image";

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const positionRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const isPausedRef = useRef<boolean>(false);
  const speed = 75;

  const tripleSkills = [...config.skills, ...config.skills, ...config.skills];

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const content = contentRef.current;
    const singleGroupWidth = content.scrollWidth / 3;

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const deltaTime = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (!isPausedRef.current) {
        positionRef.current -= (speed * deltaTime) / 1000;

        if (Math.abs(positionRef.current) >= singleGroupWidth) {
          positionRef.current = 0;
        }

        content.style.transform = `translateX(${positionRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [speed]);

  return (
    <div
      className="relative grid h-40 w-85 place-content-center overflow-hidden rounded-lg bg-blue-100 select-none md:w-170 dark:bg-gray-900"
      ref={containerRef}
    >
      <div ref={contentRef} className="grid grid-flow-col">
        {tripleSkills.map((skill, index) => (
          <div
            key={`icon-${index}`}
            className="group grid place-items-center gap-3 px-4"
          >
            <div className="relative size-20 transition-all duration-300 group-hover:scale-110">
              <Image src={skill.icon} alt={skill.name} fill />
            </div>
            <span className="text-xs">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
