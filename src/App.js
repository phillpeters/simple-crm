import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { ButtonAppBar } from './app/ButtonAppBar';
import { Accounts } from './features/accounts/Accounts';
import { Contacts } from './features/contacts/Contacts';

const App = () => {
  const accounts = useSelector(state => state.accounts);

  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Redirect to="/accounts" />
          </Route>
          <Route
            exact
            path="/accounts"
            render={() => (
              <>
                <ButtonAppBar title="Accounts" />
                <Accounts />
              </>
            )}
          />
          <Route
            path="/accounts/:id"
            render={({ match }) => (
              <>
                <ButtonAppBar
                  title={
                    accounts.find(account => account.id === match.params.id).name
                  }
                />
                <Contacts match={match} />
              </>
            )}
          />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
