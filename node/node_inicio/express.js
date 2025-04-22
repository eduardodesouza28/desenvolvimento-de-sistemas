const express = require('express');
const app = express();
const PORT = 8001;

app.use(express.json());

const usuarios = []

app.get('/', (req, res) => {
  res.send(`<h1>Hello World!</h1>`);
});

app.get('/list', (req, res) => {
  res.send(usuarios);
});

app.post('/usuario', (req, res) => {
  const { nome, email } = req.body;
  usuarios.push({ nome, email });
  res.send(`${email}`);
});

app.put('/alterar', (req, res) => {
  const { nome, email } = req.body;
  const usuario = usuarios.find((usuario) => usuario.email === email);
  usuario.nome = nome;
  res.send(`${usuario.nome}`);
});

app.delete('/deletar', (req, res) => {
  const { email } = req.body;
  const index = usuarios.findIndex((usuario) => usuario.email === email);
  usuarios.splice(index, 1);
  res.send(`${email}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

