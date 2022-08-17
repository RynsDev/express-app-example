const express = require('express');
const app = express();
var bodyParser = require('body-parser')


app.use(bodyParser.json());
let port = 80;

app.get('/hello', (req, res) => {
    res.send('World!')
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})