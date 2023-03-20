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