const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

const showsData = require('./showsData');

app.get('/rest/showsData', (req, res) => res.send(showsData()))



app.use(express.static(path.join(__dirname, '../../build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));