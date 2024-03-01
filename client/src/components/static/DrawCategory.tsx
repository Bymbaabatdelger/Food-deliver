import { Button, Stack } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function DrawCategory() {
  const api = "http://localhost:8000/category";
  const fetcher = (args:any) => axios.get(args).then((res) => res.data);
  
  
  const { data, isLoading, error } = useSWR(api, fetcher);
  console.log(data);


  const filter = (name:string) => {data.filter((el:any) => el.tags === name)};
  

  return (
    <Stack px={20} direction={"row"} justifyContent={"space-between"}>
      {data && data.map((el: any) => { return <Button onClick={()=>filter} sx={{border:1 , color:"white" , background:"#18BA51"}}>{el.name}</Button>;})}
    </Stack>
  );
}
