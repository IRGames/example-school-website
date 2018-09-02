const express = require('express');
const app = express();

app.post('/', (req, res) => {
  res.sendFile(__dirname + '/client/index2.html');
});

app.get('/butts', (req,res) => {
  res.json({butts: req.query.piss});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

module.exports = app;
