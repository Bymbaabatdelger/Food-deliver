"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export const loginModal = ({onClick}:any) => {

  const router = useRouter()
  const [open, setOpen] = React.useState(false);
   const [error , setError] = React.useState("")
  const [input , setInput] = React.useState({
    userEmail:"",
    password:"",
  })
 
  
  const api = "http://localhost:8000/users/user"

  
  const loginHandler = async(e:any) => {
    e.preventDefault()

    try {
      const res = await axios.post(api , {...input})
      console.log(res);
      handleClose()
      router.push("/userDashboard")
      
    } catch (error:any) {
      setError(error.response.data.msg)
    }
  } 

  const signUpHandler = () => {
    router.push("/signup")
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle alignSelf="center">Нэвтрэх</DialogTitle>
        <DialogContent>
        <Stack>
            <Typography > Имэйл </Typography>
            <TextField onChange={onClick} placeholder='Имэйл хаягаа оруулна уу'></TextField>
        </Stack>
        <FormControl  variant="outlined">
            <Typography>Нууц үг</Typography>
          <OutlinedInput
           placeholder='Нууц үг'
            endAdornment={<InputAdornment position="end">
                 <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                </InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
        </FormControl>
        <Typography alignSelf="self-end">Нууц үг сэргээх</Typography>
        </DialogContent>
        <DialogActions >
         
         <Button onClick={loginHandler}>Нэвтрэх</Button>
         <Typography>Эсвэл</Typography>
          <Button onClick={signUpHandler} type="submit">Бүртгүүлэх</Button>
        
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}