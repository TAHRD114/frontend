import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./game.css";

function FixedNav() {
  return (
    <>
      <div className="flex justify-between bg-nav-blue">
        <Link to={"/"} className="ml-1/20 no-underline text-black">
          <div className="flex items-center gap-4">
            <img
              alt="logo"
              src="/logo2.webp"
              className="d-inline-block align-center rounded-full h-20 w-20 opacity-100"
            />
          </div>
        </Link>
        <div className="flex gap-10 items-center mr-1/20">
          <Link
            to={"/"}
            // onClick={(e) => {
            //   e.preventDefault();
            //   window.scrollTo({ top: 0, behavior: "smooth" });
            // }}
            className="no-underline h-full"
          >
            <div className="flex items-center h-full justify-center">
              <div className="text-white nanum-myeongjo-regular text-lg">
                回首頁
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

const gridSize = 3;
const emptyIndex = gridSize * gridSize - 1;

function App() {
  const [tiles, setTiles] = useState([]);
  const [shuffled, setShuffled] = useState(false);
  const [steps, setSteps] = useState(0);
  const [time, setTime] = useState(0);
  const [isSolved, setIsSolved] = useState(false);
  const [showTargetImage, setShowTargetImage] = useState(false);
  const [buttonText, setButtonText] = useState("開始遊戲");

  useEffect(() => {
    const initialTiles = Array.from(
      { length: gridSize * gridSize },
      (_, i) => i
    );
    setTiles(initialTiles);
  }, []);

  useEffect(() => {
    let timer;
    if (shuffled && !isSolved) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (isSolved) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [shuffled, isSolved]);

  const shuffleTiles = () => {
    let shuffledTiles;
    do {
      shuffledTiles = [...tiles];
      for (let i = shuffledTiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledTiles[i], shuffledTiles[j]] = [
          shuffledTiles[j],
          shuffledTiles[i],
        ];
      }
    } while (!isSolvable(shuffledTiles) || isPuzzleSolved(shuffledTiles));

    setTiles(shuffledTiles);
    setShuffled(true);
    setSteps(0);
    setTime(0);
    setIsSolved(false);
    setButtonText("重新挑戰");
  };

  const resetGame = () => {
    setTiles(Array.from({ length: gridSize * gridSize }, (_, i) => i));
    setShuffled(false);
    setSteps(0);
    setTime(0);
    setIsSolved(false);
    setButtonText("開始遊戲");
  };

  const isSolvable = (tiles) => {
    let inversions = 0;
    for (let i = 0; i < tiles.length - 1; i++) {
      for (let j = i + 1; j < tiles.length; j++) {
        if (
          tiles[i] !== emptyIndex &&
          tiles[j] !== emptyIndex &&
          tiles[i] > tiles[j]
        ) {
          inversions++;
        }
      }
    }
    return inversions % 2 === 0;
  };

  const moveTile = (index) => {
    if (!shuffled || isSolved) return;
    const newTiles = [...tiles];
    const emptyPos = tiles.indexOf(emptyIndex);
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;
    const emptyRow = Math.floor(emptyPos / gridSize);
    const emptyCol = emptyPos % gridSize;

    if (Math.abs(row - emptyRow) + Math.abs(col - emptyCol) === 1) {
      [newTiles[index], newTiles[emptyPos]] = [
        newTiles[emptyPos],
        newTiles[index],
      ];
      setTiles(newTiles);
      setSteps(steps + 1);
      if (isPuzzleSolved(newTiles)) {
        setIsSolved(true);
        setButtonText("開始遊戲");
      }
    }
  };

  const isPuzzleSolved = (tiles) =>
    tiles.every((tile, index) => tile === index);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const isMovable = (index) => {
    const emptyPos = tiles.indexOf(emptyIndex);
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;
    const emptyRow = Math.floor(emptyPos / gridSize);
    const emptyCol = emptyPos % gridSize;

    return Math.abs(row - emptyRow) + Math.abs(col - emptyCol) === 1;
  };

  return (
    <div className="mb-5 w-full">
      <FixedNav />
      <div className="flex justify-center items-center mt-4 w-full flex-wrap">
        <div className="flex gap-4">
          <button
            className="button"
            onClick={shuffled ? resetGame : shuffleTiles}
          >
            {buttonText}
          </button>
          <button
            className="button"
            onClick={() => setShowTargetImage(!showTargetImage)}
          >
            {showTargetImage ? "隱藏目標圖片" : "查看目標圖片"}
          </button>
        </div>
        <div className="flex justify-center items-center">
          <span>3x3</span>
          <span> | </span>
          <span>時間: {formatTime(time)}</span>
          <span> | </span>
          <span>步數: {steps}步</span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        {showTargetImage ? (
          <div className="flex justify-center items-center scale-75 md:w-[450px] md:h-[450px]">
            <img src="/logo2.png" alt="目標圖片" />
          </div>
        ) : (
          <div className="flex justify-center items-center scale-75 md:w-[450px] md:h-[450px]">
            <div className="puzzle">
              {tiles.map((tile, index) => (
                <div
                  key={index}
                  className={`tile ${tile === emptyIndex ? "empty" : ""} ${
                    isMovable(index) ? "movable" : ""
                  }`}
                  onClick={() => moveTile(index)}
                  style={{
                    backgroundPosition: `${(tile % gridSize) * -150}px ${
                      Math.floor(tile / gridSize) * -150
                    }px`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        )}
      </div>

      {isSolved && (
        <div className="flex justify-center">
          <img src="/icon/2-05.png" alt="icon" className="w-20 h-20" />
          <p className="congrats-message">恭喜！你完成了拼圖！</p>
        </div>
      )}
    </div>
  );
}

export default App;
