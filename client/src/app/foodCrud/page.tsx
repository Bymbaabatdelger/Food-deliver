"use client"
import { Stack } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";

export default function FoodCrud(){
    return(
       <Stack>
         <Navbar/>
         <Main/>
        <Footer/>
       </Stack>
    )
}