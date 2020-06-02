import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";


  const PokeTypes = ({ types }) => {

    const {t} = useTranslation(); 

    const useStyles = makeStyles(() => ({
       
        element: {
        "@media(max-width: 320px) and (max-height: 480px)": {
            marginTop: 0,
            fontSize: 16
        },
        },
        fire: {
            color: "#ff1b00"
        },
        water: {
            color: "#0068ff"
        },
        flying: {
            color: "#78D5CC"
        },
        insect: {
            color: "#445b4a"
        },
        bug: {
            color: "#9EF3B8"
        },
        electric: {
            color: "#ffbd00"
        },
        poison: {
            color: "#b53a77"
        },
        grass: {
            color: "#3acb60"
        },
        ground: {
            color: "#A86D32"
        },
        noType: {
            color: "#959996"
        }
      }));
      
      const classes = useStyles();
      const { element, fire, water, flying, insect, electric, poison, grass, ground, bug, noType } = classes;

    return (
        <>  
            <Box className={element}>
                {types.map((type,index) => {
                    let color;
                    let word;
                    switch (type.type.name) {
                        case "fire":
                            color = fire;
                            word = t("Fire")
                            break;
                        case "water":
                            color = water;
                            word = t("Water")
                            break;
                        case "insect":
                            color = insect;
                            word = t("Insect")
                            break;
                        case "electric":
                            color = electric;
                            word = t("Electric")
                            break;
                        case "poison":
                            color = poison;
                            word = t("Poison")
                            break;
                        case "grass":
                            color = grass;
                            word = t("Grass")
                            break;
                        case "ground":
                            color = ground;
                            word = t("Ground")
                            break;
                        case "bug":
                            color = bug;
                            word = t("Bug")
                            break;
                        case "flying":
                            color = flying;
                            word = t("Flying")
                            break;
                        default:
                        color = noType;
                        word = t("Unknown")
                    }
                    return <Typography key={index} className={color} variant="body1">{`${t("Type")}: ${word}`}</Typography>
                })}
            </Box>
        </>
    )
}

export default PokeTypes