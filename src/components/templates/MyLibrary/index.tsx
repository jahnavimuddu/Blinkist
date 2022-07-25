import { makeStyles,styled } from "@mui/styles";
import React from "react";

export interface MyLibraryProps {
    header: React.ReactNode;
    footer: React.ReactNode,
    body: React.ReactNode;
}

let useStyles = makeStyles({
    test: {
        display: 'flex',
        width:"100%",
        height: "auto",

        overflow: "hidden",
        flexDirection: 'column',
        alignItems: 'center'
    },
    
})
 

export const MyLibrary = (props: MyLibraryProps) => {
    let {header, footer, body} = props
    let styles = useStyles()
    return (
        <div className={styles.test}>
            {header}<br></br>
            {body}
            {footer}
        </div>
    )
}