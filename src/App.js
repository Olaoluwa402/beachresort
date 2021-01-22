import React from 'react';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import ErrorPage from './pages/Error';

import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
      	<Route path="/" component={Home} exact/>
        <Route path="/rooms" component={Rooms} exact/>
        <Route path="/rooms/:slug" component={SingleRoom} exact/>
         <Route component={ErrorPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
