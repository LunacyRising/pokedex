import React,{ useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSinglePokemon } from "../actions/pokemonsActions/fetchSinglePokemon";
import ChartStats from "./chart/ChartStats";

const SinglePokemon = ({ match }) => {
    
    const pokemonId = match.params.pokemonId
    
    const dispatch = useDispatch()
    console.log(match)

    const {  pokemonLoading } = useSelector(state => state.pokemonsReducer);

    useEffect(() => {
        dispatch(fetchSinglePokemon({pokemonId}));
    }, []); 

    return(
        <>
            {pokemonLoading ? " loading ...." : <ChartStats/>}
        </>
    )

}


export default SinglePokemon