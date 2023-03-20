import Pokedex from 'pokedex-promise-v2';


async function getList(){
    const _ = new Pokedex();

    const list = await _.getPokemonsList()

    const processedList = list.results.map((el) => el.name)

    console.log(processedList)
    debugger

}

export default getList