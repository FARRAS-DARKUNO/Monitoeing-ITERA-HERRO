import {
    CHOICE_MENUS,
    CHOICE_DETAIL,
} from "./action";

const initialState = {
    menuMoCon: 'monitoring',
    menuGraRi: 'graphic',
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case CHOICE_MENUS:
            return { ...state, menuMoCon: action.data };
        case CHOICE_DETAIL:
            return { ...state, menuGraRi: action.data };
        default:
            return state;
    }
}

export default userReducer;