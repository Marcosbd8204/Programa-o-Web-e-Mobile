// SERVIDOR SIMPLES - Apenas para demonstração didática
// Este código NUNCA é enviado ao navegador!

const express = require('express');
const app = express();

// Permite receber dados do formulário
app.use(express.urlencoded({ extended: true }));

// ===================================================
// AQUI ESTÁ O CÓDIGO QUE O CLIENTE NUNCA VÊ!
// ===================================================

// Senha secreta (cliente NUNCA vê isso!)
const SENHA_CORRETA = 'admin123';

// Dados secretos (cliente NUNCA vê isso!)
const DADOS_SECRETOS = {
    saldo: 1000000,
    senha_banco: 'super-secreta',
    informacao_confidencial: 'Isso nunca aparece no navegador!'
};

// ===================================================

// Rota que processa o login
app.post('/login', (req, res) => {
    const senhaDigitada = req.body.senha;
    
    // VALIDAÇÃO ACONTECE AQUI NO SERVIDOR!
    // Cliente NUNCA vê este código!
    if (senhaDigitada === SENHA_CORRETA) {
        res.send(`
            <html>
            <head>
                <title>Login Sucesso</title>
                <style>
                    body { font-family: Arial; max-width: 500px; margin: 50px auto; padding: 20px; }
                    .sucesso { background: #d4edda; padding: 20px; border-radius: 5px; border-left: 4px solid #28a745; }
                </style>
            </head>
            <body>
                <div class="sucesso">
                    <h2>✅ Login realizado com sucesso!</h2>
                    <p><strong>Bem-vindo ao sistema!</strong></p>
                    <p>Saldo: R$ ${DADOS_SECRETOS.saldo.toLocaleString('pt-BR')}</p>
                    <p>${DADOS_SECRETOS.informacao_confidencial}</p>
                    <hr>
                    <p><em>⚠️ Estes dados vieram do servidor!</em></p>
                    <p><em>Pressione F12 → Sources e veja: NÃO TEM a senha no código!</em></p>
                </div>
                <br>
                <a href="/">← Voltar</a>
            </body>
            </html>
        `);
    } else {
        res.send(`
            <html>
            <head>
                <title>Login Falhou</title>
                <style>
                    body { font-family: Arial; max-width: 500px; margin: 50px auto; padding: 20px; }
                    .erro { background: #f8d7da; padding: 20px; border-radius: 5px; border-left: 4px solid #dc3545; }
                </style>
            </head>
            <body>
                <div class="erro">
                    <h2>❌ Senha incorreta!</h2>
                    <p>Tente novamente.</p>
                </div>
                <br>
                <a href="/">← Voltar</a>
            </body>
            </html>
        `);
    }
});

// Rota principal - mostra o formulário
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Login Seguro - Servidor</title>
            <style>
                body {
                    font-family: Arial;
                    max-width: 500px;
                    margin: 50px auto;
                    padding: 20px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }
                .container {
                    background: white;
                    padding: 40px;
                    border-radius: 10px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                }
                .aviso {
                    background: #d4edda;
                    border-left: 4px solid #28a745;
                    padding: 15px;
                    margin-bottom: 20px;
                    border-radius: 5px;
                }
                h1 { color: #28a745; text-align: center; }
                input {
                    width: 100%;
                    padding: 12px;
                    margin: 10px 0;
                    border: 2px solid #ddd;
                    border-radius: 5px;
                    font-size: 16px;
                }
                button {
                    width: 100%;
                    padding: 15px;
                    background: #28a745;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                }
                button:hover { background: #218838; }
                .dica {
                    background: #fff3cd;
                    padding: 15px;
                    margin-top: 20px;
                    border-radius: 5px;
                    border-left: 4px solid #ffc107;
                    font-size: 14px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="aviso">
                    <strong>✅ SEGURO:</strong> Este formulário NÃO tem JavaScript!<br>
                    Toda validação acontece no SERVIDOR.
                </div>
                
                <h1>🔒 Login Seguro</h1>
                <p style="text-align: center; color: #666; margin-bottom: 30px;">
                    Validação no Servidor
                </p>
                
                <form method="POST" action="/login">
                    <label><strong>Digite a senha:</strong></label>
                    <input type="password" name="senha" placeholder="admin123" required>
                    <button type="submit">Entrar</button>
                </form>
                
                <div class="dica">
                    <strong>🔍 Teste a segurança:</strong><br>
                    1. Pressione <code>F12</code> → Aba "Sources"<br>
                    2. Veja o código desta página<br>
                    3. <strong>NÃO TEM</strong> a senha no código!<br>
                    4. <strong>NÃO TEM</strong> validação JavaScript!<br>
                    5. Tudo está protegido no servidor!<br><br>
                    <strong>Senha de teste:</strong> admin123
                </div>
            </div>
        </body>
        </html>
    `);
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log('');
    console.log('==============================================');
    console.log('✅ SERVIDOR SEGURO RODANDO!');
    console.log('==============================================');
    console.log('');
    console.log(`📝 Acesse: http://localhost:${PORT}`);
    console.log(`🔒 Senha de teste: admin123`);
    console.log('');
    console.log('🔐 SEGURANÇA:');
    console.log('   - Senha está PROTEGIDA no servidor');
    console.log('   - Cliente NÃO recebe código JavaScript');
    console.log('   - Validação acontece APENAS no servidor');
    console.log('   - Pressione F12 no navegador e veja!');
    console.log('');
    console.log('==============================================');
});