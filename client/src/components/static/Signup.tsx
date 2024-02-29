
import { Button, Checkbox, FormControlLabel, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup(){

const[error , setError] = useState("")
const router = useRouter();
const [input , setInput] = useState({
    userName:"",
    userEmail:"",
    phoneNumber:"",
    password:"",
    repassword:"",
})

const api =  "http://localhost:8000/users"

const signupHandler = async(e:any) => {
    e.preventDefault()
    try {
        const res = await axios.post(api , {...input})
        console.log(res);
        if(input.password !== input.repassword){
            console.log("нууц үг таарсангүй дахин оролдоно уу.");
            alert("нууц үг таарсангүй дахин оролдоно уу.")
            return;
        }
        router.push("/login")
        
    } catch (error:any) {
        setError("Invalid request")
        console.log(error);
    }
}

    return(
        <Stack alignItems="center" p={10} spacing={2}>
        <Typography sx={{fontSize:28 , fontWeight:700}}>Бүртгүүлэх</Typography>
        <Stack>
            Нэр
            <TextField onChange={(e) =>setInput((prev) => ({...prev , userName:e.target.value})) } sx={{background:"#F7F7F8" , width:"384px"}} placeholder="Нэрээ оруулна уу"></TextField>
        </Stack>
        <Stack>
        И-мэйл
            <TextField onChange={(e) =>setInput((prev) => ({...prev , userEmail:e.target.value})) }  sx={{background:"#F7F7F8" ,  width:"384px"}} placeholder="И-мэйл хаягаа оруулна уу"></TextField>
        </Stack>
        <Stack>
        Утасны дугаар
            <TextField onChange={(e) =>setInput((prev) => ({...prev , phoneNumber:e.target.value})) } sx={{background:"#F7F7F8" ,  width:"384px"}} placeholder=" утасны дугаараа оруулна уу"></TextField>
        </Stack>
        <Stack>
            Нууц үг
            <TextField onChange={(e) =>setInput((prev) => ({...prev , password:e.target.value})) } sx={{background:"#F7F7F8" ,  width:"384px"}} type="password"  placeholder="Нууц үг"></TextField>
        </Stack>
        <Stack>
        Нууц үг давтах
            <TextField onChange={(e) =>setInput((prev) => ({...prev , repassword:e.target.value})) } sx={{background:"#F7F7F8" , width:"384px"}} type="password"  placeholder="Нууц үг"></TextField>
        </Stack>
        <FormControlLabel control={<Checkbox defaultChecked color="default"/>} label="Үйлчилгээний нөхцөл зөвшөөрөх" />
        <Button onClick={signupHandler} sx={{ background:"#EEEFF2" , color: "black" ,width:"384px"}} variant="contained">Бүртгүүлэх</Button>
      </Stack>
    )
}
