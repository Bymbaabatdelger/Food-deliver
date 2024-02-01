"use client"
import { Stack } from "@mui/material";
import Navbar from "../components/static/Navbar";
import Footer from "../components/static/Footer";
import Main from "../components/static/Main";

export default function FoodCrud(){
    return(
       <Stack>
         <Navbar/>
         <Main/>
        <Footer/>
       </Stack>
    )
}