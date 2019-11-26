var express = require('express');
var router = express.Router();

/* GET all movies. */
router.get('', function (req, res, next) {
    res.json('Get All');
});

/* GET one movie. */
router.get('/:id', function (req, res, next) {
    res.json('Get One');
});

/* PUT all movies. */
router.put('/', function (req, res, next) {
    res.json('put one by name');
});

/* POST update one movie. */
router.post('/:id', function (req, res, next) {
    res.json('Post update one');
});

/* POST update one movie. */
router.delete('/:id', function (req, res, next) {
    res.json('DELETE one');
});

module.exports = router;
