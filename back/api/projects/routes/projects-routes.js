"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const projects_controller_1 = require("../controllers/projects-controller");
class ProjectsRoutes {
    static init(router) {
        router
            .route("/projects")
            .post(projects_controller_1.ProjectsController.create)
            .get(projects_controller_1.ProjectsController.get);
        router
            .route("/projects/:id")
            .delete(projects_controller_1.ProjectsController.delete)
            .put(projects_controller_1.ProjectsController.update)
            .get(projects_controller_1.ProjectsController.find);
    }
}
exports.default = ProjectsRoutes;
//# sourceMappingURL=projects-routes.js.map