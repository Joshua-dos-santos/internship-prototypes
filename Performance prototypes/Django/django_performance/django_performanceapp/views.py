from django.shortcuts import render
import websocket

def connect_to_websocket(request):
    # Define the WebSocket URL and token
    websocket_url = "ws://fangage-integration.sorama.eu/SoundSurface/Websocket"
    token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjNkMGJiZDc2LWIyYzQtNDQ5NS05ODk2LTllZjFmZjkzNzc0MCIsInJvbGUiOiJBZG1pbmlzdHJhdG9yIiwibmJmIjoxNzEyNzM0ODY2LCJleHAiOjE3MTI4MjEyNjYsImlhdCI6MTcxMjczNDg2Nn0.VGBRsYvfRiX2HMbyENOQfbQ1TPp2-RAT6VQlWD7QGuZR7mpyfs6voUedtKwHYmmAaXc7co5YmrG5eT0JIzPGZA"

    # Create WebSocket connection with header
    ws = websocket.WebSocket()
    ws.connect(websocket_url, header=["Authorization: Bearer " + token])

    print("Connected to WebSocket")
    websocket_data = []

    while True:
        try:
            result = ws.recv()
            return render(request, 'websocket_data.html', {'websocket_data': result})
            # Handle received data here
        except websocket.WebSocketConnectionClosedException:
            break
