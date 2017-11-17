"use strict";

import * as express from "express";

import ProjectsDAO from "../dao/projects-dao";

export class ProjectsController {
    /**
     * Get projects
     */
    public static get(req: express.Request, res: express.Response) {
        ProjectsDAO.get(req.query)
            .then((response) => res.status(201).json(response))
            .catch((error) => res.status(400).json(error));
    }

    /**
     * Updates a project
     */
    public static update(req: express.Request, res: express.Response) {
        ProjectsDAO.update(req.body)
            .then((response) => res.status(201).json(response))
            .catch((error) => res.status(400).json(error));
    }

    /**
     * Deletes a project
     */
    public static delete(req: express.Request, res: express.Response) {
        ProjectsDAO.delete(req.params.id)
            .then((response) => res.status(201).json(response))
            .catch((error) => res.status(400).json(error));
    }

    /**
     * Creates a project
     */
    public static create(req: express.Request, res: express.Response) {
        ProjectsDAO.create(req.body)
            .then((response) => res.status(201).json(response))
            .catch((error) => res.status(400).json(error));
    }

    /**
     * Find one specific project
     */
    public static find(req: express.Request, res: express.Response) {
        ProjectsDAO.find(req.params.id)
            .then((response) => res.status(201).json(response))
            .catch((error) => res.status(400).json(error));
    }
}
