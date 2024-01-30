"use client"

import { Stack } from "@mui/material";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Navbar from "../components/Navbar";




export default function Home() {
  return (
   <Stack >

    <Navbar/>
    <Login/>
    <Footer/>
  
   </Stack>
  );
}
