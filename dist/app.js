"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require('body-parser');
const TimeStampRoutes_1 = require("./routes/TimeStampRoutes");
class App {
    constructor() {
        this.app = express();
        this.timesTampRoutes = new TimeStampRoutes_1.default();
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(bodyParser.json());
        this.timesTampRoutes.routes(this.app);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map