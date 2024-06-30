import styles from "./Stopwatch.module.css";
import Clock from "./clock-widget/Clock";
import ActionBar from "./action-bar-widget/ActionBar";
import LapList, { PlanetLaps } from "./laps-list-widget/LapList";
import { useEffect, useState } from "react";
import { useTimer } from "../hooks/useTimer";
import SoundWidget from "./SoundWidget";

const beepSound = new Audio("./sounds/beep.mp3");

const Stopwatch = () => {
  const [earthTime, setEarthTime] = useState<number>(0);
  const [marsTime, setMarsTime] = useState<number>(0);
  const [currentEarthSecond, setCurrentEarthSecond] = useState<number>(0);
  const [currentMarsSecond, setCurrentMarsSecond] = useState<number>(0);
  const [isCounting, setIsCounting] = useState<boolean>(false);
  const [logs, setLogs] = useState<PlanetLaps[]>([]);
  const [laps, setLaps] = useState<PlanetLaps[]>([]);
  const [playSound, setPlaySound] = useState(false);

  useTimer(
    () => {
      setEarthTime((prevTime) => prevTime + 1);
    },
    10,
    isCounting,
  );

  useTimer(
    () => {
      setMarsTime((prevTime) => prevTime + 1);
    },
    11,
    isCounting,
  );

  useEffect(() => {
    if (isCounting) {
      setCurrentEarthSecond(Math.floor(earthTime / 100) % 60);
      setCurrentMarsSecond(Math.floor(marsTime / 100) % 60);
      const previousMarsSecond = Math.floor((marsTime / 100) % 60);
      if (currentMarsSecond !== previousMarsSecond && playSound) {
        beepSound.play();
      }
    }
  }, [earthTime, marsTime, isCounting]);

  const startStop = () => {
    setIsCounting((counting) => !counting);
  };

  const reset = () => {
    setEarthTime(0);
    setMarsTime(0);
    setCurrentEarthSecond(0);
    setCurrentMarsSecond(0);
    setLogs([]);
    setLaps([]);
  };

  const earthHand = (currentEarthSecond + 30) * (360 / 60);
  const marsHand = (currentMarsSecond + 30) * (360 / 60);

  const logLap = () => {
    const newLog = { earthTime, marsTime };
    setLogs((prevLogs) => [...prevLogs, newLog]);

    if (logs.length > 0) {
      const previousLog = logs[logs.length - 1];
      const earthLap = earthTime - previousLog.earthTime;
      const marsLap = marsTime - previousLog.marsTime;
      const newLap = { earthTime: earthLap, marsTime: marsLap };
      setLaps((prevLaps) => [...prevLaps, newLap]);
    } else {
      const newLap = { earthTime, marsTime };
      setLaps([newLap]);
    }
  };

  const toggleSound = (play: boolean) => {
    setPlaySound(play);
  };

  return (
    <>
      <SoundWidget soundOn={toggleSound} />
      <div className={styles.grid}>
        <Clock earthHand={earthHand} marsHand={marsHand} />
        <ActionBar
          reset={reset}
          logLap={logLap}
          startStop={startStop}
          isCounting={isCounting}
          earthTime={earthTime}
          marsTime={marsTime}
        />
        <LapList laps={laps} />
      </div>
    </>
  );
};

export default Stopwatch;
