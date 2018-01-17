import React from "react";
import { Route, Switch } from "react-router-dom";
import  { Modules } from './components/modules.jsx';
import Module from './containers/module.jsx'


const App = () => (
  <div>
    <div className="container">
      <Switch>
        <Route exact path="/" component={Modules} />
        <Route exact path="/bike" exact render={(props) => (<Module currentModule="1" {...props}/>)} />
        <Route exact path="/jwellery" exact render={(props) => (<Module currentModule="2" {...props}/>)} />
        <Route exact path="/electronics" exact render={(props) => (<Module currentModule="3" {...props}/>)} />
        <Route exact path="/sports" exact render={(props) => (<Module currentModule="4" {...props}/>)} />
      </Switch>
    </div>
  </div>
);

export default App;
