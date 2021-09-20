const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=' + process.env.wsKey + '&query=NewYork';

request({url: url}, (err, res) => {
  if (err) throw err;
  console.log(res);
})

console.log(url);
