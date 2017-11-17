"use strict";

import * as Promise from "bluebird";

import IProjectDocument from "../interfaces/projects-interfaces";
import ProjectsSchema from "../models/projects-model";

export default class ProjectsDAO {
    /**
     * Find one specific project
     * @param id the project id
     */
    public static find(id: number) {
        return new Promise((resolve, reject) => {
            ProjectsSchema.findById(id)
                .then((obj) => {
                    resolve(obj);
                }, (err) => {
                    reject(err);
                });
        });
    }

    /**
     * Creates a project
     * @param project the project to be created
     */
    public static create(project: IProjectDocument) {
        return new Promise((resolve, reject) => {
            ProjectsSchema.create(project).then((obj: IProjectDocument) => {
                resolve(obj);
            }, (err) => {
                reject(err);
            });
        });
    }

    /**
     * Get projects by filter
     * @param query the filter
     */
    public static get(query: any) {
        return new Promise((resolve, reject) => {
            ProjectsSchema
                .find(query)
                .then((list: IProjectDocument[]) => {
                    resolve(list);
                }, (err) => {
                    reject(err);
                });
        });
    }

    /**
     * Updates a project
     * @param project The project to be updated
     */
    public static update(project: IProjectDocument) {
        return new Promise((resolve, reject) => {
            ProjectsSchema.findByIdAndUpdate(project._id, project)
                .then((obj: IProjectDocument) => {
                    resolve(obj);
                }, (err) => {
                    reject(err);
                });
        });
    }

    /**
     * Removes a project by id
     * @param id the id of the project to be removed
     */
    public static delete(id: number) {
        return new Promise((resolve, reject) => {
            ProjectsSchema.findByIdAndRemove(id)
                .then((obj: IProjectDocument) => {
                    resolve(obj);
                }, (err) => {
                    reject(err);
                });
        });
    }
}