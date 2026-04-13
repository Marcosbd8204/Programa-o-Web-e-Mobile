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