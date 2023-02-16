const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicmFuYWxkb283IiwiYSI6ImNsZGxqenQ2ODAwNTYzem9seGE4NHplZ2IifQ._Ym0Nk-ICYQqEvv5Y_MWcA'

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (!body.features[0]) {
            callback('Cannot find the place!', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })            
        }
    })
}

module.exports = geocode