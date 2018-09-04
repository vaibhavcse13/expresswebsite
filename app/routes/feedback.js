const express = require('express');
const router  =  express.Router();




router.get('/feedback' , (req , res) => {
    
    res.render('feedback' , {
        pageTitle : "Feedback" ,
        pageId : "feedback"
    })
});

module.exports =  router;