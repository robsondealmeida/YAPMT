import { ACTIVATE_PROJECT, CREATE_PROJECT, FETCH_PROJECTS, LOAD_PROJECT, UPDATE_PROJECT } from '../actions/project-actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_PROJECTS:
            return { ...state, list: action.payload.data ? action.payload.data : [] };
        case CREATE_PROJECT:
            return { ...state, created: action.payload };
        case UPDATE_PROJECT:
            return { ...state, updated: action.payload };
        case LOAD_PROJECT:
            return { ...state, active: action.payload.data };
        case ACTIVATE_PROJECT:
            return { ...state, active: action.payload.data };
    }

    return state;
}
