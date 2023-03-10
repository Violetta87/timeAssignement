const express = require("express");
const app = express();
//To serve static files use this function, and name root between bracket.

app.use(express.static("public"));

const weekDays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "satursday"]


/**Pages */
app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/frontPage.html")
});


/**API */
app.get("/api/time", (req,res) => {
    const date = new Date();
    const today = weekDays[date.getDay()]
    console.log(today)
    res.send({data: today})
});

/**port */

const PORT = 8080

app.listen(PORT, (error) => {
    if(error){
        console.log(error)
        return
    }
    console.log("server is running on PORT: ", PORT)

});
