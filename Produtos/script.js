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
  sul: {
    bloco: document.getElementById('secao-sul'),
    grid: document.getElementById('container-sul')
  },
  colegio: {
    bloco: document.getElementById('secao-3'),
    grid: document.getElementById('container-3')
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
        const ingredientesTexto = produto.ingredientes.join(', ');

        card.innerHTML = `
          <img src="${produto.imagem}" alt="${produto.nome}" class="produto-img">
          <div class="produto-info">
            <h3>${produto.nome}</h3>
            <p class="ingredientes"><strong>Ingredientes:</strong> ${ingredientesTexto}</p>
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
      <button class="btn-fechar-tag" data-filtro="${filtro}">✕</button>
      <span>${formatarNomeFiltro(filtro)}</span>
    `;

    tagsContainer.appendChild(tag);
  });

  document.querySelectorAll('.btn-fechar-tag').forEach(botao => {
    botao.removeEventListener('click', gerenciarRemocaoTag); 
    botao.addEventListener('click', gerenciarRemocaoTag);
  });
}

function gerenciarRemocaoTag(e) {
  const filtroParaRemover = e.target.getAttribute('data-filtro');
  filtrosAtivos = filtrosAtivos.filter(item => item !== filtroParaRemover);
  renderizarTags();
  filtrarEProjetarProdutos();
}

function formatarNomeFiltro(nome) {
  if (nome === 'bpk') return 'Biopark';
  if (nome === 'sul') return 'Zona Sul';
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