export const CREATE_NOTIFICATION = 'CREATE_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

export function createNotification(type, message) {
    return {
        type: CREATE_NOTIFICATION,
        payload: { type, message, show: true }
    }
}

export function hideNotification(type, message) {
    return {
        type: HIDE_NOTIFICATION,
        payload: { type, message, show: false }
    }
}
