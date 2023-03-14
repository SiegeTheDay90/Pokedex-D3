import {getPokemon, graphPokemon} from './scripts/util';


window.addEventListener("DOMContentLoaded", async () =>{
    await getAndRender(25);
    const form = document.getElementbyId("numberForm")
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const num = document.getElementById("number").value
        getAndRender(num)
    })
    // document.getElementById("portrait").style.border = "1px solid red"
})

async function getAndRender(num){
    num = parseInt(num)
    const pokemon = await getPokemon(num)
    console.log(pokemon)
    graphPokemon(pokemon)
    document.getElementById("title").innerText = pokemon.name
    document.getElementById("portrait").src = pokemon.image
    document.getElementById("portrait").style.width = 200
}

async function fetchValue() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/25", {})
    const data = await response.json()

    return data.name
}


