"use client";

import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollProgress = (totalScroll / windowHeight) * 100;
      setScroll(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-2 z-50 pointer-events-none hidden sm:block mix-blend-difference">
      <div
        className="h-full bg-white transition-all duration-150 ease-out"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
