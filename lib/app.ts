import * as express from 'express';
const bodyParser = require('body-parser');

import TimeStampRoutes from './routes/TimeStampRoutes';

class App {
  public app: express.Application = express();
  public timesTampRoutes: TimeStampRoutes = new TimeStampRoutes();
  constructor() {
    this.app.use(
      bodyParser.urlencoded({
        extended: true
      })
    );
    this.app.use(bodyParser.json());
    this.timesTampRoutes.routes(this.app);
  }
}

export default new App().app;
