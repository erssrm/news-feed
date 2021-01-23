import React, { useState, useEffect, useContext } from "react";
import { Grid } from "@material-ui/core";
import NewsCard from "./NewsCard";
import axios from "axios";
import { apiEndPoint, apiKey, country } from "../config/config";
import { newsDetails } from "../interface/interface";
import {SearchContext} from '../components/Home'

const Contents = () => {
  const [posts, setposts] = useState([]);
  const search = useContext(SearchContext);
  useEffect(() => {
    console.log("Api heat point", `${apiEndPoint}?q=${search}&country=${country}&apiKey=${apiKey}`);
    axios
      .get(`${apiEndPoint}?q=${search}&country=${country}&apiKey=${apiKey}`)
      .then((res) => {
        console.log("response from server", res);
        setposts(res.data.articles);
      })
      .catch((err) => {
        console.log("error from server", err);
      });
  }, [search]);

  const getNewsCard = (newsDetails: newsDetails, key:number) => {
    return (
      <Grid key={key.toString()} item xs={12} sm={12}>
        <NewsCard {...newsDetails}/>
      </Grid>
    );
  };
  return (
    <Grid container spacing={2}>
      {posts.map((article, key) => {
        return getNewsCard(article, key);
      })}
    </Grid>
  );
};

export default Contents;
