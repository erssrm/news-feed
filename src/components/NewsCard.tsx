import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardActionArea,
  makeStyles
} from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { newsDetails } from "../interface/interface";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";


const defaultImagePath = "../assets/news.jpg"

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
  },
  media: {
    height: 250,
  },
});

const NewsCard = (props: newsDetails) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
        className={classes.media}
          image={props.urlToImage || defaultImagePath}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <Link to={{
          pathname: '/news',
          state: props
        }}>Read More </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
