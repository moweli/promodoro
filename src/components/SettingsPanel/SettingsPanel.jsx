import "./SettingsPanel.scss";

const SettingsPanel = () => {
  return (
    <>
      <div className="settingsModalWrapper">
        <div className="heading">
          <h3>Settings</h3>
          <img src="../src/assets/icon-close.svg" alt="close icon" />
        </div>
        <div className="wrapperSize">
          <div className="timeController">
            <div className="subtitle">TIME (MINUTES)</div>
            <div className="changeTimePanel">
              <div>
                <label htmlFor="promodoro">promodoro</label>
                <div className="arrowIcons">
                  <img
                    className="arrowUp"
                    src="../src/assets/icon-arrow-up.svg"
                    alt="arrow up icon"
                  />
                  <img
                    className="arrowDown"
                    src="./src/assets/icon-arrow-down.svg"
                    alt="arrow up icon"
                  />
                </div>
                <input type="text" inputmode="numeric" />
              </div>
              <div>
                <label htmlFor="short-break">short break</label>
                <input type="number" />
              </div>
              <div>
                <label htmlFor="long-break">long break</label>
                <input type="number" />
              </div>
            </div>
          </div>
          <div className="fontChoice">
            <h4>FONT</h4>

            <div className="selectFont">
              <div className="fontStyle1">
                <span>Aa</span>
              </div>
              <div className="fontStyle2">
                <span>Aa</span>
              </div>
              <div className="fontStyle3">
                <span>Aa</span>
              </div>
            </div>
          </div>
          <div className="colorChoice">
            <h4>COLOR</h4>
            <div className="selectColor">
              <span className="orangeColor"></span>
              <span className="blueColor"></span>
              <span className="purpleColor"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPanel;
