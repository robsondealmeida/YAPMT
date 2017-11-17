"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const database_setup_1 = require("../setups/database-setup");
class DBConfig {
    static init() {
        const URL = database_setup_1.default.urlDevelopment;
        mongoose.Promise = Promise;
        mongoose.connect(URL, { useMongoClient: true });
        mongoose.connection.on("error", console.error.bind(console, "An error ocurred with the DB connection: "));
    }
}
exports.DBConfig = DBConfig;
//# sourceMappingURL=db-config.js.map