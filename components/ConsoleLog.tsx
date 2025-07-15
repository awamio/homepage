"use client";

import { useEffect } from "react";

const ConsoleLog = () => {
  useEffect(() => {
    const ascll = [
      `Designed by awamio`,
      `https://github.com/awamio/homepage`,
      `
       █████╗ ██╗    ██╗ █████╗ ███╗   ███╗██╗ ██████╗ 
      ██╔══██╗██║    ██║██╔══██╗████╗ ████║██║██╔═══██╗
      ███████║██║ █╗ ██║███████║██╔████╔██║██║██║   ██║
      ██╔══██║██║███╗██║██╔══██║██║╚██╔╝██║██║██║   ██║
      ██║  ██║╚███╔███╔╝██║  ██║██║ ╚═╝ ██║██║╚██████╔╝
      ╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝ ╚═════╝ 
      `,
    ];

    console.log(`%c${ascll[0]}`, "color: #364153");
    console.log(ascll[1]);
    console.log(`%c${ascll[2]}`, "color: #74D4FF");
  });

  return null;
};

export default ConsoleLog;
