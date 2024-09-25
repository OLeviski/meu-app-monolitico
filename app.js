// app.js

// Importa o módulo Express, que é usado para criar o servidor
const express = require('express');

// Importa o módulo Path, que ajuda a lidar com caminhos de arquivos de forma mais segura
const path = require('path');

// Cria uma instância da aplicação Express
const app = express();

// Define a porta que o servidor irá escutar
const PORT = 3000;

// Middleware que serve arquivos estáticos (como HTML, CSS e imagens) da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal, que responde com o arquivo 'index.html' quando o usuário acessa a raiz do site
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Exemplo de rota de API que responde com uma mensagem JSON quando chamada
app.get('/api/say-hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

// Inicia o servidor, que passa a escutar as requisições na porta definida (3000 neste caso)
app.listen(PORT, () => {
    // Exibe uma mensagem no console para indicar que o servidor está rodando corretamente
    console.log(`Servidor rodando na porta ${PORT}`);
});

