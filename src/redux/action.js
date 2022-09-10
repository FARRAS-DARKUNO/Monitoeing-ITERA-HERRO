export const CHOICE_MENUS = 'CHOICE_MENUS'
export const CHOICE_DETAIL = 'CHOICE_DETAIL'

export const setMenuMonotoringControlling = (data) => ({
    type: CHOICE_MENUS,
    data: data,
})

export const setGraphicAndHistory = (data) => ({
    type: CHOICE_DETAIL,
    data: data,
})