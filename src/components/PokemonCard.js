import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactCardFlip from "react-card-flip";
import { fetchSinglePokemon } from "../actions/pokemonsActions/fetchSinglePokemon";
import { useSelector,useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, Button, Badge, Box } from "@material-ui/core";
import pokeball from "../utils/images/pokeball.png";
import ChartStats from "./chart/ChartStats";
import PokeTypes from "./pokeDetails/PokeTypes";
import PokeBodySpecs from "./pokeDetails/PokeBodySpecs";
import PokeAbilities from "./pokeDetails/PokeAbilities";


const PokemonCard = ({index, pokemonName, sprite, types, height, weight, abilities}) => {

    const {isLoading, pokemon, abilitiesDescriptions, abilityDescriptionLoading, maxPokemons} = useSelector(state => state.pokemonsReducer);

    const dispatch = useDispatch()

    const [flip, setFlip] = useState(false);

    const {t} = useTranslation(); 

    const getStats = (pokemonId) => {
         //pokemon existe
        const pokeExists = pokemon.filter(poke => {
            return poke.id === pokemonId
         })
        if(!pokeExists.length > 0) dispatch(fetchSinglePokemon({pokemonId}));
        setFlip(true)
    }

    const useStyles = makeStyles(() => ({
        card: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
            marginBottom: 20,
            marginRight: 50,
            minWidth: 250, 
            minHeight: 495,
            padding: 10,
            boxShadow: "0 0 1px rgba(0, 0, 0, 0.1)",
            '&::after': {
            content: `''`,
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: 0,
            pointerEvents: "none",
            boxShadow: "0px 0px 0px 3px #bd4040",
            transition: "0.3s ease-in-out",   
            },
            "&:hover, &::after": {
                boxShadow: "0px 0px 0px 3px #bd4040",
                opacity: 1,
            },
              "@media(max-width: 320px) and (max-height: 480px)": {
                height: 410,
                minWidth: 225,
                padding: 0,
                marginBottom: 15,
            },
            "@media(max-width: 481px) and (max-height: 768px)": {
                padding: 0,
            },
        },
        name: {
            fontFamily: "Pokemon",
            letterSpacing: 4,
            marginTop: 20,
            "@media(max-width: 320px) and (max-height: 480px)": {
                marginTop: 0,
                fontSize: 16
            },
        },
        avatar: {
            width: "125px",
            height: "125px",
            "@media(max-width: 320px) and (max-height: 480px)": {
                width: 110,
                height: 110,
            },
        },
        badge: {
            position: "absolute",
            top: 18,
            left: 18,
            color: "white"
        },
        stats: {
            marginTop: 20,
            marginBottom: 20,
            fontSize: "12px",
            "@media(max-width: 320px) and (max-height: 480px)": {
                marginTop: 20,
                marginBottom: 0,
            },
        },
        test: {
            transformStyle: "preserve-3d"
        }
      }));
      const classes = useStyles();
      const {name, avatar, card, badge, stats, test } = classes;

    return (
        <>  
            <ReactCardFlip isFlipped={flip} flipDirection={"horizontal"}>
                <Card className={card}>
                    {isLoading  ? <img className="rotating" src={pokeball} alt="pokeball"></img> : 
                    <>
                        <Badge  className={badge} color="primary" badgeContent={index} max={maxPokemons} />
                        <Typography className={name} variant="h5">{pokemonName}</Typography>
                        <Box>
                            <img className={avatar} src={sprite ? sprite : pokeball } alt="pokemon"/>
                        </Box>
                        <PokeTypes types={types}/>
                        <PokeBodySpecs height={height} weight={weight} />
                        <PokeAbilities abilities={abilities} abilitiesDescriptions={abilitiesDescriptions} abilityDescriptionLoading={abilityDescriptionLoading}/>  
                        <Button onClick={() => getStats(index)} className={stats} variant="contained" color="primary">{t("Check Stats")}</Button>
                    </>}
                </Card>
                <ChartStats setFlip={setFlip} pokemonId={index}/> 
            </ReactCardFlip>
        </>
    )
}


export default PokemonCard