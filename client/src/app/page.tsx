"use client";
import {  Stack } from "@mui/material";
import Navbar from "../components/static/Navbar";
import Footer from "../components/static/Footer";
import Main from "../components/static/Main";
import CategoryMenu from "../components/static/CategoryMenu";
import FoodCards from "../components/static/FoodCards";
import DrawCategory from "../components/static/DrawCategory";
import CreateFood from "../components/static/CreateFood";
import Static from "@/components/static/Static";


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
      <Footer />
    </Stack>
  );
}
