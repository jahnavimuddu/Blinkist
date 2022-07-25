// import React,{ HTMLAttributes, ReactNode }  from 'react'
// import {Button} from '@mui/material'



// interface Props{
//     style?:React.CSSProperties;
//     children: React.ReactNode;
//     onClick?:()=>void;
//     MouseOver?:(e:any) => void ;
//     startIcon?:ReactNode;
// }

// export const Buttons = (props:Props) => {
//     const {style,startIcon,children,...args}=props;
//     // const classes=useStyles();
//   return (
//     <Button style={style} startIcon={startIcon}>{children}</Button>
//   )
// }

import { Button } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

export interface ButtonIconProps {
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    variant?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
    className?: string;
    disabled?:boolean;
}

let useStyles = makeStyles({
    logout:{
      top:16,
      left:16
    }
  })

export const ButtonComponent = (props: any) => {
    let {startIcon, endIcon, variant, style, children, onMouseEnter, onMouseLeave, onClick, className,disabled} = props
    const styles=useStyles;
    return (
        <Button 
        startIcon={startIcon}
        endIcon={endIcon}
        variant={variant}
        style={style}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}
        disabled={disabled}>
            {children}
        </Button>
    )
} 
