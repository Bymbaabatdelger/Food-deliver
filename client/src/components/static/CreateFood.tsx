import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Switch,
  Typography,
} from "@mui/material";

import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import useSWR from "swr";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState({
    name:"",
    category_id:"",
    ingredient:"",
    price:"",
    discount:"",
    
  });
  const [image, setImage] = React.useState(null);

  const apiFood = "http://localhost:8000/category";
  const fetcher = (args:any) => axios.get(args).then((res) => res.data);
  
  const { data, isLoading, error } = useSWR(apiFood, fetcher);
  console.log(data);


  const api = "http://localhost:8000/food";

  const createFood = async () => {
    try {
      const res = await axios.post(api, {...input});
      console.log(res, "success");

    } catch (error: any) {
      console.log(error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = (event:any) => {
    setImage(event.target.files[0])
  }
//   const handleImage = (e:any) =>{
//     const file = e.target.files[0];
//     setFileToBase(file);
//     console.log(file);
// }
// const setFileToBase = (file:any) =>{
//   const reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onloadend = () =>{
//       image(reader.result);
//   }

// }

  return (
    <React.Fragment>
      <Stack p={5} gap={4} width="402px">
        <Typography fontWeight="bold" alignSelf="center">
          Create Food
        </Typography>
        <Button onClick={handleClickOpen} variant="outlined">
          {" "}
          + Create new food
        </Button>
      </Stack>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle alignSelf="center">Create Food</DialogTitle>
        <DialogContent sx={{gap:3}}>
          <Stack>
            <Typography> Хоолны нэр </Typography>
            <TextField  onChange={(e) =>setInput((prev) => ({...prev , name:e.target.value})) } placeholder="placeholder"></TextField>
          </Stack>
          <FormControl variant="outlined">
            <Typography>Хоолны ангилал</Typography>
            <Select value={input.category_id}  onChange={(e) =>setInput((prev) => ({...prev , category_id:e.target.value})) } >
              
              {data && data.map((el:any)=>
              <MenuItem  aria-valuetext={el.id}>{el.name}
              </MenuItem>)}
             
            </Select>
            <Stack>
              <Typography> Хоолны орц </Typography>
              <TextField  onChange={(e) =>setInput((prev) => ({...prev , ingredient:e.target.value})) } placeholder="placeholder"></TextField>
            </Stack>
            <Stack>
              <Typography> Хоолны үнэ </Typography>
              <TextField  onChange={(e) =>setInput((prev) => ({...prev , price:e.target.value})) } placeholder="placeholder"></TextField>
            </Stack>
           <Stack>
           <Stack direction={"row"} alignItems={"center"}>
                <Switch/>
                <Typography> Хямдралтай эсэх </Typography>
            </Stack>
            <TextField  onChange={(e) =>setInput((prev) => ({...prev , userName:e.target.value})) } placeholder="placeholder"></TextField>
           </Stack>
           <Stack>
           <Typography> Хоолны зураг </Typography>
           <Stack sx={{backgroundColor:"#F4F4F4" , border:"dashed", borderRadius:2, borderColor:"#D6D7DC" , p:5}}>
            <Typography>Add image for the food</Typography>
            <Button onClick={handleFileChange} >Add image</Button>
           </Stack>
           </Stack>
            
          </FormControl>
         
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", alignItems: "center" }}>
          <Stack direction={"row"} alignSelf={"end"}>
            <Button>Clear</Button>
            <Button onClick={createFood}>Continue</Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
