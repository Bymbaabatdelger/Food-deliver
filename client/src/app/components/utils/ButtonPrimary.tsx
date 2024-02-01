import { Button } from "@mui/material"
import React from "react"


export interface ButtonProps extends 
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>
    {

    }

 export const ButtonPrimary = ({children , onClick}:ButtonProps) => {
return(
    <Button onClick={onClick} sx={{
        color : "black",
        fontWeight: "bold",
    }}>{children}
    </Button>
)
}
