import { Button, Stack, TextField, Typography } from "@mui/material";

export default function Login() {
    return(
      <Stack alignItems="center" p={10} spacing={2}>
        <Typography sx={{fontSize:28 , fontWeight:700}}>Нэвтрэх</Typography>
        <Stack>
            Имэйл
            <TextField  sx={{background:"#F7F7F8"}} placeholder="Имэйл хаягаа оруулна уу"></TextField>
        </Stack>
        <Stack>
            Нууц үг
            <TextField sx={{background:"#F7F7F8"}} type="password"  placeholder="Нууц үг"></TextField>
        </Stack>
        <Typography sx={{textAlign:"right"}} >нууц үг сэргээх</Typography>
        <Button sx={{ background:"#EEEFF2" , color: "black" ,width:"230px"}} variant="contained">Нэвтрэх</Button>
        <Typography>  эсвэл</Typography>
        <Button sx={{ color:"black" , width:"230px"}} color="success" variant="outlined">Бүртгүүлэх</Button>
      </Stack>
    )
}