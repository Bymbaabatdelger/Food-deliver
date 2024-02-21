import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import Image from "next/image";

export default function ActionAreaCard({
  image,
  title,
  price,
}: {
  image: any;
  title: string;
  price: number;
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Stack>
          {<Image src={image} width={282} height={186} alt="image" />}
        </Stack>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{color:"#18BA51" , fontWeight:"bold"}} variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
