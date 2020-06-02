import axios from "axios";
import { FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAIL, POKEMON_LOADING } from "../types";

export const fetchSinglePokemon = ({pokemonId}) => async (dispatch) => {

    dispatch({ type: POKEMON_LOADING});
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        const response = res.data;
        dispatch({
            type: FETCH_POKEMON_SUCCESS,
            payload: response
        })
    } catch (error) {
        console.log(error)
    }
};