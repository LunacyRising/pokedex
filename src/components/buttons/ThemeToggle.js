import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Tooltip, Zoom } from "@material-ui/core";
import { darkModeSwitch } from "../../actions/darkMode";
import pokeLight from "../../utils/images/pokeLight.svg";
import pokeDark from "../../utils/images/pokeDark.svg";


const ThemeToggle = ({ setOpen }) => {

    const useStyles = makeStyles(() => ({

        btn:{
            padding: 0
        },
        spanTooltip: {
            fontSize: "12px"
        },      
    }));

    const classes = useStyles();

    const { btn, spanTooltip } = classes;

    const dispatch = useDispatch()

    const {t} = useTranslation(); 

    const handleDarkMode = () => {
        dispatch(darkModeSwitch());
        setOpen(prev => !prev)
    }

    const { darkMode } = useSelector(state => state.darkModeReducer);

    const tooltipText = <span className={spanTooltip}>{darkMode ? t("Light Theme") : t("Dark Theme")}</span>

    return(
        <>
            <Tooltip TransitionComponent={Zoom} title={tooltipText}>
                <IconButton className={btn} onClick={handleDarkMode}><img src={darkMode ? pokeLight : pokeDark} width="35px" height="35px" alt="lightPokeball"></img></IconButton>
            </Tooltip>
        </>
    )

}


export default ThemeToggle