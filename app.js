// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function asignarAmigoALista() {

    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML ='';

    for(let amigo of amigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }

}

function agregarAmigo() {
    
    inputNombre = document.querySelector("#amigo");
    nombreAmigo = inputNombre.value;

    if (!nombreAmigo) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombreAmigo);
    inputNombre.value = '';

    asignarAmigoALista();

}



