import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Tooltip, Box } from "@material-ui/core";
import Zoom from '@material-ui/core/Zoom';
import { getPokemonsAbilitiesDescription } from "../../actions/fetchPokemons";
import dots from "../../utils/images/dots.svg";

const PokeAbilities = ({ abilities, abilitiesDescriptions, abilityDescriptionLoading }) => {

    const {language} = useSelector(state => state.languageReducer);

    const dispatch = useDispatch()

    const {t} = useTranslation(); 

    const getAbilityDescription = (abilityName) => {
        // habilidad existe
        const abilityExists = abilitiesDescriptions.filter( ability => {
            return ability.name === abilityName
        })
        if(!abilityExists.length > 0) dispatch(getPokemonsAbilitiesDescription({abilityName}));
    }
    
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

    return (
        <>  
            <Box className={abilitiesContainer}>
                {abilities.map((ability,index)=> {
                    
                    let abilityName = ability.ability.name;
                    let skill = abilitiesDescriptions.length > 0 && abilitiesDescriptions.filter(ability => {
                        return ability.name === abilityName
                    })
                    let finalSkill = skill.length > 0  &&  skill[0].languages[language].flavor_text;

                    const skillSpan = <span className={spanTooltip}>{finalSkill}</span>;
                    const noSkillSpan = <span className={spanTooltip}>{t("Click to see the ability description")}</span>;

                    return  <Tooltip key={index} TransitionComponent={Zoom} title={ abilityDescriptionLoading  ?  <img src={dots} alt="loading"></img> : !finalSkill ? noSkillSpan : skillSpan}>
                                <Box className={singleAbilityContainer}>
                                    <span>{t("Ability")}:</span>
                                    <Typography className={singleAbility} onClick={() => getAbilityDescription(abilityName)} variant="subtitle2">{abilityName}</Typography>
                                </Box>
                            </Tooltip>
                })}
            </Box>   

        </>
    )
}


export default PokeAbilities