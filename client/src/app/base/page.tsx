"use client";
import {  Stack } from "@mui/material";
import Static from "@/components/static/Static";
import DrawCategory from "@/components/static/DrawCategory";
import FoodCards from "@/components/static/FoodCards";
import Footer from "@/components/static/Footer";
import { Main } from "next/document";
import Navbar from "../components/static/Navbar";


export default function FoodCrud() {
  return (
    <Stack direction={"column"} gap={5}>
      <Navbar />
      <Main />
      <Static/>
      {/* <CategoryMenu />
      <CreateFood/> */}
      <DrawCategory/>
      <FoodCards />
      <Footer/>
    </Stack>
  );
}
