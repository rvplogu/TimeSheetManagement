import React from 'react';
import LoginPage from './src/js/container/LoginPage';
import LoginForm from './src/js/component/LoginForm';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

class Main extends React.Component{

  render() {
    return(
<BrowserRouter>
<Switch>


<Route exact path="/" component={LoginPage} />
</Switch>
</BrowserRouter>
    );
  }
}
export default Main;