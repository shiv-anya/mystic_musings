import React, { useState } from "react";
import Quote from "./Quote";

const harryPotterQuotes = [
  {
    quote:
      "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
    speaker: "Albus Dumbledore",
  },
  {
    quote: "We are only as strong as we are united, as weak as we are divided.",
    speaker: "J.K. Rowling",
  },
  {
    quote:
      "Do not pity the dead, Harry. Pity the living, and above all, those who live without love.",
    speaker: "Albus Dumbledore",
  },
  {
    quote:
      "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
    speaker: "Albus Dumbledore",
  },
  {
    quote: "You are protected, in short, by your ability to love.",
    speaker: "Albus Dumbledore",
  },
  {
    quote:
      "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    speaker: "Albus Dumbledore",
  },
  {
    quote:
      "The truth is a beautiful and terrible thing, and should therefore be treated with great caution.",
    speaker: "Albus Dumbledore",
  },
  {
    quote:
      "The world had ended, but I was still here, and I was going to fight.",
    speaker: "Harry Potter",
  },
  {
    quote:
      "We’ve all got both light and dark inside us. What matters is the part we choose to act on.",
    speaker: "Sirius Black",
  },
  {
    quote:
      "There is no good and evil, there is only power and those too weak to seek it.",
    speaker: "Lord Voldemort",
  },
  { quote: "You’re a wizard, Harry.", speaker: "Hagrid" },
  { quote: "I never really gave up on you.", speaker: "Hermione Granger" },
  {
    quote: "I solemnly swear that I am up to no good.",
    speaker: "Harry Potter",
  },
  {
    quote: "Fear of a name increases fear of the thing itself.",
    speaker: "Hermione Granger",
  },
  {
    quote: "The last enemy that shall be destroyed is death.",
    speaker: "J.K. Rowling",
  },
  {
    quote:
      "It does not do to dwell on dreams and forget to live, remember that.",
    speaker: "Albus Dumbledore",
  },
  { quote: "A person’s a person, no matter how small.", speaker: "Hagrid" },
  {
    quote: "The ones that love us never really leave us.",
    speaker: "Sirius Black",
  },
  {
    quote:
      "We must all face the choice between what is right and what is easy.",
    speaker: "Albus Dumbledore",
  },
  {
    quote:
      "The thing about growing up with Fred and George is that you sort of start thinking anything's possible if you've got enough nerve.",
    speaker: "Ron Weasley",
  },
  {
    quote: "You’re never alone if you’ve got your friends.",
    speaker: "Hermione Granger",
  },
  {
    quote: "The future is a mystery, but the past is a gift.",
    speaker: "Harry Potter",
  },
  { quote: "What you fear most is fear itself.", speaker: "Remus Lupin" },
  {
    quote: "Even in the darkest times, hope can be found.",
    speaker: "Albus Dumbledore",
  },
  {
    quote:
      "We’re all human, aren’t we? Every human life is worth the same, and worth saving.",
    speaker: "Harry Potter",
  },
  {
    quote:
      "Do not dwell on the past, Harry. The present is always there for you to change.",
    speaker: "Hermione Granger",
  },
  {
    quote:
      "It’s not our abilities that show what we truly are… it is our choices.",
    speaker: "Albus Dumbledore",
  },
  {
    quote:
      "I will only truly have left this school when none here are loyal to me.",
    speaker: "Albus Dumbledore",
  },
  { quote: "I am what I am, and I’m not ashamed.", speaker: "Remus Lupin" },
  {
    quote: "To the well-organized mind, death is but the next great adventure.",
    speaker: "Albus Dumbledore",
  },
  {
    quote:
      "The world had ended, but I was still here, and I was going to fight.",
    speaker: "Harry Potter",
  },
  {
    quote: "The best of us sometimes eat our words.",
    speaker: "Hermione Granger",
  },
  {
    quote: "What will come will come, and we will meet it when it does.",
    speaker: "Hagrid",
  },
  {
    quote: "I don’t go looking for trouble. Trouble usually finds me.",
    speaker: "Harry Potter",
  },
  {
    quote:
      "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
    speaker: "Sirius Black",
  },
  {
    quote:
      "When you have seen as much of life as I have, you will understand that you must take what you can, and leave nothing to chance.",
    speaker: "Albus Dumbledore",
  },
  {
    quote: "Death is but the next great adventure.",
    speaker: "Albus Dumbledore",
  },
  {
    quote:
      "A lesson is learned, only when you’ve done what you’re supposed to do.",
    speaker: "Professor McGonagall",
  },
  {
    quote: "You can’t have a happy ending if you don’t know where to begin.",
    speaker: "Sirius Black",
  },
  {
    quote: "Courage is not the absence of fear, but the ability to face it.",
    speaker: "Hermione Granger",
  },
  { quote: "There are no mistakes, only lessons.", speaker: "Harry Potter" },
  {
    quote:
      "The world is full of love and hope, if only you would open your eyes.",
    speaker: "Albus Dumbledore",
  },
  {
    quote:
      "Remember, if the time should come when you have to make a choice between what is right and what is easy, remember what you have learned here.",
    speaker: "Professor McGonagall",
  },
  {
    quote:
      "Things we lose have a way of coming back to us in the end, if not always in the way we expect.",
    speaker: "Luna Lovegood",
  },
  {
    quote: "I am not afraid of dying. I am afraid of not trying.",
    speaker: "Harry Potter",
  },
  { quote: "We can all be heroes in our own way.", speaker: "Harry Potter" },
  {
    quote: "There is nothing to fear if you don’t mind dying.",
    speaker: "Severus Snape",
  },
  {
    quote:
      "Just because you have the emotional range of a teaspoon doesn’t mean we all have.",
    speaker: "Hermione Granger",
  },
  {
    quote:
      "There’s a difference between being dragged into the arena and walking into it voluntarily.",
    speaker: "Harry Potter",
  },
  {
    quote:
      "We are all human, and we make mistakes. It’s what makes us who we are.",
    speaker: "Ginny Weasley",
  },
  {
    quote:
      "You’re only a true Gryffindor if you’re brave enough to believe in yourself.",
    speaker: "Harry Potter",
  },
  {
    quote: "Dumbledore would have been so proud of you.",
    speaker: "Professor McGonagall",
  },
  {
    quote: "What matters is the part we choose to act on.",
    speaker: "Sirius Black",
  },
  {
    quote: "No one can live forever, but we can always try.",
    speaker: "Harry Potter",
  },
  {
    quote: "The important thing is that we are who we choose to be.",
    speaker: "Harry Potter",
  },
  {
    quote:
      "If you want to know what a person’s really like, take a look at how they treat their inferiors, not their equals.",
    speaker: "Sirius Black",
  },
];

const Quotes = () => {
  const [index, setIndex] = useState(0);

  return (
    <Quote
      quoteObj={harryPotterQuotes[index]}
      incrementIndex={() => setIndex(index + 1)}
      decrementIndex={() => setIndex(index - 1)}
      index={index}
    />
  );
};

export default Quotes;
