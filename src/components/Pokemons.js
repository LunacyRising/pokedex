import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles"; 
import { Box } from "@material-ui/core"; 
import PokemonCard from "./PokemonCard";

const Pokemon = () => {

    const useStyles = makeStyles(() => ({
        container: {
            flexWrap: "wrap",
            padding: 20,
            "@media (min-device-width : 768px)": {
                display: "flex"
            },
            "@media (min-device-width : 1800px)": {
                flexWrap: "noWrap",
            }
         }      
       }));

    const classes = useStyles();

    const { container } = classes;
    
    const { pokemons } = useSelector(state => state.pokemonsReducer)
     
    return (
        <>  
            <Box className={container}>
                {pokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id} id={pokemon.id} badgeNumber={pokemon.order} pokemonName={pokemon.name} sprite={pokemon.sprites["front_shiny"]} types={pokemon.types} height={pokemon.height} weight={pokemon.weight} abilitiesNames={pokemon.abilitiesNames}/>
                ))} 
            </Box>
        </>
    )
}


export default Pokemon