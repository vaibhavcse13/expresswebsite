const express =  require('express');
const router = express.Router();

router.get('/' , (req , res) => {
    let data = req.app.get('appData');
    let pagePhotos = data.speakers.reduce((prev , cur) =>{ return prev.concat(cur.artwork);
    },[]);
    
    res.render('index' ,{
        pageTitle : "Home" ,
        artwork : pagePhotos,
        pageId : "home",
    });

});

module.exports = router;

