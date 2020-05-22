import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    marginTop: 25,
  },
});

export default function ImgMediaCard( {info: {view, title, image} } ) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="subtitle1">
            {title}
          </Typography>

          <CardMedia
          component="img"
          alt=""
          width="100%"
          image={image}
          title=""
        />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}