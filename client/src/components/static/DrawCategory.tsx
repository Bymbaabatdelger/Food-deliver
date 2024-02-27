import { Button, Stack } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function DrawCategory() {
  const api = "http://localhost:8000/category";
  const fetcher = (args:any) => axios.get(args).then((res) => res.data);
  
  const { data, isLoading, error } = useSWR(api, fetcher);
  console.log(data);
  // const [category, setCategory] = useState([]);

  // const fetchCategory = async () => {
  //   const data = await axios.get(api);
  //   console.log(data);

  //   setCategory(data.data);
  // };

  // useEffect(() => {
  //   fetchCategory();
  // }, []);

  return (
    <Stack px={20} direction={"row"} justifyContent={"space-between"}>
      {data &&
        data.map((el: any) => {
          return <Button sx={{border:1 , color:"white" , background:"#18BA51"}}>{el.name}</Button>;
        })}
    </Stack>
  );
}
