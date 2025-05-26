const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Rota de saúde
app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

// Rota de exemplo
app.get('/hello', (req, res) => {
  res.json({ message: 'Olá, DevSecOps!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});