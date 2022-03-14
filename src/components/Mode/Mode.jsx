import { useEffect } from "react";
import PropTypes from "prop-types";

import "./Mode.scss";

const Mode = ({ isShortBreak, isLongBreak }) => {
  useEffect(() => {
    let unMounted = false;
    const listItems = document.querySelectorAll("li");
    console.log({ isShortBreak, isLongBreak });
    if (!unMounted) {
      listItems.forEach((el) => {
        el.classList.remove("active");
        if (isShortBreak) {
          el.innerText == "short break" ? el.classList.add("active") : null;
        } else if (isLongBreak) {
          el.innerText == "long break" ? el.classList.add("active") : null;
        } else {
          el.innerText == "promodoro" ? el.classList.add("active") : null;
        }
      });
    }

    return () => {
      unMounted = true;
    };
  }, [isShortBreak, isLongBreak]);

  return (
    <>
      <div className="controls">
        <ul className="list">
          <li>promodoro</li>
          <li>short break</li>
          <li>long break</li>
        </ul>
      </div>
    </>
  );
};

Mode.propTypes = {
  isBreak: PropTypes.bool,
  isShortBreak: PropTypes.bool,
  isLongBreak: PropTypes.bool,
};

export default Mode;
