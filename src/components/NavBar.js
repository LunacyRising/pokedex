import React, { useState } from "react"
import { useTranslation } from "react-i18next"; 
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppBar, Avatar, IconButton, Box, Tooltip, Zoom } from "@material-ui/core";
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import { makeStyles } from "@material-ui/core/styles";
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { changeLanguage } from "../actions/changeLanguage";
import EnglishBtn from "./buttons/EnglishBtn";
import SpanishBtn from "./buttons/SpanishBtn";
import JapaneseBtn from "./buttons/JapaneseBtn";
import pokemon from "../../src/utils/images/pokemon.svg";
import englishicon from "../../src/utils/images/englishicon.svg";
import spanishicon from "../../src/utils/images/spanishicon.svg";
import japaneseicon from "../../src/utils/images/japaneseicon.svg";
import ThemeToggle from "./buttons/ThemeToggle";

const NavBar = () => {
    
    const [open, setOpen] = useState(false);

    const [openDial, setOpenDial] = useState(false);

    const dispatch = useDispatch()
    
    const useStyles = makeStyles(() => ({

        container : {
            position: "relative",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "8vh",
            height: "8vh",
            "@media(min-width: 320px) and (max-width: 480px)" : {
                justifyContent: "space-between"
            }
        },
        logo: {
             width: 50,
             height: 50,
             "@media(min-width: 320px) and (max-width: 480px)": {
                display: "none"
            },
             "@media(min-width: 320px) and (max-width: 768px)": {
                width: 40,
                height: 40,
            },
         },
        langBtnsContainer:{
            "@media(min-width: 320px) and (max-width: 480px)": {
                display: "none"
            },
         },
        english: {
            backgroundImage: `url(${englishicon})`,
            width: 35,
            height: 35,
            marginRight: 35
         },
        spanish: {
            backgroundImage: `url(${spanishicon})`,
            width: 35,
            height: 35,
           marginRight: 35
         },
        japanese: {
            backgroundImage: `url(${japaneseicon})`,
            width: 35,
            height: 35,
         },
        darkModeBtnContainer: {
            "@media(max-width: 320px)": {
                marginLeft: 12
             },
         },
        hamburgerBtn: {
            display:"none",
            "@media(min-width: 320px) and (max-width: 480px)": {
                display: "flex",
                position: "absolute",
                right: 26,
            },
            "@media(min-width: 391px) and (max-width: 480px)": {
                display: "flex"
            }
        },
        spanTooltip: {
            fontSize: "12px"
        }, 
       }));
       const classes = useStyles();
       
       const { logo, container, langBtnsContainer, english, spanish, japanese, darkModeBtnContainer, hamburgerBtn, spanTooltip } = classes;

       const { i18n } = useTranslation();

       const handleClick = (language, number) => {
            i18n.changeLanguage(language);
            dispatch(changeLanguage(number));
       }

       const handleOpen = () => {
        setOpenDial(true);
      };
    
      const handleClose = () => {
        setOpenDial(false);
      };

      const englishTooltip = <span className={spanTooltip}>Translate to english</span>
      const spanishTooltip = <span className={spanTooltip}>Traducir al español</span>
      const japaneseTooltip = <span className={spanTooltip}>日本語に翻訳</span>

      const actions = [
        { icon: <EnglishBtn handleClick={handleClick}/>},
        { icon: <SpanishBtn handleClick={handleClick}/>},
        { icon: <JapaneseBtn handleClick={handleClick}/>},
      ];

    return(
        <AppBar position="static"> 
            <Box className={container}>
                    <Avatar  component={Link} to={"/"}className={logo} src={pokemon}/>
                <Box className={langBtnsContainer}>
                    <Tooltip TransitionComponent={Zoom} title={englishTooltip}>
                        <IconButton className={english} onClick={() => handleClick("en", 2 )}/>
                    </Tooltip>
                    <Tooltip TransitionComponent={Zoom} title={spanishTooltip}>
                        <IconButton className={spanish} onClick={() => handleClick("es", 4 )}/>
                    </Tooltip>
                    <Tooltip TransitionComponent={Zoom} title={japaneseTooltip}>
                        <IconButton className={japanese} onClick={() => handleClick("ja", 1)}/>
                    </Tooltip>
                </Box>
                {<Box className={darkModeBtnContainer}><ThemeToggle setOpen={setOpen}/></Box>}
                <Box className={hamburgerBtn}>
                    <SpeedDial
                    FabProps={{ size: "small"}}
                    ariaLabel="SpeedDial openIcon example"
                    icon={<SpeedDialIcon openIcon={<CloseRoundedIcon />} />}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    open={openDial}
                    direction={"left"}
                    >  
                    {actions.map((action, index) => (
                        <SpeedDialAction
                            key={index + 1}
                            icon={action.icon}
                            tooltipTitle={""}
                            onClick={handleClose}
                        />
                    ))}
                    </SpeedDial>
                </Box>
            </Box>
        </AppBar>
    )
}

export default NavBar