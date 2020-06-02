import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tooltip, Zoom } from "@material-ui/core";
import japaneseicon from "../../../src/utils/images/japaneseicon.svg";


const JapaneseBtn = ({ handleClick }) => {

    const useStyles = makeStyles(() => ({
        japanese: {
            backgroundImage: `url(${japaneseicon})`,
            width: 35,
            height: 35,
            //marginRight: 35
         },
        spanTooltip: {
            fontSize: "12px"
        },      
       }));
    const classes = useStyles();

    const { japanese, spanTooltip } = classes;

    const japaneseTooltip = <span className={spanTooltip}>日本語に翻訳</span>

    return(
        <Tooltip TransitionComponent={Zoom} title={japaneseTooltip}>
            <span className={japanese} onClick={() => handleClick("ja", 1)}/>
        </Tooltip>
    )

}

export default JapaneseBtn