const express = require("express");
const app = express();
//To serve static files use this function, and name root between bracket.
app.use(express.static("public"));


/**Pages */
app.get("/frontPage", (req,res) => {
    res.sendFile(__dirname + "/public/frontPage.html")
});


/**API */
app.get("/api/time", (req,res) => {
    const data = console.log("hej")
    res.send({data: data})
});

const PORT = 8080

app.listen(PORT, (error) => {
    if(error){
        console.log(error)
        return
    }
    console.log("server is running on PORT: ", PORT)


});
