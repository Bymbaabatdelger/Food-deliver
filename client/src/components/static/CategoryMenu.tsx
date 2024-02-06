import { Button, Stack, Typography } from "@mui/material";

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [name , setName] = React.useState("")
  const api =  "http://localhost:8000/category"

  const createCategory = async() => {
    try {
        const res = await axios.post ( api , {name})
        console.log(res);
        
    } catch (error: any) {
        console.log(error);
        
    }

  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
         <Stack p={5} gap={4} width="402px">
        <Typography fontWeight="bold" alignSelf="center">Food menu</Typography>
        <Button onClick={handleClickOpen} variant="outlined"> + Create new category</Button>
     </Stack>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            handleClose();
          },
        }}
      >
        <DialogTitle>Create new category</DialogTitle>
        <DialogContent>
          <TextField
          onChange={(e)=>setName(e.target.value)}
            required
            label="category name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={createCategory} type="submit">continue</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
