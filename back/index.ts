"use strict";

const PORT = process.env.PORT || 3333;

import * as express from "express";
import * as http from "http";
import * as os from "os";

import { DBConfig } from "./config/db-config";
import { Routes } from "./routes";
import { RoutesConfig } from "./config/routes-config";

const app = express();

RoutesConfig.init(app);
DBConfig.init();
Routes.init(app, express.Router());

http.createServer(app)
    .listen(PORT, () => {
        console.log("Creating server");
        console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
        console.log(`Up and running @: ${os.hostname()} on port ${PORT}`);
    });

