import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { fetchPokemons } from "../actions/pokemonsActions/fetchPokemons";
import Pokemons from "./Pokemons";
import PokePagination from "./PokePagination";

const Home = () => {

    const useStyles = makeStyles(() => ({

      wrapper: {
           position:"relative",
           display: "flex",
           flexDirection: "column",
           width: "90%",
           margin: "10vh auto"
        }      
      }));

      const classes = useStyles();
      
      const { wrapper } = classes;
    
    useEffect(() => {
        dispatch(fetchPokemons());
    }, []); 

    const dispatch = useDispatch()

    return(
        <>  
          <Container className={wrapper}>
            <PokePagination/> 
            <Pokemons/>
            <PokePagination/> 
          </Container>
               
        </>
    )

}


export default Home