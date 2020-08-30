const express = require('express');
const app = express();
const Database = require('./DB/db'); 
const photosRouter = require('./routers/router');
Database()

const PORT = process.env.PORT || 5000;

app.use(express.json());


app.use(photosRouter);


app.listen(PORT, () => {
    console.log(`The Server is Running Successfully on PORT ${PORT}`)
})