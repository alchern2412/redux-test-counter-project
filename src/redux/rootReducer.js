import { CHANGE_THEME, DECREMENT, CHANGE_ELEMENT, INCREMENT} from "./types";
import {combineReducers} from "redux";

// это абсолютно синхронное событие!!!
function counterReducer(state = 0, action) {
    if (action.type === INCREMENT) {
        return state + 1
    } else if (action.type === DECREMENT) {
        return state - 1
    }
    return state
}

const initialThemeState = {
    value: 'light',
    elements_state: 'enable'
}

function themeReducer(state = initialThemeState, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return {...state, value: action.payload}
        case CHANGE_ELEMENT:
            return {...state, elements_state: action.payload}
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})


