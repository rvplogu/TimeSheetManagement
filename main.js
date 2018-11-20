import React from 'react';
import LoginPage from './src/js/container/LoginPage';
import { Route, Switch, HashRouter } from 'react-router-dom';
import ProfilePageContainer from './src/js/container/ProfilePageContainer';
import TimeSheetContainer from './src/js/container/TimeSheetContainer';
import ResetPasswordContainer from './src/js/container/ResetPasswordContainer';

class Main extends React.Component {
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path="/signin" component={LoginPage} />
          <Route path="/profile" component={ProfilePageContainer} />
          <Route path="/timesheet" component={TimeSheetContainer} />
          <Route path="/reset" component={ResetPasswordContainer} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Main;