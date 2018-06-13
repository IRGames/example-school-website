const express = require('express');
const app = express()

app.get('/butt', (req, res) => res.send('Hello World!'))

app.listen(8081, () => console.log('Example app listening on port 3000!'))
