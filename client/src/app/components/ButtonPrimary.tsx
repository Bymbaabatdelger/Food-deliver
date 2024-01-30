import { Button } from "@mui/material"
export default function ButtonPrimary({children}:{children:string}){
return(
    <Button sx={{
        color : "black"
    }}>{children}
    </Button>
)
}