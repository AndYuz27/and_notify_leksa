import io from 'socket.io-client';

export const SOCKET_URL = 'https://puzzlingdizzycleantech.andrieiiuzlov.repl.co/'
export const socket = io(SOCKET_URL);

setInterval(() => {
    socket.emit('pong', { id: socket.id, message: 'pong' })
    console.log('pong is work')
}, 3000);
