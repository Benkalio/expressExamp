const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json('dev'));

promotionRouter.route('/promotions')
.all((req, res, next) => {
    res.statusCode = 200,
    res.setHeader('Content-Type', 'text/plain')
    next();
})
.get((req, res, next) => {
    res.end('Lights ! Cameras ! Action !')
}) 
.post((req, res, next) => {
    res.end('Your post will be added: ' + req.body.name + 'with the following details: ' + req.body.description );
})
.put((req, res, next) => {
    res.statusCode = 403
    res.end('Put operations not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all the promo now!')
})
module.exports = promotionRouter;