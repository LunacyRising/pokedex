import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tooltip, Zoom } from "@material-ui/core";
import englishicon from "../../../../src/utils/images/englishicon.svg";


const EnglishBtn = ({ handleClick }) => {

    const useStyles = makeStyles(() => ({
        
        english: {
            backgroundImage: `url(${englishicon})`,
            width: 35,
            height: 35,
            cursor: "pointer"
         },
        spanTooltip: {
            fontSize: "12px"
        },      
    }));

    const classes = useStyles();

    const { english, spanTooltip } = classes;

    return(
            <Tooltip TransitionComponent={Zoom} title={<span className={spanTooltip}>Translate to english</span>}>
                <span className={english} onClick={() => handleClick("en", 2 )}/>
            </Tooltip>
    )

}

export default EnglishBtn