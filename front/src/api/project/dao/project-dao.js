import apiConfig from "../../config";
import axios from "axios";

export default class ProjectDAO {
    static get() {
        return axios.get(apiConfig.getUrl(`/projects`));
    }

    static find(id) {
        return axios.get(apiConfig.getUrl(`/projects/${id}`));
    }

    static create(project) {
        return axios.post(apiConfig.getUrl('/projects'), project);
    }

    static update(project) {
        return axios.put(apiConfig.getUrl(`/projects/${project._id}`), project);
    }

    static delete(id) {
        return axios.delete(apiConfig.getUrl(`/projects/${id}`));
    }
}