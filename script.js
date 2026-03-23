let entradas = document.querySelector('#entrada');
let pastas = document.querySelector('#pasta');
let pizzas = document.querySelector('#pizza');
let sobremesas = document.querySelector('#sobremesa');

let cardapio = document.querySelectorAll('.cardapio');

function entrada() {
    pizzas.style.display = 'none';
    pastas.style.display = 'none';
    sobremesas.style.display = 'none';

    entradas.style.display = 'flex';

    cardapio.style = 'background-image linear-gradient(rgba(189,105,105,0.6), rgba(189, 105, 105, 0.6)), url("img/background-red.png")';
}

function pizza() {
    entradas.style.display = 'none';
    pastas.style.display = 'none';
    sobremesas.style.display = 'none';

    pizzas.style.display = 'flex';
}

function massa() {
    pizzas.style.display = 'none';
    entradas.style.display = 'none';
    sobremesas.style.display = 'none';

    pastas.style.display = 'flex';
}

function sobremesa() {
    entradas.style.display = 'none';
    pastas.style.display = 'none';
    pizzas.style.display = 'none';

    sobremesas.style.display = 'flex';
}