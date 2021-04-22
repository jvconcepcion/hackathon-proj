import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Card, 
  CardActionArea, 
  CardActions, 
  CardContent, 
  CardMedia,
  Typography
} from '@material-ui/core';
import { SocialShares } from '@components/Buttons';

const useStyles = makeStyles({
  root: {
    margin: "1rem",
    flexBasis: "25%",
    border: "1px solid #eaeaea",
    transition: "color 0.15s ease, border-color 0.15s ease",
  },
});

const Cards = ({ imagePath, imageHeight = "140", title, description }) => {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={imageHeight}
          image={imagePath}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <SocialShares/>
      </CardActions>
    </Card>
  );
};

export default Cards;