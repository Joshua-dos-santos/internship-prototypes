import React, { useEffect } from 'react';

const WebSocketComponent = () => {
  useEffect(() => {
    const url = 'ws://fangage-integration.sorama.eu/SoundSurface/Websocket'; // Replace with your WebSocket URL

    const headers = ['Bearer', 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6ImIwM2RmNzE2LTVlNWItNGUyZi05ZmRmLWU1MzEyNzM1ZjgxZiIsInJvbGUiOiJBZG1pbmlzdHJhdG9yIiwibmJmIjoxNzEyNjY2OTEzLCJleHAiOjE3MTI3NTMzMTMsImlhdCI6MTcxMjY2NjkxM30.QeLnRtBrAo-nDSFKIxXFzDXsAZIHQksCzEvNywR05PmZJBnga8kZMruXKjNyrb9UDNe9cJM2KSDBHt3te9VD0Q'];

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

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default WebSocketComponent;