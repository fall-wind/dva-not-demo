import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Test from "./routes/Test.js";

// 加入modal
const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

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
