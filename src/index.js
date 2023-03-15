import {graphPokemon, getAndRender, restoreGraph} from './scripts/util';


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
    window.addEventListener('resize', (e) => {
        restoreGraph();
    })
})




