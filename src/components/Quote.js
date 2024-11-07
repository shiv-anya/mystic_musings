import React, { useEffect } from "react";
import feather from "../assets/feather.png";

const Quote = ({ quoteObj, incrementIndex, decrementIndex, index }) => {
  const quote = quoteObj.quote;
  const speaker = quoteObj.speaker;
  return (
    <div className="w-full h-screen flex-col gap-8 content-center justify-items-center">
      <img />
      <div className="p-5 w-full flex-col justify-items-center animate-feather gap-5">
        <p className="w-1/2 text-5xl mb-5 text-center">{quote}</p>
        <p className="text-6xl text-center flex items-center">
          {speaker}
          <img src={feather} className="size-16 pb-5 ml-2" alt="feather" />
        </p>
        <div className="flex gap-10">
          {index > 0 && (
            <button className="text-5xl mt-5" onClick={decrementIndex}>
              Prev
            </button>
          )}
          {index < 49 && (
            <button className="text-5xl mt-5" onClick={incrementIndex}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quote;
