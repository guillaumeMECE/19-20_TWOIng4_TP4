var express = require('express');
var router = express.Router();
const axios = require('axios');
const movieModel = require('../models/movie');

const APIKEY = '11fd9261';

/* GET all movies. */
router.get('', async (req, res, next) => {
    try {
        const result = await movieModel.find({});
        console.log('result: ', result);
        res.status(200).json(result);
    } catch (error) {
        console.log('ERROR MESSAGE :', error.message);
        console.log('ERROR :', error);
        res.status(500).json(error);
    }
});

/* GET one movie. */
router.get('/:id', async (req, res, next) => {
    try {
        const result = await movieModel.findById(req.params.id)
        res.status(200).json(result);
    } catch (error) {
        console.log('ERROR MESSAGE :', error.message);
        console.log('ERROR :', error);
        res.status(500).json(error);
    }
});

/* PUT one movie. */
router.put('/', async (req, res, next) => {
    try {
        if (req.body.movie == undefined || req.body.movie == null) {
            throw 'no movie title';
        }
        const { data } = await axios.get(`http://www.omdbapi.com/?t=${req.body.movie}&apikey=${APIKEY}`)
        const result = await movieModel.create(data);
        res.status(200).json(result);
    } catch (error) {
        console.log('ERROR MESSAGE :', error.message);
        console.log('ERROR :', error);
        res.status(500).json(error);
    }
});

/* POST update one movie. */
router.post('/:id', async (req, res, next) => {
    try {
        const result = await movieModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(result);
    } catch (error) {
        console.log('ERROR MESSAGE :', error.message);
        console.log('ERROR :', error);
        res.status(500).json(error);
    }
});

/* DELETE one movie. */
router.delete('/:id', async (req, res, next) => {
    try {
        const result = await movieModel.findByIdAndDelete(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        console.log('ERROR MESSAGE :', error.message);
        console.log('ERROR :', error);
        res.status(500).json(error);
    }
});

module.exports = router;
