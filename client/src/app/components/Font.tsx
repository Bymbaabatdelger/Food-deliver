import { Typography } from "@mui/material";

export default function Font ({children} : {children:string}) {
    return(
        <Typography sx={{
            color: "#fff"
        }}>{children}</Typography>
    )
}