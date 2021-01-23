import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardActionArea,
  makeStyles,
  CardMedia,
  Grid,
} from "@material-ui/core";
import { newsDetails } from "../interface/interface";
import { useHistory } from "react-router-dom";

interface location {
  location: {
    state: newsDetails;
  };
}

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
  },
  media: {
    height: 400,
  },
});

const NewsDetails = (props: location) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Grid item container style={{paddingTop: '1em'}}>
      <Grid item xs={false} sm={2} />
      <Grid item xs={12} sm={8}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.location.state.urlToImage}
              title={props.location.state.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.location.state.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.location.state.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => history.goBack()}>
              Back
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  );
};

export default NewsDetails;
