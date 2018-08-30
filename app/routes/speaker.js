const express =  require('express');
const router = express.Router();



router.get('/speakers' , (req , res) => {
    let data = req.app.get('appData');
    let pagePhotos = data.speakers.reduce((prev , cur) =>{ return prev.concat(cur.artwork);
    },[]);
    
    res.render('speakers' ,{
        pageTitle : "Speakers" ,
        artwork : pagePhotos,
        pageId : "speakers",
        speakers : data.speakers
    });

});
router.get('/speaker/:speakerid' , (req , res) => {
    let data = req.app.get('appData')
    let speaker =  data.speakers[req.params.speakerid];
    res.send(`
    <link rel="stylesheet" type="text/css" href="/css/style.css" >
    <h1>Roux Academy</h1>  
                <li><h2>${speaker.name}</h2>
                <img  src="/images/speakers/${speaker.shortname}_tn.jpg" alt="speaker" /> 
            <h2>${speaker.summary}</h2></li>
            <script src="/reload/reload.js"></script>
            `);

});

module.exports = router;