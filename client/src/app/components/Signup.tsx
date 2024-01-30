import { CheckBox } from "@mui/icons-material";
import { Button, Stack, TextField, Typography } from "@mui/material";

export default function Signup(){
    return(
        <Stack alignItems="center" p={10} spacing={2}>
        <Typography sx={{fontSize:28 , fontWeight:700}}>Бүртгүүлэх</Typography>
        <Stack>
            Нэр
            <TextField  sx={{background:"#F7F7F8"}} placeholder="Нэрээ оруулна уу"></TextField>
        </Stack>
        <Stack>
        И-мэйл
            <TextField  sx={{background:"#F7F7F8"}} placeholder="И-мэйл хаягаа оруулна уу"></TextField>
        </Stack>
        <Stack>
        Утасны дугаар
            <TextField  sx={{background:"#F7F7F8"}} placeholder=" утасны дугаараа оруулна уу"></TextField>
        </Stack>
        <Stack>
            Нууц үг
            <TextField sx={{background:"#F7F7F8"}} type="password"  placeholder="Нууц үг"></TextField>
        </Stack>
        <Stack>
        Нууц үг давтах
            <TextField sx={{background:"#F7F7F8"}} type="password"  placeholder="Нууц үг"></TextField>
        </Stack>
       <CheckBox />
        <Button sx={{ background:"#EEEFF2" , color: "black" ,width:"230px"}} variant="contained">Бүртгүүлэх</Button>
      </Stack>
    )
}
