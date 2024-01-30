import { Typography } from "@mui/material";

export default function Text ({children}: {children:string}){
    return(
        <Typography sx={{
            color: "#fff",
            textDecoration:"underline"
           
        }}>{children}</Typography>
    )
}