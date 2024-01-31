"use client"
import { Modal, Stack } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Signup from "../components/Signup";

export default function SignUp(){
    return(
        <Stack>
            <Navbar/>
            <Signup/>
            <Footer/>
        </Stack>
    )
}