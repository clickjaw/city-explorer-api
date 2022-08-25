"use strict";
require("dotenv").config();

const express = require("express"); //bring in express
const app = express(); // start using express
const PORT = process.env.PORT || 3001;
const cors = require('cors');
app.use(cors())//all routes are open

app.get("/", (req, res) => {
    console.log('Backend PING')    
    });

const weatherRouter = require("./routes/weather.js");
app.use("/weather", weatherRouter);


app.listen(PORT, () => console.log(`It's all fine. PORT:${PORT}`));
