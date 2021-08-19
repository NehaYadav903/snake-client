#!/usr/bin/env node
const net = require('net');
/**
 * Establishes connection with the game server
 */
 const connect = function() {
 const conn = net.createConnection({
  host: 'localhost',
  port: 50541
});
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    conn.write('Hello from client!');
  });
// interpret incoming data as text
conn.setEncoding('utf8');
const connect = function () {
  console.log('Received: ' + data);
}


conn.on('connect', (data) => {
  console.log("Successfully connected to game server");
   });
return conn;
 }

process.stdout.write('\x07');

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const { RemoteInterface } = require('./src/RemoteInterface')
const game = new Game(new UserInterface(), new RemoteInterface())

// Begin game
game.start()

 module.exports = { connect };
