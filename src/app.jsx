import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar.jsx";
import  { Modules } from './components/modules.jsx';
import Module from './containers/module.jsx'


const App = () => (
  <div>
    <NavBar />
    <div className="container">
      <Switch>
        <Route exact path="/" component={Modules} />
        <Route exact path="/bike"exact render={(props) => (<Module currentModule="1" {...props}/>)} />
        <Route exact path="/jwellery"exact render={(props) => (<Module currentModule="2" {...props}/>)} />
      </Switch>
    </div>
  </div>
);

export default App;
