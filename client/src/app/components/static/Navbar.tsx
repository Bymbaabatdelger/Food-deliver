"use client"

import { Button, ButtonBase, ButtonGroup, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, IconButton, InputAdornment, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import{ ButtonPrimary} from "../utils/ButtonPrimary"
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
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
        <Stack>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="27"
            viewBox="0 0 33 27"
            fill="none"
          >
            <path
              d="M5.85857 2.53579L1.65344 10.4066C1.12868 11.3917 0.865723 12.4728 0.865723 13.5553C0.865723 14.638 1.12868 15.7189 1.65344 16.704L5.85857 24.575C6.63365 26.0288 8.14943 26.9368 9.79896 26.9368H14.2656V24.7071H14.2641C13.4401 24.7071 12.6822 24.2538 12.2946 23.5269L8.09107 15.6545C7.73977 14.9983 7.56468 14.2776 7.56468 13.5553C7.56468 12.833 7.73977 12.1124 8.09107 11.4563L12.2946 3.58384C12.6822 2.85686 13.4401 2.40367 14.2641 2.40367H14.2656V0.173828H9.79896C8.14943 0.173828 6.63365 1.08199 5.85857 2.53579Z"
              fill="black"
            />
            <path
              d="M31.3421 10.4067L27.1371 2.53585C26.3619 1.08189 24.8462 0.173886 23.1967 0.173886H18.7299V2.40357H18.7316C19.5556 2.40357 20.3135 2.85692 20.7009 3.58374L24.9044 11.4562C25.2559 12.1124 25.4307 12.8331 25.4307 13.5554C25.4307 14.2777 25.2559 14.9983 24.9044 15.6546L20.7009 23.5268C20.3135 24.2538 19.5556 24.707 18.7316 24.707H18.7299V26.9369H23.1967C24.8462 26.9369 26.3619 26.0289 27.1371 24.5749L31.3421 16.7041C31.8667 15.719 32.1298 14.6379 32.1298 13.5554C32.1298 12.4728 31.8667 11.3918 31.3421 10.4067Z"
              fill="black"
            />
          </svg>
        </Stack>
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
      {/* {modal && <Modal onClick={toggleModal} />} */}
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
