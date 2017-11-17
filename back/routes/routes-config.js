"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
class RoutesConfig {
    static init(application) {
        const root = process.cwd();
        const nodeModules = "/node_modules/";
        const clientFiles = (process.env.NODE_ENV === "production") ? "/client/dist/" : "/client/dev/";
        application.use(express.static(root + nodeModules));
        application.use(express.static(root + clientFiles));
        application.use(bodyParser.json());
        application.use(bodyParser.urlencoded({ extended: true }));
        application.use(morgan("dev")());
        application.use(helmet());
    }
}
exports.RoutesConfig = RoutesConfig;
//# sourceMappingURL=routes-config.js.map