// import Pokedex from 'pokedex-promise-v2';


async function getList(){
    const Pokedex = await import('pokedex-promise-v2');
    // const _ = new Pokedex();
    // const list = await _.getPokemonsList();

    // const fs = require('fs')

    // const processedList = Object.entries(list).map((el) => el[1])

    // fs.writeFile('pokeList.txt', processedList, err => {
    // if (err) {
    //     console.error(err)
    //     return
    // }
    // })
}

getList();