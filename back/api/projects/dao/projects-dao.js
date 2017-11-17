"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Promise = require("bluebird");
const projects_model_1 = require("../models/projects-model");
class ProjectsDAO {
    /**
     * Find one specific project
     * @param id the project id
     */
    static find(id) {
        return new Promise((resolve, reject) => {
            projects_model_1.default.findById(id)
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
    static create(project) {
        return new Promise((resolve, reject) => {
            projects_model_1.default.create(project).then((obj) => {
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
    static get(query) {
        return new Promise((resolve, reject) => {
            projects_model_1.default
                .find(query)
                .then((list) => {
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
    static update(project) {
        return new Promise((resolve, reject) => {
            projects_model_1.default.findByIdAndUpdate(project._id, project)
                .then((obj) => {
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
    static delete(id) {
        return new Promise((resolve, reject) => {
            projects_model_1.default.findByIdAndRemove(id)
                .then((obj) => {
                resolve(obj);
            }, (err) => {
                reject(err);
            });
        });
    }
}
exports.default = ProjectsDAO;
//# sourceMappingURL=projects-dao.js.map