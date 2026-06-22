/* ==========================================================================
   SEÇÃO: CONFIGURAÇÃO DO MENU MOBILE (SCRIPT)
   ========================================================================== */

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => this.handleClick());
    }

    init(){
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);

mobileNavbar.init();

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

//& -----------  ENVIAR FORMS
function enviarFormulario() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha Nome, E-mail e Mensagem antes de enviar.");
        return;
    }

    const btn = document.querySelector(".submit-btn");
    btn.textContent = "Enviando...";
    btn.disabled = true;

    setTimeout(() => {
        btn.textContent = "Enviar mensagem";
        btn.disabled = false;
        document.getElementById("success-msg").style.display = "block";

        document.getElementById("nome").value = "";
        document.getElementById("sobrenome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefone").value = "";
        document.getElementById("assunto").selectedIndex = 0;
        document.getElementById("mensagem").value = "";
    }, 1200);
}
