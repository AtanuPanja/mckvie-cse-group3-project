"use client";
import React, { useEffect, useState } from "react";
function BackToTop() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* back to top link */}
      {scrollY > 500 ? (
        <a
          href="#"
          className="inline-block rounded-full p-3  fixed bottom-8 right-5 bg-indigo-800 text-white z-50 focus:outline-1 focus:outline-gray-100"
        >
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
          </svg>
        </a>
      ) : (
        ""
      )}
    </>
  );
}

export default BackToTop;
