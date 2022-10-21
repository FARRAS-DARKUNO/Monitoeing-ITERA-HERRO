export const loginApi = 'https://iterahero.herokuapp.com/api/v1/login'
export const listGreenhouse = 'https://iterahero.herokuapp.com/api/v1/greenhouse?size=100'
export const dashboardApi = 'https://iterahero.herokuapp.com/api/v1/dashboard'
export const greenhouseByUserId = 'https://iterahero.herokuapp.com/api/v1/greenhouse/'
export const controllingApi = 'https://iterahero.herokuapp.com/api/v1/actuator?by_greenhouse_id='
export const monitoringApi = 'https://iterahero.herokuapp.com/api/v1/sensor?by_id_greenhouse='
export const deleteGreenhouse = 'https://iterahero.herokuapp.com/api/v1/greenhouse/'
export const updateGreenhouse = 'https://iterahero.herokuapp.com/api/v1/greenhouse/'
export const sensorBroker = 'https://iterahero.herokuapp.com/api/v1/sensor_broker?id_sensor='

export const grafikSensor = 'https://iterahero.herokuapp.com/api/v1/grafik/'
export const subGrafikSensor = '?getDateQuery='

// export const riwayat = 'https://iterahero.herokuapp.com/api/v1/history/sensor/93?Month=10&Year=2022'

export const riwayat = (id, month, year) => {
    return 'https://iterahero.herokuapp.com/api/v1/history/sensor/' + id + '?Month=' + month + '&Year=' + year
}

export const yearData = 'https://iterahero.herokuapp.com/api/v1/grafik/year/'

export const switchAkuator = 'https://iterahero.herokuapp.com/api/v1/actuator-log'

export const notificationCount = 'https://iterahero.herokuapp.com/api/v1/notification-count'
export const listNotification = 'https://iterahero.herokuapp.com/api/v1/notification?by_user_id=1'
export const nullCount = 'https://iterahero.herokuapp.com/api/v1/notification-update'
