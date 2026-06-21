let cards = document.getElementById("cards"); //pega elemento do html

for(let i = 0; i < perguntas.length; i++){
    cards.innerHTML +=                      //iinerHTML --> escreve no html!!
        `<details>
            <summary> ${perguntas[i].pergunta} </summary>
            <hr>
            <p> ${perguntas[i].resposta} </p>
        </details>`;                        //details cria a lista dropdown :p
}


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