import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "react-js-pagination";
import { fetchPokemons } from "../actions/fetchPokemons";
import pokemon from "../../src/utils/images/pokemon.svg"; 
import pokeOpen3 from "../../src/utils/images/pokeOpen3.svg";

const PokePagination = () => {

    const dispatch = useDispatch();

    const { maxPokemons, activePage, pokemonsPerPage } = useSelector(state => state.pokemonsReducer);
    
    const useStyles = makeStyles(() => ({ 

        paginate: {
            display: "flex",
            alignSelf: "center",
            paddingLeft: 0
        },
        pageItem: {
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            width: 30,
            height: 30,
            marginRight: 3,
            backgroundImage: `url(${pokemon})`,
            borderRadius: "50%",
            transition: "0.2s ease-in-out",
            boxShadow: "0 8px 6px -6px black",
            cursor: "pointer",
            "&:hover": {
                transform: "translateY(-5px)",
            },
            "@media (min-device-width : 768px)": {
                width: 50,
                height: 50,
            }
        },
        pageLink: {
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            width: 12,
            height: 12,
            marginRight: 3,
            backgroundColor: "white",
            color: "black",
            fontWeight: 800,
            fontSize: 12,
            borderRadius: "50%",
            textDecoration: "none",
            transition: "0.1s ease-in",
            "&:hover": {
                width: 13,
                height: 13,
            },
            "@media (min-device-width : 768px)": {
                width: 18,
                height: 18,
                marginRight: 3,
                marginLeft: 2,
                fontSize: 15,
                "&:hover": {
                    width: 20,
                    height: 20,
                    marginRight: 4,
                },
            }
        },
        active: {
            backgroundImage: `url(${pokeOpen3})`,
            width: 30,
            height: 30,
            "@media (min-device-width : 768px)": {
                width: 50,
                height: 50,
            }
        },
        activeLink: {
            margin: "auto",
            boxShadow: "0 0 4px 2px #fff, 0 0 5px 4px #bd4040"
        }
       }));
       const classes = useStyles();

       const { paginate, pageItem, pageLink, active, activeLink } = classes;

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
            hideDisabled={true}
            firstPageText="F"
            lastPageText="L"
            />
    )
}

export default PokePagination