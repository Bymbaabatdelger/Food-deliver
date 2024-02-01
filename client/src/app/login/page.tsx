"use client"

import { Stack } from "@mui/material";
import Footer from "../components/static/Footer";
import Login from "../components/static/Login";
import Navbar from "../components/static/Navbar";
import FormDialog from "../components/static/Modal";





export default function Home() {
  return (
   <Stack >

    <Navbar/>

    <Login/>
    
    <Footer/>
  
   </Stack>
  );
}
