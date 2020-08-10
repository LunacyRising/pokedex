import React from "react";
import {useTranslation} from "react-i18next";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";


const PokeBodySpecs = ({ height, weight }) => {

    const {language} = useSelector(state => state.languageReducer);

    const {t} = useTranslation(); 

    const useStyles = makeStyles(() => ({
       
        bodySpecs: {
            marginTop: 35,
            "@media(max-width: 320px) and (max-height: 480px)": {
                marginTop: 20
            },
        },
      }));
      
      const classes = useStyles();
      const { bodySpecs } = classes;

      let weightConverted = (w) => {
        let n = w / 2.2046
        return  Math.floor(n);
      }

      let heightConverter = (h) => {
        let n = h / 3.28
        return n.toFixed(1)
      }

    return (
        <>  
            <Box className={bodySpecs}>
                <Typography variant="body2">{`${t("Height")}: ${language === 4 ? heightConverter(height): height} ${language === 4 ? "m" : "fts"}`}</Typography>
                <Typography style={{marginTop:5}} variant="body2">{`${t("Weight")}: ${language === 4 ? weightConverted(weight): weight} ${language === 4 ? "kg" : "lbs"}`}</Typography>
            </Box>  
        </>
    )
}


export default PokeBodySpecs