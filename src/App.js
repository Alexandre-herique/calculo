import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import Login from './componente/Login';
import Dashbord from './componente/dashbord';

function App() {
  return (
    <div>
      <BrowserRouter>
            
            
            <Link to="/" className=""></Link>
            <Switch>
              <Route exact path="/" component={Login}></Route>  
              <Route path="/dashbord" component={Dashbord}></Route>
            </Switch>
      
      </BrowserRouter>
      
      
      

    
    </div>
  );
}

export default App;
