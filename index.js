const request = require('postman-request');
const getWeather = require('./utils/weather.js')

if(!process.argv[2]){
    console.log('No address provided')
}else{
    getWeather(process.argv[2],  (err, data) => {
        if (err){
            return console.log(err)
        } 
        console.log(data)
    })
}

