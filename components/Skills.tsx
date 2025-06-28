"use client";

import React, { useEffect, useRef } from "react";
import config from "@/site.config";
import Image from "next/image";

interface SkillItem {
  name: string;
  icon: string;
}

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const positionRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const speed = 50;

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const content = contentRef.current;
    const contentWidth = content.scrollWidth;

    const contentClone = content.innerHTML;
    content.innerHTML += contentClone;

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const deltaTime = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;
      positionRef.current -= (speed * deltaTime) / 1000;
      if (Math.abs(positionRef.current) >= contentWidth) {
        positionRef.current = 0;
      }
      content.style.transform = `translateX(${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [speed]);

  const renderIcon = (skill: SkillItem, key: string) => (
    <div key={key} className="group grid place-content-center">
      <div className="grid place-content-center rounded-4xl transition-all duration-300">
        <div className="relative">
          <Image
            src={skill.icon}
            alt={skill.name}
            width={100}
            height={100}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="relative w-80 overflow-hidden rounded-lg bg-sky-200 py-10 select-none md:w-170"
      ref={containerRef}
    >
      <div ref={contentRef} className="grid auto-cols-max grid-flow-col gap-5">
        {config.skills.map((skill, index) =>
          renderIcon(skill, `icon-${index}`),
        )}
      </div>
    </div>
  );
};

export default Skills;
