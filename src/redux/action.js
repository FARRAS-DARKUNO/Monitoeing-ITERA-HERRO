import axios from "axios"
import { number } from "yup"
// import { useNavigation } from "@react-navigation/native"
export const CHOICE_MENUS = 'CHOICE_MENUS'
export const CHOICE_DETAIL = 'CHOICE_DETAIL'
export const GET_API_LIST_GREENHOUSE = 'GET_API_LIST_GREENHOUSE'
export const GET_API_DASHBOARD = 'GET_API_DASHBOARD'
export const GET_API_GREENHOUSE_BY_ID = 'GET_API_GREENHOUSE_BY_ID'
export const GET_API_MONITORING_BY_ID = 'GET_API_MONITORING_BY_ID'
export const GET_API_CONTROLLING_BY_ID = 'GET_API_CONTROLLING_BY_ID'
export const GET_FIRST_GREENHOUSE = 'GET_FIRST_GREENHOUSE'
export const GET_FIRST_DASHBOARD = 'GET_FIRST_DASHBOARD'

import {
    monitoringApi,
    greenhouseByUserId,
    controllingApi,
    dashboardApi,
    listGreenhouse,
} from "../utils/api_link"

// const navigate = useNavigation()


export const setMenuMonotoringControlling = (data) => ({
    type: CHOICE_MENUS,
    data: data,
})

export const setGraphicAndHistory = (data) => ({
    type: CHOICE_DETAIL,
    data: data,
})

export const getApiListGreenhouse = (data) => ({
    type: GET_API_LIST_GREENHOUSE,
    data: data,
})

export const getApiDashboard = (data) => ({
    type: GET_API_DASHBOARD,
    data: data,
})

export const firstListGreenhouse = (token) => {

    return async dispatch => {
        return await axios.get(listGreenhouse, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(({ data }) => {
                dispatch(
                    {
                        type: GET_FIRST_GREENHOUSE,
                        payload: data
                    }
                )
            })
    }

}

export const firstDashboard = (token) => {

    return async dispatch => {
        return await axios.get(dashboardApi, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(({ data }) => {
                dispatch(
                    {
                        type: GET_FIRST_DASHBOARD,
                        payload: data
                    }
                )
            })
    }

}

export const getApiGeenhouseById = (id, token) => {

    return async dispatch => {
        return await axios.get(greenhouseByUserId + id, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(({ data }) => {
                dispatch(
                    {
                        type: GET_API_GREENHOUSE_BY_ID,
                        payload: data
                    }
                )
            })
    }

}

export const getMonitoringById = (id, token) => {

    return async dispatch => {
        return await axios.get(monitoringApi + id, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(({ data }) => {
                dispatch(
                    {
                        type: GET_API_MONITORING_BY_ID,
                        payload: data.data
                    }
                )
            })
    }

}

export const getControllingById = (id, token) => {

    return async dispatch => {
        return await axios.get(controllingApi + id, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(({ data }) => {
                dispatch(
                    {
                        type: GET_API_CONTROLLING_BY_ID,
                        payload: data.data
                    }
                )
            })
    }

}