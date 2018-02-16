import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import {Container} from 'reactstrap';

import './App.css';

// import NavBar from '../../components/NavBar';
import CollapseNav from '../../containers/CollapseNav';
import Home from '../../components/Home';
import Patients from '../../components/Patients';
import Users from '../../components/Users';
import Patient from '../../components/Patient';
import Login from '../../containers/Login';
import Register from '../../containers/Register';

const App = props => {
  
  return ( <div id='viewport'> 
    <Router>
      <div>
        <CollapseNav />
        <Container fluid={true}>
          <Switch>
            <Route path='/login' component={Login} /> 
            <Route path='/register' component={Register} />
            <Route path='/' render={() => <Home match={{params: {patientId: "smart-1032702", timezone: 'cet'}}}  /> } />
          </Switch>
        </Container>
      </div>
    </Router>
  </div>
  )
}

export default App;
