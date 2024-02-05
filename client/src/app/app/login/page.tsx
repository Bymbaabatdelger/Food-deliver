"use client"

import { Stack } from "@mui/material";
import Footer from "../../components/static/Footer";
import Login from "../../components/static/Login";
import Navbar from "../../components/static/Navbar";


export default function Home() {
  return (
   <Stack >
    <Navbar/>
    <Login/>
    <Footer/>
   </Stack>
  );
}
