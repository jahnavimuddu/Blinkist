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
