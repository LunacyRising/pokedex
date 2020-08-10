import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import { previousPokemonsPage} from "../../actions/fetchPokemons";
import previousIcon from "../../utils/images/previousIcon.svg";



const Previous = () => {

    const useStyles = makeStyles(() => ({
        button: {
             position:"absolute",
             left: -100,
             backgroundImage: `url(${previousIcon})`,
             width: 50,
             height: 50,
             "@media(min-width: 320px) and (max-width: 1919px)": {
                display: "none"
              }
            },
        hidden: {
            display: "none"
        }      
       }));
       const classes = useStyles();

       const { button, hidden } = classes;

       const previous = useSelector(store => store.pokemonsReducer.previous)
       
       const dispatch = useDispatch()

    return(
        <>  
            <IconButton className={!previous ? hidden : button}onClick={() => dispatch(previousPokemonsPage())}/>
        </>
    )

}

export default Previous