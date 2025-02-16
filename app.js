// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];




function agregarAmigo() {
    inputNombre = document.querySelector("#amigo");
    nombreAmigo = inputNombre.value;

    if (!nombreAmigo) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombreAmigo);
    inputNombre.value = '';

}