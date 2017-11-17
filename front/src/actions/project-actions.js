export const CREATE_PROJECT = 'CREATE_PROJECT';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';
export const LOAD_PROJECT = 'LOAD_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const ACTIVATE_PROJECT = 'ACTIVATE_PROJECT';

import ProjectsDAO from "../api/project/dao/project-dao";

export function createProject(project, callbackSuccess, callbackError) {
    const request = ProjectsDAO.create(project)
        .then(callbackSuccess, callbackError);

    return {
        type: CREATE_PROJECT,
        payload: request
    }
}

export function updateProject(project, callbackSuccess, callbackError) {
    const request = ProjectsDAO.update(project)
        .then(callbackSuccess, callbackError);

    return {
        type: UPDATE_PROJECT,
        payload: request
    }
}

export function loadProject(id) {
    const request = ProjectsDAO.find(id);

    return {
        type: LOAD_PROJECT,
        payload: request
    }
}

export function activateProject(id, callback) {
    const request = ProjectsDAO.find(id)
        .then((response) => {
            callback(response);
            return response;
        });

    return {
        type: ACTIVATE_PROJECT,
        payload: request
    }
}

export function deleteProject(id) {
    const request = ProjectsDAO.delete(id);

    return {
        type: DELETE_PROJECT,
        payload: request
    }
}

export function fetchProjects() {
    return {
        type: FETCH_PROJECTS,
        payload: ProjectsDAO.get()
    }
}