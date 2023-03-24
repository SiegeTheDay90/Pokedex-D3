import {getAndRender, restoreGraph} from './scripts/graph';
import {selectedPokemon, autoComplete, renderList, clearList} from './scripts/form';

window.addEventListener("DOMContentLoaded", async () =>{
    await restoreGraph();
    getAndRender('150')
    let autoCompleteDebounce;
    const submit = document.getElementById('submit')
    const searchBy = document.getElementById('search-by')
    const name = document.getElementById('name')
    const autoList = document.getElementById('auto-complete-name')

    searchBy.addEventListener('change', (e) => {
        const number = document.getElementById('number')
        const name = document.getElementById('name')

        number.classList.toggle('hidden')
        name.classList.toggle('hidden')
    })

    autoList.addEventListener('click', (e) => {
        const pkmn = e.target.innerText;
        name.value = pkmn;
        getAndRender(pkmn);
        clearList();
    })

    portrait.addEventListener('load', (e) => {
        e.target.classList.remove("loading");
    })

    name.addEventListener('input', (e) => {
        clearTimeout(autoCompleteDebounce);
        autoCompleteDebounce = setTimeout(() => {
            const val = e.target.value

            if(val.length >= 3){
                var list = autoComplete(val);
            } else {
                clearList();
                return
            }

            if(0 < list.length && list.length <= 8){
                renderList(list);
            } else {
                clearList();
            }
        }, 250)
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




