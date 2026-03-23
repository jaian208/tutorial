const express = require('express');
const app = express();
const port = 300;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {

    const productos = [
        { nombre: "Teclado RGB", precio: 120000, stock: 3 },
        { nombre: "Mouse Gamer", precio: 80000, stock: 1 },
        { nombre: "Monitor 144Hz", precio: 900000, stock: 5 },
        { nombre: "Headset Pro", precio: 150000, stock: 1 }
    ];

    res.render('home', { productos });
});

app.listen(port, () => {
    console.log(`Servidor en el puerto ${port}`);
});