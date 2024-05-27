"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faFutbol,
  faStopCircle,
  faCopy,
  faArrowRightArrowLeft,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";

const events = [
  { time: "00:01", event: "Event 1", type: "Goal" },
  { time: "00:02", event: "Event 2", type: "Card" },
  { time: "00:03", event: "Event 3", type: "Subst" },
  { time: "00:30", event: "Event 4", type: "Goal" },
  // Add more events as needed
];

const parseTime = (timeString: string): number => {
  const [minutes, seconds] = timeString.split(":").map(Number);
  return minutes * 60 + seconds;
};

const TimelineComponent: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const startTime = "00:00";
  const endTime = "01:30";

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        setCurrentTime((prevTime) => {
          if (prevTime < parseTime(endTime)) {
            return prevTime + 1;
          } else {
            clearInterval(interval);
            return prevTime;
          }
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime, isRunning]);

  const toggleRunning = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className="container mx-auto mt-10 h-100">
      <ul className="timeline flex flex-row justify-center">
        <li>
          <div
            className={`timeline-middle timeline-box ${
              currentTime >= parseTime(startTime)
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          >
            <FontAwesomeIcon icon={faPlayCircle} />
            <div className="mt-2 text-center">
              <div className="font-bold">{startTime} - start</div>
              <div>
                {currentTime >= parseTime(startTime) ? (
                  <span className="text-green-500">✔️</span>
                ) : (
                  <span className="text-red-500">❌</span>
                )}
              </div>
            </div>
          </div>
          <hr className="bg-primary" />
        </li>
        {events.map((event, index) => (
          <li key={index}>
            <hr className="bg-primary" />
            <div
              className={`timeline-middle ${
                currentTime >= parseTime(event.time)
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            >
              {event.type === "Goal" ? (
                <FontAwesomeIcon icon={faFutbol} />
              ) : event.type === "Card" ? (
                <FontAwesomeIcon icon={faCopy} />
              ) : (
                <FontAwesomeIcon icon={faArrowRightArrowLeft} />
              )}
            </div>
            <div
              className={`timeline-end timeline-box ${
                currentTime >= parseTime(event.time)
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            >
              {event.time} - {event.event}
            </div>
            <hr className="bg-primary" />
          </li>
        ))}
        <li>
          <hr className="bg-primary" />
          <div
            className={`timeline-middle ${
              currentTime >= parseTime(endTime) ? "bg-green-500" : "bg-red-500"
            }`}
          >
            <FontAwesomeIcon icon={faStopCircle} />
          </div>
          <div
            className={`timeline-end timeline-box ${
              currentTime >= parseTime(endTime) ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {endTime} - End
          </div>
          <hr className="bg-primary" />
        </li>
      </ul>
      <div className="current-time mt-4 text-center">
        Current Time: {new Date(currentTime * 1000).toISOString().substr(14, 5)}
      </div>
      <div className="text-center mt-4">
        <button onClick={toggleRunning} className="btn btn-primary">
          {isRunning ? (
            <>
              <FontAwesomeIcon icon={faPauseCircle} /> Pause
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faPlayCircle} /> Play
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default TimelineComponent;
