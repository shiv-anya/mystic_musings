import React, { useEffect } from "react";
import feather from "../assets/feather.png";
import Button from "./Button";

const Quote = ({ quoteObj, incrementIndex, decrementIndex, index }) => {
  const quote = quoteObj.quote;
  const speaker = quoteObj.speaker;
  return (
    <div className="w-full h-screen flex-col gap-8 content-center justify-items-center">
      <img />
      <div className="p-5 w-full flex-col justify-items-center animate-feather gap-5">
        <p className="w-1/2 lg:text-5xl md:text-4xl text-2xl mb-5 text-center">
          {quote}
        </p>
        <p className="lg:text-6xl md:text-5xl text-3xl text-center flex items-center">
          {speaker}
          <img src={feather} className="size-16 pb-5 ml-2" alt="feather" />
        </p>
        <div className="flex gap-10">
          {index > 0 && (
            <Button
              className="text-5xl mt-5"
              name="prev"
              decrementIndex={decrementIndex}
            >
              Prev
            </Button>
          )}
          {index < 49 && (
            <Button
              className="text-5xl mt-5"
              name="next"
              incrementIndex={incrementIndex}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quote;
