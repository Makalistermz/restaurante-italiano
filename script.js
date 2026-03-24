let entradas = document.querySelector('#entrada');
let pastas = document.querySelector('#pasta');
let pizzas = document.querySelector('#pizza');
let sobremesas = document.querySelector('#sobremesa');

let cardapio = document.querySelectorAll('.cardapio');

    pizzas.style.display = 'none';
    pastas.style.display = 'none';
    sobremesas.style.display = 'none';

function entrada() {
    pizzas.style.display = 'none';
    pastas.style.display = 'none';
    sobremesas.style.display = 'none';

    entradas.style.display = 'flex';

    for (let i = 0; i < cardapio.length; i++) {
        cardapio[i].style.backgroundImage = '';
    }

    cardapio[0].style.backgroundImage = 'linear-gradient(rgba(189,105,105,0.6), rgba(189, 105, 105, 0.6)), url("img/background-red.png")';
}

function pizza() {
    entradas.style.display = 'none';
    pastas.style.display = 'none';
    sobremesas.style.display = 'none';

    pizzas.style.display = 'flex';

    for (let i = 0; i < cardapio.length; i++) {
    cardapio[i].style.backgroundImage = '';
    }

    cardapio[1].style.backgroundImage = 'linear-gradient(rgba(189,105,105,0.6), rgba(189, 105, 105, 0.6)), url("img/background-red.png")';
}

function massa() {
    pizzas.style.display = 'none';
    entradas.style.display = 'none';
    sobremesas.style.display = 'none';

    pastas.style.display = 'flex';

    for (let i = 0; i < cardapio.length; i++) {
    cardapio[i].style.backgroundImage = '';
    }

    cardapio[2].style.backgroundImage = 'linear-gradient(rgba(189,105,105,0.6), rgba(189, 105, 105, 0.6)), url("img/background-red.png")';
}

function sobremesa() {
    entradas.style.display = 'none';
    pastas.style.display = 'none';
    pizzas.style.display = 'none';

    sobremesas.style.display = 'flex';

    for (let i = 0; i < cardapio.length; i++) {
    cardapio[i].style.backgroundImage = '';
    }

    cardapio[3].style.backgroundImage = 'linear-gradient(rgba(189,105,105,0.6), rgba(189, 105, 105, 0.6)), url("img/background-red.png")';
}