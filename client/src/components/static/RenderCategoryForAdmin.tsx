import { Button, Stack } from "@mui/material";
import axios from "axios";
import useSWR from "swr";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function DrawCategory() {
  const api = "http://localhost:8000/category";
  const fetcher = (args:any) => axios.get(args).then((res) => res.data);
  
  const { data, isLoading, error } = useSWR(api, fetcher);
  console.log(data);
  
  

  return (
    <Stack  direction={"column"} justifyContent={"space-between"} gap={4}>

      {data &&
        data.map((el: any) => {
          return <Button  endIcon={<MoreVertIcon/>} sx={{border:1 , color:"white" , background:"#18BA51" ,width:"258px"}}>{el.name}</Button>;
        })}
    </Stack>
  );
}
