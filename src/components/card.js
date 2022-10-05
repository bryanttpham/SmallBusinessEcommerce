





import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({item}) {
  return (
    <Card sx={{ maxWidth: 345,mb:5,mt:5,mx:5
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          width="250"
          image={item.image}
          alt=""
          sx={{ padding: "2em 0em 0em 0em", objectFit: "contain",spacing:"20" }}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {item.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          {'Price: '+item.price}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          {'Date Posted: ' + item.date}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          {"Availability: "+ item.availability}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


