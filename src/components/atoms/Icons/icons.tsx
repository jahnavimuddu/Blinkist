import React from 'react'

export interface IconProps {
    source?: string,
    className?: string,
    onClick?: () => void;
    style?: React.CSSProperties;
}

export const Icons = (props: IconProps) => {
    let {source, onClick, style, className} = props
    return (
        <img src={source} alt="Logo" className={className} onClick={onClick} style={style}></img>
    )
}