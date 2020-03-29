import {CHANGE_THEME, DECREMENT, CHANGE_ELEMENT, INCREMENT} from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}

export function disableElements() {
    return {
        type: CHANGE_ELEMENT,
        payload: 'disable'
    }
}

export function enableElements() {
    return {
        type: CHANGE_ELEMENT,
        payload: 'enable'
    }
}

export function asyncIncrement() {
    return function (dispatch) {
        setTimeout(() => {
            dispatch({type: INCREMENT})
            dispatch(enableElements())
        }, 1500)
        dispatch(disableElements())
    }
}