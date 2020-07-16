const express = require("express");
const nunjucks = require("nunjucks");

const { restart } = require("nodemon");

const server = express();
const port  = 5000;

server.use(express.static('public'))

server.set("view engine", "html")

nunjucks.configure("views", {
    express:server
})


server.get("/", (req,res) => {
    return res.render("index")
})

server.get("/about", (req,res) => {
    return res.render("about")
})
server.get("/recipes", (req,res) => {
    return res.render("recipes")
})

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})