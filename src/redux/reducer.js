import {
    CHOICE_MENUS,
    CHOICE_DETAIL,
    GET_API_LIST_GREENHOUSE,
    GET_API_DASHBOARD,
    GET_API_GREENHOUSE_BY_ID,
    GET_API_MONITORING_BY_ID,
} from "./action";

const initialState = {
    menuMoCon: 'monitoring',
    menuGraRi: 'graphic',
    dataListGreenHouse: [],
    dataDashboard: [],
    dataGreenhouseById: [],
    dataMonitoringByid: [],
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case CHOICE_MENUS:
            return { ...state, menuMoCon: action.data };
        case CHOICE_DETAIL:
            return { ...state, menuGraRi: action.data };
        case GET_API_LIST_GREENHOUSE:
            return { ...state, dataListGreenHouse: action.data };
        case GET_API_DASHBOARD:
            return { ...state, dataDashboard: action.data };
        case GET_API_GREENHOUSE_BY_ID:
            return { ...state, dataGreenhouseById: action.payload };
        case GET_API_MONITORING_BY_ID:
            return { ...state, dataMonitoringByid: action.payload };
        default:
            return state;
    }
}

export default userReducer;