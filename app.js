function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
let campoPesquisa = document.getElementById("campo-pesquisa").value
if (campoPesquisa == "") {
return
}
campoPesquisa = campoPesquisa.toLowerCase() 
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    let imagem = "";
    for (let dado of dados) {
        titulo = dado.Titulo.toLocaleLowerCase()
        descricao = dado.Descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
            <img src="${dado.imagem}" alt="imagem do resultado" class="imagem-resultado">
                     <h2>${dado.Titulo}</h2>
                     <p class="descricao-meta">${dado.Descricao}</p>
                     <a href="${dado.Link}" target="_blank">Continue vendo no chess.com</a>
                    </div>
            `;
            } 
    }

    if (!resultados) {
        resultados = ""
        titulo = ""
        descricao = ""
        tags = ""
    }

    section.innerHTML = resultados  
}