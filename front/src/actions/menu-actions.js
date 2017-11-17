export const HIDE_MENU = 'HIDE_MENU';
export const SHOW_MENU = 'SHOW_MENU';

export function hideMenu() {
    return {
        type: HIDE_MENU,
        payload: { hide: true }
    }
}

export function showMenu() {
    return {
        type: SHOW_MENU,
        payload: { hide: false }
    }
}
