import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";  
import PokemonCard from "./PokemonCard";
import Next from "./buttons/Next";
import Previous from "./buttons/Previous"  

const Pokemon = ({ pokemons }) => {

    const useStyles = makeStyles(() => ({
        container: {
            position: "relative",
            display: "flex",
            alignItems:"center",
            justifyContent:"center",
            "@media (min-device-width : 320px) and (max-width: 1024px)": {
                flexDirection: "column",
                marginLeft: 50
            }
         }      
       }));
       const classes = useStyles();
       const { container } = classes;
     
    return (
        <>  
            <Box className={container}>
                <Previous/>
                {pokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id} index={pokemon.id} pokemonName={pokemon.name} sprite={pokemon.sprites["front_shiny"]} types={pokemon.types} height={pokemon.height} weight={pokemon.weight} abilities={pokemon.abilities}/>
                ))} 
                <Next/>
            </Box>
        </>
    )
}


export default Pokemon