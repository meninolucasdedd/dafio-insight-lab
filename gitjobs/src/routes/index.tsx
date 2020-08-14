import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Dasboard from '../pages/Dashboard';
import Job from '../pages/Job';


const Routes: React.FC = () =>(
  <Switch>
    <Route  path="/" exact component={Dasboard}/>
    <Route  path="/job/:repository+" component={Job}/>
  </Switch>
)

export default Routes;


