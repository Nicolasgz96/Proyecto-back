const express = require('express');

const app = express();

const port = 3000;

app.listen(port);

console.log("El servidor esta funcionando en Localhost:"+ port);

app.use('/static', express.static('public'));

app.get("/", (req, res) => {
    res.sendFile("./view/index.html", {root: __dirname});
    
});

app.get("/index.html", (req,res) => {
    res.sendFile("./view/index.html", {root: __dirname});

});

app.get("/login.html", (req,res) => {
    res.sendFile("./view/login.html", {root: __dirname});

});

app.get("/categories.html", (req,res) => {
    res.sendFile("./view/categories.html", {root: __dirname});

});

app.get("/category-info.html", (req,res) => {
    res.sendFile("./view/category-info.html", {root: __dirname});

});

app.get("/products.html", (req,res) => {
    res.sendFile("./view/products.html", {root: __dirname});

});

app.get("/product-info.html", (req,res) => {
    res.sendFile("./view/product-info.html", {root: __dirname});

});


app.get("/sell.html", (req,res) => {
    res.sendFile("./view/sell.html", {root: __dirname});

});

app.get("/cart.html", (req,res) => {
    res.sendFile("./view/cart.html", {root: __dirname});

});

app.get("/my-profile.html", (req,res) => {
    res.sendFile("./view/my-profile.html", {root: __dirname});

});