import axios from "axios";
import { FETCH_POKEMONS_ABILITIES_SUCCESS } from "../types";
import { removeDuplicates } from "../../helperFunctions/removeDuplicates";
import { removeDuplicates2 } from "../../helperFunctions/removeDuplicates";
import { itemExists } from "../../helperFunctions/itemExists";

export const fetchPokemonsAbilities = (pokemons) => async (dispatch, getState) => {


    const { translatedAbilities } = getState().pokemonsReducer;

    try {        
        const abilitiesPromises = [];
        pokemons.map(item =>{
            item.abilitiesNames.map(item => {
                if(!itemExists(translatedAbilities, item,"name")){
                    abilitiesPromises.push(axios.get(item.url))
                }
            })
        })

        const abilitiesData = await Promise.all(abilitiesPromises)

        const filteredResults = removeDuplicates(abilitiesData, "id");

        const abilities = filteredResults.map(ability => {
            const { flavor_text_entries, id, name, names } = ability.data;
            const abilitiesDescriptions = removeDuplicates2(flavor_text_entries, "flavor_text");
            return { id, name, names, abilitiesDescriptions }
        })

        dispatch({
            type: FETCH_POKEMONS_ABILITIES_SUCCESS,
            payload:{
                translatedAbilities: abilities,  
            }
        })
        }catch(err){
        console.log(err)
    }
}