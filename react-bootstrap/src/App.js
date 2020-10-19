import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Home } from './Home'; 
import { Team } from './Team'; 
import { Fund } from './Fund'; 
import { Consulting } from './Consulting'; 
import { Faq } from './Faq'; 
import { Education } from './Education'; 
import { Join } from './Join'; 
import { NoMatch } from './NoMatch'; 
import { Layout } from './components/Layout'; 
import { NavigationBar } from './components/NavigationBar'; 
import { Jumbotron } from './components/Jumbotron'; 

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Jumbotron/>
      <Layout>
        <Router>  
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/team' component={Team} />
            <Route exact path='/fund' component={Fund} />
            <Route exact path='/consulting' component={Consulting} />
            <Route exact path='/faq' component={Faq} />
            <Route exact path='/education' component={Education} />
            <Route exact path='/join' component={Join} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
