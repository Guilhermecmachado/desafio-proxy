const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
  host: 'db',  // Nome do serviço no docker-compose
  user: 'root',
  password: 'example',  // Alterar para 'root' se necessário
  database: 'test'  // Alterar para 'mydb' se necessário
});

// Conexão com o banco de dados
db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL.');
});

// Middleware para adicionar um nome ao banco de dados
app.get('/add-name/:name', (req, res) => {
  const name = req.params.name;

  db.query('INSERT INTO people (name) VALUES (?)', [name], (err) => {
    if (err) {
      console.error('Erro ao adicionar nome:', err);
      return res.status(500).send('Erro ao adicionar nome.');
    }
    res.send(`<h1>Nome adicionado com sucesso!</h1><h2>${name}</h2>`);
  });
});

// Rota para listar os nomes cadastrados
app.get('/', (req, res) => {
  db.query('SELECT * FROM people', (err, results) => {
    if (err) {
      console.error('Erro ao buscar nomes:', err);
      return res.status(500).send('Erro ao buscar nomes.');
    }
    let response = '<h1>Full Cycle Rocks!</h1><ul>';
    results.forEach(person => {
      response += `<li>${person.name}</li>`;
    });
    response += '</ul>';
    res.send(response);
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});
