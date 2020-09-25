import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setData } from './redux/actions';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import routes from './router';
import Loader from './components/Loader';

import { getData } from './api';


const App = (props) => {
  const { setData } = props;
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getData().then((res) => {
      setData(res.data.users);
      setLoading(false);
    });
  }, [0]);

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="App">
      <React.StrictMode>
        <Router>
          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/page/1" />)} />
            {
              routes.map((route) => {
                return <Route path={route.url}
                  component={route.component}
                  exact={route.exact}
                  key={route.url}
                />
              })
            }
          </Switch>
        </Router>
      </React.StrictMode>
    </div>
  );
}

export default connect(null, { setData })(App);
