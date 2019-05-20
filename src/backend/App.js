const express = require('express')
const app = express()
const port = 3001

const showsData = require('./showsData');

app.get('/rest/showsData', (req, res) => res.send(showsData()))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))