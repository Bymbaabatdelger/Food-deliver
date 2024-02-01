"use client"
import { Modal, Stack } from "@mui/material";
import Navbar from "../components/static/Navbar";
import Footer from "../components/static/Footer";
import Signup from "../components/static/Signup";

export default function SignUp(){
    return(
        <Stack>
            <Navbar/>
            <Signup/>
            <Footer/>
        </Stack>
    )
}