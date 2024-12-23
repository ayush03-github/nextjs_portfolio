"use client";

import React from "react";

const BackToTop = () => {

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    return (
      <>
          <button
            onClick={scrollToTop}
            className="absolute bottom-10 right-10 bg-black text-white font-bold px-4 py-2 rounded shadow-md hover:bg-gray-100 transition"
          >
            Back to Top
          </button>
        
      </>
    );
  };

  export default BackToTop