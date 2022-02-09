const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json('dev'));

dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Sending you the recent dishes...');
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /dishes');
})
.delete((req, res, next) => {
    res.end('Deleting all the dishes!');
});

dishRouter.route('/dishes/:dishId')
.all((req, res, params) =>{
    res.statusCode = 200;
    res.setHeader('Content', 'text/plain')
    params();
})
.get((req, res, params) => {
    res.end('Dish with id/ does not exist');
})
.post((req, res, params) => {
    res.end('Cannot post dish')
})
.put((req, res, params) => {
    res.end('Updating dish with id: ' 
        + req.body.name + 'with details: ' + req.body.description)
})
.delete((req, res, params) => {
    res.end('Deleting dishes with id: ' + req.body.name)
})

module.exports = dishRouter;