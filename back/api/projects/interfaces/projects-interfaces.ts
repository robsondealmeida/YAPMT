import { Document, Schema } from "mongoose";

export default interface IProjectDocument extends Document {
    name: string;
    tasks: ITask[];
}

export interface ITask {
    description: string;
    owner: string;
    dueDate: Date;
    completed: boolean;
    status: string;
}
