import React, { useContext, useState } from "react";
import {
  AppBar,
  Typography,
  InputBase,
  Button,
  Toolbar,
  makeStyles,
} from "@material-ui/core";
import { SearchContext } from "../components/Home";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  }
}));

const Header = (props:any) => {
  const search = useContext(SearchContext);
  const [query, setquery] = useState('')

  const classes = useStyles();
  return (
    <div className={classes.root} style={{paddingBottom: '1em'}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News {search}
          </Typography>
          <InputBase onChange= {(e)=> {setquery(e.target.value)}}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
          <Button color="inherit" onClick={() => { props.search(query) }}>Search</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
