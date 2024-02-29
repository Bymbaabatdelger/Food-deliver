"use client";
import {  Stack, Typography } from "@mui/material";
import Navbar from "@/components/static/Navbar";
import RenderCategoryForAdmin from "@/components/static/RenderCategoryForAdmin";
import CategoryMenu from "@/components/static/CategoryMenu";
import CreateFood from "@/components/static/CreateFood"
import AddIcon from '@mui/icons-material/Add';
import { Fullscreen } from "@mui/icons-material";


export default function userDashboard() {
  return (
    <Stack width={1} alignItems={"center"} direction={"column"} gap={5} justifyContent={"space-between"}>
      <Navbar />
     <Stack width={1} direction={"row"} alignItems={"center"} justifyContent={"space-around"} >
        <Stack sx={{gap:4}} >
          <RenderCategoryForAdmin/>
          <CategoryMenu/>   
        </Stack>
        <Stack sx={{backgroundColor:"whitesmoke"}} direction={"column"} gap={5} alignItems={"center"}>
        <AddIcon sx={{color:"#18BA51" ,height:"80px" , width:"80px"}}/>
        <Typography>Уучлаарай, Таны меню хоосон байна.</Typography>
        </Stack>
        <Stack>
        <CreateFood/>
        </Stack>

    
     </Stack>

    
    </Stack>
  );
}

