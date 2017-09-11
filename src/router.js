import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Test from "./routes/Test.js";

// 加入modal
// cached 变量在热更新之后会被清空掉。从而导致重复注入 model
// const cached = {};
// function registerModel(app, model) {
//   if (!cached[model.namespace]) {
//     app.model(model);
//     cached[model.namespace] = 1;
//   }
// }

const registerModel = (app, model) => {
  // eslint-disable-next-line no-underscore-dangle
  if (!app._models.filter(m => m.namespace === model.namespace).length) {
    app.model(model);
  }
};

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div>
        <Route path="/" exact component={IndexPage} />
        <Route path="/test" component={Test} />
        <Route path="/hello" component={IndexPage} />
      </div>
    </Router>
  );
}

// const Routers = ({history, app}) => {
//   console.log(history, app)
//   const routes = [
//     {
//       path: '/',
//       component: IndexPage,
//     },
//     {
//       path: 'test',
//       getComponent (nextState, cb) {
//         require.ensure([], (require) => {
//           registerModel(app, require('models/test'))
//           cb(null, require('routes/Test'))
//         }, 'test')
//       },
//     }
//   ]
//
//   return <Router history={history} routes={routes} />
// }

export default RouterConfig;
