import {
    CHOICE_MENUS,
    CHOICE_DETAIL,
    GET_API_LIST_GREENHOUSE,
} from "./action";

const initialState = {
    menuMoCon: 'monitoring',
    menuGraRi: 'graphic',
    dataListGreenHouse: [],
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case CHOICE_MENUS:
            return { ...state, menuMoCon: action.data };
        case CHOICE_DETAIL:
            return { ...state, menuGraRi: action.data };
        case GET_API_LIST_GREENHOUSE:
            return { ...state, dataListGreenHouse: action.data };
        default:
            return state;
    }
}

export default userReducer;