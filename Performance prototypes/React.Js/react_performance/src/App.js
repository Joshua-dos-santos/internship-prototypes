import React, { useEffect, useState } from 'react';

const App = () => {
  const [splArray, setSPLArray] = useState([]);

  useEffect(() => {
    const url = 'ws://fangage-integration.sorama.eu/SoundSurface/Websocket'; // Replace with your WebSocket URL

    const headers = ['Bearer', 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjNkMGJiZDc2LWIyYzQtNDQ5NS05ODk2LTllZjFmZjkzNzc0MCIsInJvbGUiOiJBZG1pbmlzdHJhdG9yIiwibmJmIjoxNzEyNzM0ODY2LCJleHAiOjE3MTI4MjEyNjYsImlhdCI6MTcxMjczNDg2Nn0.VGBRsYvfRiX2HMbyENOQfbQ1TPp2-RAT6VQlWD7QGuZR7mpyfs6voUedtKwHYmmAaXc7co5YmrG5eT0JIzPGZA'];

    const websocket = new WebSocket(url, headers);

    websocket.onopen = () => {
      console.log('WebSocket connected');
      // Do something when WebSocket is opened
    };

    websocket.onmessage = (message) => {
      console.log('Received message:', message.data);
      // Convert received data to JSON
      const data = JSON.parse(message.data);
      // Set the SPLArray in the parent component
      setSPLArray(data);
    };

    websocket.onerror = (error) => {
      console.error('WebSocket error:', error);
      // Handle WebSocket errors
    };

    websocket.onclose = () => {
      console.log('WebSocket disconnected');
      // Do something when WebSocket is closed
    };

    return () => {
      websocket.close();
    };
  }, [setSPLArray]);

  useEffect(() => {
    console.log('SPL Array:', splArray);
  }, [splArray]);

  return (
    <div>
      <h2>SPL Data</h2>
      <ul> 
          <li>
            <strong>Timestamp:</strong> {splArray}
          </li>
      </ul>
    </div>
  );
};

export default App;
