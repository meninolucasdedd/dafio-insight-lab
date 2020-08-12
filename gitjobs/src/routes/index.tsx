import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Dasboard from '../pages/Dashboard';
import Jobs from '../pages/Jobs';


const Routes: React.FC = () =>(
  <Switch>
    <Route  path="/" exact component={Dasboard}/>
    <Route  path="/jobs" component={Jobs}/>
  </Switch>
)

export default Routes;


