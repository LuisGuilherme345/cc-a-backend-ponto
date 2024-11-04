const express = require('express');
const app = express();

// app.METODO('rota/caminho', (req, res) => {})
app.post('/users', (req, res) =>{
    res.send("Rota users usando post");
});

app.get("/users/:id1-:id2", (req, res) =>{
    res.send(`O parametro é ${req.params.id}`);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor web ouvindo na porta ${PORT}`);
});