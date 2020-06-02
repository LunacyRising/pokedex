import React from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Tooltip, Zoom, } from "@material-ui/core";
import { darkModeSwitch } from "../../actions/darkMode";
import pokeDark from "../../utils/images/pokeDark.svg";


const DarkModeButton = ({ setOpen }) => {

    const useStyles = makeStyles((theme) => ({
        spanTooltip: {
            fontSize: "12px"
        },      
       }));
    const classes = useStyles();

    const { spanTooltip } = classes;

    const dispatch = useDispatch()

    const {t} = useTranslation(); 

    const handleDarkMode = () => {
        dispatch(darkModeSwitch());
        setOpen(prev => !prev)
    }

    const darkModeTooltip = <span className={spanTooltip}>{t("Toggle Dark Mode")}</span>

    return(
        <div>
        <Tooltip TransitionComponent={Zoom} title={darkModeTooltip}>
            <Button onClick={handleDarkMode}><img src={pokeDark} width="35px" height="35px" alt="darkPokeball"></img></Button>
        </Tooltip>
        </div>
    )

}


export default DarkModeButton