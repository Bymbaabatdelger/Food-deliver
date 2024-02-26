"use client"

import { Button, ButtonBase, ButtonGroup, Dialog, DialogActions, DialogContent, DialogTitle, Drawer, FormControl, IconButton, InputAdornment, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import{ ButtonPrimary} from "../utils/ButtonPrimary"
import React, { useState } from "react";
import Pinecone from "../icons/Pinecone.svg";
export default function Navbar( {onClick}:any) {
  

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {

    
    setDrawerOpen(newOpen);
  };

  const DrawerContent = (
  
    <Stack>
      hello
    </Stack>
   
);

  
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
        <ButtonPrimary onClick={toggleDrawer(true)}>сагс</ButtonPrimary>
        </Stack>
        <Stack  direction="row"  alignItems="center">
        <PersonOutlineOutlinedIcon />
        <ButtonPrimary onClick={onClick}   >нэвтрэх</ButtonPrimary>
      
        </Stack>
      </Stack>
    </Stack>
    

      <Stack>
      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        {DrawerContent}
      </Drawer>
    </Stack>
    </React.Fragment>
   
    
  );

}
