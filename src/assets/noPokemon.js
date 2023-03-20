const noPokemon = () => ({
    "stats": {
        attack: 10,
        defense: 10,
        hp: 10,
        "special-attack": 10,
        "special-defense": 10,
        speed: 10
    },
    id: null,
    image: "./src/assets/noPokemon"+Math.ceil(Math.random()*3)+".png",
    name: "Not Found",
    types: [['psychic', 'electric', 'grass', 'fire'][Math.floor(Math.random()*4)]]
})

export default noPokemon