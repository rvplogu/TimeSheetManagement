import React from 'react';
import LoginPage from './src/js/container/LoginPage';
import { Route, Switch, HashRouter } from 'react-router-dom';

class Main extends React.Component {
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path="/signin" component={LoginPage} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Main;