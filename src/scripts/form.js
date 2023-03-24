import pokemonList from "../assets/pokemonList"

export function selectedPokemon(){
    const num = document.getElementById("number")
    const name = document.getElementById("name")
    const searchBy = document.getElementById("search-by")
    switch(searchBy.value){
        case "name":
            return name.value
        case "id":
            return num.value
        default:
            return 'missingno'
    }
}

export function autoComplete(string){
    const holder = [];

    for(const pokemon of pokemonList){
        if(pokemon[1].toLowerCase().includes(string.toLowerCase())){
            holder.push(pokemon)
        }
    }

    return holder
}

export function renderList(pokemonArray){
    const list = document.getElementById("auto-complete-name");
    list.innerHTML = "";
    for(const pokemon of pokemonArray){
        const item = document.createElement('li');
        item.innerText = pokemon[1];
        list.appendChild(item);
    }
    
    list.style.display = "block";
}

export function clearList(){
    const list = document.getElementById("auto-complete-name");
    list.innerHTML = "";
    list.style.display = "none";
}