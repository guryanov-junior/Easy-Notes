import React, { useState, useEffect } from 'react';
import './DateToday.scss';

const DateToday = (props) => {
  const [date, setDate] = useState();
  const [day, setDay] = useState();

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  useEffect(() => {
    setDate(new Date().toLocaleDateString());
    setDay(new Date().getDay());
  }, []);

  const dayOfWeek = days[day];

  return (
    <div
      className={props.isToggled ? 'date' : 'date-inactive'}
    >{`${dayOfWeek}, ${date}`}</div>
  );
};

export { DateToday };
