import { HIDE_MENU, SHOW_MENU } from '../actions/menu-actions';

export default function (state = {}, action) {
    switch (action.type) {
        case HIDE_MENU:
            return action.payload;
        case SHOW_MENU:
            return action.payload;
    }

    return { hide: true };
}
