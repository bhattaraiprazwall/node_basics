// middleware/jsonMiddleware.js
const express = require("express");

function jsonMiddleware() {
    return express.json();
}

module.exports = jsonMiddleware;
