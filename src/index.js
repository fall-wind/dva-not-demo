import dva from 'dva';
import './index.css';
import { createLogger } from 'redux-logger';
import { browserHistory } from 'dva/router';
import { message } from 'antd';

// 1. Initialize
// use redux-logger
const ERROR_MSG_DURATION = 3; // 3 秒
let appObj = {
  history: browserHistory,
}
if (process.env.NODE_ENV === 'development') {
  appObj.onAction = createLogger()
} else {

}

const app = dva(appObj)

app.model(require("./models/test"));

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
