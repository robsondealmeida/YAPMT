"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const projects_dao_1 = require("../dao/projects-dao");
class ProjectsController {
    /**
     * Get projects
     */
    static get(req, res) {
        projects_dao_1.default.get(req.query)
            .then((response) => res.status(201).json(response))
            .catch((error) => res.status(400).json(error));
    }
    /**
     * Updates a project
     */
    static update(req, res) {
        projects_dao_1.default.update(req.body)
            .then((response) => res.status(201).json(response))
            .catch((error) => res.status(400).json(error));
    }
    /**
     * Deletes a project
     */
    static delete(req, res) {
        projects_dao_1.default.delete(req.params.id)
            .then((response) => res.status(201).json(response))
            .catch((error) => res.status(400).json(error));
    }
    /**
     * Creates a project
     */
    static create(req, res) {
        projects_dao_1.default.create(req.body)
            .then((response) => res.status(201).json(response))
            .catch((error) => res.status(400).json(error));
    }
    /**
     * Find one specific project
     */
    static find(req, res) {
        projects_dao_1.default.find(req.params.id)
            .then((response) => res.status(201).json(response))
            .catch((error) => res.status(400).json(error));
    }
}
exports.ProjectsController = ProjectsController;
//# sourceMappingURL=projects-controller.js.map