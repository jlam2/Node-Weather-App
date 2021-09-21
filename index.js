const request = require('postman-request');
const getWeather = require('./utils/weather.js')



getWeather('Queens NY',  (err, data) => {
  if (err){
      return console.log(err)
  } 
  console.log(data)
})