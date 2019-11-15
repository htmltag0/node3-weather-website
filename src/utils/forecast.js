const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/d6956dc1d54b7eb0afc30f419902313a/' + latitude + ',' + longitude + '?unit=si'

    request({ url, json: true }, (error, { body })=>{
        if (error) {
            callback('Unable to connect to service!', undefined)
        } else if (body.error) {
            callback(body.error, {})
        } else {
            callback(undefined, body.currently.summary + '. It is currently ' + body.currently.temperature + ' degrees out. ' +
                'There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}


module.exports = forecast