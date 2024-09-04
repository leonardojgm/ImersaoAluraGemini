const botoesCurtir = document.querySelectorAll('.item-resultado button');
const resultadosPesquisa = document.getElementById('resultados-pesquisa');

botoesCurtir.forEach(botao => {
  botao.addEventListener('click', () => {
    const nomeAtleta = botao.parentElement.querySelector('a').textContent;
    console.log(`Você curtiu o perfil de: ${nomeAtleta}`);
  });
});

function pesquisar() {  
  const termoPesquisa = document.getElementById('campo-pesquisa').value;
  const resultadosFiltrados = dados.filter(item => {
    const termoMinusculo = termoPesquisa.toLowerCase();

    return item.titulo.toLowerCase().includes(termoMinusculo) ||
           item.descricao.toLowerCase().includes(termoMinusculo) ||
           item.categoria.toLowerCase().includes(termoMinusculo);
  });
  
  
  resultadosPesquisa.innerHTML = "";

  exibirItens(resultadosFiltrados);
}

function exibirItens(itens) {
  itens.forEach(item => {
    const itemResultado = document.createElement('div');
  
    itemResultado.innerHTML = `
      <div class="item-resultado">
        <img src="img/${item.foto}" class="foto" alt="Foto de ${item.titulo}" />
        <div class="info">
          <div class="info-meta">
            <div class="info-meta-titulo">
              <h2>
                <a href="#" target="_blank">${item.titulo}</a> 
              </h2>
              <h3>${item.categoria}</h3>
            </div>
            <button title="curtir">
              <i class="fa-solid fa-thumbs-up icon-button"></i>
            </button>
          </div>
          <p class="descricao-meta">${item.descricao}</p>
          <div class="links">
            <a href="${item.link}" target="_blank">
              <i class="fa-solid fa-book icon-link"></i>
            </a>` +
            (item.facebook ? `<a href="${item.facebook}" target="_blank">
              <i class="fa-brands fa-facebook icon-link"></i>
            </a>` : '') +
            `<a href="${item.instagram}" target="_blank">
              <i class="fa-brands fa-instagram icon-link"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  
    resultadosPesquisa.appendChild(itemResultado);
  });
}

exibirItens(dados);