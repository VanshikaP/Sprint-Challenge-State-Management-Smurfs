import React, { Component } from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom'
import "./App.css";

import AddSmurfForm from './AddSmurfForm'
import Smurfs from './Smurfs'
import Smurf from './Smurf'

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <div className='header'>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className='nav-link-container'>
          <Link className='nav-link' to='/addSmurf'>Add a Smurf</Link>
          <Link className='nav-link' to='/'>View All Smurfs</Link>
        </div>
        </div>
      </div>
      <Route exact path='/' component={Smurfs}></Route>
      <Route exact path='/addSmurf' component={AddSmurfForm}></Route>
      <Route exact path='/smurfs/:smurfId'>
        <Smurf />
      </Route>
      </BrowserRouter>
    );
  }
}

export default App;
