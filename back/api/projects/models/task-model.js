"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    description: { type: String, required: true },
    owner: { type: String, required: true },
    dueDate: { type: Date, required: true },
    completed: { type: Boolean, default: false }
});
exports.default = schema;
//# sourceMappingURL=task-model.js.map