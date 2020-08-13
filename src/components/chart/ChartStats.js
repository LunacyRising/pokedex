import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Radar } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Button } from "@material-ui/core";

const ChartStats =  ({ setFlip, pokemonId })  => {

  const useStyles = makeStyles((theme) => ({

    card: {
        position:"relative",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: 20,
        minHeight: 495,
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
        }
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

  const { pokemons } = useSelector(state => state.pokemonsReducer);

  const { t } = useTranslation(); 

  const exactPokemon = pokemons.filter(poke =>{
      return poke.id === pokemonId
  })

  const Numbers = exactPokemon[0].stats.map(nr =>{
    return nr.base_stat
  })

  const statsLabelArray = exactPokemon[0].stats
  const pokeStatsName = statsLabelArray.map(stat => {
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
              width={75}
              height={75}
              options={{
                title:{
                  display:true,
                  text: exactPokemon[0].name,
                  fontFamily: "pokemon",
                  padding: 10,
                  fontSize: 25,
                  fontColor: "#bfbbbb",
                  position: "top"
                },
              }
            }
          />
          <Button className={btn} onClick={() => setFlip(false)}>{t("Back")}</Button>
          </Card>
      </>
    )
}

export default ChartStats