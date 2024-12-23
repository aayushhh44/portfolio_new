import React, { useState, useEffect } from "react";

const Home = () => {
  const texts = ['AAYUSH POUDEL', 'BLOCKCHAIN ENTHUSIAST', 'LEARNER', 'BELIEVER!'];
  const [currentText, setCurrentText] = useState(texts[0]); // Initialize with the first text
  const [index, setIndex] = useState(0); // State for tracking the index

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Increment index and loop back
    }, 400); // Faster transition (300ms)
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [texts]);

  useEffect(() => {
    setCurrentText(texts[index]); // Update the displayed text when index changes
  }, [index, texts]);

  return (
    <div className="relative h-screen w-screen overflow-hidden ">
      {/* Blockchain graph as background */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200  800"
          fill="none"
        >
          {/* Example nodes */}
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1200}
              cy={Math.random() * 800}
              r={Math.random() * 5 + 3}
              fill="#d62727"
            />
          ))}
          {/* Example lines */}
          {[...Array(30)].map((_, i) => (
            <line
              key={i}
              x1={Math.random() * 1200}
              y1={Math.random() * 800}
              x2={Math.random() * 1200}
              y2={Math.random() * 800}
              stroke="#d62727"
              strokeWidth="1"
              strokeOpacity="0.7"
            />
          ))}
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative flex items-center h-screen justify-center -mt-24">
        <div className="flex flex-col text-center">
          <p className="font-poppins text-6xl font-extrabold text-[#d62727]">
            {currentText}
          </p>

          <div className="flex gap-8 justify-center mt-4">
            <button className="bg-black w-36 text-xl px-6 py-2 text-white font-poppins rounded-3xl">
              Blogs
            </button>
            <button className="bg-black w-36 text-xl px-6 py-2 text-[#d62727] font-bold font-poppins rounded-3xl">
              Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
