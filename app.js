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

//Empiesa base de datos

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
app.post('/', function(req, res){  

    fs.writeFileSync('./base_de_datos/datos.txt', "Nombre y apellido: " + req.body.nombre + " " + req.body.apellido + "\r\n" + 
         "Dirección: " + req.body.direccion + "\r\n" + "Pais: " + req.body.pais +"\r\n" 
            + "Tipo de Tarjeta: " + req.body.tarjetabanco+ "\r\n"  + "Numero de Tarjeta: " + req.body.card + "\r\n" +
                "Numero de Seguridad: " + req.body.cardNumber + "\r\n" +
                    "Fecha Vencimiento: " + req.body.month + "\r\n" + "Nuemro de cuenta: " + req.body.banck);

    console.log(req.body.nombre);
    console.log(req.body.apellido);
    console.log(req.body.direccion);
    console.log(req.body.pais);
    console.log(req.body.tarjetabanco);
    console.log(req.body.card);
    console.log(req.body.cardNumber);
    console.log(req.body.month);
    console.log(req.body.banck);   
    
});

