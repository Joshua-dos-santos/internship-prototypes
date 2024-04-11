window.connectWebSocket = function (url, onOpen, onMessage, onError, onClose) {
    const headers = ['Bearer', 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6ImFkM2UyMmNmLWJhN2EtNDkzMC04MTUyLTVjYWQ4ZjQ3ZDMzMiIsInJvbGUiOiJBZG1pbmlzdHJhdG9yIiwibmJmIjoxNzEyODI0MDkyLCJleHAiOjE3MTI5MTA0OTIsImlhdCI6MTcxMjgyNDA5Mn0.YMQ1Y5LKlL2xUoyI9VgZ-6lW1ZrNgorl9wIzEVzPgkOAmKIn2heDL1n6adJZ2lHuaW1uPEfXQg2nmsHbtm9Xzg'];
    var socket = new WebSocket(url, headers);

    socket.onopen = function (event) {
        onOpen.invokeMethodAsync();
    };

socket.onmessage = function (event) {
    console.log("Received message:", event.data); // Log the received message
    if (onMessage && typeof onMessage === 'function') {
        onMessage.invokeMethodAsync(event.data);
    }
};

    socket.onerror = function (event) {
        if (onError && typeof onError === 'function') {
            onError.invokeMethodAsync(event.message);
        }
    };

    socket.onclose = function (event) {
        if (onClose && typeof onClose === 'function') {
            onClose.invokeMethodAsync();
        }
    };

    return socket;
};

window.sendWebSocketMessage = function (socket, message) {
    socket.send(message);
};
