
import { Button, Stack } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"

export default function DrawCategory(){
    const [category , setCategory] = useState([])
    const api =  "http://localhost:8000/category"

    const fetchCategory = async() => {
        const data = await axios.get(api)
        console.log(data);
        
    
    }

    useEffect(()=> {
        fetchCategory()
    } , [])


   
      {category && category.map((el:string)=> {
        return ( 
            <Stack direction={"row"} justifyContent={"space-around"}>
            <Button>{el}</Button>
          </Stack>
        )
      })
    }
}