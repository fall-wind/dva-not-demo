import dva from 'dva';
import './index.css';
import { createLogger } from 'redux-logger';
import { browserHistory } from 'dva/router';
// import undoable from 'redux-undo';
// import { message } from 'antd';

// 1. Initialize
// use redux-logger
const ERROR_MSG_DURATION = 3; // 3 秒
let appOption = {
  history: browserHistory,
  // onReducer: reducer => {
  //   return (state, action) => {
  //     const undoOpts = {};
  //     const newState = undoable(reducer, undoOpts)(state, action);
  //     // 由于 dva 同步了 routing 数据，所以需要把这部分还原
  //     return { ...newState, routing: newState.present.routing };
  //   }
  // }
  // // 追踪历史state
}
if (process.env.NODE_ENV === 'development') {
  appOption.onAction = createLogger()
}

const app = dva(appOption)

app.model(require("./models/test"));

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
