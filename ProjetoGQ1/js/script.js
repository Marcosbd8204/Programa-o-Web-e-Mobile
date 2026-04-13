const botaoTema = document.getElementById("temaBtn");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Troca o ícone
    if (document.body.classList.contains("dark")) {
        botaoTema.textContent = "☀️ Claro";
    } else {
        botaoTema.textContent = "🌙 Escuro";
    }
});

// ANO AUTOMÁTICO
const ano = document.getElementById("ano");
const anoAtual = new Date().getFullYear();

ano.textContent = `© ${anoAtual}`;  