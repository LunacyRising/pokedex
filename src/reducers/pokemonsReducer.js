import {
    POKEMONS_LOADING,
    FETCH_POKEMONS_SUCCESS,
    FETCH_POKEMONS_FAIL,
    FETCH_NEXT_PAGE_SUCCESS,
    FETCH_PREVIOUS_PAGE_SUCCESS,
    DESCRIPTION_LOADING,
    FETCH_POKEMONS_ABILITIES_SUCCESS,
    POKEMON_LOADING,
    FETCH_POKEMON_SUCCESS,
    FETCH_POKEMON_FAIL
  } from "../actions/types";
  
  const initialState = {
    isLoading: false,
    pokemons: [],
    pokemon: [],
    activePage: 1,
    pokemonsPerPage: 5,
    abilityDescriptionLoading: false, 
    pokemonLoading: false,
    next: null,
    previous: null,
    translatedAbilities: [],
    abilitiesDescriptions: []
  };
  
  const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) { 
      case POKEMONS_LOADING:
        return {
          ...state,
          isLoading: true
        };
      case POKEMON_LOADING:
        return {
          ...state,
          pokemonLoading: true
        };
      case DESCRIPTION_LOADING:
        return {
          ...state,
          abilityDescriptionLoading: true
        };
      case FETCH_POKEMONS_SUCCESS:
        return {
          ...state,
          ...action.payload,
          isLoading: false,
        };
      case FETCH_POKEMONS_ABILITIES_SUCCESS:
        return {
          ...state,
          translatedAbilities: [...state.translatedAbilities, ...action.payload.translatedAbilities],
        }
      case FETCH_POKEMON_SUCCESS:
        return {
          ...state,
          pokemon: [...state.pokemon, action.payload],
          pokemonLoading: false,
        };
      case FETCH_NEXT_PAGE_SUCCESS:
        return {
          ...state,
          ...action.payload,
          isLoading: false
        };
      case FETCH_PREVIOUS_PAGE_SUCCESS:
        return {
          ...state,
          ...action.payload,
          isLoading: false
        };
      case FETCH_POKEMONS_ABILITIES_SUCCESS:
      return {
        ...state,
        abilitiesDescriptions: [...state.abilitiesDescriptions, action.payload],
        abilityDescriptionLoading: false
      }
      case FETCH_POKEMONS_FAIL:
        return {
          ...state,
          isLoading: false,
        };
      default:
        return state;
    }
  };
  
  export default pokemonsReducer;
  