const express = require('express');

const app = express();

const port = 3000;

app.listen(port);

console.log("El servidor esta funcionando en Localhost:" + port);

app.use('/static', express.static('public'));

app.get("/", (req, res) => {
    res.sendFile("./views/index.html", {root: __dirname});
    
});

app.get("/index.html", (req,res) => {
    res.sendFile("./views/index.html", {root: __dirname});

});

app.get("/login.html", (req,res) => {
    res.sendFile("./views/login.html", {root: __dirname});

});

app.get("/categories.html", (req,res) => {
    res.sendFile("./views/categories.html", {root: __dirname});

});

app.get("/category-info.html", (req,res) => {
    res.sendFile("./views/category-info.html", {root: __dirname});

});

app.get("/products.html", (req,res) => {
    res.sendFile("./views/products.html", {root: __dirname});

});

app.get("/product-info.html", (req,res) => {
    res.sendFile("./views/product-info.html", {root: __dirname});

});


app.get("/sell.html", (req,res) => {
    res.sendFile("./views/sell.html", {root: __dirname});

});

app.get("/cart.html", (req,res) => {
    res.sendFile("./views/cart.html", {root: __dirname});

});

app.get("/my-profile.html", (req,res) => {
    res.sendFile("./views/my-profile.html", {root: __dirname});

});

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

const fs = require('fs');

fs.writeFile("./base_de_datos/datos.txt", "Base de datos!", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("Se guardo la base de datos con exito!");
}); 



app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Access the parse results as request.body
app.post('/', function(request, response){  

    fs.writeFileSync('./base_de_datos/datos.txt', "Nombre y apellido:" + " " + request.body.nombre + " " + request.body.apellido +"," + " " + 
       "Dirección:" + " " + request.body.direccion +"," + " " + "Pais:" + " " + request.body.pais +"," + " " 
            + "Tipo de Tarjeta:" + " " + request.body.tarjetabanco +"," + " " + "Numero de Tarjeta:" + " " + request.body.card +"," + " " + 
                "Numero de Seguridad:" + " " + request.body.cardNumber +"," + " " +
                    "Fecha Vencimiento:" + " " + request.body.month);

    console.log(request.body.nombre);
    console.log(request.body.apellido);
    console.log(request.body.direccion);
    console.log(request.body.pais);
    console.log(request.body.tarjetabanco);
    console.log(request.body.card);
    console.log(request.body.cardNumber);
    console.log(request.body.month);
    console.log(request.body.banck);   
    
});

