import { useEffect, useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import { MdMusicNote } from "react-icons/md";
import { MdMusicOff } from "react-icons/md";
import Quotes from "./components/Quotes";
import sound from "./assets/Harry-Potter-Theme.mp3";

function App() {
  const [audio, setAudio] = useState(new Audio(sound));
  const [isPlaying, setIsPlaying] = useState(false);
  const [welcomePage, setWelcomePage] = useState(true);
  const welcomePageHandler = () => setWelcomePage(false);
  const startAudio = () => {
    if (!isPlaying) {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Failed to start audio:", error);
        });
    }
  };
  const stopMusic = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    }
  };
  useEffect(() => {
    window.addEventListener(
      "mousemove",
      function (e) {
        var arr = [1, 0.9, 0.8, 0.5, 0.2];

        arr.forEach(function (i) {
          var x = (1 - i) * 75;
          var star = document.createElement("div");

          star.className = "star";
          star.style.top =
            e.pageY + Math.round(Math.random() * x - x / 2) + "px";
          star.style.left =
            e.pageX + Math.round(Math.random() * x - x / 2) + "px";

          document.body.appendChild(star);

          window.setTimeout(function () {
            document.body.removeChild(star);
          }, Math.round(Math.random() * i * 600));
        });
      },
      false
    );
  }, []);
  return (
    <div className="text-white w-full h-screen bg-[url('/public/harryPotterWallpaper.jpg')] bg-cover bg-center">
      <div className="h-screen w-full bg-[rgba(0,0,0,0.6)]">
        {welcomePage && (
          <Welcome
            welcomePageHandler={welcomePageHandler}
            startAudio={startAudio}
          />
        )}
        {!welcomePage && <Quotes />}
      </div>
      {!welcomePage && (
        <div className="fixed lg:text-6xl md:text-4xl text-2xl text-white right-5 bottom-5">
          {!isPlaying && <MdMusicNote onClick={startAudio} />}
          {isPlaying && <MdMusicOff onClick={stopMusic} />}
        </div>
      )}
    </div>
  );
}

export default App;
