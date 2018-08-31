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
router.get('/speakers/:speakerid' , (req , res) => {
    let data = req.app.get('appData')
    let index = data.speakers.findIndex((element) => {
        return element.shortname === req.params.speakerid
    }); 
    
    let speaker =  data.speakers[index];

    res.render('speakers' , {
        pageTitle : speaker.name ,
        artwork : speaker.artwork,
        pageId : speaker.shortname,
        speakers : [speaker]
    })

});

module.exports = router;