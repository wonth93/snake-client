const { connect } = require('./client');
const { setupInput } = require('./input');
const { message } = require("./constants");

console.log(message["connection"]);

setupInput(connect());