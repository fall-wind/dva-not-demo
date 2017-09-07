import dva from 'dva';
import './index.css';
import { createLogger } from 'redux-logger';
console.log(process.env.NODE_ENV);
// 1. Initialize
// use redux-logger
let app
if (process.env.NODE_ENV === 'development') {
  app = dva({
    onAction: createLogger(),
  });
} else {
  app = dva();
}

app.model(require("./models/test"));

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
