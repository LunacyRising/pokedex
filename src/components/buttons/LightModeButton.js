import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Tooltip, Zoom } from "@material-ui/core";
import { darkModeSwitch } from "../../actions/darkMode";
import pokeLight from "../../utils/images/pokeLight.svg";


const LightModeButton = ({ setOpen }) => {

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

    const lightModeTooltip = <span className={spanTooltip}>{t("Toggle Dark Mode")}</span>

    return(
        <div>
            <Tooltip TransitionComponent={Zoom} title={lightModeTooltip}>
                <Button onClick={handleDarkMode}><img src={pokeLight} width="35px" height="35px" alt="lightPokeball"></img></Button>
            </Tooltip>
        </div>
    )

}


export default LightModeButton