const express = require('express');
const path = require('path');
const app = express();

/* // setup up Route
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'public','index.html'));
}); */

const members = [
    {
        name:'Alice',
        age:3
    },
    {
        name:'Bob',
        age:4
    },
    {
        name:'Charlie',
        age:6
    },
];

app.get('/api/members', (req,res) =>{
    res.json(members);
});

// set up a static folder
app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server starts at port ${PORT}`));
