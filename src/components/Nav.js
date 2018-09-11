import React, { Component } from "react";
import {Route,NavLink,BrowserRouter} from "react-router-dom";
import Responsive from "./Responsive";
import Alignment from "./Alignment";
import Reordering from "./Reordering";
import Home from "./Home";

class Nav extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>       
          <h1>React FlexBoxGrid2 Examples</h1>            
              <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/responsive">Responsive</NavLink></li>
                <li><NavLink to="/alignment">Alignment</NavLink></li>
                <li><NavLink to="/reordering">Reordering</NavLink></li>
              </ul>
          <div className="content">
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/responsive" component={Responsive} />
              <Route path="/alignment" component={Alignment} />
              <Route path="/reordering" component={Reordering} />
            </div>
          </div>    
        </div>  
      </BrowserRouter>
    );
  }
}

export default Nav;