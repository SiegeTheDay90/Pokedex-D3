import * as d3 from 'd3';
import Pokedex from 'pokedex-promise-v2';

const _ = new Pokedex();

export async function getPokemon(id){
    const pokemon = await _.getPokemonByName(id)
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
    processedPokemon["image"] = pokemon.sprites.front_default

    return processedPokemon
}

export function graphPokemon(processedPokemon){
    const stats = Object.entries(processedPokemon.stats);
    stats[0][0] = "HP";
    stats[1][0] = "Atk";
    stats[2][0] = "Sp. Atk";
    stats[3][0] = "Def";
    stats[4][0] = "Sp. Def";
    stats[5][0] = "Spd";
    const svg = d3.select("svg");
    const xScale = d3.scaleBand().range([0, 400]).padding(0.4);
    const yScale = d3.scaleLinear().range([0, 260]);
    const g = svg.append("g")
    const title = svg.append("g").attr("transform", "translate("+100+", 0)").text(processedPokemon.name)
    xScale.domain(["HP", "Atk", "Sp. Atk", "Def", "Sp. Def", "Spd"])
    yScale.domain([255, 0])
    g.append("g").call(d3.axisBottom(xScale)).attr("transform", "translate("+100+","+360+")")
    g.append("g").call(d3.axisLeft(yScale)).attr("transform", "translate("+100+","+100+")")
    g.selectAll(".bar")
        .data(stats)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return xScale(d[0]) + 100; })
        .attr("y", function(d) { return yScale(d[1]); })
        .attr("width", xScale.bandwidth())
        .attr("height", function(d) { return 360 - yScale(d[1]); });
}

export const d3example = (pokemon) => {
    // const svg = d3.select("#example"),
    //     margin = 200,
    //     width = svg.attr("width") - margin,
    //     height = svg.attr("height") - margin;

    // const xScale = d3.scaleBand().range([0, width]).padding(0.4),
    //     yScale = d3.scaleLinear().range([height, 0]);

    // const g = svg.append("g").attr("transform", "translate("+100+","+100+")");
    // const test = d3.csvParse("dummy.csv")
    // debugger;
    // d3.csv("dummy.csv", function(data, error) {
    //     if(error){
    //         throw error;
    //     }
    //     debugger

    //     xScale.domain([0, data.year]);
    //     yScale.domain([0, data.value]);

    //     g.append("g")
    //         .attr("transform", "translate(0,"+height+")")
    //         .call(d3.axisBottom(xScale));

    //     g.append("g")
    //         .call(d3.axisLeft(yScale).tickFormat(function(d){
    //             return "$"+d;
    //         }).ticks(10))
    //         .append("text")
    //         .attr("y", 6)
    //         .attr("dy", "0.71em")
    //         .attr("text-anchor", "end")
    //         .text("value");

    // })

    // debugger
}


