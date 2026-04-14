// BOTÃO TEMA
const botaoTema = document.getElementById("temaBtn");
botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        botaoTema.textContent = "☀️";
    } else {
        botaoTema.textContent = "🌙";
    }
});
// Parte responsavel por deixar o ano altomatico no rodapé
const ano = document.getElementById("ano");
if (ano) {
    ano.textContent = new Date().getFullYear();
}