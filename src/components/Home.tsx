import React, { useState } from "react";
import logo from "./logo.svg";
import "../App.css";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Contents from "./Contents";

export const SearchContext = React.createContext('');

export function Home() {
  const [search, setSearch] = useState('');
  const searchQuery = (query: string) => {
        setSearch(query);
  }
  return (
    <SearchContext.Provider value={search}>
      <Grid container direction="column" style={{ backgroundColor: "#d3d3d3" }}>
        <Grid item>
          <Header search={searchQuery}/>
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Contents />
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </SearchContext.Provider>
  );
}
