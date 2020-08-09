import React, { useState } from "react"
import { useTranslation } from "react-i18next"; 
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Avatar, Box} from "@material-ui/core";
import { changeLanguage } from "../actions/changeLanguage";
import EnglishBtn from "./buttons/langBtns/EnglishBtn";
import SpanishBtn from "./buttons/langBtns/SpanishBtn";
import JapaneseBtn from "./buttons/langBtns/JapaneseBtn";
import pokemon from "../../src/utils/images/pokemon.svg";
import ThemeToggle from "./buttons/ThemeToggle";
import Dial from "./buttons/dial/Dial";

const NavBar = () => {
    
    const [ open, setOpen ] = useState(false);

    const dispatch = useDispatch()
    
    const useStyles = makeStyles(() => ({

        container : {
            position: "relative",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
            height: "10vh",
        },
        logo: {
             width: 40,
             height: 40,
         },
        langBtnsContainer:{
            display: "none",
            "@media(min-width: 768px)": {
                display: "flex",
                justifyContent: "space-between",
                width: "20%"
            },
         },
    }));

    const classes = useStyles();

    const {container, logo, langBtnsContainer} = classes;

    const { i18n } = useTranslation();

    const handleClick = (language, number) => {
        i18n.changeLanguage(language);
        dispatch(changeLanguage(number));
    }

    return(
        <AppBar className={container} position="fixed"> 
            <Avatar  component={Link} to={"/"}className={logo} src={pokemon}/>
            <Box className={langBtnsContainer}>
                <EnglishBtn handleClick={handleClick}/>
                <SpanishBtn handleClick={handleClick}/>
                <JapaneseBtn handleClick={handleClick}/>
            </Box>
            <ThemeToggle setOpen={setOpen}/>
            <Dial handleClick={handleClick}/>
        </AppBar>
    )
}

export default NavBar