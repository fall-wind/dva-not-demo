import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Test from "./routes/Test.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div>
        <Route path="/" exact component={IndexPage} />
        <Route path="/test" component={Test} />
      </div>
    </Router>
  );
}

export default RouterConfig;
