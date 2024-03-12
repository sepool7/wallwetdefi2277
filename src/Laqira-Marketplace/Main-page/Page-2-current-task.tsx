import "./Page-2-current-task.css";
import { useState, useEffect, useMemo } from "react";

function homePage2() {
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  const Timer = ({ deadline = new Date().toString() }) => {
    const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
    const [time, setTime] = useState(parsedDeadline - Date.now());
    useEffect(() => {
      const interval = setInterval(
        () => setTime(parsedDeadline - Date.now()),
        1000
      );

      return () => clearInterval(interval);
    }, [parsedDeadline]);

    return (
      <div
        className="timer"
        style={{ display: "flex", flexWrap: "wrap", flexGrow: 1 }}
      >
        {Object.entries({
          Days: time / DAY,
          Hours: (time / HOUR) % 24,
          Mins: (time / MINUTE) % 60,
          Secs: (time / SECOND) % 60,
        }).map(([label, value]) => (
          <div key={label} className="col-4 col4-custom">
            <div className="box">
              <p
                style={{
                  marginBottom: "0",
                }}
              >
                {`${Math.floor(value)}`.padStart(2, "0")}
              </p>
              <span className="text">{label}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <section style={{ display: "flex" }}>
        <div className="container-main-2box" style={{ display: "flex" }}>
          {/* Flexbox for Cards */}
          <div
            className="card left"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <header style={{ display: "flex" }}>Current task</header>
            <div
              className="box-frame-line1"
              style={{ display: "flex", flexGrow: 1, gap: "10px" }}
            >
              <div
                className="box-left"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexGrow: 1,
                  gap: "10px",
                }}
              >
                <img
                  src=" https://raw.githubusercontent.com/hastiatarod/imgfilehost/269f0401235d7c9d487f9da054c18be17b3963a5/undraw_female_avatar_efig.svg"
                  alt=""
                  className="creator-img"
                  style={{ width: "45.33px", height: "45.25px" }}
                />
                <div>
                  <div className="creator">Creator</div>
                  <div className="creator-name">FULL NAME </div>
                </div>
              </div>
              <div
                className="box-right"
                style={{ display: "flex", flexGrow: 1 }}
              >
                <div>
                  <span className="material-symbols-outlined collection-symbol ">
                    mode_heat
                  </span>
                </div>
                <div>
                  <div className="collection">Series</div>
                  <div className="collection-mode">series </div>
                </div>
              </div>
            </div>
            <div
              className="box-frame-line2"
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              <div className="card bid" style={{ flexGrow: 1 }}>
                Submit Task
              </div>
              <form action="" style={{ display: "flex" }}>
                <input
                  className="Current-bid"
                  type="text"
                  placeholder="Link Task"
                  style={{ flexGrow: 1 }}
                />
              </form>
            </div>
            <div
              className="box-frame-line3"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="auction" style={{ display: "flex" }}>
                <div>
                  <span className="material-symbols-outlined auction-timer-symbol ">
                    timer
                  </span>
                </div>
                <div className="auction-col2">Task Period</div>
              </div>

              {/****** TIMER JS ********/}
              <div className="timer-container" style={{ display: "flex" }}>
                <Timer deadline={"February, 30, 2024"} />
              </div>
            </div>
            <hr style={{ margin: "0" }} />
            <div className="footer-button" style={{ display: "flex" }}>
              <button className="place-view-button">Submit</button>
              <button className="place-view-button">View</button>
            </div>

            <div className="footer-navigation" style={{ display: "flex" }}>
              <div className="left-arrow ">
                <span className="material-symbols-outlined left-arrow-synbol">
                  keyboard_double_arrow_left
                </span>
              </div>
              <div className="right-arrow ">
                <span className="material-symbols-outlined right-arrow-symbol">
                  keyboard_double_arrow_right
                </span>
              </div>
            </div>
          </div>
          <div className="card right"></div>
        </div>
      </section>
    </>
  );
}

export default homePage2;
