import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField, Typography } from "@mui/material"
import { MouseEventHandler, useState } from "react"

export default function Modal({ onClick}:{onClick:MouseEventHandler}){
    const [open , setOpen] = useState(false)
    return(
        <Stack>
        <Dialog open={open} onClose={()=>setOpen(false)}/>
        <DialogTitle>Нэвтрэх</DialogTitle>
        <DialogContent>
        <Stack>
           Имэйл
           <TextField sx={{background:"#F7F7F8"}} placeholder="Имэйл хаягаа оруулна уу"></TextField>
       </Stack>
       <Stack>
           Нууц үг
           <TextField sx={{background:"#F7F7F8"}} type="password"  placeholder="Нууц үг"></TextField>
       </Stack>
        </DialogContent>
        <DialogActions>
        <Typography sx={{textAlign:"right"}} >нууц үг сэргээх</Typography>
       <Button sx={{ background:"#EEEFF2" , color: "black" ,width:"230px"}} variant="contained">Нэвтрэх</Button>
       <Typography>  эсвэл</Typography>
       <Button sx={{ color:"black" , width:"230px"}} color="success" variant="outlined">Бүртгүүлэх</Button>
        </DialogActions>
     </Stack>
    )
}