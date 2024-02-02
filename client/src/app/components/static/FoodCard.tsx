import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KA0seZMfBI4cfT2mi3IslQI6oxPPtt8IC5fGuzEHfNWIVx1hMieo0vnt1dCKywqoOffZtglxdW4pP7kV9cwOAguidwu3r4p-99QxAAgvG8tnyZG4inP7BZg7otJydZZNtFd0YJ3LTlq9S59HuZWQKn45qdkyFAe17K4Drz2LtqzimvNKNJ49mhqS~rlej5tfz876iy8tme9VR--rGYzgF~Vy167l5VVbuKqbaJe2c0zFgtdqpHyddFB3N6Rl0KO54kGCMTWVZsOhNQpDpaHhHTdm3WTBgKUrv7JIbyeWRjG2~UXxvxyviSCvsQcbZs3oNX695ZwVLneI1976CC6PGQ__"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           zairmag
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}