const tokenObj = require("../Token/token");
const express = require("express");


const middleware = (req, res, next) => {
    const reqHeaders = req.headers;
    if (reqHeaders.token == tokenObj.token) {
        // res.json({ "msg": "Welcome to Middleware1..." })
        next();
    }
    else {
        res.json({ "msg": " Unauthorized user... " });
    }
}

module.exports = middleware;