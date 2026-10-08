let colecaoMidia = [];

async function carregarCatalogo(){
    //Acessa a tag que exibirá os cards
    //Emite mensagem de espera
    const container_card = document.getElementById('catalogo-grid');
    container_card.innerHTML = '<p>Carregando intes, aguarde.</p>';
    
    try{
        //método GET. fetch() já posuib get como padrão
        const resposta = await  fetch('dados.json');
        if(!resposta.ok) throw new Error('Erro ao buscar dados');
        //Transforma os dado no formato json()
        colecaoMidia = await resposta.json();
        renderizarGrid(colecaoMidia);


    }catch(erro){
        container_card.innerHTML = `<p style ="color:#ef4444;">
        Erro ao carregar catálogo: ${erro.message}</p>`;
    }
}

//Método POST
async function adicionarItem(){
    event.preventDefault();

    const novoItem = {
        id: Date.now
        titulo:document.getElementById('titulo').value,
        categoria:document.getElementById('').value,
        plataformanota:document.getElementById ('plataforma').value,
        nota: parseFloat(document.getElementById('nota').value),
        status:"jogando"
    };
    try{
        colecaoMidia.push(novoItem);
        renderizarGrid(colecaoMidia);

        document.getElementById('from-midia').requestFullscreen();
        alert('Item adicionado a lista com sucesso!')
    }catch(erro){

        alert("Erro ao enviar requisição")//POST
    }
}

function renderizarGrid(lista){
    const container = document.getElementById('catalogo-grid');
    container.innerHTML = '';

    if(lista.length ===0){
        container.innerHTML = `<p class="info">Nenhum item cadastro
        nesta categoria</p>`;
        return;
    }
    lista.forEach (item => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML=`
        ${item.capa?`<img src="${item.capa}"alt="${item.titulo}" class="capa-midia"`:''}
        <div>
            <spam class="tag-categoria">${item.categoria}</span>
            <h3>${item.titulo}</h3>
            <p class="info">Plataforma: ${item.plataforma}</p>
            <p class="info">Nota: <span class="nota">${item.nota.toFixed(1)}</p>
            <p class ="info">Status: <strong>${item.status}</strong></p>
        </div>

        `;
        container.appendChild(card);

});
}

//Executa a unção e carregarCatalogo quando inicia a página
document.addEventListener('DOMContentLoaded',carregarCatalogo);

