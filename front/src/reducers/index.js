import MenuReducer from './menu-reducer';
import NotificationReducer from './notification-reducer';
import ProjectsReducer from './projects-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    projects: ProjectsReducer,
    notification: NotificationReducer,
    menu: MenuReducer
});

export default rootReducer;