const express  = require('express');
const router = express.Router();
const uuid = require('uuid');
const members = require('../../Members');

// the path is determined by app.use in index.js
router.get('/', (req,res) =>{
    res.json(members);
});

// get single member
// the path is determined by app.use in index.js
router.get('/:id', (req,res) => {
    // access req parameters by req.params
    //res.send(req.params.id);

    // check if exists, true, false
    const found = members.some(member => member.id === parseInt(req.params.id)); 
    if(found){
        // filter function
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else{
        // if not found, set status
        res.status(400).json({msg: `No member with id of ${req.params.id}`});
    }
    
    
});

// create Member
router.post('/', (req,res) =>{
    // POST
    //res.send(req.body);
    
    const newMember = {
        id: uuid.v4(),
        name:req.body.name,
        age:req.body.age
    }
    // check if name, age exists
    if( !newMember.name || !newMember.age){
        return res.status(400).json({msg: 'Please include the name and age'});
    }
    members.push(newMember);
    res.json(members);
    
});

// update member
router.put('/:id', (req,res) =>{
   // check if exists, true, false
   // req.params store number in string, use parseInt to change into int
   const found = members.some(member => member.id === parseInt(req.params.id)); 
   if(found){
      // update the member
      const updateMember = req.body;
      members.forEach(member =>{
        if (member.id === parseInt(req.params.id)){
            // if not updated, keep the old one
            member.name = updateMember.name ? updateMember.name: member.name;
            member.age = updateMember.age? updateMember.age: member.age;

            res.json({msg:"Member created", member});
        }
      });
   }
   else{
       // if not found, set status
       res.status(400).json({msg: `No member with id of ${req.params.id}`});
   }
    
});

module.exports = router;