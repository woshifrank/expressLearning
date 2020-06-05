const express = require('express');
const path = require('path');
const app = express();
const logger = require('./middleware/logger');
const members = require('./Members');

/* // setup up Route
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'public','index.html'));
}); */

// next = next middleware function on stack
app.use(logger);

app.get('/api/members', (req,res) =>{
    res.json(members);
});

// set up a static folder
app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server starts at port ${PORT}`));
