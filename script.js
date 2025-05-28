document.addEventListener('DOMContentLoaded', function() {
    const btnSaibaMais = document.querySelector('.btn-saiba-mais');

    if (btnSaibaMais) {
        btnSaibaMais.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link (se for '#')
            // Aqui você pode adicionar a lógica para onde o botão "Saiba Mais" deve levar.
            // Exemplo:
            // window.location.href = 'sobre_nos.html'; // Redireciona para uma página 'quem somos'
            // Ou:
            // document.getElementById('secao-informacoes-detalhadas').scrollIntoView({ behavior: 'smooth' });
            console.log('Botão "Saiba Mais" clicado!');
            alert('Saiba Mais em breve!'); // Apenas um alerta para testar
        });
    }

    // Se você tiver um menu dropdown para o botão "Entrar", aqui seria o JS para ele:
    const btnEntrar = document.querySelector('.btn-entrar');
    if (btnEntrar) {
        btnEntrar.addEventListener('click', function(event) {
            // Este é apenas um exemplo. Você pode querer um menu dropdown real aqui.
            // Por enquanto, ele apenas redireciona diretamente como antes.
            window.location.href = 'login.html'; // Redireciona para a página de escolha de login
            event.preventDefault(); // Impede o comportamento padrão do link
        });
    }
});


//FEEDBACK JAVA SCRIPT
// ... (seu código JavaScript existente para a página inicial e outros) ...

// --- Validação do Formulário de Feedback ---
const formFeedback = document.getElementById('form-feedback');
if (formFeedback) {
    formFeedback.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email-feedback').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
        const feedbackMsg = document.getElementById('feedback-mensagem');
        const erroFeedback = document.getElementById('erro-feedback');

        erroFeedback.style.display = 'none'; // Esconde mensagens de erro anteriores
        feedbackMsg.style.display = 'none'; // Esconde mensagens de sucesso anteriores

        if (!nome || !email || !mensagem) {
            erroFeedback.textContent = 'Por favor, preencha todos os campos.';
            erroFeedback.style.display = 'block';
            return;
        }

        // Validação de e-mail simples usando expressão regular
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            erroFeedback.textContent = 'Por favor, insira um endereço de e-mail válido.';
            erroFeedback.style.display = 'block';
            return;
        }

        // Se tudo estiver OK, simula o envio
        console.log('Feedback enviado:', { nome, email, mensagem });
        feedbackMsg.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
        feedbackMsg.style.display = 'block';
        formFeedback.reset(); // Limpa o formulário
    });
}

// ... (resto do seu código JavaScript existente) ...


// ... (seu código JavaScript existente) ...

// ===========================================
// FUNCIONALIDADES DA PÁGINA DE ESCOLHA DE LOGIN (login.html)
// ===========================================
document.addEventListener('DOMContentLoaded', function() {
    const cardAluno = document.getElementById('card-aluno');
    const cardProfessor = document.getElementById('card-professor');
    const cardProfissional = document.getElementById('card-profissional'); // Novo cartão

    if (cardAluno && cardProfessor && cardProfissional) { // Garante que estamos na página correta
        cardAluno.addEventListener('click', function() {
            window.location.href = 'login_aluno.html';
        });

        cardProfessor.addEventListener('click', function() {
            window.location.href = 'login_professor.html';
        });

        cardProfissional.addEventListener('click', function() {
            window.location.href = 'login_profissional.html'; // Nova página de login para profissionais
        });
    }
});

// ... (resto do seu código JavaScript existente) ...




// ... (seu código JavaScript existente) ...

// ===========================================
// FUNCIONALIDADES DAS PÁGINAS DE CADASTRO
// ===========================================
document.addEventListener('DOMContentLoaded', function() {
    // --- Validação do Formulário de Cadastro (Aluno) ---
    const formCadastroAluno = document.getElementById('form-cadastro-aluno');
    if (formCadastroAluno) {
        formCadastroAluno.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome-aluno').value.trim();
            const email = document.getElementById('email-aluno-cadastro').value.trim();
            const senha = document.getElementById('senha-aluno-cadastro').value.trim();
            const confirmarSenha = document.getElementById('confirmar-senha-aluno').value.trim();
            const dataNascimento = document.getElementById('data-nascimento-aluno').value;
            const condicaoNeuro = document.getElementById('condicao-aluno').value; // Novo campo

            const feedbackMsg = document.getElementById('feedback-cadastro-aluno');
            const erroMsg = document.getElementById('erro-cadastro-aluno');

            feedbackMsg.style.display = 'none';
            erroMsg.style.display = 'none';

            if (!nome || !email || !senha || !confirmarSenha || !dataNascimento) {
                erroMsg.textContent = 'Por favor, preencha todos os campos obrigatórios.';
                erroMsg.style.display = 'block';
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                erroMsg.textContent = 'Por favor, insira um endereço de e-mail válido.';
                erroMsg.style.display = 'block';
                return;
            }

            if (senha.length < 6) {
                erroMsg.textContent = 'A senha deve ter pelo menos 6 caracteres.';
                erroMsg.style.display = 'block';
                return;
            }

            if (senha !== confirmarSenha) {
                erroMsg.textContent = 'As senhas não coincidem.';
                erroMsg.style.display = 'block';
                return;
            }

            // Simulação de cadastro
            console.log('Cadastro de Aluno enviado:', { nome, email, dataNascimento, condicaoNeuro });
            feedbackMsg.textContent = 'Cadastro de Aluno realizado com sucesso! Você será redirecionado para o login.';
            feedbackMsg.style.display = 'block';
            formCadastroAluno.reset();
            setTimeout(() => {
                window.location.href = 'login_aluno.html'; // Redireciona para o login do aluno
            }, 2000); // Redireciona após 2 segundos
        });
    }

    // --- Validação do Formulário de Cadastro (Professor) ---
    const formCadastroProfessor = document.getElementById('form-cadastro-professor');
    if (formCadastroProfessor) {
        formCadastroProfessor.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome-professor').value.trim();
            const email = document.getElementById('email-professor-cadastro').value.trim();
            const senha = document.getElementById('senha-professor-cadastro').value.trim();
            const confirmarSenha = document.getElementById('confirmar-senha-professor').value.trim();
            const escola = document.getElementById('escola-professor').value.trim(); // Novo campo
            const areaAtuacao = document.getElementById('area-atuacao-professor').value.trim(); // Novo campo

            const feedbackMsg = document.getElementById('feedback-cadastro-professor');
            const erroMsg = document.getElementById('erro-cadastro-professor');

            feedbackMsg.style.display = 'none';
            erroMsg.style.display = 'none';

            if (!nome || !email || !senha || !confirmarSenha || !escola) {
                erroMsg.textContent = 'Por favor, preencha todos os campos obrigatórios.';
                erroMsg.style.display = 'block';
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                erroMsg.textContent = 'Por favor, insira um endereço de e-mail válido.';
                erroMsg.style.display = 'block';
                return;
            }

            if (senha.length < 6) {
                erroMsg.textContent = 'A senha deve ter pelo menos 6 caracteres.';
                erroMsg.style.display = 'block';
                return;
            }

            if (senha !== confirmarSenha) {
                erroMsg.textContent = 'As senhas não coincidem.';
                erroMsg.style.display = 'block';
                return;
            }

            // Simulação de cadastro
            console.log('Cadastro de Professor enviado:', { nome, email, escola, areaAtuacao });
            feedbackMsg.textContent = 'Cadastro de Professor realizado com sucesso! Você será redirecionado para o login.';
            feedbackMsg.style.display = 'block';
            formCadastroProfessor.reset();
            setTimeout(() => {
                window.location.href = 'login_professor.html'; // Redireciona para o login do professor
            }, 2000);
        });
    }

    // --- Validação do Formulário de Cadastro (Profissional) ---
    const formCadastroProfissional = document.getElementById('form-cadastro-profissional');
    if (formCadastroProfissional) {
        formCadastroProfissional.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome-profissional').value.trim();
            const email = document.getElementById('email-profissional-cadastro').value.trim();
            const senha = document.getElementById('senha-profissional-cadastro').value.trim();
            const confirmarSenha = document.getElementById('confirmar-senha-profissional').value.trim();
            const profissao = document.getElementById('profissao-profissional').value.trim(); // Novo campo
            const conselho = document.getElementById('conselho-profissional').value.trim(); // Novo campo
            const estadoAtuacao = document.getElementById('estado-atuacao-profissional').value.trim(); // Novo campo

            const feedbackMsg = document.getElementById('feedback-cadastro-profissional');
            const erroMsg = document.getElementById('erro-cadastro-profissional');

            feedbackMsg.style.display = 'none';
            erroMsg.style.display = 'none';

            if (!nome || !email || !senha || !confirmarSenha || !profissao || !conselho) {
                erroMsg.textContent = 'Por favor, preencha todos os campos obrigatórios.';
                erroMsg.style.display = 'block';
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                erroMsg.textContent = 'Por favor, insira um endereço de e-mail válido.';
                erroMsg.style.display = 'block';
                return;
            }

            if (senha.length < 6) {
                erroMsg.textContent = 'A senha deve ter pelo menos 6 caracteres.';
                erroMsg.style.display = 'block';
                return;
            }

            if (senha !== confirmarSenha) {
                erroMsg.textContent = 'As senhas não coincidem.';
                erroMsg.style.display = 'block';
                return;
            }

            // Simulação de cadastro
            console.log('Cadastro de Profissional enviado:', { nome, email, profissao, conselho, estadoAtuacao });
            feedbackMsg.textContent = 'Cadastro de Profissional realizado com sucesso! Você será redirecionado para o login.';
            feedbackMsg.style.display = 'block';
            formCadastroProfissional.reset();
            setTimeout(() => {
                window.location.href = 'login_profissional.html'; // Redireciona para o login do profissional
            }, 2000);
        });
    }
});

// ... (resto do seu código JavaScript existente) ...


// ... (seu código JavaScript existente) ...

// ===========================================
// FUNCIONALIDADES DA PÁGINA INICIAL (index.html)
// ===========================================
document.addEventListener('DOMContentLoaded', function() {
    // ... (outros códigos para os botões "Sou Aluno", "Sou Professor", etc.) ...

    const btnSaibaMais = document.querySelector('.btn-saiba-mais');
    if (btnSaibaMais) {
        btnSaibaMais.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link (se for '#')
            // Redireciona para a nova página "O que Oferecemos"
            window.location.href = 'o_que_oferecemos.html';
            console.log('Botão "Saiba Mais" clicado na Home! Redirecionando para as soluções.');
        });
    }

    // ... (resto do seu código JavaScript para a página inicial) ...
});

// ... (resto do seu código JavaScript para feedback, login, cadastro, etc.) ...