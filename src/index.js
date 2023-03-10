import {getPokemon, graphPokemon} from './scripts/util';


window.addEventListener("DOMContentLoaded", async () =>{
    const pokemon = getPokemon(25)
    graphPokemon(pokemon)
})

async function fetchValue() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/25", {})
    const data = await response.json()

    return data.name
}



async function printValue() {
    return await fetchValue()
}

fetchValue().then((data) => console.log(data))

// console.log(await fetchValue())
