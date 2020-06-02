import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { fetchPokemons } from "../actions/fetchPokemons";
import Pokemons from "./Pokemons";
import PokePagination from "./PokePagination";

const Home = () => {

    const { pokemons } = useSelector(state => state.pokemonsReducer)

    const useStyles = makeStyles(() => ({

      wrapper: {
           marginTop: "15vh",
           position:"relative",
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
           flexDirection: "column",
            "@media(min-width: 320px) and (max-width: 1024px)": {
              marginTop: "5vh"
          }
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
            <Pokemons pokemons={pokemons}/>
            <PokePagination/> 
          </Container>
               
        </>
    )

}


export default Home