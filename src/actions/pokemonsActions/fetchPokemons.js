import axios from "axios";
import { FETCH_POKEMONS_SUCCESS, POKEMONS_LOADING, FETCH_POKEMONS_ABILITIES_SUCCESS,DESCRIPTION_LOADING } from "../types";
import { fetchPokemonsAbilities } from "./fetchPokemonsAbilities";


export const fetchPokemons = (pageNumber) => async (dispatch, getState) => {

    dispatch({ type: POKEMONS_LOADING });

    let { pokemonsPerPage } = getState().pokemonsReducer;

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?/getPage?&limit=${pokemonsPerPage}&offset=${pokemonsPerPage * pageNumber}`);  
    
    const response = res.data.results;

    try {        
        const promisesArr = response.map(async pokemon => {
            return  await axios.get(pokemon.url)
        })
        const pokemonsData = await Promise.all(promisesArr);
        const pokemons = pokemonsData.map(pokemon => {
            const { id, name, order, sprites, abilities, height, weight, stats, types } = pokemon.data;
            const abilitiesNames = abilities.map(item =>{
                const { name, url } = item.ability;
                return { name, url }
            });
            return { id, name, order, sprites, abilitiesNames, height, weight, stats, types}
        })
        dispatch(fetchPokemonsAbilities(pokemons));
        dispatch({
            type: FETCH_POKEMONS_SUCCESS,
            payload:{
                pokemons, 
                next: res.data.next,
                previous: res.data.previous,
                results: res.data.results,
                maxPokemons: res.data.count,
                activePage: pageNumber
            }
        })
        }catch(err){
        console.log(err)
    }
}
