import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import EnglishBtn from "../langBtns/EnglishBtn";
import SpanishBtn from "../langBtns/SpanishBtn";
import JapaneseBtn from "../langBtns/JapaneseBtn";

const Dial = ({ handleClick }) => {

    const useStyles = makeStyles(() => ({

        dial: {
            "@media(min-width: 768px)": {
                display: "none"
            }
        },  
    }));

    const classes = useStyles();

    const { dial } = classes;

    const [ openDial, setOpenDial ] = useState(false);

    const handleOpen = () => {
        setOpenDial(true);
    };
    
    const handleClose = () => {
    setOpenDial(false);
    };

    const actions = [
        { icon: <EnglishBtn handleClick={handleClick}/>},
        { icon: <SpanishBtn handleClick={handleClick}/>},
        { icon: <JapaneseBtn handleClick={handleClick}/>},
    ];

    return(
            <SpeedDial
            className={dial}
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
    )

}

export default Dial