import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { NivoStackedBar, NivoGroupedBar } from '../'; 
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    marginTop: 25,
  },
  chart: {
    height: 500,
  }
});

export default function ImgMediaCard( { metadata } ) {
  const classes = useStyles();

  var title = metadata.title; 
  var elem; 
  if (metadata.type === 'image') {
    var image = metadata.url;
    elem = <CardMedia component="img" alt="" width="100%" image={image} title="" />; 
  } else if (metadata.type === 'chart') {
    if (metadata.info === 'stackedBar') {
      elem = <NivoStackedBar />
    } else {
      elem = <NivoGroupedBar />;
    }
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="subtitle1">
            {title}
          </Typography>

        <div className={classes.chart}>
          {elem}
        </div>


        </CardContent>
      </CardActionArea>
    </Card>
  );
}