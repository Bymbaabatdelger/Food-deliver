"use client";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  MenuItem,
  NativeSelect,
  OutlinedInput,
  Select,
  Stack,
  Switch,
  Typography,
} from "@mui/material";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import useSWR from "swr";
import { CldUploadWidget } from "next-cloudinary";
import { FormEvent, Fragment, useState } from "react";

export default function FormDialog() {
  const [openModal, setOpenModal] = useState(false);
  const [input, setInput] = useState({
    name: "",
    category_id: "",
    ingredient: "",
    price: "",
    discount: "",
    image: "",
  });

  
  const fetcher = (args: any) => axios.get(args).then((res) => res.data);


  const apiFood = "http://localhost:8000/category";
  const api = "http://localhost:8000/food/foods";

  const { data, isLoading, error } = useSWR(apiFood, fetcher);
  console.log(data);

  

  const createFood = async () => {
    console.log("running");
    
    try {

      const res = await axios.post(api, { ...input });
      console.log(res, "success");
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleClickOpen = () => setOpenModal(true);
  
  const handleClose = () => {
    setOpenModal(false);
  };

  console.log(input)


  return (
    <Fragment>
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
        open={openModal}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: FormEvent<HTMLFormElement>) => {
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
        <DialogContent sx={{ gap: 3 }}>
          <Stack>
            <Typography> Хоолны нэр </Typography>
            <TextField
              onChange={(e) =>
                setInput((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="placeholder"
            ></TextField>
          </Stack>
          <FormControl variant="outlined">
            <Typography>Хоолны ангилал</Typography>
            <NativeSelect
              sx={{ border: 1, p: 1, borderRadius: 1, borderColor: "#D6D7DC" }}
              value={input.category_id}
              onChange={(e) =>
                setInput((prev) => ({ ...prev, category_id: e.target.value }))
              }
            >
              {data &&
                data.map((el: any) => <option value={el._id}>{el.name}</option>)}
            </NativeSelect>
            <Stack>
              <Typography> Хоолны орц </Typography>
              <TextField
                onChange={(e) =>
                  setInput((prev) => ({ ...prev, ingredient: e.target.value }))
                }
                placeholder="placeholder"
              ></TextField>
            </Stack>
            <Stack>
              <Typography> Хоолны үнэ </Typography>
              <TextField
                onChange={(e) =>
                  setInput((prev) => ({ ...prev, price: e.target.value }))
                }
                placeholder="placeholder"
              ></TextField>
            </Stack>
            <Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <Switch />
                <Typography> Хямдралтай эсэх </Typography>
              </Stack>
              <TextField
                onChange={(e) =>
                  setInput((prev) => ({ ...prev, userName: e.target.value }))
                }
                placeholder="placeholder"
              ></TextField>
            </Stack>
            <Stack>
              <Typography> Хоолны зураг </Typography>
              <Stack
                sx={{
                  backgroundColor: "#F4F4F4",
                  border: "dashed",
                  borderRadius: 2,
                  borderColor: "#D6D7DC",
                  p: 5,
                }}
              >
                <Typography>Add image for the food</Typography>
                {/* <Input onChange={handleFileChange} type="file" /> */}
                <CldUploadWidget
                  uploadPreset="uehrhnkw"
                  onSuccess={(result, { widget }) => {

                    setInput((prev) => ({...prev, image: result?.info?.secure_url}))
                    // setResource(result?.info);
                    widget.close();
                    
                  }}
                >
                  {({ open }) => {
                    return (
                      <Stack>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            open();
                          }}
                        >
                          Upload an Image
                        </button>
                      </Stack>
                    );
                  }}
                </CldUploadWidget>
               
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
    </Fragment>
  );
}
