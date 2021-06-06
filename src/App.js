import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';

import {Homepage} from './pages/homepage/homepage.component';

const Hatpage = () => (
  <div>
    <h1>HAT PAGE</h1>
  </div>
)


function App() {
  return (
    <div className="App">
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop/hats' component={Hatpage}/>
    </div>
  );
}

export default App;
