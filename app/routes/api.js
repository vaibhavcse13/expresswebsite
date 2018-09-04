const express    = require('express');
const router     =  express.Router();
const bodyParser = require('body-parser');
const feedback   = require('../data/feedback.json');
const fs    = require('fs');
// getting the api data 

router.get('/api' , (req , res) => {
    res.json(feedback);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
router.post('/api' , (req, res) => {
   feedback.unshift(req.body);
   fs.writeFile('app/data/feedback.json' ,  JSON.stringify(feedback) , 'utf-8' , (err) =>{
       console.log(err);
   })
   res.json(feedback); 
});

router.delete('/api/:id' , (req, res) => {
    feedback.splice(req.params.id , 1);
    
    fs.writeFile('app/data/feedback.json' ,  JSON.stringify(feedback) , 'utf-8' , (err) =>{
        if(err){
            console.log(err);
        }
        
    })
    res.json(feedback); 
 });


module.exports = router;