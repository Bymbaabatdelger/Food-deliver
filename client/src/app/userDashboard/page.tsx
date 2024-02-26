"use client";
import {  Stack } from "@mui/material";
import Static from "@/components/static/Static";
import DrawCategory from "@/components/static/DrawCategory";
import CreateFood from "@/components/static/CreateFood";
import FoodCards from "@/components/static/FoodCards";
import CategoryMenu from "@/components/static/CategoryMenu";
import OrderList from "@/components/static/OrderList";
import Footer from "@/components/static/Footer";
import Navbar from "../components/static/Navbar";
import Main from "@/components/static/Main";


export default function userDashboard() {
  return (
    <Stack direction={"column"} gap={5}>
      <Navbar />
      <Main />
      <Static/>
      <CreateFood/>
      <CategoryMenu/>
      <OrderList/>
      <DrawCategory/>
      <FoodCards />
      <Footer/>
    </Stack>
  );
}
// import Document, { Html, Head, Main, NextScript } from 'next/document'
 
// class MyDocument extends Document {
//   //...
// }
 
// export default MyDocument
