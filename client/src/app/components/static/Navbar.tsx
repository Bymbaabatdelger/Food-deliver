"use client"

import { Button, ButtonBase, ButtonGroup, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, IconButton, InputAdornment, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import{ ButtonPrimary} from "../utils/ButtonPrimary"
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import Pinecone from "../icons/Pinecone.svg";
export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [input , setInput] = useState({
    userEmail:"",
    password:"",
  })
  const [error , setError] = useState("")
  const api = "http://localhost:8000/users/login"
  
  const loginHandler = async(e:any) => {
    e.preventDefault()
    try {
      const res = await axios.post(api , {...input})
      console.log(res);
      handleClose()
      
    } catch (error:any) {
      setError(error.response.data.msg)
    }
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
 <Stack sx={{p:2}} direction="row" justifyContent="space-around">
      <Stack direction="row" spacing={3}  alignItems="center">
        <Pinecone/>
       <Stack direction="row">
        <ButtonPrimary>нүүр</ButtonPrimary>
        <ButtonPrimary>хоолны цэс</ButtonPrimary>
        <ButtonPrimary>хүргэлтийн бүс</ButtonPrimary>
       </Stack>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField 
       
       placeholder="хайх"
          InputProps={{
            style : {
              borderRadius : "8px"
            },
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <Stack  direction="row"  alignItems="center">
        <ShoppingBasketOutlinedIcon />
        <ButtonPrimary>сагс</ButtonPrimary>
        </Stack>
        <Stack  direction="row"  alignItems="center">
        <PersonOutlineOutlinedIcon />
        <ButtonPrimary onClick={handleClickOpen}   >нэвтрэх</ButtonPrimary>
      
        </Stack>
      </Stack>
    </Stack>
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
            <Typography> Имэйл </Typography>
            <TextField  onChange={(e)=>setInput((prev) => ({...prev , password:e.target.value}))} placeholder='Имэйл хаягаа оруулна уу'></TextField>
        </Stack>
        <FormControl  variant="outlined">
            <Typography>Нууц үг</Typography>
          <OutlinedInput
          onChange={(e)=>setInput((prev) => ({...prev , password:e.target.value}))}
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
        <DialogActions sx={{justifyContent:"center" , alignItems:"center" }}  >
         <Stack direction={"column"}>
         <Button  onClick={loginHandler}>Нэвтрэх</Button>
         <Typography alignSelf={"center"}>Эсвэл</Typography>
         <Button type="submit">Бүртгүүлэх</Button>
         </Stack>
        </DialogActions>
      </Dialog>
    </React.Fragment>
   
    
  );

}
