import React, { useEffect, useState } from "react";
import hpTitle from "../assets/hpTitle.png";
import Button from "./Button";

const Welcome = ({ welcomePageHandler, startAudio }) => {
  const start = () => {
    welcomePageHandler();
    startAudio();
  };
  return (
    <div className="w-full h-full flex-col justify-center content-center justify-items-center gap-2">
      <div className="animate-feather text-center p-2">
        <img
          src={hpTitle}
          className="lg:h-[350px] md:h-[250px] sm:h-[200px] h-[200px]"
        />
        <p id="wel-btn" className="lg:text-4xl md:text-2xl text-xl">
          Quotes from the magical realm of Harry Potter.
        </p>
        <div className="sparkle-container" onClick={start}>
          <Button
            id="wel-btn"
            className="lg:text-6xl md:text-4xl text-2xl mt-2"
          >
            Let's Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
