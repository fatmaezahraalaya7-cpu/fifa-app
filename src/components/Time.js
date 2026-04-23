import React from 'react'
import { useEffect, useState } from "react";

function Time(){

  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000); // كل ثانية

    return () => clearInterval(interval);
  }, []);

  // نحولو ل minutes:seconds
  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <div className="timer">
      {minutes}:{seconds}
    </div>
    
  )
}

export default Time
