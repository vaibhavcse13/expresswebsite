const express = require('express');
const app = express();
const data = require('./data/data.json');
const reload = require('reload');
const io = require('socket.io')();

//  creating route for speaker 

app.set('appData' , data);
app.set('view engine' , 'ejs');
app.set('views' , 'app/views')
app.locals.siteTitle = "Roux Meetup";
app.locals.allSpeakers =  data.speakers;
app.use(require('./routes/speaker'));
app.use(require('./routes/index'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));
app.use(express.static('app/public'));


 let server = app.listen(3000 , () =>{
    console.log(`Application is running at port 3000 ..`);
});
// attaching the socket io with server 

io.attach(server);

// detecting the event 
io.on('connection' , (socket) => {
    console.log('user connected');

    socket.on('postMessage' , (data) => {
        io.emit('updateMessage' , data);

    })
});



reload( app);
