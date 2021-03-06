const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config({ path: 'src/dev.env' })
app.use(express.json());

app.use("/kanye", require("./routes/kanyeQuotes")); // Defining User route

app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`)
});