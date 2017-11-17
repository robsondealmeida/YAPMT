"use strict";

import { Document, Model, Schema, model } from "mongoose";

import IProjectDocument from "../interfaces/projects-interfaces";
import TaskSchema from "./task-model";

const schema = new Schema({
  name: { type: String },
  tasks: [TaskSchema]
});

schema.path('name').validate((val) => {
  return val && val.length > 0;
}, "Project name is required.", "Invalid name");

schema.path('name').validate((val) => {
  return val.length <= 50;
}, "Project name can't have more than 50 characters.", "Invalid name");

export default model<IProjectDocument>("Project", schema);
