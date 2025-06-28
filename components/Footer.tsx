import config from "@/site.config";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const startYear = 2024;

  const copyrightText =
    currentYear > startYear
      ? `${startYear} –   ${currentYear}`
      : startYear.toString();

  return (
    <footer className="animate-fade-in-up mb-5 grid auto-cols-min grid-flow-col place-content-center gap-x-3">
      <time dateTime={currentYear.toString()} className="grid auto-cols-max">
        &copy; {copyrightText}
      </time>
      <span className="text-author font-bold">{config.author}</span>
    </footer>
  );
}
