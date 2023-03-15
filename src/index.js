import {getPokemon, graphPokemon} from './scripts/util';


window.addEventListener("DOMContentLoaded", async () =>{
    localStorage.setItem("PD3_firstLoad", "true")
    await getAndRender(321);
    const form = document.getElementById("numberForm")
    const num = document.getElementById("number")
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(num.value)
        getAndRender(num.value)
    })
})

async function getAndRender(num){
    num = parseInt(num)
    const pokemon = await getPokemon(num)
    console.log(pokemon)
    graphPokemon(pokemon)
    document.getElementById("title").innerText = pokemon.name
    document.getElementById("portrait").src = pokemon.image
    document.getElementById("portrait").style.width = "35%"
}

async function fetchValue() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/25", {})
    const data = await response.json()

    return data.name
}


