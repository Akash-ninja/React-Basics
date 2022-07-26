import { useState, useEffect } from "react";

export default function Timer() {
  const [timerVal, setTimerVal] = useState(0);

  const [toggleBtn, setToggleBtn] = useState(true);

  const [logTime, setLogTime] = useState([]);

  // Sets the timer
  useEffect(() => {
    let intervalId = 0;
    if (!toggleBtn) {
      intervalId = setInterval(() => setTimerVal((state) => state + 1), 1000);
    }

    // Clears the timer when component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [timerVal, toggleBtn]);

  const handleReset = () => {
    setTimerVal((state) => (state = 0));

    // prompt only if there is any logged time
    if (logTime.length > 0) {
      let confirmation = window.confirm(
        "Do you also want to reset Clocked time ?"
      );

      if (confirmation) {
        // empty the array
        setLogTime((prev) => prev.splice(0, prev.length));
      }
    }
  };

  //(x) | 0 - indicates x value is converted to integer
  const hrHandCal = (timerVal / 3600) | 0;
  const hrHand =
    hrHandCal.toString().length === 1 ? `0${hrHandCal}` : hrHandCal;

  const minHandCal = ((timerVal / 60) | 0) % 60;
  const minHand =
    minHandCal.toString().length === 1 ? `0${minHandCal}` : minHandCal;

  const secHandCal = timerVal % 60;
  const secHand =
    secHandCal.toString().length === 1 ? `0${secHandCal}` : secHandCal;

  const handleLogTimer = () => {
    const currTimeVal = `${hrHand}:${minHand}:${secHand}`;

    const logTimeCopy = [...logTime];
    const lastLoggedTime = logTimeCopy.splice(logTime.length - 1, 1);

    if (lastLoggedTime.toString() !== currTimeVal) {
      setLogTime((oldArray) => [...oldArray, currTimeVal]);
    } else {
      console.log("Can't log present time as it same as last logged time");
    }
  };

  return (
    <div className="Timer">
      <h2> Stopwatch </h2>
      {/* Display the timer */}
      <h3>
        {hrHand}: {minHand}: {secHand}
      </h3>
      {/* Buttons */}
      <button onClick={() => setToggleBtn(!toggleBtn)}>
        {toggleBtn ? "Start" : "Stop"}
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={handleReset}> Reset </button> &nbsp;&nbsp;&nbsp;
      <button onClick={handleLogTimer}> Log Time </button>
      <br></br>
      <br></br>
      <br></br>
      {/* Display the clocked time */}
      {logTime.length !== 0 &&
        logTime.map((val, index) => {
          return <li key={index}>{val}</li>;
        })}
    </div>
  );
}
