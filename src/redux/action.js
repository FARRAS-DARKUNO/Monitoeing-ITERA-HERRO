import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
// import { useNavigation } from "@react-navigation/native"
export const CHOICE_MENUS = 'CHOICE_MENUS'
export const CHOICE_DETAIL = 'CHOICE_DETAIL'
export const GET_API_LIST_GREENHOUSE = 'GET_API_LIST_GREENHOUSE'
export const GET_API_DASHBOARD = 'GET_API_DASHBOARD'

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