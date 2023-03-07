const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

const htmlRoute=require('./routes/htmlroutes');
const apiRoute = require('./routes/apiroutes/apiroutes');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
/*
app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, 'public/notes.html'))
);
*/


app.get('/tutor', (req,res) => {
    res.json('testing 123')
});

app.use('/api',apiRoute);
app.use('/',htmlRoute);


app.listen(PORT, () =>
console.log(`Example app listening at http://localhost:${PORT}`)
);
