let filtrosAtivos = []; 

const tagsContainer = document.getElementById('tags-container');
const btnFiltrosGatilho = document.getElementById('btn-filtros-gatilho');
const dropdownConteudo = document.getElementById('dropdown-conteudo');
const botoesOpcoes = document.querySelectorAll('.opcao-filtro');

const secoes = {
  bpk: {
    bloco: document.getElementById('secao-bpk'),
    grid: document.getElementById('container-bpk')
  },
  "cantina-bpk": {
    bloco: document.getElementById('secao-cantina'),
    grid: document.getElementById('container-cantina')
  },
  encomendas: {
    bloco: document.getElementById('secao-encomendas'),
    grid: document.getElementById('container-encomendas')
  }
};

function filtrarEProjetarProdutos() {
  Object.keys(secoes).forEach(chave => {
    if (secoes[chave].grid) secoes[chave].grid.innerHTML = "";
    if (secoes[chave].bloco) secoes[chave].bloco.style.display = "none"; 
  });

  const produtosFiltrados = produtos.filter(produto => {
    if (filtrosAtivos.length === 0) return true;
    return produto.categorias.some(cat => filtrosAtivos.includes(cat));
  });

  produtosFiltrados.forEach(produto => {
    produto.unidades.forEach(unidade => {
      if (secoes[unidade]) {
        if (secoes[unidade].bloco) secoes[unidade].bloco.style.display = "block";

        const card = document.createElement('div');
        card.classList.add('card-produto');
        const ingredientesTexto = produto.ingredientes || "";

        card.innerHTML = `
          <img src="${produto.imagem}" alt="${produto.nome}" class="produto-img">
          <div class="produto-info">
            <h3>${produto.nome}</h3>
            <p class="ingredientes">${ingredientesTexto}</p>
            <div class="preco-tag">R$ ${produto.preco.toFixed(2).replace('.', ',')}</div>
          </div>
        `;

        if (secoes[unidade].grid) secoes[unidade].grid.appendChild(card);
      }
    });
  });
}

function renderizarTags() {
  tagsContainer.innerHTML = "";

  filtrosAtivos.forEach(filtro => {
    const tag = document.createElement('div');
    tag.classList.add('tag-filtro');
    tag.innerHTML = `
      <span class="btn-fechar-tag" data-filtro="${filtro}">🗙
        ${formatarNomeFiltro(filtro)}
      </span>
    `;
    tagsContainer.appendChild(tag);
  });

  document.querySelectorAll('.btn-fechar-tag').forEach(botao => {
    botao.removeEventListener('click', gerenciarRemocaoTag);
    botao.addEventListener('click', gerenciarRemocaoTag);
  });
}

function gerenciarRemocaoTag(e) {
  e.stopPropagation();
  const elementoTag = e.target.closest('.btn-fechar-tag');
  if (!elementoTag) return;
  
  const filtroParaRemover = elementoTag.getAttribute('data-filtro');
  filtrosAtivos = filtrosAtivos.filter(item => item !== filtroParaRemover);
  renderizarTags();
  filtrarEProjetarProdutos();
}

function formatarNomeFiltro(nome) {
  if (nome === 'bpk') return 'Cardápio Geral';
  if (nome === 'cantina-bpk') return 'Cantina Biopark';
  if (nome === 'encomendas') return 'Encomendas';
  if (nome === 'assados') return 'Salgados';

  return nome.charAt(0).toUpperCase() + nome.slice(1).replace('-', ' ');
}

btnFiltrosGatilho.addEventListener('click', (e) => {
  e.stopPropagation(); 
  dropdownConteudo.classList.toggle('mostrar');
});

document.addEventListener('click', () => {
  dropdownConteudo.classList.remove('mostrar');
});

botoesOpcoes.forEach(botao => {
  botao.addEventListener('click', (e) => {
    const valorFiltro = e.target.getAttribute('data-valor');

    if (!filtrosAtivos.includes(valorFiltro)) {
      filtrosAtivos.push(valorFiltro);
      renderizarTags();
      filtrarEProjetarProdutos();
    }
    
    dropdownConteudo.classList.remove('mostrar');
  });
});

renderizarTags();
filtrarEProjetarProdutos();

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