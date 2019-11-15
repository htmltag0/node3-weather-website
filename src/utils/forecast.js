const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/d6956dc1d54b7eb0afc30f419902313a/' + latitude + ',' + longitude + '?units=si'
    console.log(url)

    request({ url, json: true }, (error, { body })=>{
        if (error) {
            callback('Unable to connect to service!', undefined)
        } else if (body.error) {
            callback(body.error, {})
        } else {
            callback(undefined, body.daily.data[0].summary + '. It is currently ' + body.currently.temperature + ' degrees out. ' +
                'Temperature high is at ' + body.daily.data[0].temperatureHigh + ' degrees and low is at ' + body.daily.data[0].temperatureLow + ' degrees. ' + 
                'There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}


module.exports = forecast