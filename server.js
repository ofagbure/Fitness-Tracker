require('dotenv').config()
const express = require("express");
// const APIroutes = require("./routes/APIroutes");
const htmlRoutes = require("./routes/indexview");


const app = express();
const port = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
//app.use("/api", APIroutes);
app.use("/", htmlRoutes);


app.listen(port, function () {
    console.log(`Listening on PORT: ${port}`)
});


// Routes:
// Get (.find) route for the workout lists
// Update (.findByIdAndUpdate method) route to update the workout info 
// Post (.create method )route to create new workouts 
// Delete (.findByIdAndDelete(body.id) method) route to delete the workout