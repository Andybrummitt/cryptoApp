const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: false}));
app.use(express.json()); 

app.listen(
    PORT, () => console.log('Server live on ' + PORT)
)