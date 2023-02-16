const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=6f804a94ccea21c442188d5e688f0acf&query='+ latitude + ',' + longitude + '&units=m'

    request({url, json: true}, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error) {
            callback('Cannot find the place!', undefined)
        } else {
            callback(undefined, 'It is currently ' + body.current.temperature + '° degrees out.' + ' Wind speed: ' + body.current.wind_speed + ' m/s.')    
        }
    })
}

module.exports = forecast
