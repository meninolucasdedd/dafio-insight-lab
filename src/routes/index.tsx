import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Dasboard from '../pages/Dashboard';
import Job from '../pages/Job';
import howitwork from '../pages/HowItWorks';
import api from '../pages/ApiUse';


const Routes: React.FC = () =>(
  <Switch>
    <Route  path="/" exact component={Dasboard}/>
    <Route  path="/job/:repository+" component={Job}/>
    <Route  path="/howitwork" component={howitwork}/>
    <Route  path="/api" component={api}/>
  </Switch>
)

export default Routes;


