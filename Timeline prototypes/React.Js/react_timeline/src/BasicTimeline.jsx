import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faFutbol, faStopCircle, faCopy, faArrowRightArrowLeft, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { Timeline, TimelineItem } from 'flowbite-react';

const events = [
  { time: '00:01', event: 'Event 1', type: "Goal" },
  { time: '00:02', event: 'Event 2', type: "Card" },
  { time: '00:03', event: 'Event 3', type: "Subst" },
  { time: '00:30', event: 'Event 4', type: "Goal" },
  // Add more events as needed
];

const parseTime = (timeString) => {
  const [minutes, seconds] = timeString.split(':').map(Number);
  return minutes * 60 + seconds;
};

const BasicTimeline = () => {
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
    <div className="container mx-auto mt-10">
      <Timeline className="timeline-horizontal flex">
        <TimelineItem className="timeline-item">
          <FontAwesomeIcon icon={faPlayCircle} style={{ color: currentTime >= parseTime(startTime) ? 'green' : 'red' }} />
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
        </TimelineItem>
        {events.map((event, index) => (
          <TimelineItem key={index} className="timeline-item">
            <div>
              {event.type === "Goal" ? (
                <FontAwesomeIcon icon={faFutbol} style={{ color: currentTime >= parseTime(event.time) ? 'green' : 'red' }} />
              ) : event.type === "Card" ? (
                <FontAwesomeIcon icon={faCopy} style={{ color: currentTime >= parseTime(event.time) ? 'green' : 'red' }} />
              ) : (
                <FontAwesomeIcon icon={faArrowRightArrowLeft} style={{ color: currentTime >= parseTime(event.time) ? 'green' : 'red' }} />
              )}
            </div>
            <div className="mt-2 text-center">
              <div className="font-bold">{event.time} - {event.event}</div>
              <div>
                {currentTime >= parseTime(event.time) ? (
                  <span className="text-green-500">✔️</span>
                ) : (
                  <span className="text-red-500">❌</span>
                )}
              </div>
            </div>
          </TimelineItem>
        ))}
        <TimelineItem className="timeline-item">
          <FontAwesomeIcon icon={faStopCircle} style={{ color: currentTime >= parseTime(endTime) ? 'green' : 'red' }} />
          <div className="mt-2 text-center">
            <div className="font-bold">{endTime} - End</div>
            <div>
              {currentTime >= parseTime(endTime) ? (
                <span className="text-green-500">✔️</span>
              ) : (
                <span className="text-red-500">❌</span>
              )}
            </div>
          </div>
        </TimelineItem>
      </Timeline>
      <div className="current-time mt-4 text-center">Current Time: {new Date(currentTime * 1000).toISOString().substr(14, 5)}</div>
      <div className="text-center mt-4">
        <button onClick={toggleRunning} className="btn btn-primary">
          {isRunning ? (
            <><FontAwesomeIcon icon={faPauseCircle} /> Pause</>
          ) : (
            <><FontAwesomeIcon icon={faPlayCircle} /> Play</>
          )}
        </button>
      </div>
    </div>
  );
};

export default BasicTimeline;
