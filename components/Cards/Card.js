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
    display: "inline-block",
    margin: "0 0 1em",
    width: "100%",
    // margin: "1rem",
    // flexBasis: "25%",
    border: "1px solid #eaeaea",
    transition: "color 0.15s ease, border-color 0.15s ease",
    marginBottom: "1rem",
    breakInside: "avoid",
  }
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
        </CardContent>
      </CardActionArea>
      <CardActions>
        <SocialShares/>
      </CardActions>
    </Card>
  );
};

export default Cards;