"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PORT = process.env.PORT || 3333;
const express = require("express");
const http = require("http");
const os = require("os");
const db_config_1 = require("./config/db-config");
const routes_1 = require("./routes");
const routes_config_1 = require("./config/routes-config");
const app = express();
routes_config_1.RoutesConfig.init(app);
db_config_1.DBConfig.init();
routes_1.Routes.init(app, express.Router());
http.createServer(app)
    .listen(PORT, () => {
    console.log("Creating server");
    console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(`Up and running @: ${os.hostname()} on port ${PORT}`);
});
//# sourceMappingURL=index.js.map