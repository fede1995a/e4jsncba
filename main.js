const form = document.getElementById('form');
const input = document.getElementById('input');
const boton = document.getElementById('boton');
const cards = document.getElementById('cards');


const miFetch = async(valor) => {
    try {
        // Aca adentro va a ir nuestro codigo a intentar si esta todo ok
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor}/`);

        const data = await response.json();
        //console.log(data)
        return data;

    } catch (error) {
        // Aca va a ir el codigo en caso de que haya un error
        alert(error);
    }
};

let obtenerAlturamts = (cm) => {
    return (Number(cm) / 10);
};

let obtenerPesokg = (g) => {
    return (Number(g) / 10);
};

const transformarMayuscula = (palabra) => {
    return palabra.toUpperCase();
}


let renderCards = (card) => {
    return `
  <h2 class='name'>${transformarMayuscula(card.name)}</h2>
  <span class='altura'>Altura: ${obtenerAlturamts(card.height)} metros</span>
  <span class='peso'>Peso: ${obtenerPesokg(card.weight)} kg</span>
  <img  class='img' src="${ card.sprites.front_default}" alt=""></img>
  <p class='tipos'>Tipos: ${typePokemon(card.types)}</p>
  `
}




let typePokemon = (array) => {
    const arrayNombres = array.map((elemento => elemento.type.name)).join(" , ");
    return arrayNombres;
}

const obtenerPokemon = async e => {
    e.preventDefault();

    let value = input.value.trim();

    const pokemon = await miFetch(value);

    console.log(pokemon);

    cards.innerHTML = renderCards(pokemon);
    cards.classList.add('arreglosCard');


};

init = () => {
    form.addEventListener('submit', obtenerPokemon);

};

init();