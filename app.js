// express server
const express = require("express")
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

//------------------

//routes
app.use('/',require(path.join(__dirname,'routers','messageRouter')));
//------------------
app.use('/{*splat}', async (req, res) => {
   // *splat matches any path without the root path. If you need to match the root path as well /, you can use /{*splat}, wrapping the wildcard in braces.
   //res.sendFile(path.join(__dirname,'views','404.html'))
     res.render("404", { message: `error`});
 });

//how to send error page
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("my firerst express app ")
});
