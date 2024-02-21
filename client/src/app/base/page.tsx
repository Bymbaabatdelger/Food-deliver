"use client";
import {  Stack } from "@mui/material";
import Navbar from "../../components/static/Navbar";
import Footer from "../../components/static/Footer";
import Main from "../../components/static/Main";
import Guide from "../../components/static/Guide";
import CategoryMenu from "../../components/static/CategoryMenu";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import FoodCards from "../../components/static/FoodCards";
import DrawCategory from "../../components/static/DrawCategory";
import CreateFood from "../../components/static/CreateFood";


export default function FoodCrud() {
  return (
    <Stack direction={"column"} gap={5}>
      <Navbar />
      <Main />
      <Stack direction="row" justifyContent={"space-around"}>
        <Guide
          title="Хүргэлтийн төлөв хянах"
          desc="Захиалга бэлтгэлийн явцыг хянах"
          Icon={ImportContactsOutlinedIcon}
        />
        <Guide
          title="Шуурхай хүргэлт"
          desc="Захиалга бэлтгэлийн явцыг хянах"
          Icon={AccessTimeOutlinedIcon}
        />
        <Guide
          title="Эрүүл, баталгаат орц"
          desc="Захиалга бэлтгэлийн явцыг хянах"
          Icon={RamenDiningOutlinedIcon}
        />
        <Guide
          title="Хоолны өргөн сонголт"
          desc="Захиалга бэлтгэлийн явцыг хянах"
          Icon={ImportContactsOutlinedIcon}
        />
      </Stack>
      {/* <CategoryMenu /> */}
      <CreateFood/>
      <DrawCategory/>
      <FoodCards />
      <Footer />
    </Stack>
  );
}
