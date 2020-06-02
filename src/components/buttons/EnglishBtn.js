import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tooltip, Zoom } from "@material-ui/core";
import englishicon from "../../../src/utils/images/englishicon.svg";


const EnglishBtn = ({ handleClick }) => {

    const useStyles = makeStyles(() => ({
        english: {
            backgroundImage: `url(${englishicon})`,
            width: 35,
            height: 35,
            //marginRight: 35
         },
        spanTooltip: {
            fontSize: "12px"
        },      
       }));
    const classes = useStyles();

    const { english, spanTooltip } = classes;

    const englishTooltip = <span className={spanTooltip}>Translate to english</span>

    return(
            <Tooltip TransitionComponent={Zoom} title={englishTooltip}>
                <span className={english} onClick={() => handleClick("en", 2 )}/>
            </Tooltip>
    )

}

export default EnglishBtn