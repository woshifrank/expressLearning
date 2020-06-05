const express = require('express');
const path = require('path');
const app = express();
const logger = require('./middleware/logger');
//const members = require('./Members');

/* // setup up Route
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'public','index.html'));
}); */

// next = next middleware function on stack
//app.use(logger);

// Body Parser Middleware
app.use(express.json());
// url-encoded
app.use(express.urlencoded({ extended: false}));

// set up a static folder
app.use(express.static(path.join(__dirname,'public')));

// Member API routers
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server starts at port ${PORT}`));
