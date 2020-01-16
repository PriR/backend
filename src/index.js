const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://priscila:priscila@cluster0-f9yq3.mongodb.net/week10?retryWrites=true&w=majority', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
// app.use(cors({origin: 'http://localhost:3000'}));// libera acesso para todo tipo de conexao
app.use(express.json());
app.use(routes);

app.listen(3333);
