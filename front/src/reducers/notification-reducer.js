import { CREATE_NOTIFICATION, HIDE_NOTIFICATION } from '../actions/notification-actions';

export default function (state = {}, action) {
    switch (action.type) {
        case CREATE_NOTIFICATION:
            return action.payload;
        case HIDE_NOTIFICATION:
            return action.payload;
    }

    return state;
}
