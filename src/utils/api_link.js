// const link = 'https://iterahero.herokuapp.com/api/v1'
const link = 'https://iterahero.fly.dev/api/v1'

export const loginApi = link + '/login'
export const listGreenhouse = link + '/greenhouse?size=100'
export const dashboardApi = link + '/dashboard'
export const greenhouseByUserId = link + '/greenhouse/'
export const controllingApi = link + '/actuator?by_greenhouse_id='
export const monitoringApi = link + '/sensor?by_id_greenhouse='
export const deleteGreenhouse = link + '/greenhouse/'
export const updateGreenhouse = link + '/greenhouse/'
export const sensorBroker = link + '/sensor_broker?id_sensor='
export const grafikSensor = link + '/grafik/'
export const subGrafikSensor = '?getDateQuery='
export const riwayat = (id, month, year) => {
    return link + '/history/sensor/' + id + '?Month=' + month + '&Year=' + year
}
export const yearData = link + '/grafik/year/'
export const switchAkuator = link + '/actuator-log'
export const akuatorBroker = link + '/actuator-broker?id_actuator=' //+id
export const notificationCount = link + '/notification-count'
export const listNotification = link + '/notification?by_user_id=1'
export const nullCount = link + '/notification-update'
