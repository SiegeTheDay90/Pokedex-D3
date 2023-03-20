import {getAndRender, restoreGraph} from './scripts/graph';
import {selectedPokemon} from './scripts/form';

window.addEventListener("DOMContentLoaded", async () =>{
    await restoreGraph();
    getAndRender('150')
    const submit = document.getElementById('submit')
    const searchBy = document.getElementById('search-by')

    searchBy.addEventListener('change', (e) => {
        const number = document.getElementById('number')
        const name = document.getElementById('name')

        number.classList.toggle('hidden')
        name.classList.toggle('hidden')
    })


    portrait.addEventListener('load', (e) => {
        e.target.classList.remove("loading");
    })


    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const pkmn = selectedPokemon();
        getAndRender(pkmn);
    })

    window.addEventListener('resize', (e) => {
        restoreGraph();
    })

})




