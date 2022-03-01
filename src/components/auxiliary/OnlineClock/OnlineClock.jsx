import React, { useState, useEffect } from 'react';
import './OnlineClock.scss';

const OnlineClock = (props) => {
  const [time, setTime] = useState();

  useEffect(() => {
    const tick = () => {
      setTime(new Date().toLocaleTimeString());
    };

    const intervalID = setInterval(() => tick(), 1000);

    return () => clearInterval(intervalID);
  });

  return (
    <div className={props.isToggled ? 'clock' : 'clock-inactive'}>{time}</div>
  );
};

export { OnlineClock };
