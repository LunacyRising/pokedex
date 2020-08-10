import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import { nextPokemonsPage } from "../../actions/fetchPokemons";
import nextIcon from "../../utils/images/nextIcon.svg";
 
const Next = () => {

    const useStyles = makeStyles((theme) => ({
        button: {
             position:"absolute",
             right: -50,
             backgroundImage: `url(${nextIcon})`,
             width: 50,
             height: 50,
             "@media(min-width: 320px) and (max-width: 1919px)": {
              display: "none"
            },
          },
         hidden: {
            display: "none"
        },          
       }));
       const classes = useStyles();
       const { button, hidden } = classes;


       const next = useSelector(store => store.pokemonsReducer.next)

       const dispatch = useDispatch()

        const nextPage = () => {
          dispatch(nextPokemonsPage())
          window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
      }

    return(
        <>  
            <IconButton className={ !next ? hidden : button} onClick={() => nextPage()}/>
        </>
    )

}

export default Next