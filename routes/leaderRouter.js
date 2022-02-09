const express = require('express');
const bodyParser = require('body-parser')

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json('dev'));

leaderRouter.route('/leaders')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    next();
})
.get((req, res, next) => {
    res.end("Here are the revised standard leader coming right up..")
})
.post((req, res, next) => {
    res.end('No Post action on leaders')
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end("Red Alert ! Not Allowed");
})
.delete((req, res, next) => {
    res.end("Showing no leaders")
})

module.exports = leaderRouter;