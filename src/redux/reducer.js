import {
    CHOICE_MENUS,
} from "./action";

const initialState = {
    menuMoCon: 'controlling',
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case CHOICE_MENUS:
            return { ...state, menuMoCon: action.data };
        default:
            return state;
    }
}

export default userReducer;