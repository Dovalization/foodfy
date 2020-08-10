const express = require("express");
const nunjucks = require("nunjucks");
const recipes = require("./data");

const { restart } = require("nodemon");

const server = express();
const port  = 5000;

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})


server.get("/", (req,res) => {
const heroData = {
    title: "As Melhores Receitas",
    description: "Aprenda a construir os melhores pratos<br>com receitas criadas por profissionais<br>do mundo inteiro.",
    image: "img/chef.png"
}
    return res.render("index", {items:recipes, heroData})
})

server.get("/about", (req,res) => {
    return res.render("about")
})
server.get("/recipes", (req,res) => {
    return res.render("recipes", {items:recipes})
})

server.get("/recipes/:index", (req,res) => {
    const recipeIndex = req.params.index;

    const recipe = recipes.find((recipe) => {
        if(recipes[recipeIndex] == recipeIndex) {
            return true;
        }
    })

    if (!recipes[recipeIndex]) {
        return res.send("Receita nao encontrada");
    }

    console.log(recipes[recipeIndex]);
    return res.render("recipe_single", {recipe: recipes[recipeIndex]})
})

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})
