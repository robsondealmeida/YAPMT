"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const task_model_1 = require("./task-model");
const schema = new mongoose_1.Schema({
    name: { type: String },
    tasks: [task_model_1.default]
});
schema.path('name').validate((val) => {
    return val && val.length > 0;
}, "Project name is required.", "Invalid name");
schema.path('name').validate((val) => {
    return val.length <= 50;
}, "Project name can't have more than 50 characters.", "Invalid name");
exports.default = mongoose_1.model("Project", schema);
//# sourceMappingURL=projects-model.js.map