import axios from "axios";
import { FETCH_POKEMONS_SUCCESS, FETCH_POKEMONS_FAIL, POKEMONS_LOADING,FETCH_NEXT_PAGE_SUCCESS,FETCH_PREVIOUS_PAGE_SUCCESS,FETCH_POKEMONS_ABILITIES_SUCCESS,DESCRIPTION_LOADING } from "./types";



export const fetchPokemons = (pageNumber) => async (dispatch, getState) => {
    dispatch({ type: POKEMONS_LOADING });

    let {pokemonsPerPage} = getState().pokemonsReducer;
  
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?/getPage?&limit=${pokemonsPerPage}&offset=${pokemonsPerPage * pageNumber}`); 
    
    const response = res.data.results;
    
    console.log(res.data)   
    try {
            let test = []
            test = response.map(async pokemon => {
                return await axios.get(pokemon.url)
            })
            Promise.all(test)
            .then(values => {
                let arr = [];
                arr = values.map(value => {
                    return value.data
                })
                dispatch({
                type: FETCH_POKEMONS_SUCCESS,
                payload:{
                    pokemons: arr,  
                    next: res.data.next,
                    previous: res.data.previous,
                    results: res.data.results,
                    maxPokemons: res.data.count,
                    activePage: pageNumber
                    }
                })
            })
        }catch(err){
        console.log(err)
    }
}

export const nextPokemonsPage = () => async (dispatch, getState) => {

    const {next} = getState().pokemonsReducer
    dispatch({ type: POKEMONS_LOADING });

    const res = await axios.get(next)
    const response = res.data.results;

    try {
        let test = []
        test = response.map(async pokemon => {
            return await axios.get(pokemon.url)
        })
        Promise.all(test)
        .then(values => {
            let arr = [];
            arr = values.map(value => {
                return value.data
            })
            dispatch({
            type: FETCH_POKEMONS_SUCCESS,
            payload:{
                pokemons: arr, 
                next: res.data.next,
                previous: res.data.previous,
                results: res.data.results
                }
            })
        })
        } catch (error) {
        console.log(error)
    }
};

export const previousPokemonsPage = () => async (dispatch, getState) => {

    const {previous} = getState().pokemonsReducer

    dispatch({ type: POKEMONS_LOADING });

    const res = await axios.get(previous)
    const response = res.data.results;
    try {
            let test = []
            test = response.map(async pokemon => {
                return await axios.get(pokemon.url)
            })
            Promise.all(test)
            .then(values => {
                let arr = [];
                arr = values.map(value => {
                    return value.data
                })
                dispatch({
                type: FETCH_POKEMONS_SUCCESS,
                payload:{
                    pokemons: arr, 
                    next: res.data.next,
                    previous: res.data.previous,
                    results: res.data.results
                    }
                })
            })
        }catch (error) {
        console.log(error)
    }
}

export const getPokemonsAbilitiesDescription = ({abilityName}) => async (dispatch) => {

    dispatch({ type: DESCRIPTION_LOADING });
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/ability/${abilityName}/`)
        console.log(res)
        dispatch({
            type: FETCH_POKEMONS_ABILITIES_SUCCESS,
            payload: {
                name: res.data.name,
                languages : res.data.flavor_text_entries,
                id: res.data.id
            }
        })
    } catch (error) {
        console.log(error)
    }
}