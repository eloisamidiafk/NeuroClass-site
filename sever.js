// 1. Configuração Inicial e Dependências
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();
const PORT = 3000; // Porta do seu Back-end

// Configuração do Middleware
app.use(cors()); 
app.use(bodyParser.json()); 

// ** SIMULAÇÃO DO BANCO DE DADOS (DB) EM MEMÓRIA **
// ATENÇÃO: ESTES DADOS SERÃO PERDIDOS AO REINICIAR O SERVIDOR!
// Para produção, você deve usar um DB real (MongoDB, PostgreSQL, MySQL)
const database = {
    alunos: [],
    professores: [],
    profissionais: [],
    feedbacks: []
};


// 2. Rotas de Cadastro
app.post('/api/cadastro/aluno', (req, res) => {
    const { nome, email, senha, condicao_neuro } = req.body;

    if (database.alunos.some(aluno => aluno.email === email)) {
        return res.status(400).json({ error: 'E-mail já cadastrado.' });
    }

    const novoAluno = { 
        id: database.alunos.length + 1, 
        nome, 
        email, 
        senha_criptografada: senha, // Apenas para demonstração
        condicao_neuro
    };

    database.alunos.push(novoAluno);
    
    console.log('Novo aluno cadastrado:', novoAluno);
    res.status(201).json({ 
        message: 'Cadastro de aluno realizado com sucesso! Agora faça login.',
        userId: novoAluno.id
    });
});

app.post('/api/cadastro/professor', (req, res) => {
    const { nome, email, senha, escola, area_atuacao } = req.body;
    
    if (database.professores.some(p => p.email === email)) {
        return res.status(400).json({ error: 'E-mail já cadastrado.' });
    }
    database.professores.push({ id: database.professores.length + 1, nome, email, senha, escola, area_atuacao });
    
    res.status(201).json({ message: 'Cadastro de professor realizado com sucesso!' });
});

app.post('/api/cadastro/profissional', (req, res) => {
    const { nome, email, senha, profissao, registro_conselho, estado_atuacao } = req.body;
    
    if (database.profissionais.some(p => p.email === email)) {
        return res.status(400).json({ error: 'E-mail já cadastrado.' });
    }
    database.profissionais.push({ id: database.profissionais.length + 1, nome, email, senha, profissao, registro_conselho, estado_atuacao });
    
    res.status(201).json({ message: 'Cadastro de profissional realizado com sucesso!' });
});


// 3. Rotas de Login
app.post('/api/login/aluno', (req, res) => {
    const { username, password } = req.body;
    const aluno = database.alunos.find(a => a.email === username && a.senha_criptografada === password);

    if (!aluno) {
        return res.status(401).json({ error: 'E-mail ou senha incorretos.' });
    }

    res.json({ message: 'Login bem-sucedido!', user: { id: aluno.id, nome: aluno.nome } });
});

app.post('/api/login/professor', (req, res) => {
    const { username, password } = req.body;
    const professor = database.professores.find(p => p.email === username && p.senha === password);

    if (!professor) {
        return res.status(401).json({ error: 'E-mail ou senha incorretos.' });
    }

    res.json({ message: 'Login bem-sucedido!', user: { id: professor.id, nome: professor.nome } });
});


// 4. Rota de Feedback
app.post('/api/feedback', (req, res) => {
    const { nome, email, mensagem } = req.body;
    
    const novoFeedback = { 
        id: database.feedbacks.length + 1, 
        nome, 
        email, 
        mensagem, 
        data: new Date() 
    };
    
    database.feedbacks.push(novoFeedback);
    
    console.log('Novo Feedback recebido:', novoFeedback);
    res.status(201).json({ 
        message: 'Mensagem de feedback enviada com sucesso! Agradecemos o seu contato.'
    });
});


// 5. Inicia o Servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor Back-end Node.js (Express) rodando em http://localhost:${PORT}`);
    console.log(`Pronto para receber dados dos formulários!`);
});