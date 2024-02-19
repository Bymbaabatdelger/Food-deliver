import { Button, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
const [input , setInput] = useState({
  userEmail:"",
  password:"",
})
const [error , setError] = useState("")
const router = useRouter()
const api = "http://localhost:8000/users/login"

const loginHandler = async(e:any) => {
  e.preventDefault()
  try {
    const res = await axios.post(api , {...input})
    console.log(res);
    router.push("/base")
    
  } catch (error:any) {
    setError(error.response.data.msg)
  }
}

    return(
      <Stack alignItems="center" p={10} spacing={2}>
        <Typography sx={{fontSize:28 , fontWeight:700}}>Нэвтрэх</Typography>
        <Stack>
            Имэйл
            <TextField onChange={(e)=> setInput((prev)=>({...prev , userEmail:e.target.value}))}  sx={{background:"#F7F7F8"}} placeholder="Имэйл хаягаа оруулна уу"></TextField>
        </Stack>
        <Stack>
            Нууц үг
            <TextField  onChange={(e)=> setInput((prev)=>({...prev , password:e.target.value}))} sx={{background:"#F7F7F8"}} type="password"  placeholder="Нууц үг"></TextField>
        </Stack>
        <Typography sx={{textAlign:"right"}} >нууц үг сэргээх</Typography>
        <Button onClick={loginHandler} sx={{ background:"#EEEFF2" , color: "black" ,width:"230px"}} variant="contained">Нэвтрэх</Button>
        <Typography>  эсвэл</Typography>
        <Button sx={{ color:"black" , width:"230px"}} color="success" variant="outlined">Бүртгүүлэх</Button>
      </Stack>
    )
}