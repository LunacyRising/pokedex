import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Tooltip, Box } from "@material-ui/core";
import Zoom from '@material-ui/core/Zoom';
import { matchingAbilitites } from "../../helperFunctions/matchingAbilitites";

const PokeAbilities = ({ abilitiesNames }) => {

    const useStyles = makeStyles(() => ({

        abilitiesContainer: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems:"center",
            marginTop: "35px",
            "@media(max-width: 320px) and (max-height: 480px)": {
                marginTop: 20
            },
        },
        singleAbilityContainer: {
            display:"flex",
            marginTop: 5
        },
        singleAbility: {
            textDecoration: "underline",
            fontWeight: "bold",
            cursor:"pointer",
            marginLeft: 5
        },
        spanTooltip: {
            fontSize: "12px"
        }, 
      }));

    const classes = useStyles();

    const { abilitiesContainer, singleAbilityContainer, singleAbility, spanTooltip } = classes;

    const { language } = useSelector(state => state.languageReducer);

    const { translatedAbilities } = useSelector(state => state.pokemonsReducer);


    const {t} = useTranslation(); 

    const matchAb = matchingAbilitites(translatedAbilities, abilitiesNames);

    const abilities = [];
    
    matchAb.map(item =>{
       const abilityName = item.names.filter(item => {
           return item.language.name === language
        })
        const abilityDescription = item.abilitiesDescriptions.filter(item => {
            return item.language.name === language 
        })
        abilities.push({abilityName, abilityDescription})
    })

    return (
        <>  
            <Box className={abilitiesContainer}>
                {abilities.map((ability, index) =>(
                    <Tooltip key={ability.abilityName[0].name} TransitionComponent={Zoom} title={<span className={spanTooltip}>{ability.abilityDescription[0].flavor_text}</span>}>
                        <Box className={singleAbilityContainer}>
                            <span>{t("Ability")}:</span>
                            <Typography className={singleAbility} variant="subtitle2">{ability.abilityName[0].name}</Typography>
                        </Box>
                    </Tooltip>
                ))}
            </Box>   
        </>
    )
}


export default PokeAbilities