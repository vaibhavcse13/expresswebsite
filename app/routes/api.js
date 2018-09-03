const express = require('express');
const router =  express.Router();
const feedback = require('../data/feedback.json');
// getting the api data 

router.get('/api' , (req , res) => {
    res.json(feedback);
});

module.exports = router;