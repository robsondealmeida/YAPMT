"use strict";

import * as mongoose from "mongoose";

import DBSetup from "../setups/database-setup";

export class DBConfig {
  public static init(): void {
    const URL = DBSetup.urlDevelopment;

    (mongoose as any).Promise = Promise;
    mongoose.connect(URL, { useMongoClient: true });
    mongoose.connection.on("error", console.error.bind(console, "An error ocurred with the DB connection: "));
  }
}
