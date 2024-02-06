import { Button } from "@mui/material"



export default function ButtonSecondary({children}:{children:string}){
    return(
        <Button sx={{
            color : "#fff",
            fontWeight: "bold"

        }}>{children}

        </Button>
    )
}