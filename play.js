const { connect } = require('./client');
const { setupInput } = require('./input');
const { message } = require("./constants");

// display connecting message
console.log(message["connection"]);

setupInput(connect());