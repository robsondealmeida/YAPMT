"use strict";

import { Document, Model, Schema, model } from "mongoose";

import { ITask } from "../interfaces/projects-interfaces";

const schema = new Schema({
    description: { type: String, required: true },
    owner: { type: String, required: true },
    dueDate: { type: Date, required: true },
    completed: { type: Boolean, default: false }
});

export default schema;
