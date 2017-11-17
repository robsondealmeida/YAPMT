"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const projects_routes_1 = require("../api/projects/routes/projects-routes");
class Routes {
    static init(app, router) {
        projects_routes_1.default.init(router);
        app.use("/api", router);
        app.use("/bundle.js", (req, res) => {
            res.sendfile('bundle.js', { root: 'front/public' });
        });
        app.use('*', (req, res) => {
            res.sendfile('index.html', { root: 'front/public' });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=index.js.map