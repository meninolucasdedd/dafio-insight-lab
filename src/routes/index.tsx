import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Dasboard from '../pages/Dashboard';
import Job from '../pages/Job';
import howitwork from '../pages/HowItWorks';
import api from '../pages/ApiUse';
import pagenotfound from '../pages/PageNotFound';



const Routes: React.FC = () =>(
  <Switch>
    <Route  path="/" exact component={Dasboard}/>
    <Route  path="/api" component={api}/>
    <Route  path="/job/:repository+" component={Job}/>
    <Route  path="/howitwork" component={howitwork}/>
    <Route  component={pagenotfound} />

  </Switch>
)

export default Routes;


