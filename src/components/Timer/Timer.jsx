import PropTypes from "prop-types";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useStore from "../../store/timerState";

import "./Timer.scss";

const Timer = ({ timerMinutes, timerSeconds }) => {
  const {
    timerState,
    incrementPromoRoundOnStart,
    percentage,
    toggleTimerState,
    promoRound,
  } = useStore();
  return (
    <div className="flexCenter">
      <div
        className="mainCircle"
        onClick={() => {
          toggleTimerState();
          if (promoRound == 0) {
            incrementPromoRoundOnStart();
          }
        }}
      >
        <div className="insideCircle">
          <div className="circleProgressBar">
            <CircularProgressbar
              value={percentage}
              strokeWidth={3.5}
              styles={buildStyles({
                strokeLinecap: "round",
                pathTransitionDuration: 0.5,
                pathColor: " #f87070",
                trailColor: "none",
              })}
            />
          </div>
          <div className="timer">{`${timerMinutes}:${timerSeconds}`}</div>
          <div className="status">{timerState ? "PAUSE" : "START"}</div>
        </div>
      </div>
    </div>
  );
};

Timer.propTypes = {
  timerMinutes: PropTypes.string,
  timerSeconds: PropTypes.string,
};

export default Timer;
