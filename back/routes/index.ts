import * as express from "express";

import ProjectsRoutes from "../api/projects/routes/projects-routes";

export class Routes {
  public static init(app: express.Application, router: express.Router) {
    ProjectsRoutes.init(router);

    app.use("/api", router);

    app.use("/bundle.js", (req, res) => {
      res.sendfile('bundle.js', { root: 'front/public' })
    });

    app.use('*', (req, res) => {
      res.sendfile('index.html', { root: 'front/public' });
    });
  }
}
