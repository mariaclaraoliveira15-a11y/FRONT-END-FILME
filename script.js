let colecaoMidia = []

async function carregandoCatalogo() {
    //Acessa a tag que exibira os cards
    //Emite mensagem de espera
    const container_card = document.getElementById('catalogo-grid');
    container_card.innerHTML = "<p> Carregando intes, aguarde.</p>";

    try{
        //método GET. fetch() já possui get como padrão
        const resposta = await fetch('dados.json',);
        if(!resposta.ok) throw new Error('Erro ao buscar dados');
        //Transforma os dados no formato json()
        colecaoMidia = await resposta.json();
    }catch(erro){
        container_card.innerHTML = `<p style ="color:#ef4444;">
        Erro ao carregar catálogo: ${erro.message}</p>`;
    }
}
function renderizarGrid(){
    const container = document.getElementById('catalogo-grid');
    container.innerHTML = "";

    if(lista.length ===0){
        container.innerHTML = `<p class="info">Nenhum item cadastro nesta cate`
    }
        
}
//Executa a função de carregarCatalogo quando inicia a página
document.addEventListener('DOMContentLoaded',carregandoCatalogo);

