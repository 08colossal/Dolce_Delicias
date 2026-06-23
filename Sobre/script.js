

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

/* CARROSSEL */
const carrossel = document.querySelector('.linha-tempo-carrossel');
let estaClicado = false;
let localInicioX;
let rolagemEsquerda;

carrossel.addEventListener('mousedown', (e) => {
  estaClicado = true;
  carrossel.style.cursor = 'grabbing';
  localInicioX = e.pageX - carrossel.offsetLeft;
  rolagemEsquerda = carrossel.scrollLeft;
});

carrossel.addEventListener('mouseleave', () => {
  estaClicado = false;
  carrossel.style.cursor = 'grab';
});

carrossel.addEventListener('mouseup', () => {
  estaClicado = false;
  carrossel.style.cursor = 'grab';
});

carrossel.addEventListener('mousemove', (e) => {
  if (!estaClicado) return;
  e.preventDefault();
  const x = e.pageX - carrossel.offsetLeft;
  const andar = (x - localInicioX) * 2; // Multiplica por 2 para velocidade do arraste
  carrossel.scrollLeft = rolagemEsquerda - andar;
});
