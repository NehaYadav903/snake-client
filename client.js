#!/usr/bin/env node
const { IP, PORT } = require('./constants');
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
  conn.write("Name: Snake");
  });
  //conn.write('Move: up');
  //for (let i = 1; i <= 10 ; i++) { // moveup with timeout delay
  // setTimeout(() => {
  // conn.write('Move: down');
  //}, 50 * i)
  //};
  //conn.write('Move: down');
  //for (let i = 1; i <= 10 ; i++) { //move up with setInterval
  //setInterval(() => {
  //conn.write('Move: up');
  //}, 50 )
  //};
  //conn.write('Move: left');
  //for (let i = 1; i <= 10 ; i++) { //move up with setInterval
  //setInterval(() => {
  //conn.write('Move: right');
  //}, 50 )
  //};
  //conn.write('Move: right');
  //for (let i = 1; i <= 10 ; i++) { //move up with setInterval
  //setInterval(() => {
  //conn.write('Move: left');
  //}, 50 )
  //};
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
