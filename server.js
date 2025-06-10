const WebSocket = require('ws');

const port = process.env.PORT || 8080;
const wss = new WebSocket.Server({ port: port });

let clients = new Set();

wss.on('connection', function connection(ws) {
  clients.add(ws);
  console.log('New client connected');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    // Broadcast message to all other clients
    clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    clients.delete(ws);
    console.log('Client disconnected');
  });
});

console.log(`WebSocket server is running on ws://localhost:${port}`);
