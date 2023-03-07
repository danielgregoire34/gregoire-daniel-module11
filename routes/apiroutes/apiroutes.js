const router = require('express').Router();
const fs = require('fs');
const db = require('../../db/db.json');

router.get('/notes',(req,res)=>{
res.json(db);
})

router.post('/notes',(req,res)=>{

let writeNote = db.length + 1;

req.body.writeNote = writeNote++;

db.push(req.body);

fs.writeFile('./db/db.json', JSON.stringify(db), function (err) {
if (err) throw err;

res.json(db);
});

})





module.exports = router;