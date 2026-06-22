
/* ==========================================================================
   SEÇÃO: CONFIGURAÇÃO DO DARK MODE (SCRIPT)
========================================================================== */
const botao = document.getElementById("theme-toggle");
const icon = document.querySelector(".icon");

botao.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    icon.classList.add("animate");

    if(document.body.classList.contains("light-theme")){
        icon.textContent = "☀️";
    }
    else{
        icon.textContent = "🌙";
    }
    setTimeout(() => {
        icon.classList.remove("animate");
    },700);
});