import React from "react"
import { useSelector, useDispatch } from "react-redux";
import Pagination from "react-js-pagination";
import { makeStyles } from "@material-ui/core/styles";
import { fetchPokemons } from "../actions/fetchPokemons";
import pokemon from "../../src/utils/images/pokemon.svg"; 
import pokeOpen2 from "../../src/utils/images/pokeOpen2.png";

const PokePagination = () => {

    const dispatch = useDispatch();

    const { maxPokemons, activePage, pokemonsPerPage } = useSelector(state => state.pokemonsReducer);
    
    const useStyles = makeStyles((theme) => ({ 

        paginate: {
            display:"flex",
            listStyle:"none",
            "@media(min-width: 320px) and (max-width: 768px)": {
               marginRight: 38,
               position: "absolute",
               bottom: -40
            },
            "@media(min-width: 481px) and (max-width: 768px)": {
                bottom: -60
             },
        },
        pageItem: {
            position:"relative",
            marginRight: 15,
            cursor: "pointer",
            color: "white",
            backgroundImage: `url(${pokemon})`,
            width: 48,
            height: 48,
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            borderRadius: "50%",
            transition: "0.2s ease-in-out",
            boxShadow: "0 8px 6px -6px black",
            "&:hover": {
                transform: "translateY(-5px)",
              },
              "@media(min-width: 320px) and (max-width: 480px)": {
                width: 30,
                height: 30,
                marginRight: 3
              },
              "@media(min-width: 480px) and (max-width: 768px)": {
                width: 40,
                height: 40,
                marginRight: 5
              }
        },
        pageLink: {
            color: "black",
            fontWeight: 800,
            fontSize: 12,
            width: 14,
            height: 14,
            display:"flex",
            marginRight: 2,
            justifyContent:"center",
            alignItems:"center",
            borderRadius: "50%",
            backgroundColor: "white",
            textDecoration: "none",
            "@media(max-width: 320px)": {
                width: 12,
                height: 12,
                marginRight: 5,
                color: "black"
              },
        },
        active: {
            backgroundImage: `url(${pokeOpen2})`,
            width: 48,
            height: 48,
            "@media(min-width: 320px) and (max-width: 480px)": {
                width: 30,
                height: 30
            },
        },
        activeLink: {
            boxShadow: "0 0 4px 2px #fff, 0 0 5px 4px #bd4040"
        },
        first: {
            marginRight: 30,
            "@media(min-width: 320px) and (max-width: 480px)": {
                marginRight: 2
             },
        },
        last: {
            marginLeft: 20,
            "@media(min-width: 320px) and (max-width: 480px)": {
                marginLeft: 2
             },
        }
       }));
       const classes = useStyles();
       const { paginate, pageItem, pageLink, active, activeLink, first, last } = classes;

       const handlePageChange = (pageNumber) => { 
            dispatch(fetchPokemons(pageNumber -1))
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

    return(
            <Pagination
            activePage={!activePage ?  1 : activePage + 1}
            itemsCountPerPage={pokemonsPerPage}
            totalItemsCount={maxPokemons && maxPokemons}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
            innerClass={paginate}
            itemClass={pageItem}
            linkClass={pageLink}
            activeClass={active}
            activeLinkClass={activeLink}
            itemClassFirst={first}
            itemClassLast={last}
            hideDisabled={true}
            firstPageText="F"
            lastPageText="L"
            />
    )
}

export default PokePagination