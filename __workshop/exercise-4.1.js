const request = require('request-promise');
const options = {
  uri: "https://icanhazdadjoke.com/",
  headers: {
    "Accept": "application/json"
  },
  json: true
}

// getDadJoke
const getDadJoke = () => {
  return new Promise((resolve, reject) => {
    resolve(request(options))
    reject('No jokes today.')
  })
}

// 4.1
getDadJoke().then(data => console.log(data.joke))
