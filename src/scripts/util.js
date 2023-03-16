import * as d3 from 'd3';
import Pokedex from 'pokedex-promise-v2';

const _ = new Pokedex();

const colors = {};'['
colors["normal"] = "#A8A77A";
colors["fire"] = "#EE8130";
colors["water"] = "#6390F0";
colors["electric"] = "#F7D02C";
colors["grass"] = "#7AC74C";
colors["ice"] = "#96D9D6";
colors["fighting"] = "#C22E28";
colors["poison"] = "#A33EA1";
colors["ground"] = "#E2BF65";
colors["flying"] = "#A98FF3";
colors["psychic"] = "#F95587";
colors["bug"] = "#A6B91A";
colors["rock"] = "#B6A136";
colors["ghost"] = "#735797";
colors["dragon"] = "#6F35FC";
colors["dark"] = "#705746";
colors["steel"] = "#B7B7CE";
colors["fairy"] = "#D685AD";



export async function getPokemon(id){
    const pokemon = await _.getPokemonByName(id)
    console.log(pokemon)
    return processPokemon(pokemon)
}

export function processPokemon(pokemon){
    const processedPokemon = {}
    const stats = {}
    
    pokemon.stats.forEach((stat) => {
        stats[stat.stat.name] = stat.base_stat
    })
    
    processedPokemon["stats"] = stats
    processedPokemon["name"] = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    processedPokemon["types"] = pokemon.types.map((type) => type.type.name)
    processedPokemon["image"] = pokemon.sprites.other["official-artwork"].front_default || "./src/assets/default.png"
    
    localStorage.setItem("currentPokemon", JSON.stringify(processedPokemon))
    return processedPokemon
}

export function graphPokemon(processedPokemon){
    const stats = Object.entries(processedPokemon.stats);
    stats[0][0] = "HP";
    stats[1][0] = "Atk";
    stats[2][0] = "Def";
    stats[3][0] = "Sp. Atk";
    stats[4][0] = "Sp. Def";
    stats[5][0] = "Spd";
    console.log(stats)
    const svg = d3.select("svg");
    svg.selectChildren().remove();
    const width = svg.property("width").baseVal.value;
    const height = svg.property("height").baseVal.value;
    svg.append("text").text("Base Stats")
        .attr("color", "#000000")
        .attr("font-size", "24px").attr("font-weight", "bold")
        .attr("x", width/2.5).attr("y", "28px")
    const xOffset = 28;
    const yOffset = 8*height/10;
    const scaledHeight = 0.7*height
    const xScale = d3.scaleBand().range([0, 0.9*width]).padding(0.15);
    const yScale = d3.scaleLinear().range([0, scaledHeight]);
    const g = svg.append("g");
    // const title = svg.append("text").attr("transform", "translate(40, 0)").text(processedPokemon.name);
    xScale.domain(["HP", "Atk", "Def", "Sp. Atk", "Sp. Def", "Spd"]);
    yScale.domain([260, 0]);
    g.append("g").call(d3.axisBottom(xScale)).attr("font-size", "14px").attr("transform", "translate("+xOffset+","+yOffset+")")
        
    
    g.append("g").call(d3.axisLeft(yScale)).attr("transform", "translate("+xOffset+","+(yOffset-scaledHeight)+")");
    
    // debugger
    g.selectAll(".bar")
        .data(stats)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", (d) => xScale(d[0]) + xOffset)
        .attr("y", yOffset)
        .attr("width", xScale.bandwidth())
        .transition().ease(d3.easeLinear).duration((d) => 10*d[1])
        .attr("y", (d) => yScale(d[1]) + yOffset - scaledHeight)
        .attr("height", (d) => scaledHeight - yScale(d[1]));
    
    document.querySelectorAll(".bar").forEach((bar) => bar.style.fill = colors[processedPokemon.types[0]])    
}

export async function getAndRender(num){
    num = parseInt(num);
    const pokemon = await getPokemon(num);
    console.log(pokemon);
    graphPokemon(pokemon);
    document.getElementById("title").innerText = pokemon.name;
    const portait = document.getElementById("portrait");
    const loadingGif = document.getElementById("loading");
    portrait.classList.add("loading");
    portrait.src = pokemon.image;
    document.getElementById("portrait").style.width = "35%";
}


export function restoreGraph(){
    const processedPokemon = JSON.parse(localStorage.getItem("currentPokemon"))
    graphPokemon(processedPokemon)
}