import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tooltip, Zoom } from "@material-ui/core";
import spanishicon from "../../../src/utils/images/spanishicon.svg";


const SpanishBtn = ({ handleClick }) => {

    const useStyles = makeStyles(() => ({
        spanish: {
            backgroundImage: `url(${spanishicon})`,
            width: 35,
            height: 35,
            //marginRight: 35
         },
        spanTooltip: {
            fontSize: "12px"
        },      
       }));
    const classes = useStyles();

    const { spanish, spanTooltip } = classes;

    const spanishTooltip = <span className={spanTooltip}>Traducir al español</span>

    return(
            <Tooltip TransitionComponent={Zoom} title={spanishTooltip}>
                <span className={spanish} onClick={() => handleClick("es", 4 )}/>
            </Tooltip>
    )

}

export default SpanishBtn