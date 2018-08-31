const express = require('express');
const app = express();
const data = require('./data/data.json');
const reload = require('reload');
//  creating route for speaker 

app.set('appData' , data);
app.set('view engine' , 'ejs');
app.set('views' , 'app/views')
app.locals.siteTitle = "Roux Meetup";
app.locals.allSpeakers =  data.speakers;
app.use(require('./routes/speaker'));
app.use(require('./routes/index'));
app.use(express.static('app/public'));


 app.listen(3000 , () =>{
    console.log(`Application is running at port 3000 ..`);
});

reload( app);
