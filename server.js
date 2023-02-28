const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;
const dbjson = require('./db/db.json');

const htmlRoute=require('./routes/htmlroutes');
const apiRoute = require('./routes/apiroutes/apiroutes');

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

/*
app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, 'public/notes.html'))
);
*/
app.get('/api',(req,res)=> res.json(dbjson))

app.use('/api',apiRoute);
app.use('/',htmlRoute);


app.listen(PORT, () =>
console.log(`Example app listening at http://localhost:${PORT}`)
);
