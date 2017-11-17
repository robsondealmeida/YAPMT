"use strict";

import * as bodyParser from "body-parser";
import * as express from "express";
import * as helmet from "helmet";
import * as morgan from "morgan";

export class RoutesConfig {
    public static init(application: express.Application): void {
        const root = process.cwd();
        const nodeModules = "/node_modules/";
        const clientFiles = (process.env.NODE_ENV === "production") ? "/client/dist/" : "/client/dev/";

        application.use(express.static(root + nodeModules));
        application.use(express.static(root + clientFiles));
        application.use(bodyParser.json());
        application.use(bodyParser.urlencoded({ extended: true}));
        application.use(morgan("dev"));
        application.use(helmet());
    }
}
