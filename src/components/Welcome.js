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
      <div className="animate-feather text-center">
        <img src={hpTitle} className="h-[350px]" />
        <p id="wel-btn" className="text-4xl">
          Quotes from the magical realm of Harry Potter.
        </p>
        <div className="sparkle-container" onClick={start}>
          <Button id="wel-btn" className="text-6xl mt-2">
            Let's Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
