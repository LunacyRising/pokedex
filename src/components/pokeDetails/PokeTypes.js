import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import { Box, IconButton } from "@material-ui/core";
//icons
import orbz_fire from "../../utils/icons/orbz_fire.ico";
import orbz_water from "../../utils/icons/orbz_water.ico";
import orbz_nature from "../../utils/icons/orbz_nature.ico";
import orbz_spirit from "../../utils/icons/orbz_spirit.ico";
import orbz_air from "../../utils/icons/orbz_air.ico";
import orbz_earth from "../../utils/icons/orbz_earth.ico";
import orbz_lightning from "../../utils/icons/orbz_lightning.ico";
import orbz_ice from "../../utils/icons/orbz_ice.ico";
import orbz_machine from "../../utils/icons/orbz_machine.ico";
import orbz_moon from "../../utils/icons/orbz_moon.ico";
import orbz_death from "../../utils/icons/orbz_death.ico";

  const PokeTypes = ({ types }) => {

    const useStyles = makeStyles(() => ({
       
        btnsContainer: {
            display: "flex"
        },
        btn: {
            width: 48,
            height: 48,
            transition: "0.3s ease-in-out",
            border: "1px solid transparent",
            "&:hover": {
                border: `1px solid currentColor`
            }
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
        steel: {
            color: "#aaa9ad"
        },
        psychic: {
            color: "#FF1493"
        },
        noType: {
            color: "#959996"
        }
      }));
      
    const classes = useStyles();

    const { btnsContainer, btn, fire, water, flying, insect, electric, poison, grass, ground, bug, steel, psychic, noType } = classes;

    const { t } = useTranslation();

    return (
        <>    
            <Box className={btnsContainer}>
                {types.map((type,index) => {
                    let icon;
                    let color;
                    let word;
                    switch (type.type.name) {
                        case "fire":
                            icon = orbz_fire; 
                            color = fire;
                            break;
                        case "water":
                            icon = orbz_water;
                            color = water;
                            break;
                        case "ice":
                            icon = orbz_ice; 
                            color = water;
                            break;
                        case "insect":
                            icon = orbz_fire; 
                            color = insect;
                            break;
                        case "electric":
                            icon = orbz_lightning; 
                            color = electric;
                            break;
                        case "poison":
                            icon = orbz_spirit; 
                            color = poison;
                            break;
                        case "grass":
                            icon = orbz_nature; 
                            color = grass;
                            break;
                        case "ground":
                            icon = orbz_earth; 
                            color = ground;
                            break;
                        case "bug":
                            icon = orbz_death; 
                            color = bug;
                            break;
                        case "flying":
                            icon = orbz_air; 
                            color = flying;
                            break;
                        case "air":
                            icon = orbz_air; 
                            color = flying;
                            break;
                        case "steel":
                            icon = orbz_machine;
                            color = steel;
                            break;
                        case "psychic":
                            icon = orbz_moon;
                            color = psychic; 
                            break;   
                        default:
                        color = noType;
                        word = t("Unknown")
                    }
                return <IconButton key={index} className={`${btn} ${color}`}>
                            <img src={icon} width={48} height={48}></img>
                        </IconButton>    
                })}
            </Box>
        </>
    )
}

export default PokeTypes