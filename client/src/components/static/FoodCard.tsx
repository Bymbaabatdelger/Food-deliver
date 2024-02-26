import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Dialog, DialogContent, DialogTitle, FormControl, Stack } from "@mui/material";
import Image from "next/image";

export default function ActionAreaCard({image, title,price,}: {image: any;title: string;price: number;})
 {
  const[open , setOpen]=React.useState(false)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function order() {
 
   
  }

  return (
    <React.Fragment>
      <Card  sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleClickOpen} >
        <Stack >
          {<Image src={image} width={282} height={186} alt="image" />}
        </Stack>
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{color:"#18BA51" , fontWeight:"bold"}} variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


     <Dialog open={open} onClose={handleClose}>
     <DialogTitle>Order</DialogTitle>
     <DialogContent>
      <Stack direction={"row"} gap={4}>
        <Stack>
        { <Image alt="image" src={image} width={282} height={186}></Image>}
        </Stack>
        <Stack direction={"column"} justifyContent={"space-between"}>
         <Stack>
         <Typography sx={{fontWeight:"bold"}}>{title}</Typography>
          <Typography  sx={{color:"#18BA51" , fontWeight:"bold"}}>{price}</Typography>
         </Stack>
         <Stack direction={"column"} gap={3}>
          <Typography>Тоо</Typography>
          <Stack direction={"row"} gap={1} alignItems={"center"}>
            <Button sx={{backgroundColor:"#18BA51", color:"white"}}>-</Button>
            <Typography>count</Typography>
            <Button sx={{backgroundColor:"#18BA51", color:"white"}}>+</Button>
          </Stack>
          <Button sx={{backgroundColor:"#18BA51", color:"white"}}>Сагслах</Button>

         </Stack>
        </Stack>
      </Stack>
     </DialogContent>
   </Dialog>
    </React.Fragment>
  );
}
