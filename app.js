//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
var listadeamigos = [];
var tamanhodalista = listadeamigos[listadeamigos.length-1];

//Criando função para o que vai acontecer quando clicar no botão adicionar 

function adicionarnalista(texto){
    listadeamigos.push(texto);
}
function adicionaramigo(){
    
    const exibir = document.getElementById("listaAmigos");
    const nome = document.getElementById("amigo").value.trim();

    if(nome !== ""){
        adicionarnalista(nome);

        const novoitem = document.createElement("li");
        novoitem.textContent = nome;
        exibir.appendChild(novoitem);

        document.getElementById("amigo").value = ""; //limpando campo de texto

    }else{
       alert("por favor, digite um nome válido!");
    }

}

//Criando função para o que vai acontecr quando clicar no botão para sortear

function sortearamigo(){
    if(listadeamigos.length == 0){
        alert("A lista está vazia. Adicionar amigos antes de sortear!");
        return;
    }

    const numsorteado = parseInt(Math.random()*listadeamigos.length);
    const ganhador = listadeamigos[numsorteado];

    document.getElementById("listaAmigos").innerHTML = ""; 

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    const itemResultado = document.createElement("li");
    itemResultado.textContent = `O amigo sorteado foi: ${ganhador}`;
    resultado.appendChild(itemResultado);

    listadeamigos = [];

}