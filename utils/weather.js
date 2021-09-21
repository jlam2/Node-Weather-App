const request = require('postman-request');

function geocode(address, cb){
    const mbURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${process.env.mapboxKey}&limit=1`;
    request({url: mbURL, json:true}, (err, res) => {
        if(err){
            cb("Can't connect to geo services", null);
        } else if(res.body.features.length == 0){
            cb("Invalid Location", null);
        } else{
            cb(null, {
                lattitude: res.body.features[0].center[1], 
                longitude: res.body.features[0].center[0],
                location: res.body.features[0].place_name
            });
        }
    })
}

function forecast(lattitude, longitude, location, cb){
    const wsURL = `http://api.weatherstack.com/current?access_key=${process.env.weatherstackKey}&query=${lattitude},${longitude}&units=f`;
    request({url: wsURL, json:true}, (err, res) => {
        if (err){
            cb("Can't connect to weather services", null);
        } else if (res.body.error){
            cb("Invalid Coordinates", null);
        } else{
            cb(null, `${location}: It is currently ${res.body.current.weather_descriptions[0]} and it is ${res.body.current.temperature} degrees.`);
        }
    })
}

function getWeather(address, cb){
    geocode(address, (err, gData) =>{
        if (err){
            return console.log(err);
        }
        forecast(gData.lattitude, gData.longitude, gData.location, (err, data) =>{
            cb(err, data);
        })
    })
}

module.exports = getWeather;

