import { FC, useEffect, useRef, useState } from "react";
import { Player } from "../models/Player";
import { Colors } from "../models/Colors";

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const [startTime, setStartTime] = useState(false);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    if (startTime == false ) {
      startTimer();
    }
  }, [currentPlayer]);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTimer
        : decrementBlackTimer;
    timer.current = setInterval(callback, 1000);
  }

  function decrementBlackTimer() {
    setBlackTime((prev) => prev - 1);
  }
  function decrementWhiteTimer() {
    setWhiteTime((prev) => prev - 1);
  }

  const handleRestart = () => {
    if (startTime) {
      setWhiteTime(300);
      setBlackTime(300);
      setStartTime(!!startTime);
      restart();
    } else {
      setStartTime(!startTime);
      startTimer();
    }
  };

  return (
    <div className="timer">
      <div>
        <button onClick={handleRestart}>
          {startTime ? "Restart game" : "Start game"}
        </button>
      </div>
      <h2>Черные - {blackTime}</h2>
      <h2>Белые - {whiteTime}</h2>
    </div>
  );
};

export default Timer;
