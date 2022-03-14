import { useEffect } from "react";
import Mode from "./components/Mode/Mode";
import Timer from "./components/Timer/Timer";
import useStore from "./store/timerState";
import "./styles/App.scss";
import SettingsPanel from "./components/SettingsPanel/SettingsPanel";

function App() {
  const {
    minutes,
    seconds,
    timerState,
    rounds,
    percentage,
    toggleShortLongBreak,
    decrementMinute,
    decrementSeconds,
    decrementPercentage,
    isLongBreak,
    isShortBreak,
    promoRound,
  } = useStore();
  const timerMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const timerSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  useEffect(() => {
    let interval = setInterval(() => {
      if (timerState) {
        if (seconds === 0) {
          if (minutes === 0) {
            // when seconds = 0 and minutes = 0
            toggleShortLongBreak();
          } else {
            // when seconds = 0 and minutes are left
            decrementMinute();
          }
          //
        } else {
          decrementPercentage();
          decrementSeconds();
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, timerState, rounds, percentage, minutes]);

  return (
    <>
      <div className="wrapper">
        <div className="title">promodoro</div>
        <Mode
          isShortBreak={isShortBreak}
          isLongBreak={isLongBreak}
          promoRound={promoRound}
        />

        <Timer timerMinutes={timerMinutes} timerSeconds={timerSeconds} />
        <img
          className="settingsIcon"
          src="src/assets/icon-settings.svg"
          alt="setting icon"
        />
      </div>
      {/* <SettingsPanel /> */}
    </>
  );
}

export default App;
