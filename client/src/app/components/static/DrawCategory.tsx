import { Button, Stack } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";


export default function DrawCategory() {
  const [category, setCategory] = useState([]);
  const api = "http://localhost:8000/category";

  const fetchCategory = async () => {
    const data = await axios.get(api);
    console.log(data);

    setCategory(data.data.categories);
  };


  useEffect(() => {
    fetchCategory();
    console.log(category);
  }, []);

  return (
    <Stack direction={"row"} justifyContent={"center"} gap={10}>
      {category &&
        category.map((el:any) => {
          return <Button  >{el.name}</Button>;
        })}
    </Stack>
  );
}
