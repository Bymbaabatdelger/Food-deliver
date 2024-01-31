"use client"

import { Stack } from "@mui/material";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import FormDialog from "../components/Modal";





export default function Home() {
  return (
   <Stack >

    <Navbar/>

    <Login/>
    
    <Footer/>
  
   </Stack>
  );
}
