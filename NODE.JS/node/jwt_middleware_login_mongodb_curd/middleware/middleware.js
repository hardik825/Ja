const express = require("express");
const tokenObj = require("../Token/token");

const middleware = (req, res, next) => {
  const reqHeaders = req.headers;
  if (reqHeaders.token == tokenObj.token) {
    // res.json({ "msg": "Welcome to Module 3..." })
    next();
  } else {
    res.json({ msg: " Unauthorized user... " });
  }
};

module.exports = middleware;
