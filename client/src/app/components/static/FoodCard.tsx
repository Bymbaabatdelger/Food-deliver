import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';

export default function ActionAreaCard({ image , title , price}:{image:any , title : string , price:number} ) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Stack>{image}</Stack>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}