import React  from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Radar } from "react-chartjs-2";
import { Card, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const ChartStats =  ({ setFlip, pokemonId })  => {
  
  const { pokemon } = useSelector(state => state.pokemonsReducer);

  const { darkMode } = useSelector(state => state.darkModeReducer);

  const dispatch = useDispatch();

  const {t} = useTranslation(); 

    const exactPokemon = pokemon.filter(poke =>{
      return poke.id === pokemonId
    })
    
 
    const useStyles = makeStyles((theme) => ({
      card: {
          position:"relative",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
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
            minHeight: 410,
            minWidth: 225,
            padding: 0
        },
          "@media(max-width: 481px) and (max-height: 768px)": {
            padding: 0
        },
      },
      btn: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        width: "50%",
        "&:hover": {
          backgroundColor: "#9597a6",
        },
      }
  }));
  const classes = useStyles();
  const { card, btn } = classes;

    let Numbers =  exactPokemon.length > 0 && exactPokemon[0].stats.map(nr =>{
      return nr.base_stat
    })

    let statsLabelArray = exactPokemon.length > 0 &&  exactPokemon[0].stats
    let pokeStatsName = statsLabelArray && statsLabelArray.map(stat => {
        return stat.stat.name
    })
    
    const state = {
    labels: pokeStatsName,
        datasets: [
          {
            label: "Stats",
            borderColor: "#bd4040",
            backgroundColor : "rgba(189, 64, 64, 0.2)",
            borderWidth: 1, 
            pointStyle: "star",
            data: Numbers
          }
        ] 
      }

    return(
        <>
          <Card className={card}>
            <Radar
               data={state}
               width={50}
               height={50}
               options={{
                 title:{
                   display:true,
                   text: exactPokemon.length > 0 && exactPokemon[0].name,
                   fontFamily: "pokemon",
                   padding: 10,
                   fontSize: 25,
                   fontColor: "#bfbbbb",
                   position: "top"
                  },
                  layout: {
                    padding: {
                        //left: 50,
                        //right: 0,
                        //top: 20,
                        //bottom: 0
                    }
                  }
                }
              }
            />
            <Button className={btn} onClick={() => setFlip(false)}>{t("Back")}</Button>
            </Card>
        </>
    )
}

export default ChartStats