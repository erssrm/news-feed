import React from 'react'
import { Switch, Route } from 'react-router-dom';
import {Home} from '../components/Home';
import NewsDetails from '../components/NewsDetails'


const RouteConfig = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/news' component={NewsDetails}/>
    </Switch>
  </main>
)

export default RouteConfig