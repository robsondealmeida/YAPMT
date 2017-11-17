"use strict";

import * as express from "express";

import { ProjectsController } from "../controllers/projects-controller";

export default class ProjectsRoutes {
  public static init(router: express.Router) {
    router
      .route("/projects")
      .post(ProjectsController.create)
      .get(ProjectsController.get);

    router
      .route("/projects/:id")
      .delete(ProjectsController.delete)
      .put(ProjectsController.update)
      .get(ProjectsController.find);
  }
}
