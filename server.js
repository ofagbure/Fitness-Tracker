require('dotenv').config()
const express = require("express");
const htmlRoutes = require("./routes/indexview");
const app = express();
const port = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(htmlRoutes);


app.listen(port, function () {
    console.log(`Listening on PORT: ${port}`)
});


